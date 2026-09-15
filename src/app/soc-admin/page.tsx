"use client";

import { useState, useEffect } from "react";
import { db } from "@/firebase";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import {
  ShieldAlert,
  Terminal,
  Globe2,
  RefreshCw,
  Lock,
  Unlock,
  Search,
  Server,
  Activity,
  ArrowLeft,
  Filter,
} from "lucide-react";
import Link from "next/link";

interface VisitorLog {
  id: string;
  ip: string;
  city?: string;
  country?: string;
  location?: string;
  userAgent?: string;
  timestamp?: any;
}

// Güvenlik için basit PIN kodu (İstediğin gibi değiştirebilirsin)
const ACCESS_PIN = "1322";

export default function SocAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [logs, setLogs] = useState<VisitorLog[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Firestore'dan son logları çekme fonksiyonu
  const fetchLogs = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(db, "visitor_logs"),
        orderBy("timestamp", "desc"),
        limit(50),
      );
      const querySnapshot = await getDocs(q);
      const fetched: VisitorLog[] = [];
      querySnapshot.forEach((doc) => {
        fetched.push({ id: doc.id, ...doc.data() } as VisitorLog);
      });
      setLogs(fetched);
    } catch (err) {
      console.error("Log fetch hatası:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchLogs();
    }
  }, [isAuthenticated]);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === ACCESS_PIN) {
      setIsAuthenticated(true);
      setErrorMsg("");
    } else {
      setErrorMsg("ERİŞİM REDDEDİLDİ: Geçersiz PIN Kodu.");
      setPinInput("");
    }
  };

  // Arama & Filtreleme
  const filteredLogs = logs.filter((log) => {
    const term = searchTerm.toLowerCase();
    return (
      log.ip?.toLowerCase().includes(term) ||
      log.city?.toLowerCase().includes(term) ||
      log.country?.toLowerCase().includes(term) ||
      log.userAgent?.toLowerCase().includes(term)
    );
  });

  // Tekil IP Sayısı
  const uniqueIps = new Set(logs.map((l) => l.ip)).size;

  // PIN GİRİŞ EKRANI (LOCKED STATE)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#05070a] text-white flex items-center justify-center p-4">
        <div className="w-full max-w-md p-8 rounded-3xl border border-red-500/20 bg-[#080b0f] shadow-[0_0_50px_rgba(239,68,68,0.1)]">
          <div className="flex justify-center mb-6">
            <div className="size-16 rounded-2xl border border-red-500/30 bg-red-500/10 flex items-center justify-center">
              <Lock className="size-8 text-red-400 animate-pulse" />
            </div>
          </div>

          <div className="text-center mb-6">
            <span className="font-mono text-[10px] tracking-[0.25em] text-red-400 uppercase">
              RESTRICTED NODE // CLEARANCE REQUIRED
            </span>
            <h1 className="text-2xl font-black mt-1">SOC Gözlem İstasyonu</h1>
            <p className="text-xs text-zinc-400 mt-2 font-mono">
              Bu konsol telemetri verilerine erişim sağlar. Lütfen kimlik
              doğrulama PIN'ini girin.
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <input
                type="password"
                maxLength={8}
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="PIN Kodunu Girin..."
                className="w-full text-center tracking-[0.3em] font-mono text-lg py-3 px-4 rounded-xl border border-white/10 bg-black/50 text-white placeholder:text-zinc-600 focus:outline-hidden focus:border-red-500/50"
                autoFocus
              />
            </div>

            {errorMsg && (
              <p className="text-[11px] font-mono text-center text-red-400 animate-bounce">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-red-500/20 border border-red-500/40 hover:bg-red-500/30 text-red-300 font-mono text-xs uppercase tracking-wider transition cursor-pointer"
            >
              Doğrula ve Bağlan
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-zinc-300 transition"
            >
              <ArrowLeft className="size-3.5" /> Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // YÖNETİCİ KONSOLU (AUTHENTICATED)
  return (
    <div className="min-h-screen bg-[#05070a] text-white p-4 sm:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* ÜST BAŞLIK & KONTROLLER */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl border border-white/10 bg-[#080b0f]">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 flex items-center justify-center">
              <ShieldAlert className="size-6 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-emerald-400 tracking-widest uppercase">
                  ACTIVE FEED // CLOUD TELEMETRY
                </span>
                <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <h1 className="text-xl sm:text-2xl font-black">
                Ziyaretçi Tehdit & Erişim Logları
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={fetchLogs}
              disabled={loading}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 font-mono text-xs transition cursor-pointer disabled:opacity-50"
            >
              <RefreshCw
                className={`size-3.5 ${loading ? "animate-spin text-emerald-400" : ""}`}
              />
              Yenile
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 font-mono text-xs text-zinc-300 transition"
            >
              <ArrowLeft className="size-3.5" /> Ana Sayfa
            </Link>
          </div>
        </div>

        {/* METRİK KARTLARI */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl border border-white/10 bg-[#080b0f]">
            <div className="flex items-center justify-between font-mono text-xs text-zinc-500">
              <span>TOPLAM LOG KAYDI</span>
              <Server className="size-4 text-emerald-400" />
            </div>
            <div className="mt-2 text-3xl font-black font-mono text-white">
              {logs.length}
            </div>
            <p className="mt-1 text-[10px] font-mono text-zinc-500">
              Son 50 işlem listeleniyor
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-white/10 bg-[#080b0f]">
            <div className="flex items-center justify-between font-mono text-xs text-zinc-500">
              <span>TEKİL IP NODELARI</span>
              <Globe2 className="size-4 text-sky-400" />
            </div>
            <div className="mt-2 text-3xl font-black font-mono text-sky-300">
              {uniqueIps}
            </div>
            <p className="mt-1 text-[10px] font-mono text-zinc-500">
              Farklı ağ kaynağı
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-white/10 bg-[#080b0f]">
            <div className="flex items-center justify-between font-mono text-xs text-zinc-500">
              <span>SİSTEM DURUMU</span>
              <Activity className="size-4 text-emerald-400" />
            </div>
            <div className="mt-2 text-xl font-bold font-mono text-emerald-400 flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-400" />
              CANLI DİNLENİYOR
            </div>
            <p className="mt-1 text-[10px] font-mono text-zinc-500">
              Firestore senkronizasyonu aktif
            </p>
          </div>
        </div>

        {/* ARAMA VE TABLO */}
        <div className="rounded-3xl border border-white/10 bg-[#080b0f] overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder="IP, Şehir veya Cihaz Filtrele..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-white/10 bg-black/40 text-xs font-mono placeholder:text-zinc-600 focus:outline-hidden focus:border-emerald-400/50"
              />
            </div>
            <span className="text-xs font-mono text-zinc-500 self-end sm:self-center">
              {filteredLogs.length} sonuç görüntülendi
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead className="border-b border-white/10 bg-black/30 text-zinc-400">
                <tr>
                  <th className="py-3.5 px-4 font-normal">ZAMAN</th>
                  <th className="py-3.5 px-4 font-normal">IP ADRESİ</th>
                  <th className="py-3.5 px-4 font-normal">LOKASYON</th>
                  <th className="py-3.5 px-4 font-normal">
                    USER AGENT / CİHAZ
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredLogs.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-zinc-500">
                      Hiçbir kayıt bulunamadı.
                    </td>
                  </tr>
                ) : (
                  filteredLogs.map((log) => {
                    let formattedDate = "N/A";
                    if (log.timestamp?.toDate) {
                      formattedDate = log.timestamp
                        .toDate()
                        .toLocaleString("tr-TR");
                    } else if (log.timestamp?.seconds) {
                      formattedDate = new Date(
                        log.timestamp.seconds * 1000,
                      ).toLocaleString("tr-TR");
                    }

                    return (
                      <tr
                        key={log.id}
                        className="hover:bg-white/[0.02] transition"
                      >
                        <td className="py-3 px-4 text-zinc-400 whitespace-nowrap text-[11px]">
                          {formattedDate}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className="px-2 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 font-bold">
                            {log.ip}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-zinc-300 whitespace-nowrap">
                          {log.city
                            ? `${log.city}, ${log.country}`
                            : log.location || "Bilinmiyor"}
                        </td>
                        <td
                          className="py-3 px-4 text-zinc-500 text-[10px] max-w-xs truncate"
                          title={log.userAgent}
                        >
                          {log.userAgent || "Belirtilmemiş"}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

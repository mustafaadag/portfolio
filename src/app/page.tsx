"use client";

import { useState, useRef, useEffect } from "react";
import {
  Shield,
  Terminal as TerminalIcon,
  Cpu,
  Briefcase,
  GraduationCap,
  Languages,
  LineChart,
  ExternalLink,
  Mail,
  Activity,
  Send,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Play,
  Server,
  Radio,
  Lock,
} from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// ARKA PLAN İÇİN ETKİLEŞİMLİ PARÇACIK RADAR AĞI
function CyberRadarBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 16), 70);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Parçacıkları çiz ve bağla
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(16, 185, 129, 0.5)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.18 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  );
}

export default function Home() {
  const [lang, setLang] = useState<"tr" | "en">("tr");

  // Terminal & Tehdit Simülasyon Durumu
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "DagSec Threat Response CLI v3.8 ready.",
    "System status: TELEMETRY_ONLINE | Sysmon Kernel Hook: ATTACHED",
    "Type 'scan' or press the button below to initiate simulated containment.",
  ]);
  const [terminalInput, setTerminalInput] = useState("");
  const [isSimulating, setIsSimulating] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLogs]);

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    const logs = [
      "[*] [EVENT INTERCEPT] Process spawn: svch0st.exe [PID: 5812] by cmd.exe",
      "[*] [SYSMON TRACE] Event ID 1: Suspicious parent-child relationship verified.",
      "[*] [HEURISTIC SCAN] PE Section Entropy: 7.91 (Packed / Encrypted payload detected)",
      "[*] [LOCAL CACHE] Querying SQLite Hash DB: MISS -> Escalating to VirusTotal API...",
      "[!] [ALERT] 48/71 Detection Engines Flagged: Trojan.Generic.EDR_Evasion",
      "[✓] [REMEDIATION] Process 5812 terminated. Memory dumped. Zero-day hash blacklisted.",
    ];

    logs.forEach((log, idx) => {
      setTimeout(
        () => {
          setTerminalLogs((prev) => [...prev, log]);
          if (idx === logs.length - 1) setIsSimulating(false);
        },
        (idx + 1) * 650,
      );
    });
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "scan") {
      runSimulation();
    } else if (cmd === "help") {
      setTerminalLogs((p) => [
        ...p,
        `> ${terminalInput}`,
        "Commands: 'scan', 'status', 'skills', 'clear'",
      ]);
    } else if (cmd === "status") {
      setTerminalLogs((p) => [
        ...p,
        `> ${terminalInput}`,
        "EDR Engine: RUNNING | Threat Level: NOMINAL | Latency: 4ms",
      ]);
    } else if (cmd === "skills") {
      setTerminalLogs((p) => [
        ...p,
        `> ${terminalInput}`,
        "C#, .NET, Sysmon, Windows Internals, Python, Flutter, SQLite",
      ]);
    } else if (cmd === "clear") {
      setTerminalLogs([]);
    } else {
      setTerminalLogs((p) => [
        ...p,
        `> ${terminalInput}`,
        `Unknown directive '${cmd}'. Try 'help'`,
      ]);
    }
    setTerminalInput("");
  };

  return (
    <div className="min-h-screen bg-[#050508] text-neutral-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300 relative overflow-x-hidden">
      {/* ŞAŞAALI CANVAS VE IŞIK ATMOSFERİ */}
      <CyberRadarBackground />
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[500px] bg-sky-500/10 blur-[180px] rounded-full pointer-events-none z-0" />

      {/* ÜST HUD TELEMETRİ BARI */}
      <div className="relative z-50 border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-md px-6 py-2 flex items-center justify-between text-[11px] font-mono text-neutral-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <Radio className="w-3.5 h-3.5 animate-pulse" /> SOC NODE: LIVE
          </span>
          <span className="hidden sm:inline-block">PING: 4ms</span>
          <span className="hidden md:inline-block">
            HOST: DAG-SEC-WORKSTATION
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-neutral-400">
            KERNEL HOOKS: <b className="text-white">ACTIVE</b>
          </span>
          <button
            onClick={() => setLang((l) => (l === "tr" ? "en" : "tr"))}
            className="flex items-center gap-1 text-white hover:text-emerald-400 transition cursor-pointer px-2 py-0.5 rounded border border-neutral-800 bg-neutral-900"
          >
            <Languages className="w-3 h-3 text-emerald-400" />
            <span>{lang === "tr" ? "EN" : "TR"}</span>
          </button>
        </div>
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-32 space-y-28">
        {/* HERO: ŞAŞAALI OPERASYON BAŞLIĞI */}
        <section className="space-y-8 pt-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 text-xs font-mono text-emerald-400 backdrop-blur-xl shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <Lock className="w-3.5 h-3.5" />
            <span>DEFENSIVE CYBERSECURITY & THREAT HUNTING</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase drop-shadow-2xl">
              Mustafa{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
                Dağ
              </span>
            </h1>
            <p className="text-lg sm:text-2xl font-mono text-neutral-300 tracking-wide">
              {lang === "tr"
                ? "Uç Nokta Tehdit Tespiti (EDR) & Sistem Savunma Mühendisi"
                : "Endpoint Detection & Response (EDR) & Systems Security Engineer"}
            </p>
          </div>

          <p className="text-neutral-400 text-sm sm:text-base max-w-3xl leading-relaxed font-light">
            {lang === "tr"
              ? "Sysmon çekirdek telemetrisi, Windows Internals, PE Shannon entropi analizleri ve C# tabanlı yüksek performanslı siber güvenlik ajanları geliştiriyorum. Şüpheli süreçlerin davranışsal izini sürüp saldırıları anında otonom olarak bastıran savunma hatları inşa ediyorum."
              : "Engineering low-latency C# security agents, tapping Windows Sysmon telemetry, computing Shannon entropy over PE headers, and deploying automated incident mitigation pipelines."}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={runSimulation}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-bold text-xs tracking-wider uppercase hover:opacity-95 transition shadow-[0_0_30px_rgba(16,185,129,0.35)] cursor-pointer"
            >
              <Play className="w-4 h-4 fill-black" />
              <span>
                {lang === "tr"
                  ? "Tehdit Simülasyonu Başlat"
                  : "Execute Threat Sim"}
              </span>
            </button>

            <a
              href="mailto:m.dag0524@gmail.com"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-neutral-800 bg-neutral-900/80 hover:border-emerald-500/50 hover:bg-neutral-800 text-white transition text-xs font-mono backdrop-blur-md"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>m.dag0524@gmail.com</span>
            </a>

            <div className="flex items-center gap-2 border-l border-neutral-800 pl-4">
              <a
                href="https://github.com/mustafaadag"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/40 transition"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/mustafa-da%C4%9F-63609524a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-sky-400 hover:border-sky-500/40 transition"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </section>

        {/* CANLI SOC TEHDİT MÜDAHALE TERMİNALİ */}
        <section className="rounded-2xl border border-emerald-500/30 bg-neutral-950/90 backdrop-blur-2xl shadow-[0_0_50px_rgba(16,185,129,0.15)] overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-800/90 bg-neutral-900/60">
            <div className="flex items-center gap-2.5 font-mono text-xs text-neutral-300">
              <TerminalIcon className="w-4 h-4 text-emerald-400" />
              <span className="font-bold text-white">DAGSEC_SOC_CONSOLE</span>
              <span className="text-neutral-500 hidden sm:inline-block">
                | Telemetry Stream 24/7
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40">
              AGENT: ONLINE
            </span>
          </div>

          <div
            ref={terminalRef}
            className="p-6 font-mono text-xs space-y-2 h-56 overflow-y-auto"
          >
            {terminalLogs.map((log, i) => (
              <div
                key={i}
                className={
                  log.startsWith("[!]")
                    ? "text-red-400 font-bold bg-red-950/30 p-1 rounded"
                    : log.startsWith("[✓]")
                      ? "text-emerald-300 font-bold bg-emerald-950/30 p-1 rounded"
                      : log.startsWith("[*]")
                        ? "text-sky-300"
                        : log.startsWith(">")
                          ? "text-white font-semibold"
                          : "text-neutral-400"
                }
              >
                {log}
              </div>
            ))}
          </div>

          <form
            onSubmit={handleCommand}
            className="flex border-t border-neutral-800/80 bg-neutral-900/40"
          >
            <span className="pl-6 py-3 text-xs font-mono text-emerald-400 select-none">
              &gt;
            </span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="Komut girin ('scan', 'status', 'skills', 'clear')..."
              className="w-full bg-transparent px-3 py-3 text-xs font-mono text-white focus:outline-hidden placeholder:text-neutral-600"
            />
          </form>
        </section>

        {/* PROJELER: NEON BENTO GRID */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                ENGINEERING SHOWCASE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">
                Öne Çıkan Sistemler & Projeler
              </h2>
            </div>
            <Activity className="w-8 h-8 text-emerald-400 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* BENTO 1: EDR SİSTEMİ (DEVASA KART) */}
            <div className="md:col-span-2 p-8 sm:p-10 rounded-3xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-xl hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-300 space-y-6 relative overflow-hidden group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-full border border-emerald-800/60 bg-emerald-950/60">
                  FLAGSHIP DEFENSE ENGINE
                </span>
                <Shield className="w-7 h-7 text-emerald-400 group-hover:scale-110 transition" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Sysmon & Sezgisel Analiz Tabanlı Hibrit EDR Sistemi
                </h3>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  Windows çekirdeğindeki şüpheli proses aktivitelerini Sysmon
                  Event Log üzerinden gerçek zamanlı yakalayan; PE başlıklarında
                  Shannon Entropi formülüyle paketlenmiş zararlıları tespit edip
                  yerel SQLite önbellek ve VirusTotal API ile teyit eden otonom
                  C# güvenlik ajanı.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-neutral-300">
                <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sysmon ID 1, 3, 7 Telemetrisi</span>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Shannon Entropi Heuristiği</span>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>SQLite Önbellek & VT API</span>
                </div>
                <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Otonom Süreç Karantinası</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "C#",
                  ".NET Framework",
                  "Sysmon Telemetry",
                  "Windows Internals",
                  "Threat Hunting",
                  "SQLite",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-emerald-300 bg-emerald-950/30 border border-emerald-800/40 px-3 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* BENTO 2: 4 ADIMLI PIPELINE AKIŞI */}
            <div className="p-8 rounded-3xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-xl hover:border-sky-500/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition space-y-6 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono text-sky-400 px-3 py-1 rounded-full border border-sky-800/60 bg-sky-950/60">
                  PIPELINE
                </span>
                <h3 className="text-xl font-bold text-white">EDR Veri Hattı</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Çekirdek telemetrisinden SOC kararına uzanan 4 kademeli
                  doğrulama hattı.
                </p>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300">
                  <b className="text-emerald-400">01.</b> Sysmon Kernel Hook
                </div>
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300">
                  <b className="text-sky-400">02.</b> PE Shannon Entropy
                </div>
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300">
                  <b className="text-amber-400">03.</b> Hash Cache & VT Query
                </div>
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-red-400 font-semibold">
                  <b className="text-red-400">04.</b> Remediation & SOC Alert
                </div>
              </div>
            </div>

            {/* BENTO 3: IOT ENERJİ ANALİZ PANELİ */}
            <div className="p-8 rounded-3xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-xl hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 px-3 py-1 rounded-full border border-amber-800/60 bg-amber-950/60">
                  HARDWARE & IOT
                </span>
                <Cpu className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Flutter & ESP32 Canlı Enerji Paneli
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                ESP32 mikrodenetleyicileri üzerinden anlık akım ve voltaj
                verilerini okuyarak Firebase Realtime Database ile canlı
                senkronize eden ve Flutter arayüzünde anomalileri görselleştiren
                sistem.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Flutter", "Dart", "ESP32", "Firebase"].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono text-neutral-300 bg-neutral-950 px-2.5 py-1 rounded border border-neutral-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* BENTO 4: PYTHON KONUT REGRESYON MODELİ */}
            <div className="md:col-span-2 p-8 rounded-3xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-xl hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-purple-400 px-3 py-1 rounded-full border border-purple-800/60 bg-purple-950/60">
                  DATA SCIENCE & ML
                </span>
                <LineChart className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Konut Fiyat Tahminleme ve Piyasa Manipülasyon Analizi
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                Açık kaynak konut veri setlerinde aykırı değer temizleme
                (outlier filtering), özellik mühendisliği (feature engineering)
                ve çok değişkenli regresyon algoritmaları kullanarak kira
                değerlerini tahminleyen analitik model.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Python",
                  "Pandas",
                  "Scikit-Learn",
                  "Feature Engineering",
                  "Jupyter",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono text-neutral-300 bg-neutral-950 px-2.5 py-1 rounded border border-neutral-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DENEYİM, EĞİTİM & YETKİNLİKLER */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* DENEYİM */}
          <div className="p-8 rounded-3xl border border-neutral-800 bg-neutral-950/70 backdrop-blur-xl space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
              <Briefcase className="w-5 h-5 text-emerald-400" /> OPERASYONEL
              DENEYİM
            </h3>
            <div className="space-y-6 border-l-2 border-neutral-800 pl-6">
              <div className="space-y-1.5 relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-emerald-400 ring-4 ring-[#050508]" />
                <span className="text-xs font-mono text-neutral-500">
                  2025 - 2026
                </span>
                <h4 className="text-base font-bold text-white">
                  Cybersecurity Intern
                </h4>
                <p className="text-xs font-mono text-emerald-400">Cybercyte</p>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Sysmon log telemetrisi, EDR mimari ajan prototiplemesi,
                  tarayıcı eklenti analizleri ve otonom sızma testi
                  araştırmaları.
                </p>
              </div>

              <div className="space-y-1.5 relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-neutral-600 ring-4 ring-[#050508]" />
                <span className="text-xs font-mono text-neutral-500">
                  2022 - 2023
                </span>
                <h4 className="text-base font-bold text-white">
                  Software Developer
                </h4>
                <p className="text-xs font-mono text-neutral-400">
                  Maarif Metaverse
                </p>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Unity oyun motoru ve C# mimarisiyle 3D etkileşimli sanal
                  derslik simülasyonları geliştirilmesi.
                </p>
              </div>
            </div>
          </div>

          {/* EĞİTİM & DİL */}
          <div className="p-8 rounded-3xl border border-neutral-800 bg-neutral-950/70 backdrop-blur-xl space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
              <GraduationCap className="w-5 h-5 text-sky-400" /> AKADEMİK KİMLİK
            </h3>
            <div className="space-y-6 border-l-2 border-neutral-800 pl-6">
              <div className="space-y-1.5 relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-sky-400 ring-4 ring-[#050508]" />
                <span className="text-xs font-mono text-neutral-500">
                  2021 - 2026
                </span>
                <h4 className="text-base font-bold text-white">
                  Karabük Üniversitesi
                </h4>
                <p className="text-xs font-mono text-sky-400">
                  Bilgisayar Mühendisliği Lisans
                </p>
                <p className="text-xs text-neutral-400">GPA: 2.82</p>
              </div>

              <div className="space-y-1.5 relative">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-neutral-600 ring-4 ring-[#050508]" />
                <span className="text-xs font-mono text-neutral-500">
                  2016 - 2020
                </span>
                <h4 className="text-base font-bold text-white">
                  KÜPKÖK 1112 Anadolu Lisesi
                </h4>
                <p className="text-xs text-neutral-400 font-mono">
                  Lise Diploması
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between text-xs font-mono">
              <span className="text-neutral-300">Yabancı Dil: İngilizce</span>
              <span className="text-emerald-400">A2 - B1 Technical</span>
            </div>
          </div>
        </section>

        {/* İLETİŞİM */}
        <section className="p-8 sm:p-12 rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-neutral-900/80 to-neutral-950/90 backdrop-blur-2xl space-y-6 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              DISPATCH DIRECTIVE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              İletişim Hattı
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl font-light">
              Siber savunma sistemleri, uç nokta güvenliği veya ortak
              mühendislik projeleri için doğrudan temas kurun.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="mailto:m.dag0524@gmail.com"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white text-black font-bold text-xs tracking-wider uppercase hover:bg-neutral-200 transition"
            >
              <Mail className="w-4 h-4" />
              <span>m.dag0524@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mustafa-da%C4%9F-63609524a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-neutral-800 bg-neutral-900 text-neutral-200 hover:text-sky-400 hover:border-sky-500/50 transition text-xs font-mono"
            >
              <LinkedinIcon />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/mustafaadag"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-neutral-800 bg-neutral-900 text-neutral-200 hover:text-emerald-400 hover:border-emerald-500/50 transition text-xs font-mono"
            >
              <GithubIcon />
              <span>GitHub</span>
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>© {new Date().getFullYear()} Mustafa Dağ — Bursa / Nilüfer</div>
          <div className="text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> DagSec
            Platform v3.8
          </div>
        </footer>
      </main>
    </div>
  );
}

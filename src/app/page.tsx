"use client";

import { useState, useRef, useEffect } from "react";
import { SpiralAnimation } from "./components/ui/spiral-animation";
import {
  ShieldCheck,
  Terminal as TerminalIcon,
  Cpu,
  Briefcase,
  GraduationCap,
  Languages,
  LineChart,
  Box,
  CheckCircle2,
  Sparkles,
  Mail,
  ChevronDown,
  Play,
  Database,
  Search,
  Activity,
  Send,
} from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
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
      width="16"
      height="16"
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

export default function Home() {
  const [lang, setLang] = useState<"tr" | "en">("tr");

  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "DagSec EDR Agent Engine v2.4 initialized.",
    "Type 'help' to list operational commands or click 'Simulate Attack'.",
  ]);
  const [terminalInput, setTerminalInput] = useState("");
  const [isSimulating, setIsSimulating] = useState(false);
  const terminalContainerRef = useRef<HTMLDivElement>(null);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "tr" ? "en" : "tr"));
  };

  const scrollToContent = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop =
        terminalContainerRef.current.scrollHeight;
    }
  }, [terminalLogs]);

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    const simulationSteps = [
      "[*] [EVENT] New process creation intercepted: powershell.exe (PID: 4912)",
      "[*] [TELEMETRY] Querying Sysmon Event ID 1 (Parent: explorer.exe)...",
      "[*] [STATIC ANALYZER] Calculating Shannon Entropy: 7.84 (Status: High/Suspicious Packing)",
      "[*] [INTELLIGENCE] Verifying SHA-256 with VirusTotal API & Local SQLite Cache...",
      "[*] [VERDICT] Zero-day payload signature match: 42/70 engines flagged.",
      "[!] [SOC ACTION] EDR Agent terminated process 4912. Quarantine log generated successfully.",
    ];

    simulationSteps.forEach((step, idx) => {
      setTimeout(
        () => {
          setTerminalLogs((prev) => [...prev, step]);
          if (idx === simulationSteps.length - 1) setIsSimulating(false);
        },
        (idx + 1) * 700,
      );
    });
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let response = "";
    if (cmd === "help") {
      response =
        "Commands: 'help', 'scan', 'skills', 'projects', 'status', 'clear'";
    } else if (cmd === "scan") {
      runSimulation();
      setTerminalInput("");
      return;
    } else if (cmd === "skills") {
      response =
        "Primary: C#, .NET, Sysmon Telemetry, Windows Internals, Threat Hunting, Python, Flutter";
    } else if (cmd === "projects") {
      response =
        "1. Hybrid EDR System (TÜBİTAK 2209-A) | 2. IoT Energy Dashboard | 3. ML Rent Predictor";
    } else if (cmd === "status") {
      response =
        "EDR Service: ONLINE | SOC Gateway: ACTIVE | Host Telemetry: SECURE";
    } else if (cmd === "clear") {
      setTerminalLogs([]);
      setTerminalInput("");
      return;
    } else {
      response = `Command not recognized: '${cmd}'. Type 'help' for available commands.`;
    }

    setTerminalLogs((prev) => [...prev, `> ${terminalInput}`, response]);
    setTerminalInput("");
  };

  return (
    <main className="relative bg-black text-neutral-200 min-h-screen selection:bg-neutral-800 font-sans antialiased overflow-x-hidden">
      <SpiralAnimation />

      <header className="fixed top-0 left-0 right-0 z-50 flex justify-end p-6 max-w-6xl mx-auto pointer-events-none">
        <button
          onClick={toggleLanguage}
          className="pointer-events-auto flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-950/80 backdrop-blur-md hover:border-neutral-500 hover:text-white transition-all text-xs font-mono shadow-2xl cursor-pointer"
          title="Change Language"
        >
          <Languages className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-semibold tracking-wider">
            {lang === "tr" ? "EN" : "TR"}
          </span>
        </button>
      </header>

      {/* 1. SAYFA (HERO) */}
      <section className="relative z-10 w-full h-screen overflow-hidden flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800/80 bg-neutral-950/60 mb-8 text-xs font-mono text-emerald-400 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            {lang === "tr"
              ? "Portfolyo & Siber Güvenlik Laboratuvarı"
              : "Portfolio & Security Lab"}
          </div>

          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.2em] uppercase font-extralight transition-all duration-700 hover:tracking-[0.3em] select-none">
            Mustafa Dağ
          </h1>

          <p className="mt-6 text-neutral-300 text-xs sm:text-sm md:text-base font-mono tracking-wider max-w-2xl mx-auto leading-relaxed border-y border-neutral-800/60 py-3 backdrop-blur-xs">
            Cybersecurity Specialist | Threat Detection & EDR Systems | C# &
            Sysmon | SOC Analyst
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/mustafaadag"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-800 bg-neutral-950/80 backdrop-blur-md hover:border-neutral-500 hover:bg-neutral-900 transition-all text-xs tracking-wider"
            >
              <GithubIcon className="text-white" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mustafa-da%C4%9F-63609524a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-800 bg-neutral-950/80 backdrop-blur-md hover:border-neutral-500 hover:bg-neutral-900 transition-all text-xs tracking-wider"
            >
              <LinkedinIcon className="text-sky-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:m.dag0524@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-800 bg-neutral-950/80 backdrop-blur-md hover:border-neutral-500 hover:bg-neutral-900 transition-all text-xs tracking-wider"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>{lang === "tr" ? "İletişim" : "Contact"}</span>
            </a>

            <button
              onClick={scrollToContent}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 transition-all text-xs font-semibold tracking-wider cursor-pointer"
            >
              <span>
                {lang === "tr" ? "Projeleri İncele" : "Explore Details"}
              </span>
            </button>
          </div>
        </div>

        <button
          onClick={scrollToContent}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-neutral-500 hover:text-white transition-colors cursor-pointer"
        >
          <span className="text-[10px] tracking-widest uppercase font-mono">
            {lang === "tr" ? "Aşağı Kaydır" : "Scroll Down"}
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </section>

      {/* İÇERİK BÖLÜMÜ */}
      <div
        id="about"
        className="relative z-10 py-24 px-6 max-w-5xl mx-auto space-y-28"
      >
        {/* 1. SAYFANIN HEMEN ALTINDAKİ ÖZET PROFİL */}
        <section className="p-8 sm:p-10 rounded-3xl border border-neutral-800/80 bg-neutral-950/80 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
            <Sparkles className="w-4 h-4" />
            {lang === "tr" ? "Özet Profil" : "Executive Summary"}
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-4">
            {lang === "tr"
              ? "Sistem & Siber Savunma Mühendisliği"
              : "Systems & Cyber Defense Engineering"}
          </h2>
          <p className="text-neutral-300 leading-relaxed text-sm sm:text-base font-light">
            {lang === "tr"
              ? "Karabük Üniversitesi Bilgisayar Mühendisliği mezunuyum. Uç nokta tespiti ve müdahalesi (EDR), Windows iç mimarisi (Windows Internals), Sysmon telemetri analizi ve tehdit avcılığı (Threat Hunting) odaklı çalışmalar yürütüyorum. Cybercyte bünyesindeki staj tecrübem ve geliştirdiğim hibrit EDR projesiyle; şüpheli süreçlerin tespiti, sezgisel entropi hesaplamaları, bellek/dosya analizleri ve otonom siber güvenlik mimarileri üzerine uzmanlaştım."
              : "Computer Engineering graduate from Karabük University. Focused on Endpoint Detection and Response (EDR), Windows Internals, Sysmon telemetry auditing, and proactive Threat Hunting. Through long-term cybersecurity internship experience at Cybercyte and the hybrid EDR project, I specialize in detecting anomalous processes, heuristic entropy modeling, file/memory verification, and automated SOC response architectures."}
          </p>
        </section>

        {/* İNTERAKTİF SİBER GÜVENLİK TERMİNALİ */}
        <section className="rounded-3xl border border-neutral-800/80 bg-neutral-950/85 backdrop-blur-xl overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-6 py-3 border-b border-neutral-800/80 bg-neutral-900/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />{" "}
                dagsec-threat-cli
              </span>
            </div>
            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className="flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-mono bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 hover:bg-emerald-900/60 transition disabled:opacity-50 cursor-pointer"
            >
              <Play className="w-3 h-3" />
              {isSimulating
                ? lang === "tr"
                  ? "Analiz Yapılıyor..."
                  : "Analyzing..."
                : lang === "tr"
                  ? "Tehdit Simülasyonu Çalıştır"
                  : "Simulate Attack"}
            </button>
          </div>

          <div
            ref={terminalContainerRef}
            className="p-6 font-mono text-xs space-y-2 h-56 overflow-y-auto"
          >
            {terminalLogs.map((log, i) => (
              <div
                key={i}
                className={
                  log.startsWith("[!]")
                    ? "text-red-400 font-semibold"
                    : log.startsWith("[*]")
                      ? "text-emerald-400"
                      : log.startsWith(">")
                        ? "text-white"
                        : "text-neutral-400"
                }
              >
                {log}
              </div>
            ))}
          </div>

          <form
            onSubmit={handleTerminalSubmit}
            className="flex border-t border-neutral-800/80 bg-neutral-900/30"
          >
            <span className="pl-6 py-3 text-xs font-mono text-emerald-400 select-none">
              &gt;
            </span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder={
                lang === "tr"
                  ? "Komut girin ('help', 'scan', 'status')..."
                  : "Enter command ('help', 'scan', 'status')..."
              }
              className="w-full bg-transparent px-3 py-3 text-xs font-mono text-white focus:outline-hidden placeholder:text-neutral-600"
            />
          </form>
        </section>

        {/* EDR MİMARİSİ VE AKIŞ ŞEMASI */}
        <section className="p-8 sm:p-10 rounded-3xl border border-neutral-800/80 bg-neutral-950/80 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
            <Activity className="w-4 h-4" />
            {lang === "tr" ? "Sistem Mimarisi" : "System Architecture"}
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-white">
            {lang === "tr"
              ? "Hibrit EDR Telemetri & Analiz Akışı"
              : "Hybrid EDR Telemetry & Verification Flow"}
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
            {lang === "tr"
              ? "Geliştirdiğim EDR ajanının çekirdekten gelen telemetriyi yakalayıp yanıt üretme adımlarını içeren 4 katmanlı veri boru hattı (pipeline):"
              : "The 4-layer telemetry pipeline engineered into the hybrid EDR agent from raw kernel hooks to automated SOC remediation:"}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-2">
              <span className="text-[10px] font-mono text-emerald-400">
                01. INGESTION
              </span>
              <h4 className="text-sm font-medium text-white flex items-center gap-1.5">
                <Search className="w-4 h-4 text-emerald-400" /> Sysmon Hooks
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {lang === "tr"
                  ? "Event ID 1, 3 ve 7 üzerinden proses yaratma, ağ bağlantısı ve DLL yüklemeleri dinlenir."
                  : "Hooks Process Creation (ID 1), Network Connections (ID 3), and DLL Loads (ID 7)."}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-2">
              <span className="text-[10px] font-mono text-sky-400">
                02. HEURISTICS
              </span>
              <h4 className="text-sm font-medium text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-sky-400" /> Entropy Engine
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {lang === "tr"
                  ? "Çalıştırılabilir dosyanın PE bölümleri üzerinde Shannon Entropi formülüyle paketlenmiş/gizlenmiş kod aranır."
                  : "Computes Shannon entropy across PE sections to reveal packed payloads and obfuscation."}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-2">
              <span className="text-[10px] font-mono text-amber-400">
                03. INTELLIGENCE
              </span>
              <h4 className="text-sm font-medium text-white flex items-center gap-1.5">
                <Database className="w-4 h-4 text-amber-400" /> SQLite & VT API
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {lang === "tr"
                  ? "SHA-256 hashleri yerel SQLite önbelleğinde sorgulanır, bilinmeyen dosyalar VirusTotal API ile doğrulanır."
                  : "Checks SHA-256 in local SQLite cache; triggers cloud threat queries via VirusTotal API."}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-2">
              <span className="text-[10px] font-mono text-red-400">
                04. RESPONSE
              </span>
              <h4 className="text-sm font-medium text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-red-400" /> Quarantine
                Action
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {lang === "tr"
                  ? "Yüksek tehdit skorlu proses otonom olarak sonlandırılır, şüpheli ikili karantinaya alınarak loglanır."
                  : "Terminates malicious process IDs, quarantines zero-day binaries, and broadcasts SOC alerts."}
              </p>
            </div>
          </div>
        </section>

        {/* PROJELER */}
        <section>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            <TerminalIcon className="w-4 h-4" />
            {lang === "tr" ? "Mühendislik Projeleri" : "Featured Projects"}
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-10 border-b border-neutral-900 pb-4">
            {lang === "tr"
              ? "Teknik Analiz, Sağlanan Fayda & Kazanımlar"
              : "Technical Architecture, Impact & Takeaways"}
          </h2>

          <div className="space-y-10">
            <div className="p-8 sm:p-10 rounded-3xl border border-neutral-800/80 bg-neutral-950/80 backdrop-blur-xl hover:border-neutral-700 transition-all duration-300 space-y-6 shadow-2xl">
              <div className="flex flex-wrap justify-between items-start gap-3">
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-full">
                    {lang === "tr"
                      ? "Bitirme Tezi & Güvenlik Mimarisi"
                      : "Graduation Thesis & Security Arch"}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-medium text-white mt-3">
                    {lang === "tr"
                      ? "Sysmon & Sezgisel Analiz Tabanlı Hibrit Uç Nokta Tehdit Algılama (EDR)"
                      : "Sysmon & Heuristic-Based Hybrid Endpoint Threat Detection System (EDR)"}
                  </h3>
                </div>
                <ShieldCheck className="w-7 h-7 text-emerald-400 shrink-0" />
              </div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {lang === "tr"
                  ? "Windows uç noktalarında çalışan süreçleri gerçek zamanlı Sysmon Event Log telemetrisi üzerinden dinleyen, zararlı aktiviteleri sezgisel ve statik yöntemlerle ayrıştıran hibrit bir EDR ajanı."
                  : "A hybrid EDR agent monitoring Windows endpoints in real-time using Sysmon Event Log telemetry, distinguishing malicious activities through combined heuristic and static verification pipelines."}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
                <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-3">
                  <div className="font-semibold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    {lang === "tr"
                      ? "Sisteme & Kullanıcıya Faydası"
                      : "System Benefits & Real Impact"}
                  </div>
                  <ul className="list-disc list-inside text-neutral-400 space-y-1.5 leading-relaxed text-xs">
                    {lang === "tr" ? (
                      <>
                        <li>
                          Geleneksel imza tabanlı antivirüslerin kaçırdığı
                          sıfırıncı gün ve paketlenmiş zararlıları Shannon
                          Entropi formülüyle sezgisel tespit eder.
                        </li>
                        <li>
                          VirusTotal API entegrasyonu ve yerel SQLite
                          önbellekleme sayesinde yinelenen sorguları engeller,
                          ağ yükünü minimize eder.
                        </li>
                        <li>
                          Dijital imza doğrulama ile sahte sistem ikili
                          dosyalarını filtreleyerek yanlış alarm oranını
                          düşürür.
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          Heuristically detects packed & 0-day malware using
                          Shannon entropy calculations where traditional
                          signature AVs fall short.
                        </li>
                        <li>
                          Minimizes network bandwidth & API quota exhaustion via
                          local SQLite hash caching paired with VirusTotal API.
                        </li>
                        <li>
                          Validates authentic digital signatures to minimize
                          false positives against native Windows OS binaries.
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-3">
                  <div className="font-semibold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                    {lang === "tr"
                      ? "Bana Kattığı Vizyon ve Kazanımlar"
                      : "Personal & Technical Takeaways"}
                  </div>
                  <ul className="list-disc list-inside text-neutral-400 space-y-1.5 leading-relaxed text-xs">
                    {lang === "tr" ? (
                      <>
                        <li>
                          Windows API, servis mimarileri, event log kanalları ve
                          proses telemetrisi konularında derin kernel/user-mode
                          anlayışı.
                        </li>
                        <li>
                          Yüksek veri akışı altında C# ile asenkron thread
                          yönetimi, verimli bellek tahsisi ve performans
                          optimizasyonu tecrübesi.
                        </li>
                        <li>
                          Bir SOC analistinin ihtiyaç duyacağı log korelasyonu
                          ve olay müdahale (IR) karar mekanizmalarını bizzat
                          kodlama pratiği.
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          In-depth kernel/user-mode telemetry understanding:
                          Windows Event Log channels, service agents, and
                          process internals.
                        </li>
                        <li>
                          High-throughput concurrent C# programming,
                          asynchronous event dispatching, and optimized memory
                          consumption.
                        </li>
                        <li>
                          Hands-on experience architecting incident response
                          workflows and telemetry correlation required by modern
                          SOC teams.
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "C#",
                  ".NET Framework",
                  "Sysmon",
                  "VirusTotal API",
                  "Shannon Entropy",
                  "SQLite",
                  "Threat Hunting",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono text-neutral-300 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl border border-neutral-800/80 bg-neutral-950/80 backdrop-blur-xl hover:border-neutral-700 transition-all duration-300 space-y-6 shadow-2xl">
              <div className="flex flex-wrap justify-between items-start gap-3">
                <div>
                  <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider bg-sky-950/40 border border-sky-800/40 px-3 py-1 rounded-full">
                    {lang === "tr"
                      ? "Mobil & Donanım Entegrasyonu"
                      : "Mobile & Embedded Integration"}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-medium text-white mt-3">
                    {lang === "tr"
                      ? "Flutter & ESP32 Tabanlı Canlı Enerji İzleme ve Yönetim Paneli"
                      : "Flutter & ESP32-Powered Realtime Energy Monitoring Dashboard"}
                  </h3>
                </div>
                <Cpu className="w-7 h-7 text-sky-400 shrink-0" />
              </div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {lang === "tr"
                  ? "ESP32 mikrodenetleyicisi ile toplanan anlık akım, voltaj ve tüketim verilerini Firebase Realtime Database üzerinde senkronize eden ve Flutter mobil uygulaması üzerinden grafiklerle görselleştiren uçtan uca IoT ekosistemi."
                  : "An end-to-end IoT system capturing telemetry (voltage, current, power) via ESP32 microcontrollers, streaming live data to Firebase Realtime Database, and rendering real-time performance analytics in a Flutter mobile client."}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
                <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-3">
                  <div className="font-semibold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    {lang === "tr"
                      ? "Sisteme & Kullanıcıya Faydası"
                      : "System Benefits & Real Impact"}
                  </div>
                  <ul className="list-disc list-inside text-neutral-400 space-y-1.5 leading-relaxed text-xs">
                    {lang === "tr" ? (
                      <>
                        <li>
                          Tüketim anomalilerini ve beklenmeyen voltaj
                          dalgalanmalarını anlık olarak kullanıcıya bildirir,
                          donanım arızalarını önler.
                        </li>
                        <li>
                          Geçmişe dönük enerji harcama raporları sunarak
                          işletmeler ve ev kullanıcıları için maliyet
                          optimizasyonu sağlar.
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          Immediately detects voltage anomalies and abnormal
                          spikes, safeguarding connected electronic appliances.
                        </li>
                        <li>
                          Provides historical consumption auditing to optimize
                          electricity overhead for both commercial and
                          residential setups.
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-3">
                  <div className="font-semibold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                    {lang === "tr"
                      ? "Bana Kattığı Vizyon ve Kazanımlar"
                      : "Personal & Technical Takeaways"}
                  </div>
                  <ul className="list-disc list-inside text-neutral-400 space-y-1.5 leading-relaxed text-xs">
                    {lang === "tr" ? (
                      <>
                        <li>
                          Flutter ile durum yönetimi (State Management),
                          asenkron veri akışları ve reaktif UI tasarlama
                          tecrübesi.
                        </li>
                        <li>
                          Gömülü donanım ile bulut veritabanı arasındaki veri
                          paketleme ve seri haberleşme optimizasyon becerisi.
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          Mastered state management, dynamic reactive streams,
                          and custom analytics dashboard construction in
                          Flutter.
                        </li>
                        <li>
                          Hands-on calibration of embedded UART/Wi-Fi serial
                          interfaces and cloud network latency tolerance on
                          ESP32.
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Flutter",
                  "Dart",
                  "Android Studio",
                  "ESP32",
                  "Firebase Realtime DB",
                  "IoT",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono text-neutral-300 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl border border-neutral-800/80 bg-neutral-950/80 backdrop-blur-xl hover:border-neutral-700 transition-all duration-300 space-y-6 shadow-2xl">
              <div className="flex flex-wrap justify-between items-start gap-3">
                <div>
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider bg-amber-950/40 border border-amber-800/40 px-3 py-1 rounded-full">
                    {lang === "tr"
                      ? "Yapay Zeka & Veri Bilimi"
                      : "Machine Learning & Analytics"}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-medium text-white mt-3">
                    {lang === "tr"
                      ? "Python ile Konut Kira Fiyatı Tahmin ve Analiz Modeli"
                      : "Real Estate Rent Price Estimation & Heuristic Regression Model"}
                  </h3>
                </div>
                <LineChart className="w-7 h-7 text-amber-400 shrink-0" />
              </div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {lang === "tr"
                  ? "Açık kaynaklı veri setleri üzerinde aykırı değer temizleme, özellik mühendisliği ve regresyon algoritmaları uygulanarak konut kira değerlerini tahminleyen analitik model."
                  : "An analytical machine learning pipeline built on open datasets executing outlier elimination, feature scaling, and regression algorithms to predict real estate rent pricing."}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
                <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-3">
                  <div className="font-semibold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    {lang === "tr"
                      ? "Sisteme & Kullanıcıya Faydası"
                      : "System Benefits & Real Impact"}
                  </div>
                  <p className="text-neutral-400 leading-relaxed text-xs">
                    {lang === "tr"
                      ? "Piyasadaki manipülatif fiyatlandırmaları tespit eder, gayrimenkul yatırımcıları ve kiracılar için konum tabanlı adil fiyat aralığı çıkarır."
                      : "Uncovers market price anomalies and computes fair price baselines for tenants and property investors based on spatial features."}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-3">
                  <div className="font-semibold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                    {lang === "tr"
                      ? "Bana Kattığı Vizyon ve Kazanımlar"
                      : "Personal & Technical Takeaways"}
                  </div>
                  <p className="text-neutral-400 leading-relaxed text-xs">
                    {lang === "tr"
                      ? "Büyük veri setlerini işleme, eksik verileri mantıksal tamamlama ve istatistiksel metriklerle model başarı testleri yapma yetkinliği."
                      : "Strengthened skills in large-scale dataset sanitization, correlation matrices, hyperparameter tuning, and error benchmarking."}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Python",
                  "Jupyter Notebook",
                  "Pandas",
                  "NumPy",
                  "Scikit-Learn",
                  "Feature Engineering",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono text-neutral-300 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl border border-neutral-800/80 bg-neutral-950/80 backdrop-blur-xl hover:border-neutral-700 transition-all duration-300 space-y-6 shadow-2xl">
              <div className="flex flex-wrap justify-between items-start gap-3">
                <div>
                  <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider bg-purple-950/40 border border-purple-800/40 px-3 py-1 rounded-full">
                    {lang === "tr"
                      ? "Simülasyon & Startup"
                      : "Simulation & Startup"}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-medium text-white mt-3">
                    {lang === "tr"
                      ? "Maarif Metaverse: Unity Tabanlı Etkileşimli Eğitim Ortamı"
                      : "Maarif Metaverse: Unity-Based Interactive Virtual Learning Environment"}
                  </h3>
                </div>
                <Box className="w-7 h-7 text-purple-400 shrink-0" />
              </div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {lang === "tr"
                  ? "Eğitim amaçlı startup bünyesinde 1 yıl boyunca Unity oyun motoru ve C# ile geliştirilen, öğrencilerin 3D simüle edilmiş sanal dersliklerde etkileşime girmesini sağlayan sanal evren projesi."
                  : "A one-year startup development project crafting a 3D virtual educational metaverse using Unity and C#, enabling students to interact in real-time simulated educational spaces."}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
                <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-3">
                  <div className="font-semibold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    {lang === "tr"
                      ? "Sisteme & Kullanıcıya Faydası"
                      : "System Benefits & Real Impact"}
                  </div>
                  <p className="text-neutral-400 leading-relaxed text-xs">
                    {lang === "tr"
                      ? "Uzaktan eğitim süreçlerini oyunlaştırarak öğrenci katılımını artırdı; fiziksel laboratuvar deneylerini sanal ortamda simüle etti."
                      : "Gamified remote schooling to boost student retention while virtually recreating laboratory exercises safely."}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-3">
                  <div className="font-semibold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                    {lang === "tr"
                      ? "Bana Kattığı Vizyon ve Kazanımlar"
                      : "Personal & Technical Takeaways"}
                  </div>
                  <p className="text-neutral-400 leading-relaxed text-xs">
                    {lang === "tr"
                      ? "3D nesne hiyerarşisi, fizik motorları, sahne optimizasyonları ve çevik startup ekibiyle çalışma disiplini kazandırdı."
                      : "Gained hands-on experience in 3D scene optimization, physics computations, asset lifecycle management, and agile startup workflows."}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Unity 3D",
                  "C#",
                  "Virtual Reality / Metaverse",
                  "Interactive UI",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono text-neutral-300 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DENEYİM & EĞİTİM */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 rounded-3xl border border-neutral-800/80 bg-neutral-950/80 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
              <Briefcase className="w-4 h-4" />
              {lang === "tr" ? "Profesyonel Deneyim" : "Work Experience"}
            </div>
            <h3 className="text-2xl font-light text-white mb-6 border-b border-neutral-900 pb-3">
              {lang === "tr" ? "Kariyer Geçmişi" : "Professional History"}
            </h3>

            <div className="space-y-8 border-l border-neutral-800 pl-5">
              <div className="relative space-y-1.5">
                <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-emerald-400 ring-4 ring-black" />
                <span className="text-xs font-mono text-neutral-400">
                  2025 - 2026
                </span>
                <h4 className="text-base font-medium text-white">
                  {lang === "tr"
                    ? "Uzun Dönem Siber Güvenlik Stajyeri"
                    : "Long-Term Cybersecurity Intern"}
                </h4>
                <p className="text-xs text-emerald-400 font-mono">Cybercyte</p>
                <ul className="text-xs text-neutral-400 list-disc list-inside space-y-1.5 pt-1.5 leading-relaxed">
                  {lang === "tr" ? (
                    <>
                      <li>
                        Sysmon ve sezgisel analiz tabanlı otonom Hibrit EDR
                        sistemi tasarımı ve prototiplenmesi.
                      </li>
                      <li>
                        Uç noktalardan veri toplama, tarayıcı eklentilerinin
                        güvenlik analizleri ve şüpheli aktivite denetimi.
                      </li>
                      <li>
                        Çoklu ajan tabanlı otonom sızma testi yaklaşımları ve
                        tehdit modelleme çalışmaları.
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        Architected an autonomous hybrid EDR system leveraging
                        Sysmon telemetry and heuristic verification.
                      </li>
                      <li>
                        Audited browser extensions, endpoint telemetry
                        gathering, and anomalous threat vector detection.
                      </li>
                      <li>
                        Conducted research into multi-agent autonomous
                        penetration testing models and threat surface modeling.
                      </li>
                    </>
                  )}
                </ul>
              </div>

              <div className="relative space-y-1.5 pt-4">
                <div className="absolute -left-[27px] top-5 w-3 h-3 rounded-full bg-neutral-600 ring-4 ring-black" />
                <span className="text-xs font-mono text-neutral-400">
                  2022 - 2023
                </span>
                <h4 className="text-base font-medium text-white">
                  {lang === "tr"
                    ? "Yazılım Geliştirici - Maarif Metaverse"
                    : "Software Developer - Maarif Metaverse"}
                </h4>
                <p className="text-xs text-neutral-400 font-mono">Startup</p>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {lang === "tr"
                    ? "Eğitim amaçlı startup projesinde 1 yıl boyunca Unity ve C# tabanlı sanal etkileşimli mekanikler geliştirildi."
                    : "Developed interactive virtual classroom mechanics using Unity 3D and C# over a 1-year startup incubation cycle."}
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl border border-neutral-800/80 bg-neutral-950/80 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
              <GraduationCap className="w-4 h-4" />
              {lang === "tr" ? "Akademik Geçmiş" : "Education & Languages"}
            </div>
            <h3 className="text-2xl font-light text-white mb-6 border-b border-neutral-900 pb-3">
              {lang === "tr" ? "Eğitim & Diller" : "Academic Credentials"}
            </h3>

            <div className="space-y-6 border-l border-neutral-800 pl-5">
              <div className="relative space-y-1.5">
                <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-sky-400 ring-4 ring-black" />
                <span className="text-xs font-mono text-neutral-400">
                  2021 - 2026
                </span>
                <h4 className="text-base font-medium text-white">
                  {lang === "tr"
                    ? "Karabük Üniversitesi"
                    : "Karabük University"}
                </h4>
                <p className="text-xs text-sky-400 font-mono">
                  {lang === "tr"
                    ? "Bilgisayar Mühendisliği / Mühendislik Fakültesi"
                    : "Computer Engineering / Faculty of Engineering"}
                </p>
                <p className="text-xs text-neutral-400">GPA: 2.82</p>
              </div>

              <div className="relative space-y-1.5 pt-2">
                <div className="absolute -left-[27px] top-3.5 w-3 h-3 rounded-full bg-neutral-600 ring-4 ring-black" />
                <span className="text-xs font-mono text-neutral-400">
                  2016 - 2020
                </span>
                <h4 className="text-base font-medium text-white">
                  KÜPKÖK 1112 Anadolu Lisesi
                </h4>
                <p className="text-xs text-neutral-400 font-mono">
                  {lang === "tr" ? "Lise Diploması" : "High School Diploma"}
                </p>
              </div>

              <div className="pt-4 space-y-2">
                <h5 className="text-xs font-mono uppercase tracking-wider text-white">
                  {lang === "tr"
                    ? "Yabancı Dil Seviyesi"
                    : "Language Proficiency"}
                </h5>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs">
                  <span className="text-white font-medium">
                    {lang === "tr" ? "İngilizce" : "English"}
                  </span>
                  <span className="font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-800/40">
                    B1 (Technical & Professional)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* YETKİNLİKLER */}
        <section>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            <Cpu className="w-4 h-4" />
            {lang === "tr"
              ? "Teknik Donanım & Yetkinlikler"
              : "Technical Proficiencies"}
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-10 border-b border-neutral-900 pb-4">
            {lang === "tr"
              ? "CV ve Proje Odaklı Beceri Matrisi"
              : "Curriculum & Project-Based Skill Matrix"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
            <div className="p-6 rounded-2xl border border-neutral-800/80 bg-neutral-950/80 backdrop-blur-xl space-y-3 shadow-xl">
              <div className="flex justify-between items-center">
                <span className="font-medium text-white text-sm">
                  C# & .NET
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  {lang === "tr" ? "Orta - İleri" : "Mid - Advanced"}
                </span>
              </div>
              <p className="text-neutral-400 leading-relaxed">
                {lang === "tr"
                  ? "Konsol, WinForms, Arka Plan Windows Servisleri, Sysmon Güvenlik Ajanı Mimarisi ve REST API Entegrasyonları."
                  : "Console, WinForms, Windows Background Services, Sysmon Security Agent Architecture, and REST API Integrations."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-800/80 bg-neutral-950/80 backdrop-blur-xl space-y-3 shadow-xl">
              <div className="flex justify-between items-center">
                <span className="font-medium text-white text-sm">
                  Cybersecurity & SOC
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  {lang === "tr" ? "Uzmanlık Odağı" : "Core Focus"}
                </span>
              </div>
              <p className="text-neutral-400 leading-relaxed">
                {lang === "tr"
                  ? "Sysmon Log Analizi, Uç Nokta Tehdit Tespiti (EDR), Shannon Entropi, Hashleme, Otonom Sızma Testi ve Olay İnceleme."
                  : "Sysmon Log Auditing, Endpoint Threat Detection (EDR), Shannon Entropy, Hashing, Autonomous PenTesting, Heuristic Models."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-800/80 bg-neutral-950/80 backdrop-blur-xl space-y-3 shadow-xl">
              <div className="flex justify-between items-center">
                <span className="font-medium text-white text-sm">
                  Python & Machine Learning
                </span>
                <span className="text-[10px] font-mono text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/40">
                  {lang === "tr" ? "Orta Seviye" : "Intermediate"}
                </span>
              </div>
              <p className="text-neutral-400 leading-relaxed">
                {lang === "tr"
                  ? "Jupyter Notebook, Veri Ön İşleme, Özellik Mühendisliği ve Regresyon Algoritmaları."
                  : "Jupyter Notebook, Data Preprocessing, Feature Engineering, Regression Algorithms & Exploratory Data Analysis."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-800/80 bg-neutral-950/80 backdrop-blur-xl space-y-3 shadow-xl">
              <div className="flex justify-between items-center">
                <span className="font-medium text-white text-sm">
                  Flutter & Mobil
                </span>
                <span className="text-[10px] font-mono text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/40">
                  {lang === "tr" ? "Başlangıç - Orta" : "Novice - Intermediate"}
                </span>
              </div>
              <p className="text-neutral-400 leading-relaxed">
                {lang === "tr"
                  ? "Android Studio, Dart, Çapraz Platform Uygulama Geliştirme, Gerçek Zamanlı Enerji Verisi Görselleştirme."
                  : "Android Studio, Dart, Cross-Platform Mobile Apps, Real-time Energy Monitoring Data Visualization."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-800/80 bg-neutral-950/80 backdrop-blur-xl space-y-3 shadow-xl">
              <div className="flex justify-between items-center">
                <span className="font-medium text-white text-sm">
                  VBScript & Classic ASP
                </span>
                <span className="text-[10px] font-mono text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                  {lang === "tr" ? "Temel Seviye" : "Foundational"}
                </span>
              </div>
              <p className="text-neutral-400 leading-relaxed">
                {lang === "tr"
                  ? "Dinamik web uygulamaları mimarisi, sunucu tarafı betik yazımı ve klasik legacy backend mimarisi."
                  : "Dynamic web patterns, server-side scripting, database bindings, and legacy system architecture."}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-800/80 bg-neutral-950/80 backdrop-blur-xl space-y-3 shadow-xl">
              <div className="flex justify-between items-center">
                <span className="font-medium text-white text-sm">MATLAB</span>
                <span className="text-[10px] font-mono text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                  {lang === "tr"
                    ? "Mühendislik Analizi"
                    : "Engineering Analysis"}
                </span>
              </div>
              <p className="text-neutral-400 leading-relaxed">
                {lang === "tr"
                  ? "Sayısal analiz, temel görüntü işleme algoritmaları ve mühendislik hesaplamaları."
                  : "Numerical matrix computing, foundational image processing algorithms, and signal calculations."}
              </p>
            </div>
          </div>
        </section>

        {/* HIZLI İLETİŞİM FORMU */}
        <section className="p-8 sm:p-10 rounded-3xl border border-neutral-800/80 bg-neutral-950/80 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
            <Mail className="w-4 h-4" />
            {lang === "tr" ? "Doğrudan İletişim" : "Get In Touch"}
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-white">
            {lang === "tr"
              ? "Birlikte Proje Geliştirelim"
              : "Let’s Collaborate & Secure Systems"}
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "mailto:m.dag0524@gmail.com";
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono"
          >
            <input
              type="text"
              placeholder={
                lang === "tr" ? "Adınız / Kurum" : "Your Name / Organization"
              }
              required
              className="p-3.5 rounded-xl bg-neutral-900/70 border border-neutral-800 text-white focus:outline-hidden focus:border-emerald-500"
            />
            <input
              type="email"
              placeholder={lang === "tr" ? "E-posta Adresiniz" : "Your Email"}
              required
              className="p-3.5 rounded-xl bg-neutral-900/70 border border-neutral-800 text-white focus:outline-hidden focus:border-emerald-500"
            />
            <textarea
              rows={3}
              placeholder={
                lang === "tr"
                  ? "Mesajınız / Proje detayı..."
                  : "Your Message / Security Inquiries..."
              }
              required
              className="sm:col-span-2 p-3.5 rounded-xl bg-neutral-900/70 border border-neutral-800 text-white focus:outline-hidden focus:border-emerald-500"
            />
            <button
              type="submit"
              className="sm:col-span-2 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>
                {lang === "tr"
                  ? "Mesajı Gönder (E-Posta Aç)"
                  : "Dispatch Secure Message"}
              </span>
            </button>
          </form>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-neutral-900 pt-10 pb-16 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-neutral-500 font-mono">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-neutral-300 font-medium">
              Mustafa Dağ — Nilüfer / Bursa
            </p>
            <p>m.dag0524@gmail.com | +90 551 257 24 37</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mustafaadag"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/mustafa-da%C4%9F-63609524a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  Briefcase,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  FileCode2,
  Fingerprint,
  //Github,
  GraduationCap,
  Layers3,
  //Linkedin,
  Lock,
  Mail,
  Menu,
  Network,
  Play,
  Radio,
  Radar,
  RefreshCw,
  Search,
  Send,
  Server,
  Shield,
  ShieldAlert,
  Sparkles,
  Terminal as TerminalIcon,
  X,
  Zap,
} from "lucide-react";

type Lang = "tr" | "en";

type Project = {
  id: string;
  eyebrow: string;
  title: string;
  short: string;
  description: string;
  icon: React.ElementType;
  accent: "emerald" | "sky" | "amber" | "purple";
  tags: string[];
  bullets: string[];
};

const projects: Project[] = [
  {
    id: "edr",
    eyebrow: "FLAGSHIP / ENDPOINT DEFENSE",
    title: "Sysmon Tabanlı Hibrit EDR",
    short:
      "Şüpheli süreçleri telemetri + heuristik analiz + hash doğrulama zinciri üzerinden inceleyen C# güvenlik ajanı.",
    description:
      "Windows uç nokta telemetrilerini Sysmon Event Log üzerinden izleyip şüpheli proses davranışlarını analiz eden bir savunma prototipi. PE Shannon entropisi heuristiği, SQLite tabanlı hash önbelleği ve VirusTotal doğrulaması aynı karar hattında birleştiriliyor.",
    icon: Shield,
    accent: "emerald",
    tags: [
      "C#",
      ".NET Framework",
      "Sysmon",
      "SQLite",
      "VirusTotal",
      "Windows Internals",
    ],
    bullets: [
      "Sysmon Event ID 1 / 3 / 7 telemetrisi",
      "Shannon entropisi ile PE anomali sinyali",
      "Yerel hash cache + VirusTotal lookup",
      "Olay sonrası süreç sonlandırma / remediation",
    ],
  },
  {
    id: "secure-file",
    eyebrow: "MALWARE TRIAGE",
    title: "Secure File Inspector",
    short:
      "Dosyaları imza, hash, metadata ve entropy sinyalleri ile inceleyen analiz pipeline'ı.",
    description:
      "C# ve SQLite tabanlı dosya analiz uygulaması. Signed durumundan sürüm bilgisine, MD5/SHA1/SHA256 değerlerinden entropy analizine kadar çoklu sinyal toplayarak dosyayı hızlı triage etmeyi hedefliyor.",
    icon: FileCode2,
    accent: "sky",
    tags: ["C#", "SQLite", "SHA-256", "SigCheck", "PE Analysis"],
    bullets: [
      "İmza / publisher / version metadata",
      "MD5, SHA1 ve SHA256 fingerprinting",
      "30 günlük lokal analiz cache",
      ".lnk / .url shortcut çözümleme",
    ],
  },
  {
    id: "energy",
    eyebrow: "IOT / REAL-TIME",
    title: "Flutter + ESP32 Enerji Paneli",
    short:
      "Sensör verilerini gerçek zamanlı toplayan ve mobil arayüzde görselleştiren IoT sistemi.",
    description:
      "ESP32 üzerinden akım ve voltaj verilerini alıp Firebase Realtime Database ile senkronize eden, Flutter arayüzünde canlı göstergeler ve anomalileri görünür kılan sistem yaklaşımı.",
    icon: Cpu,
    accent: "amber",
    tags: ["Flutter", "Dart", "ESP32", "Firebase", "Realtime Data"],
    bullets: [
      "Canlı akım / voltaj akışı",
      "Firebase Realtime Database",
      "Mobil dashboard yaklaşımı",
      "Anomali görünürlüğü",
    ],
  },
  {
    id: "ml",
    eyebrow: "DATA / MACHINE LEARNING",
    title: "Konut Fiyat Tahminleme",
    short:
      "Veri temizleme ve feature engineering sonrasında regresyon tabanlı fiyat tahmin modeli.",
    description:
      "Açık veri setleri üzerinde outlier filtering, feature engineering ve çok değişkenli regresyon adımlarını kullanarak fiyat tahminleme odaklı bir makine öğrenmesi çalışması.",
    icon: Activity,
    accent: "purple",
    tags: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "Jupyter",
      "Feature Engineering",
    ],
    bullets: [
      "Outlier filtering",
      "Feature engineering",
      "Regresyon tabanlı tahmin",
      "Modelleme / veri hazırlama pipeline'ı",
    ],
  },
];

function cn(...items: Array<string | false | null | undefined>) {
  return items.filter(Boolean).join(" ");
}

function GitHubMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function GridNoise() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:52px_52px]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-25 [background-image:radial-gradient(circle_at_center,rgba(16,185,129,0.16),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(14,165,233,0.09),transparent_22%),radial-gradient(circle_at_18%_75%,rgba(168,85,247,0.08),transparent_25%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 [mask-image:linear-gradient(to_bottom,black,transparent_92%)] bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.92)_100%)]" />
    </>
  );
}

function RadarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;

    const nodes = Array.from({ length: 42 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00035,
      vy: (Math.random() - 0.5) * 0.00035,
      pulse: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      const radarX = w * 0.78;
      const radarY = h * 0.22;
      const radius = Math.min(w, h) * 0.19;
      const sweep = (performance.now() * 0.00055) % (Math.PI * 2);

      for (let ring = 1; ring <= 3; ring++) {
        ctx.beginPath();
        ctx.arc(radarX, radarY, (radius / 3) * ring, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(16,185,129,${0.05 + ring * 0.01})`;
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.moveTo(radarX, radarY);
      ctx.lineTo(
        radarX + Math.cos(sweep) * radius,
        radarY + Math.sin(sweep) * radius,
      );
      ctx.strokeStyle = "rgba(52,211,153,0.22)";
      ctx.lineWidth = 1.4;
      ctx.stroke();

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > 1) n.vx *= -1;
        if (n.y < 0 || n.y > 1) n.vy *= -1;
        n.pulse += 0.02;

        const x = n.x * w;
        const y = n.y * h;
        const dist = Math.hypot(x - radarX, y - radarY);

        if (dist < radius * 1.15) {
          const relative = Math.atan2(y - radarY, x - radarX);
          const normalized =
            ((relative - sweep + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
          if (Math.abs(normalized) < 0.08) {
            ctx.beginPath();
            ctx.arc(x, y, 4 + Math.sin(n.pulse) * 2, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(110,231,183,0.55)";
            ctx.fill();
          }
        }

        ctx.beginPath();
        ctx.arc(x, y, 1 + (Math.sin(n.pulse) + 1) * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(56,189,248,0.23)";
        ctx.fill();
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const ax = a.x * w;
          const ay = a.y * h;
          const bx = b.x * w;
          const by = b.y * h;
          const d = Math.hypot(ax - bx, ay - by);
          if (d < 135) {
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.strokeStyle = `rgba(59,130,246,${0.055 * (1 - d / 135)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" />
  );
}

function SectionLabel({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-[11px] font-mono uppercase tracking-[0.28em] text-emerald-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("tr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "DAGSEC // DEFENSE CONSOLE v4.1",
    "Telemetry stream: ONLINE",
    "Sysmon collector: ATTACHED",
    "Threat engine: READY",
    "Type 'scan' to launch a simulated incident.",
  ]);
  const [simulating, setSimulating] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeProject, setActiveProject] = useState("edr");
  const [copied, setCopied] = useState(false);
  const terminalRef = useRef<HTMLDivElement | null>(null);

  const tr = lang === "tr";

  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [terminalLogs]);

  const runSimulation = () => {
    if (simulating) return;

    setSimulating(true);
    const events = [
      "[01] PROCESS CREATE  svch0st.exe  PID=5812",
      "[02] SYSMON RULE     suspicious parent-child relation",
      "[03] PE HEURISTIC    entropy=7.91  -> HIGH",
      "[04] HASH CACHE      MISS  -> VirusTotal lookup",
      "[05] REMEDIATION     threat confirmed  -> process terminated",
      "[06] SOC STATUS      incident contained",
    ];

    events.forEach((entry, index) => {
      setTimeout(
        () => {
          setTerminalLogs((current) => [...current, entry]);
          if (index === events.length - 1) {
            setSimulating(false);
          }
        },
        550 * (index + 1),
      );
    });
  };

  const handleCommand = (event: React.FormEvent) => {
    event.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    setTerminalLogs((current) => [...current, `> ${terminalInput}`]);

    if (cmd === "scan") {
      runSimulation();
    } else if (cmd === "status") {
      setTerminalLogs((current) => [
        ...current,
        "Engine: ONLINE | Telemetry: LIVE | Response: ARMED",
      ]);
    } else if (cmd === "skills") {
      setTerminalLogs((current) => [
        ...current,
        "C# / .NET / Sysmon / Windows / Python / Flutter / SQLite",
      ]);
    } else if (cmd === "clear") {
      setTerminalLogs([]);
    } else if (cmd === "help") {
      setTerminalLogs((current) => [
        ...current,
        "Commands: scan | status | skills | clear | help",
      ]);
    } else {
      setTerminalLogs((current) => [
        ...current,
        `Unknown command '${cmd}'. Try 'help'.`,
      ]);
    }

    setTerminalInput("");
  };

  const copyMail = async () => {
    await navigator.clipboard?.writeText("m.dag0524@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const navItems = tr
    ? [
        ["01", "Ana Sayfa", "#home"],
        ["02", "Sistemler", "#systems"],
        ["03", "Yetenekler", "#stack"],
        ["04", "Deneyim", "#experience"],
        ["05", "İletişim", "#contact"],
      ]
    : [
        ["01", "Home", "#home"],
        ["02", "Systems", "#systems"],
        ["03", "Stack", "#stack"],
        ["04", "Experience", "#experience"],
        ["05", "Contact", "#contact"],
      ];

  const skillGroups = useMemo(
    () => [
      {
        title: tr ? "Security Engineering" : "Security Engineering",
        icon: Shield,
        items: [
          "Sysmon",
          "Windows Internals",
          "Threat Hunting",
          "PE Analysis",
          "EDR Concepts",
        ],
      },
      {
        title: tr ? "Development" : "Development",
        icon: Code2,
        items: ["C#", ".NET", "Python", "Flutter", "Dart"],
      },
      {
        title: tr ? "Data & Systems" : "Data & Systems",
        icon: Database,
        items: [
          "SQLite",
          "Firebase",
          "Hashing",
          "Telemetry",
          "Event Pipelines",
        ],
      },
    ],
    [tr],
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#05070a] text-white selection:bg-emerald-400/20 selection:text-emerald-200">
      <GridNoise />
      <RadarCanvas />

      <div className="pointer-events-none fixed left-1/2 top-[-12rem] z-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[150px]" />
      <div className="pointer-events-none fixed bottom-[-16rem] right-[-10rem] z-0 h-[34rem] w-[34rem] rounded-full bg-sky-500/10 blur-[160px]" />

      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#05070a]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="relative grid size-9 place-items-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06]">
              <Shield className="size-4 text-emerald-300" />
              <span className="absolute -right-0.5 -top-0.5 size-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_#6ee7b7]" />
            </div>
            <div>
              <div className="font-mono text-xs font-bold tracking-[0.22em] text-zinc-100">
                DAGSEC
              </div>
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">
                security engineering
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map(([index, label, href]) => (
              <a
                key={href}
                href={href}
                className="group rounded-xl px-3 py-2 font-mono text-[11px] text-zinc-500 transition hover:bg-white/[0.04] hover:text-white"
              >
                <span className="mr-2 text-emerald-400/60 group-hover:text-emerald-300">
                  {index}
                </span>
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang((value) => (value === "tr" ? "en" : "tr"))}
              className="hidden items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2 font-mono text-[10px] text-zinc-400 transition hover:border-emerald-400/20 hover:text-white sm:flex"
              aria-label="Toggle language"
            >
              <Radio className="size-3 text-emerald-300" />
              {tr ? "EN" : "TR"}
            </button>

            <button
              onClick={() => setMenuOpen((value) => !value)}
              className="grid size-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-300 md:hidden"
            >
              {menuOpen ? (
                <X className="size-4" />
              ) : (
                <Menu className="size-4" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/[0.06] px-5 py-3 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col">
              {navItems.map(([index, label, href]) => (
                <a
                  key={href}
                  onClick={() => setMenuOpen(false)}
                  href={href}
                  className="flex items-center justify-between border-b border-white/[0.05] py-4 font-mono text-xs text-zinc-400"
                >
                  <span>
                    <span className="mr-3 text-emerald-400">{index}</span>
                    {label}
                  </span>
                  <ChevronRight className="size-4" />
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <section
          id="home"
          className="grid min-h-[88vh] items-center py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10"
        >
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-300">
              <span className="size-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_#6ee7b7]" />
              {tr
                ? "Savunma mühendisliği / Bursa"
                : "Defense engineering / Bursa"}
            </div>

            <div className="max-w-4xl">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">
                {tr ? "Merhaba, ben" : "Hello, I'm"}
              </p>
              <h1 className="mt-3 text-6xl font-black tracking-[-0.06em] text-white sm:text-8xl xl:text-[7rem]">
                Mustafa{" "}
                <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300 bg-clip-text text-transparent">
                  Dağ
                </span>
              </h1>
              <p className="mt-5 max-w-3xl text-xl font-medium leading-relaxed text-zinc-200 sm:text-2xl">
                {tr
                  ? "Uç nokta güvenliği, tehdit tespiti ve savunma otomasyonu üzerine sistemler geliştiriyorum."
                  : "I build systems around endpoint security, threat detection, and defensive automation."}
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
                {tr
                  ? "C#, .NET, Sysmon, Windows Internals, SQLite ve veri odaklı analiz yaklaşımlarını tek bir mühendislik bakışında birleştiriyorum."
                  : "I combine C#, .NET, Sysmon, Windows Internals, SQLite, and data-driven analysis into practical security systems."}
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={runSimulation}
                className="group inline-flex items-center gap-2 rounded-2xl bg-emerald-300 px-5 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[#07110d] shadow-[0_0_28px_rgba(52,211,153,0.18)] transition hover:-translate-y-0.5 hover:bg-emerald-200"
              >
                <Play className="size-4 fill-current" />
                {tr ? "Canlı tehdit simülasyonu" : "Run threat simulation"}
                <ArrowUpRight className="size-3.5 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#systems"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/[0.1] bg-white/[0.03] px-5 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-zinc-300 transition hover:border-emerald-400/25 hover:bg-white/[0.05] hover:text-white"
              >
                <Layers3 className="size-4" />
                {tr ? "Sistemleri keşfet" : "Explore systems"}
              </a>
            </div>

            <div className="mt-9 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-4">
              {[
                ["01", tr ? "Endpoint" : "Endpoint"],
                ["02", tr ? "Telemetry" : "Telemetry"],
                ["03", tr ? "Analysis" : "Analysis"],
                ["04", tr ? "Response" : "Response"],
              ].map(([n, label]) => (
                <div key={n} className="bg-[#080b0f]/90 px-4 py-4">
                  <div className="font-mono text-[9px] text-emerald-400">
                    {n}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-zinc-200">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="relative overflow-hidden rounded-[28px] border border-white/[0.1] bg-[#080b0f]/85 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.16),transparent_42%)]" />
              <div className="relative p-5 sm:p-6">
                <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
                  <div className="flex items-center gap-2">
                    <Radar className="size-4 text-emerald-300" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-300">
                      DAGSEC / SOC NODE
                    </span>
                  </div>
                  <span className="flex items-center gap-2 font-mono text-[9px] text-emerald-300">
                    <span className="size-1.5 rounded-full bg-emerald-300" />
                    LIVE
                  </span>
                </div>

                <div className="grid gap-4 py-5 sm:grid-cols-[1fr_0.9fr]">
                  <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-500">
                        Detection
                      </span>
                      <Activity className="size-3.5 text-emerald-300" />
                    </div>
                    <div className="space-y-3">
                      {[
                        ["Telemetry", "ONLINE", "text-emerald-300"],
                        ["Heuristics", "ARMED", "text-sky-300"],
                        ["Hash DB", "SYNCED", "text-purple-300"],
                        ["Response", "READY", "text-amber-300"],
                      ].map(([label, value, color]) => (
                        <div
                          key={label}
                          className="flex items-center justify-between"
                        >
                          <span className="font-mono text-[10px] text-zinc-500">
                            {label}
                          </span>
                          <span
                            className={cn(
                              "font-mono text-[10px] font-semibold",
                              color,
                            )}
                          >
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-500">
                        Signal
                      </span>
                      <Zap className="size-3.5 text-amber-300" />
                    </div>
                    <div className="flex h-28 items-end gap-1">
                      {[
                        26, 44, 38, 62, 51, 77, 48, 69, 55, 83, 58, 72, 61, 92,
                        66, 78,
                      ].map((height, index) => (
                        <div
                          key={index}
                          style={{ height: `${height}%` }}
                          className="flex-1 rounded-t bg-gradient-to-t from-emerald-500/20 to-emerald-300/80"
                        />
                      ))}
                    </div>
                    <div className="mt-3 flex items-center justify-between font-mono text-[9px] text-zinc-600">
                      <span>0s</span>
                      <span>telemetry stream</span>
                      <span>now</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-emerald-300/80">
                        Current posture
                      </p>
                      <p className="mt-1 text-xl font-bold text-white">
                        {tr ? "Savunma hattı aktif" : "Defense posture active"}
                      </p>
                    </div>
                    <Shield className="size-8 text-emerald-300/80" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Sysmon", "PE", "Hash", "SOC"].map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/[0.08] bg-black/20 px-2.5 py-1 font-mono text-[9px] text-zinc-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: ShieldAlert,
                title: tr ? "Detect" : "Detect",
                text: tr
                  ? "Telemetriyi toplar, sinyali ayıklarım."
                  : "Collect telemetry and isolate the signal.",
              },
              {
                icon: Search,
                title: tr ? "Analyze" : "Analyze",
                text: tr
                  ? "Heuristics + fingerprinting ile doğrularım."
                  : "Validate with heuristics and fingerprinting.",
              },
              {
                icon: Lock,
                title: tr ? "Respond" : "Respond",
                text: tr
                  ? "Kararı aksiyona bağlayan savunma akışı."
                  : "Turn the decision into a defensive action.",
              },
            ].map(({ icon: Icon, title, text }, index) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-emerald-400/15"
              >
                <div className="absolute right-5 top-5 font-mono text-[9px] text-zinc-700">
                  0{index + 1}
                </div>
                <div className="mb-8 grid size-11 place-items-center rounded-2xl border border-emerald-300/10 bg-emerald-300/[0.05]">
                  <Icon className="size-5 text-emerald-300" />
                </div>
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="systems" className="scroll-mt-28 py-16 sm:py-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionLabel
              eyebrow="01 / Engineering Showcase"
              title={
                tr
                  ? "Sadece proje listesi değil, sistem hikâyesi."
                  : "Not a project list — an engineering story."
              }
              subtitle={
                tr
                  ? "Projeleri teknoloji isimlerinden çok, hangi problemi nasıl çözdüğümü gösterecek şekilde kurguladım."
                  : "The portfolio is structured around the problems solved, the systems built, and the decisions behind them."
              }
            />
            <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-600">
              <CircleDot className="size-3 text-emerald-300" />
              {projects.length.toString().padStart(2, "0")} SYSTEMS INDEXED
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="space-y-3">
              {projects.map((project) => {
                const Icon = project.icon;
                const active = activeProject === project.id;
                const accentText =
                  project.accent === "emerald"
                    ? "text-emerald-300"
                    : project.accent === "sky"
                      ? "text-sky-300"
                      : project.accent === "amber"
                        ? "text-amber-300"
                        : "text-purple-300";

                return (
                  <button
                    key={project.id}
                    onClick={() => setActiveProject(project.id)}
                    className={cn(
                      "group w-full rounded-2xl border p-4 text-left transition",
                      active
                        ? "border-emerald-300/20 bg-emerald-300/[0.055]"
                        : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.11]",
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={cn(
                          "mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl border bg-black/20",
                          active
                            ? "border-emerald-300/20"
                            : "border-white/[0.06]",
                        )}
                      >
                        <Icon className={cn("size-4", accentText)} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p
                          className={cn(
                            "font-mono text-[9px] tracking-[0.16em]",
                            accentText,
                          )}
                        >
                          {project.eyebrow}
                        </p>
                        <h3 className="mt-1 text-sm font-bold text-white">
                          {project.title}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-xs leading-5 text-zinc-500">
                          {project.short}
                        </p>
                      </div>
                      <ChevronRight
                        className={cn(
                          "mt-1 size-4 shrink-0 text-zinc-700 transition",
                          active && "translate-x-0.5 text-emerald-300",
                        )}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="relative min-h-[460px] overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#080b0f]/90 p-6 sm:p-8">
              <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] size-72 rounded-full bg-emerald-500/10 blur-[90px]" />
              <div className="relative">
                {projects
                  .filter((project) => project.id === activeProject)
                  .map((project) => {
                    const Icon = project.icon;
                    return (
                      <div key={project.id} className="flex h-full flex-col">
                        <div className="flex items-start justify-between gap-5">
                          <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">
                              {project.eyebrow}
                            </p>
                            <h3 className="mt-2 max-w-xl text-3xl font-black tracking-tight text-white sm:text-4xl">
                              {project.title}
                            </h3>
                          </div>
                          <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.06]">
                            <Icon className="size-5 text-emerald-300" />
                          </div>
                        </div>

                        <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                          {project.description}
                        </p>

                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                          {project.bullets.map((bullet) => (
                            <div
                              key={bullet}
                              className="flex gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-3.5"
                            >
                              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-300" />
                              <span className="text-xs leading-5 text-zinc-300">
                                {bullet}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-7 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-lg border border-white/[0.07] bg-black/20 px-2.5 py-1 font-mono text-[9px] text-zinc-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="mt-auto flex flex-wrap gap-3 pt-8">
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.05] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-emerald-300 transition hover:bg-emerald-400/[0.09]"
                          >
                            <ExternalLink className="size-3.5" />
                            {tr ? "Detaylı incele" : "Open details"}
                          </button>
                          <a
                            href="https://github.com/mustafaadag"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-300 transition hover:border-white/[0.14] hover:text-white"
                          >
                            <GitHubMark className="size-3.5" />
                            GitHub
                          </a>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20">
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden rounded-[28px] border border-emerald-400/15 bg-gradient-to-br from-emerald-400/[0.08] to-transparent">
              <div className="border-b border-white/[0.07] px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TerminalIcon className="size-4 text-emerald-300" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-300">
                      dagsec_console
                    </span>
                  </div>
                  <div className="font-mono text-[9px] text-emerald-300">
                    SIMULATION MODE
                  </div>
                </div>
              </div>

              <div
                ref={terminalRef}
                className="h-64 overflow-y-auto bg-black/35 px-6 py-5 font-mono text-[11px] leading-6"
              >
                {terminalLogs.map((log, index) => {
                  const isAlert = /terminated|HIGH|threat|confirmed/i.test(log);
                  const isPrompt = log.startsWith(">");
                  return (
                    <div
                      key={`${log}-${index}`}
                      className={cn(
                        "whitespace-pre-wrap",
                        isAlert
                          ? "text-rose-300"
                          : isPrompt
                            ? "text-white"
                            : "text-zinc-500",
                      )}
                    >
                      {log}
                    </div>
                  );
                })}
                {simulating && (
                  <div className="mt-1 flex items-center gap-2 text-emerald-300">
                    <span className="inline-block size-1.5 animate-pulse rounded-full bg-current" />
                    processing event stream...
                  </div>
                )}
              </div>

              <form
                onSubmit={handleCommand}
                className="flex items-center border-t border-white/[0.07] bg-black/30"
              >
                <span className="px-4 font-mono text-xs text-emerald-300">
                  &gt;
                </span>
                <input
                  value={terminalInput}
                  onChange={(event) => setTerminalInput(event.target.value)}
                  className="min-w-0 flex-1 bg-transparent py-4 pr-4 font-mono text-[11px] text-zinc-100 outline-none placeholder:text-zinc-700"
                  placeholder={
                    tr
                      ? "scan | status | skills | help"
                      : "scan | status | skills | help"
                  }
                />
              </form>
            </div>

            <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-300">
                    quick facts
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">
                    {tr ? "Mühendislik profili" : "Engineering profile"}
                  </h3>
                </div>
                <Fingerprint className="size-5 text-zinc-600" />
              </div>

              <div className="mt-7 divide-y divide-white/[0.06]">
                {[
                  [
                    tr ? "Odak" : "Focus",
                    tr ? "Endpoint Security" : "Endpoint Security",
                  ],
                  [tr ? "Platform" : "Platform", "Windows / .NET"],
                  [
                    tr ? "Yaklaşım" : "Approach",
                    tr
                      ? "Detect → Analyze → Respond"
                      : "Detect → Analyze → Respond",
                  ],
                  [
                    tr ? "Çalışma alanı" : "Workspace",
                    tr
                      ? "Cybersecurity / Software"
                      : "Cybersecurity / Software",
                  ],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 py-4"
                  >
                    <span className="font-mono text-[10px] text-zinc-600">
                      {label}
                    </span>
                    <span className="text-right text-xs font-medium text-zinc-200">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-xl border border-white/[0.06] bg-black/20 px-3 py-3 font-mono text-[9px] text-zinc-500">
                <RefreshCw className="size-3.5 text-emerald-300" />
                {tr
                  ? "Sistem tasarımı sürekli iterasyon halinde."
                  : "Systems evolve through continuous iteration."}
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="scroll-mt-28 py-16 sm:py-24">
          <SectionLabel
            eyebrow="02 / Technical Stack"
            title={
              tr
                ? "Teknoloji listesi değil, birbirine bağlanan katmanlar."
                : "Not a list of tools — connected engineering layers."
            }
            subtitle={
              tr
                ? "Güvenlik tarafındaki telemetri, analiz ve müdahale akışını; yazılım ve veri tarafındaki araçlarla birleştiren bir stack."
                : "A stack that connects telemetry, analysis, and response with software and data engineering."
            }
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {skillGroups.map(({ title, icon: Icon, items }) => (
              <div
                key={title}
                className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-xl border border-emerald-400/10 bg-emerald-400/[0.04]">
                    <Icon className="size-4 text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{title}</p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">
                      layer / active
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  {items.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-black/20 px-3 py-3"
                    >
                      <span className="text-xs font-medium text-zinc-200">
                        {item}
                      </span>
                      <span className="font-mono text-[9px] text-zinc-700">
                        0{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-28 py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <SectionLabel
              eyebrow="03 / Experience & Education"
              title={
                tr
                  ? "Savunma odağının arkasındaki yol."
                  : "The path behind the defense focus."
              }
              subtitle={
                tr
                  ? "Staj ve eğitim deneyimlerini tek bir çizgide, teknik gelişim ve üretim mantığı üzerinden konumlandırdım."
                  : "Experience and education framed around technical growth and hands-on system building."
              }
            />

            <div className="relative ml-2 border-l border-white/[0.09] pl-7 sm:pl-10">
              {[
                {
                  period: "2025 — 2026",
                  role: "Cybersecurity Intern",
                  company: "CyberCyte",
                  text: tr
                    ? "Sysmon telemetrisi, EDR ajan prototiplemesi, güvenlik araştırmaları ve dosya analiz pipeline'ları üzerinde çalıştım."
                    : "Worked around Sysmon telemetry, EDR agent prototyping, security research, and file-analysis pipelines.",
                  live: true,
                },
                {
                  period: "2022 — 2023",
                  role: "Software Developer",
                  company: "Maarif Metaverse",
                  text: tr
                    ? "Unity ve C# ile 3D etkileşimli sanal derslik deneyimleri geliştirdim."
                    : "Built interactive 3D virtual classroom experiences with Unity and C#.",
                  live: false,
                },
                {
                  period: "2021 — 2026",
                  role: tr ? "Bilgisayar Mühendisliği" : "Computer Engineering",
                  company: "Karabük Üniversitesi",
                  text: tr
                    ? "Yazılım, sistemler ve güvenlik ekseninde mühendislik temeli."
                    : "Engineering foundation across software, systems, and security.",
                  live: false,
                },
              ].map((item) => (
                <div
                  key={`${item.period}-${item.role}`}
                  className="relative pb-9 last:pb-0"
                >
                  <div
                    className={cn(
                      "absolute -left-[36px] top-1 size-3 rounded-full border-2 bg-[#05070a]",
                      item.live
                        ? "border-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.4)]"
                        : "border-zinc-700",
                    )}
                  />
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600">
                    {item.period}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-bold text-white">
                      {item.role}
                    </h3>
                    <span className="rounded-md border border-white/[0.06] bg-white/[0.025] px-2 py-1 font-mono text-[9px] text-emerald-300">
                      {item.company}
                    </span>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="overflow-hidden rounded-[32px] border border-white/[0.08] bg-gradient-to-br from-emerald-400/[0.09] via-white/[0.02] to-sky-400/[0.06]">
            <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-300">
                  architecture mindset
                </p>
                <h3 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
                  {tr
                    ? "Bir alarmdan, çalışan bir savunma sistemine."
                    : "From one alert to a working defense system."}
                </h3>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                  {tr
                    ? "Portföyün ana fikri bu: tek tek teknolojileri sergilemek yerine, telemetrinin karara; kararın da aksiyona dönüşmesini görünür kılmak."
                    : "The core idea of this portfolio is simple: show how telemetry becomes a decision, and how that decision becomes a defensive action."}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    ["Telemetry", Radio],
                    ["Analysis", Search],
                    ["Validation", CheckCircle2],
                    ["Response", Lock],
                  ].map(([label, Icon]) => (
                    <div
                      key={label as string}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-black/20 px-3 py-2 font-mono text-[10px] text-zinc-300"
                    >
                      {Icon && <Icon className="size-3.5 text-emerald-300" />}
                      {label as string}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/[0.07] bg-black/25 p-5">
                <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                  pipeline map
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    ["01", "Sysmon Event", "signal"],
                    ["02", "PE / Hash Analysis", "analysis"],
                    ["03", "Decision Layer", "verdict"],
                    ["04", "Containment", "response"],
                  ].map(([step, label, type]) => (
                    <div
                      key={step}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
                    >
                      <div className="font-mono text-[9px] text-emerald-300">
                        {step}
                      </div>
                      <div className="size-1.5 rounded-full bg-emerald-300/70" />
                      <div className="flex-1 text-xs font-semibold text-zinc-200">
                        {label}
                      </div>
                      <div className="font-mono text-[8px] uppercase text-zinc-600">
                        {type}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 py-16 sm:py-24">
          <div className="relative overflow-hidden rounded-[32px] border border-emerald-400/15 bg-[#080b0f]/90">
            <div className="pointer-events-none absolute right-0 top-0 size-80 rounded-full bg-emerald-400/10 blur-[100px]" />
            <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-emerald-300">
                  04 / Dispatch
                </p>
                <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-6xl">
                  {tr
                    ? "Bir sistem fikrin varsa, konuşalım."
                    : "Have a system idea? Let's talk."}
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
                  {tr
                    ? "Cybersecurity, endpoint defense, software engineering veya birlikte geliştirebileceğimiz bir ürün fikri için doğrudan ulaşabilirsin."
                    : "Reach out for cybersecurity, endpoint defense, software engineering, or a product idea we can build together."}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:m.dag0524@gmail.com"
                    className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
                  >
                    <Mail className="size-4" />
                    m.dag0524@gmail.com
                  </a>

                  <button
                    onClick={copyMail}
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-300 transition hover:border-white/[0.14] hover:text-white"
                  >
                    {copied ? (
                      <Check className="size-4 text-emerald-300" />
                    ) : (
                      <Send className="size-4" />
                    )}
                    {copied
                      ? tr
                        ? "Kopyalandı"
                        : "Copied"
                      : tr
                        ? "Mail adresini kopyala"
                        : "Copy email"}
                  </button>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  {
                    icon: GitHubMark,
                    label: "GitHub",
                    value: "mustafaadag",
                    href: "https://github.com/mustafaadag",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    value: "Mustafa Dağ",
                    href: "https://www.linkedin.com/in/mustafa-da%C4%9F-63609524a/",
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition hover:-translate-y-0.5 hover:border-emerald-400/15"
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid size-10 place-items-center rounded-xl border border-white/[0.07] bg-black/20">
                        <Icon className="size-4 text-zinc-400 transition group-hover:text-emerald-300" />
                      </div>
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-600">
                          {label}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-zinc-200">
                          {value}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="size-4 text-zinc-700 transition group-hover:text-emerald-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-white/[0.07] py-8 font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-700 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Mustafa Dağ</span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.6)]" />
            {tr
              ? "Defense systems / continuously evolving"
              : "Defense systems / continuously evolving"}
          </span>
        </footer>
      </main>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md">
          <button
            aria-label="Close"
            className="absolute inset-0 cursor-default"
            onClick={() => setSelectedProject(null)}
          />
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[30px] border border-white/[0.1] bg-[#090c11] p-6 shadow-2xl sm:p-8">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 grid size-9 place-items-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-zinc-500 hover:text-white"
            >
              <X className="size-4" />
            </button>

            <div className="pr-10">
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-emerald-300">
                {selectedProject.eyebrow}
              </p>
              <h3 className="mt-2 text-3xl font-black text-white sm:text-4xl">
                {selectedProject.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-zinc-400">
                {selectedProject.description}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {selectedProject.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-300" />
                      <p className="text-sm text-zinc-300">{bullet}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/[0.07] bg-black/20 px-2.5 py-1.5 font-mono text-[9px] text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

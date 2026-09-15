"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Activity,
  ArrowUpRight,
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
  Layers3,
  Lock,
  Mail,
  Menu,
  Play,
  Radio,
  RefreshCw,
  Search,
  Send,
  Shield,
  ShieldAlert,
  Terminal as TerminalIcon,
  X,
  Zap,
  Info,
  AlertOctagon,
  FileCheck2,
  Clock,
  Globe2,
  Eye,
  EyeOff,
} from "lucide-react";

// Lucide içinde bulunmayan ikonlar için SVG bileşenleri
function Linkedin(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="2" r="2" />
    </svg>
  );
}

function Radar(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M19.07 4.93a10 10 0 0 0-14.14 0" />
      <path d="M16.24 7.76a6 6 0 0 0-8.48 0" />
      <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0" />
      <path d="m13.41 10.59 5.66-5.66" />
    </svg>
  );
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

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

type SampleFile = {
  name: string;
  entropy: number;
  signed: boolean;
  hash: string;
  status: "safe" | "suspicious" | "malicious";
  desc: string;
};

const sampleFiles: SampleFile[] = [
  {
    name: "notepad.exe",
    entropy: 4.82,
    signed: true,
    hash: "a4f8d2b901ec...99b2",
    status: "safe",
    desc: "Standart Microsoft PE ikili dosyası. Sıkıştırma yok, dijital imza geçerli.",
  },
  {
    name: "update_patch.dll",
    entropy: 6.94,
    signed: false,
    hash: "7c12f0e4b8ad...110a",
    status: "suspicious",
    desc: "İmzasız dinamik kütüphane. Yüksek entropi: Muhtemel paketlenmiş/şifrelenmiş kod bölümleri.",
  },
  {
    name: "payload_packed.exe",
    entropy: 7.91,
    signed: false,
    hash: "d9e83120cb55...f098",
    status: "malicious",
    desc: "Kritik Shannon Entropisi! UPX/Themida benzeri koruma tespit edildi. VT skoru: 54/72 Zararlı.",
  },
];

export default function Home() {
  const [lang, setLang] = useState<Lang>("tr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");

  // ZİYARETÇİ IP, LOKASYON VE GİZLE/GÖSTER DURUMU
  const [clientIp, setClientIp] = useState<string>("Analyzing...");
  const [clientLocation, setClientLocation] = useState<string>("");
  const [showIp, setShowIp] = useState<boolean>(false); // Varsayılan olarak sansürlü/gizli

  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "DAGSEC // DEFENSE CONSOLE v4.4",
    "Telemetry stream: ONLINE",
    "Sysmon collector: ATTACHED",
    "Scanning inbound network interface...",
  ]);

  const [simulating, setSimulating] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeProject, setActiveProject] = useState("edr");
  const [copied, setCopied] = useState(false);
  const terminalRef = useRef<HTMLDivElement | null>(null);

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [stepExplanation, setStepExplanation] = useState<{
    title: string;
    detail: string;
    tag: string;
  }>({
    title: "Sistem Hazır ve Dinlemede",
    detail:
      "Uç nokta ajanı Sysmon Event ID 1 (Process Create) ve Event ID 3 (Network Connect) çekirdek olaylarını dinliyor.",
    tag: "IDLE / MONITORING",
  });

  const [activeFile, setActiveFile] = useState<SampleFile>(sampleFiles[0]);

  // Canlı Uptime Sayacı
  const [uptime, setUptime] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setUptime((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `00:${m}:${s}`;
  };

  // IP Maskeleme Yardımcısı (örn: 176.234.12.89 -> •••.•••.•••.•••)
  const maskedIp = useMemo(() => {
    if (clientIp === "Analyzing...") return "•••.•••.•••.•••";
    return "•••.•••.•••.•••";
  }, [clientIp]);

  // Ziyaretçinin IP Adresini Çekme (Mobil Hücresel Ağlar Dahil Kesintisiz Çift Zincir)
  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.ip) {
          const ip = data.ip;
          setClientIp(ip);
          setTerminalLogs((prev) => [
            ...prev,
            `[+] [INTERCEPT] Client Node IP: [HIDDEN // PRIVACY GUARD] | Security Check: MONITORED`,
            "Type 'whoami' or toggle the eye button to reveal your remote address.",
            "Threat engine: READY. Type 'scan' or use quick chips below.",
          ]);

          // Arka planda lokasyon sorgusu
          fetch("https://ipapi.co/json/")
            .then((r) => r.json())
            .then((geo) => {
              if (geo && geo.city) {
                setClientLocation(`${geo.city}, ${geo.country_code || ""}`);
              }
            })
            .catch(() => {});
        }
      })
      .catch(() => {
        // Yedek Servis: Cloudflare Trace
        fetch("https://1.1.1.1/cdn-cgi/trace")
          .then((res) => res.text())
          .then((text) => {
            const ipMatch = text.match(/ip=(.+)/);
            const ip = ipMatch ? ipMatch[1].trim() : "127.0.0.1";
            setClientIp(ip);
            setTerminalLogs((prev) => [
              ...prev,
              `[+] [INTERCEPT] Client Node IP: [HIDDEN // PRIVACY GUARD] | Security Check: MONITORED`,
              "Type 'whoami' or toggle the eye button to reveal your remote address.",
              "Threat engine: READY. Type 'scan' or use quick chips below.",
            ]);
          })
          .catch(() => {
            setClientIp("127.0.0.1");
            setTerminalLogs((prev) => [
              ...prev,
              "[+] [INTERCEPT] Client Node IP: 127.0.0.1 (Local Session)",
              "Threat engine: READY. Type 'scan' or use quick chips below.",
            ]);
          });
      });
  }, []);

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
    setCurrentStep(1);

    const steps = [
      {
        log: "[01] [SYSMON TRACE] Event ID 1: svch0st.exe [PID: 5812] created by cmd.exe (Parent: Explorer.exe)",
        expTr: {
          title: "1. Şüpheli Süreç Yakalandı (Sysmon)",
          detail:
            "Sahte bir sistem servisi ('svch0st.exe') cmd.exe tarafından başlatıldı. Gerçek svchost servisleri yalnızca 'services.exe' altından çalışabilir. Süreç soy ağacı anomali olarak işaretlendi.",
          tag: "PROCESS_ANOMALY",
        },
        expEn: {
          title: "1. Suspicious Process Spawned",
          detail:
            "A spoofed system service ('svch0st.exe') was executed via cmd.exe. Authentic svchost binaries only originate from services.exe. Lineage flagged.",
          tag: "PROCESS_ANOMALY",
        },
      },
      {
        log: "[02] [HEURISTICS] Shannon Section Entropy = 7.91 / 8.00 (Packed / Encrypted payload signal)",
        expTr: {
          title: "2. Sezgisel Entropi Analizi",
          detail:
            "Dosyanın PE başlıkları tarandı. 7.91 skoru, dosyanın içerisindeki kodların şifrelendiğini ve güvenlik yazılımlarından kaçmak için paketlendiğini (packed) kanıtlar.",
          tag: "HIGH_ENTROPY",
        },
        expEn: {
          title: "2. Heuristic Entropy Calculation",
          detail:
            "Inspected binary headers. Score 7.91 indicates cryptographic packing designed to evade signature matching.",
          tag: "HIGH_ENTROPY",
        },
      },
      {
        log: "[03] [INTEL LOOKUP] SQLite Cache: MISS -> Escalating to VirusTotal API... Match: Trojan.Generic.EDR_Evasion",
        expTr: {
          title: "3. Tehdit İstihbaratı ve Doğrulama",
          detail:
            "Dosyanın SHA-256 özeti yerel SQLite veri tabanında bulunamadı. Bulut tehdit istihbaratına sorgu atıldı ve 54 antivirüs motoru tarafından zararlı olarak onaylandı.",
          tag: "INTEL_MATCHED",
        },
        expEn: {
          title: "3. Threat Intel Verification",
          detail:
            "SHA-256 hash was a cache miss. Escalated to cloud intelligence; 54 detection engines confirmed active malicious payload.",
          tag: "INTEL_MATCHED",
        },
      },
      {
        log: "[04] [REMEDIATION] Terminating PID 5812 -> Memory Dumped -> Local SQLite Hash Blacklisted [CONTAINED]",
        expTr: {
          title: "4. Otonom Karantina ve Müdahale",
          detail:
            "Zararlı süreç 4 milisaniyede öldürüldü (Process Terminated). Analiz için bellek dökümü alındı ve hash yerel veri tabanına kalıcı olarak engellenmek üzere yazıldı.",
          tag: "THREAT_NEUTRALIZED",
        },
        expEn: {
          title: "4. Automated Remediation",
          detail:
            "Terminated malicious PID 5812 in 4ms. Forensic memory dump captured, and binary hash was permanently blacklisted into local SQLite.",
          tag: "THREAT_NEUTRALIZED",
        },
      },
    ];

    steps.forEach((step, index) => {
      setTimeout(
        () => {
          setTerminalLogs((current) => [...current, step.log]);
          setCurrentStep(index + 1);
          const selectedExp = tr ? step.expTr : step.expEn;
          setStepExplanation(selectedExp);

          if (index === steps.length - 1) {
            setSimulating(false);
          }
        },
        900 * (index + 1),
      );
    });
  };

  const handleCommand = (event: React.FormEvent) => {
    event.preventDefault();
    executeCommand(terminalInput);
    setTerminalInput("");
  };

  const executeCommand = (inputStr: string) => {
    const cmd = inputStr.trim().toLowerCase();
    if (!cmd) return;

    setTerminalLogs((current) => [...current, `> ${cmd}`]);

    if (cmd === "scan") {
      runSimulation();
    } else if (cmd === "status") {
      setTerminalLogs((current) => [
        ...current,
        `Engine: ONLINE | Telemetry: LIVE | Inbound Client: ${showIp ? clientIp : maskedIp} | Status: ARMED`,
      ]);
    } else if (cmd === "skills") {
      setTerminalLogs((current) => [
        ...current,
        "Stack: C# / .NET / Sysmon Telemetry / Windows Internals / Python / SQLite",
      ]);
    } else if (cmd === "entropy") {
      setTerminalLogs((current) => [
        ...current,
        "Entropy Engine: Shannon section calculator active. Critical threshold: > 7.00.",
      ]);
    } else if (cmd === "whoami" || cmd === "myip") {
      setShowIp(true);
      setTerminalLogs((current) => [
        ...current,
        `Remote Node IP: ${clientIp} | Geo: ${clientLocation || "Unknown"} | Traffic: Monitored [UNMASKED]`,
      ]);
    } else if (cmd === "clear") {
      setTerminalLogs([]);
      setCurrentStep(0);
    } else if (cmd === "help") {
      setTerminalLogs((current) => [
        ...current,
        "Commands: scan | status | whoami | entropy | skills | clear",
      ]);
    } else {
      setTerminalLogs((current) => [
        ...current,
        `Unknown command '${cmd}'. Type 'help' or use the quick action buttons below.`,
      ]);
    }
  };

  const copyMail = async () => {
    await navigator.clipboard?.writeText("m.dag0524@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const navItems = tr
    ? [
        ["01", "Ana Sayfa", "#home"],
        ["02", "Canlı SOC & Simülasyon", "#soc-terminal"],
        ["03", "Sistemler", "#systems"],
        ["04", "Sandbox", "#sandbox"],
        ["05", "Yetenekler", "#stack"],
        ["06", "İletişim", "#contact"],
      ]
    : [
        ["01", "Home", "#home"],
        ["02", "Live SOC & Simulator", "#soc-terminal"],
        ["03", "Systems", "#systems"],
        ["04", "Sandbox", "#sandbox"],
        ["05", "Stack", "#stack"],
        ["06", "Contact", "#contact"],
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

      {/* HEADER & NAV */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#05070a]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8 py-3 sm:py-4">
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3">
            <div className="relative grid size-8 sm:size-9 place-items-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06]">
              <Shield className="size-3.5 sm:size-4 text-emerald-300" />
              <span className="absolute -right-0.5 -top-0.5 size-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_#6ee7b7]" />
            </div>
            <div>
              <div className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.22em] text-zinc-100">
                DAGSEC
              </div>
              <div className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-zinc-500 hidden xs:block">
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

          <div className="flex items-center gap-2 sm:gap-3">
            {/* ZİYARETÇİ CANLI IP ROZETİ (GÖZ BUTONLU & SANSÜRLÜ) */}
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.05] font-mono text-[9px] sm:text-[10px] text-zinc-300 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <Globe2 className="size-3 text-emerald-400 animate-pulse shrink-0" />
              <span>
                <span className="text-zinc-500 hidden xs:inline">IP: </span>
                <b className="text-emerald-300 tracking-wider">
                  {showIp ? clientIp : maskedIp}
                </b>
                {showIp && clientLocation && (
                  <span className="text-zinc-400 hidden lg:inline">
                    {" "}
                    ({clientLocation})
                  </span>
                )}
              </span>

              {/* GÖZ / SHOW BUTONU */}
              <button
                onClick={() => setShowIp((prev) => !prev)}
                className="p-1 -mr-1 rounded-md text-zinc-400 hover:text-emerald-300 hover:bg-emerald-400/10 transition cursor-pointer"
                title={showIp ? "IP Adresini Gizle" : "IP Adresini Göster"}
                aria-label="Toggle IP Visibility"
              >
                {showIp ? (
                  <EyeOff className="size-3 text-emerald-400" />
                ) : (
                  <Eye className="size-3 text-zinc-400" />
                )}
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/[0.07] bg-white/[0.02] font-mono text-[10px] text-zinc-400">
              <Clock
                className="size-3 text-emerald-400 animate-spin"
                style={{ animationDuration: "6s" }}
              />
              <span>
                UPTIME: <b className="text-zinc-200">{formatUptime(uptime)}</b>
              </span>
            </div>

            <button
              onClick={() => setLang((value) => (value === "tr" ? "en" : "tr"))}
              className="hidden items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2 font-mono text-[10px] text-zinc-400 transition hover:border-emerald-400/20 hover:text-white sm:flex cursor-pointer"
              aria-label="Toggle language"
            >
              <Radio className="size-3 text-emerald-300" />
              {tr ? "EN" : "TR"}
            </button>

            <button
              onClick={() => setMenuOpen((value) => !value)}
              className="grid size-9 sm:size-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-300 md:hidden cursor-pointer"
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
              <div className="pt-4 flex items-center justify-between font-mono text-xs text-zinc-400">
                <span>Dil / Language</span>
                <button
                  onClick={() => setLang((v) => (v === "tr" ? "en" : "tr"))}
                  className="px-3 py-1 rounded-lg border border-white/[0.08] bg-white/[0.04] text-emerald-300"
                >
                  {tr ? "Switch to English" : "Türkçe'ye Geç"}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-5 pb-24 sm:px-8 space-y-20 sm:space-y-28">
        {/* HERO SECTION */}
        <section
          id="home"
          className="grid min-h-[85vh] items-center py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10"
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
                  ? "C#, .NET, Sysmon, Windows Internals, SQLite ve sezgisel PE entropi analizlerini tek bir otonom savunma hattında buluşturuyorum."
                  : "I combine C#, .NET, Sysmon, Windows Internals, SQLite, and heuristic PE entropy analytics into a unified defensive pipeline."}
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  const soc = document.getElementById("soc-terminal");
                  soc?.scrollIntoView({ behavior: "smooth" });
                  runSimulation();
                }}
                className="group inline-flex items-center gap-2 rounded-2xl bg-emerald-300 px-5 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[#07110d] shadow-[0_0_28px_rgba(52,211,153,0.18)] transition hover:-translate-y-0.5 hover:bg-emerald-200 cursor-pointer"
              >
                <Play className="size-4 fill-current" />
                {tr ? "Canlı Tehdit Simülasyonu" : "Run Threat Simulation"}
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

            {/* Metrik Rozetleri */}
            <div className="mt-9 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-4">
              {[
                ["01", tr ? "Endpoint EDR" : "Endpoint EDR"],
                ["02", tr ? "Sysmon Telemetry" : "Sysmon Telemetry"],
                ["03", tr ? "Entropy Heuristics" : "Entropy Heuristics"],
                ["04", tr ? "Auto Containment" : "Auto Containment"],
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
                    <span className="size-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    LIVE TELEMETRY
                  </span>
                </div>

                <div className="grid gap-4 py-5 sm:grid-cols-[1fr_0.9fr]">
                  <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-500">
                        Agent Health
                      </span>
                      <Activity className="size-3.5 text-emerald-300" />
                    </div>
                    <div className="space-y-3">
                      {[
                        ["Kernel Hooks", "ATTACHED", "text-emerald-300"],
                        ["Sysmon Ingestion", "ACTIVE", "text-sky-300"],
                        ["Entropy Engine", "ARMED", "text-purple-300"],
                        ["Response Mode", "AUTONOMOUS", "text-amber-300"],
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
                        Inbound Ping / Signal
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
                      <span>realtime signal</span>
                      <span>now</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-emerald-300/80">
                        MITRE ATT&CK Alignment
                      </p>
                      <p className="mt-1 text-sm font-bold text-white">
                        {tr ? "Savunulan Teknikler" : "Defended Techniques"}
                      </p>
                    </div>
                    <Shield className="size-6 text-emerald-300/80" />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      { code: "T1059", name: "Command Scripting" },
                      { code: "T1055", name: "Process Injection" },
                      { code: "T1027", name: "Obfuscated Files" },
                      { code: "T1070", name: "Indicator Removal" },
                    ].map((t) => (
                      <span
                        key={t.code}
                        className="rounded-lg border border-white/[0.08] bg-black/30 px-2.5 py-1 font-mono text-[9px] text-zinc-300 flex items-center gap-1.5"
                      >
                        <span className="text-emerald-400">{t.code}</span>
                        <span className="text-zinc-500">|</span>
                        <span>{t.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ŞAŞAALI SOC TERMİNALİ + ADIM AKIŞI + ANLAŞILIR AÇIKLAMA KARTI */}
        <section id="soc-terminal" className="scroll-mt-24 space-y-6">
          <SectionLabel
            eyebrow="02 / SOC Incident Response Simulator"
            title={
              tr
                ? "Canlı Olay Müdahalesi ve Çekirdek Akışı"
                : "Live Incident Response & Kernel Pipeline"
            }
            subtitle={
              tr
                ? "Bir saldırı anında EDR ajanı arka planda tam olarak ne yapar? Terminalden komut verin veya simülasyonu başlatıp anlık açıklamaları takip edin."
                : "What exactly happens during an intrusion? Trigger the simulation or send directives to observe the autonomous remediation loop."
            }
          />

          {/* 4 Aşamalı Görsel Adım İlerlemesi (Pipeline Bar) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {
                num: "01",
                title: tr ? "Olay Yakalama" : "Event Ingestion",
                sub: "Sysmon ID 1",
              },
              {
                num: "02",
                title: tr ? "Sezgisel Tarama" : "Heuristic Scan",
                sub: "Shannon Entropy",
              },
              {
                num: "03",
                title: tr ? "Tehdit Sorgusu" : "Threat Intel",
                sub: "SQLite & VT API",
              },
              {
                num: "04",
                title: tr ? "Otonom Müdahale" : "Remediation",
                sub: "Kill PID & Blacklist",
              },
            ].map((step, idx) => {
              const active = currentStep === idx + 1;
              const passed = currentStep > idx + 1;
              return (
                <div
                  key={step.num}
                  className={cn(
                    "p-4 rounded-2xl border transition-all duration-300",
                    active
                      ? "border-emerald-400/50 bg-emerald-400/[0.08] shadow-[0_0_20px_rgba(52,211,153,0.2)]"
                      : passed
                        ? "border-emerald-500/20 bg-emerald-500/[0.03] text-zinc-400"
                        : "border-white/[0.06] bg-white/[0.02] text-zinc-600",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "font-mono text-xs font-bold",
                        active ? "text-emerald-300" : "text-zinc-500",
                      )}
                    >
                      {step.num}
                    </span>
                    {active && (
                      <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                    )}
                  </div>
                  <div
                    className={cn(
                      "mt-2 text-xs font-bold",
                      active ? "text-white" : "text-zinc-300",
                    )}
                  >
                    {step.title}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 mt-0.5">
                    {step.sub}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            {/* Terminal Konsolu */}
            <div className="overflow-hidden rounded-[28px] border border-emerald-400/20 bg-[#080b0f]/95 shadow-[0_20px_80px_rgba(0,0,0,0.5)] flex flex-col">
              <div className="border-b border-white/[0.07] px-6 py-4 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-2">
                  <TerminalIcon className="size-4 text-emerald-300" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-300">
                    dagsec_terminal_v4.4
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] text-emerald-300 flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    AUTONOMOUS
                  </span>
                </div>
              </div>

              <div
                ref={terminalRef}
                className="h-72 overflow-y-auto bg-black/40 px-6 py-5 font-mono text-[11px] leading-6 space-y-1.5"
              >
                {terminalLogs.map((log, index) => {
                  const isAlert =
                    /terminated|HIGH|CONTAINED|threat|neutralized/i.test(log);
                  const isPrompt = log.startsWith(">");
                  const isSysmon = log.includes("[SYSMON");
                  const isIntercept = log.includes("[INTERCEPT]");
                  return (
                    <div
                      key={`${log}-${index}`}
                      className={cn(
                        "whitespace-pre-wrap font-mono",
                        isAlert
                          ? "text-rose-300 font-semibold bg-rose-950/20 px-2 py-0.5 rounded border border-rose-900/30"
                          : isPrompt
                            ? "text-emerald-300 font-bold"
                            : isIntercept
                              ? "text-amber-300 bg-amber-950/20 px-2 py-0.5 rounded border border-amber-900/30"
                              : isSysmon
                                ? "text-sky-300"
                                : "text-zinc-400",
                      )}
                    >
                      {log}
                    </div>
                  );
                })}
                {simulating && (
                  <div className="mt-1 flex items-center gap-2 text-emerald-300 font-mono text-xs">
                    <span className="inline-block size-1.5 animate-ping rounded-full bg-emerald-400" />
                    processing kernel telemetry stream...
                  </div>
                )}
              </div>

              {/* Hızlı Komut Butonları */}
              <div className="px-6 py-3 border-t border-white/[0.06] bg-black/20 flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono text-zinc-500 mr-2">
                  Hızlı Komut:
                </span>
                <button
                  onClick={() => executeCommand("scan")}
                  className="px-3 py-1 rounded-lg border border-emerald-400/30 bg-emerald-400/[0.06] hover:bg-emerald-400/[0.15] text-emerald-300 font-mono text-[10px] transition cursor-pointer flex items-center gap-1"
                >
                  <Play className="size-2.5 fill-current" /> scan
                </button>
                <button
                  onClick={() => executeCommand("whoami")}
                  className="px-3 py-1 rounded-lg border border-amber-400/30 bg-amber-400/[0.06] hover:bg-amber-400/[0.15] text-amber-300 font-mono text-[10px] transition cursor-pointer"
                >
                  whoami (ip)
                </button>
                <button
                  onClick={() => executeCommand("status")}
                  className="px-3 py-1 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] text-zinc-300 font-mono text-[10px] transition cursor-pointer"
                >
                  status
                </button>
                <button
                  onClick={() => executeCommand("entropy")}
                  className="px-3 py-1 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] text-zinc-300 font-mono text-[10px] transition cursor-pointer"
                >
                  entropy
                </button>
                <button
                  onClick={() => executeCommand("skills")}
                  className="px-3 py-1 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] text-zinc-300 font-mono text-[10px] transition cursor-pointer"
                >
                  skills
                </button>
                <button
                  onClick={() => executeCommand("clear")}
                  className="px-3 py-1 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-rose-500/20 text-zinc-400 hover:text-rose-300 font-mono text-[10px] transition cursor-pointer ml-auto"
                >
                  clear
                </button>
              </div>

              {/* Manuel Girdi Alanı */}
              <form
                onSubmit={handleCommand}
                className="flex items-center border-t border-white/[0.07] bg-black/40"
              >
                <span className="px-5 font-mono text-xs text-emerald-300 select-none">
                  &gt;
                </span>
                <input
                  value={terminalInput}
                  onChange={(event) => setTerminalInput(event.target.value)}
                  className="min-w-0 flex-1 bg-transparent py-4 pr-4 font-mono text-[11px] text-zinc-100 outline-hidden placeholder:text-zinc-700"
                  placeholder={
                    tr
                      ? "Komut girin ('scan', 'whoami', 'status')..."
                      : "Enter directive ('scan', 'whoami')..."
                  }
                />
              </form>
            </div>

            {/* "Burada Ne Oldu?" Açıklama Paneli */}
            <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-2">
                    <Info className="size-4 text-emerald-400" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                      {tr ? "Olay Analizi & Mantığı" : "Incident Breakdown"}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded border border-emerald-400/30 bg-emerald-950/40 text-emerald-300">
                    {stepExplanation.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">
                  {stepExplanation.title}
                </h3>

                <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                  {stepExplanation.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-2">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  {tr ? "Mühendislik Çıkarımı" : "Architectural Insight"}
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed font-mono">
                  {tr
                    ? "İmza tabanlı antivirüslerin kaçırdığı sıfır-gün (zero-day) zararlıları, davranışsal telemetri ve dosya içi rastgelelik (entropi) formülleriyle anında yakalanır."
                    : "Zero-days evading static hashes are contained in milliseconds via behavioral heuristics and Shannon entropy spikes."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJELER / SYSTEMS */}
        <section id="systems" className="scroll-mt-28 space-y-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionLabel
              eyebrow="03 / Engineering Showcase"
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

          <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
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
                      "group w-full rounded-2xl border p-4 text-left transition cursor-pointer",
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
                            className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.05] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-emerald-300 transition hover:bg-emerald-400/[0.09] cursor-pointer"
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

        {/* İNTERAKTİF ENTROPİ & DOSYA SANDBOX */}
        <section id="sandbox" className="scroll-mt-28 space-y-6">
          <SectionLabel
            eyebrow="04 / Interactive File Sandbox"
            title={
              tr
                ? "Canlı Shannon Entropi & Triage Laboratuvarı"
                : "Live Shannon Entropy & Triage Lab"
            }
            subtitle={
              tr
                ? "Aşağıdaki örnek dosyalara tıklayarak dosya başlıklarının rastgelelik derecesini (entropi) ve imza durumunu gerçek zamanlı simüle edin."
                : "Select sample binaries below to observe real-time Shannon entropy distribution, signature verification, and heuristic verdicts."
            }
          />

          <div className="p-7 sm:p-8 rounded-[32px] border border-white/[0.08] bg-[#080b0f]/90 space-y-8">
            <div className="flex flex-wrap gap-3">
              {sampleFiles.map((f) => (
                <button
                  key={f.name}
                  onClick={() => setActiveFile(f)}
                  className={cn(
                    "px-4 py-3 rounded-2xl border font-mono text-xs transition cursor-pointer flex items-center gap-2.5",
                    activeFile.name === f.name
                      ? "border-emerald-400/40 bg-emerald-400/[0.08] text-white"
                      : "border-white/[0.07] bg-white/[0.02] text-zinc-400 hover:border-white/[0.12]",
                  )}
                >
                  <FileCode2 className="size-4 text-emerald-400" />
                  <span>{f.name}</span>
                </button>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Entropi Göstergesi */}
              <div className="p-5 rounded-2xl border border-white/[0.06] bg-black/30 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>SHANNON ENTROPY</span>
                  <span className="text-emerald-400 font-bold">
                    {activeFile.entropy} / 8.00
                  </span>
                </div>
                <div className="w-full bg-neutral-900 rounded-full h-3 overflow-hidden border border-white/[0.08]">
                  <div
                    className={cn(
                      "h-full transition-all duration-500 rounded-full",
                      activeFile.entropy > 7.0
                        ? "bg-gradient-to-r from-amber-400 to-red-500"
                        : activeFile.entropy > 6.0
                          ? "bg-gradient-to-r from-teal-400 to-amber-400"
                          : "bg-emerald-400",
                    )}
                    style={{ width: `${(activeFile.entropy / 8) * 100}%` }}
                  />
                </div>
                <div className="text-[10px] font-mono text-zinc-500 flex justify-between">
                  <span>0.00 (Plain)</span>
                  <span>7.00 (Threshold)</span>
                  <span>8.00 (Packed)</span>
                </div>
              </div>

              {/* İmza Doğrulama */}
              <div className="p-5 rounded-2xl border border-white/[0.06] bg-black/30 space-y-2">
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Dijital İmza Doğrulama
                </div>
                <div className="flex items-center gap-2 pt-1">
                  {activeFile.signed ? (
                    <>
                      <FileCheck2 className="size-5 text-emerald-400" />
                      <span className="text-sm font-bold text-white font-mono">
                        VALID (Microsoft Corp.)
                      </span>
                    </>
                  ) : (
                    <>
                      <AlertOctagon className="size-5 text-red-400" />
                      <span className="text-sm font-bold text-red-300 font-mono">
                        UNSIGNED / UNVERIFIED
                      </span>
                    </>
                  )}
                </div>
                <div className="text-[10px] font-mono text-zinc-500 truncate">
                  SHA-256: {activeFile.hash}
                </div>
              </div>

              {/* Triage Kararı */}
              <div className="p-5 rounded-2xl border border-white/[0.06] bg-black/30 space-y-2">
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Heuristik Karar
                </div>
                <div className="pt-1">
                  <span
                    className={cn(
                      "px-3 py-1 rounded-md text-xs font-mono font-bold tracking-wider uppercase border",
                      activeFile.status === "safe"
                        ? "bg-emerald-950/60 border-emerald-700/50 text-emerald-300"
                        : activeFile.status === "suspicious"
                          ? "bg-amber-950/60 border-amber-700/50 text-amber-300"
                          : "bg-red-950/60 border-red-700/50 text-red-300 animate-pulse",
                    )}
                  >
                    {activeFile.status}
                  </span>
                </div>
                <div className="text-[11px] text-zinc-400 pt-1 leading-snug">
                  {activeFile.desc}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TEKNOLOJİ KATMANLARI / STACK */}
        <section id="stack" className="scroll-mt-28 space-y-8">
          <SectionLabel
            eyebrow="05 / Technical Stack"
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

          <div className="grid gap-4 md:grid-cols-3">
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

        {/* DENEYİM & EĞİTİM */}
        <section id="experience" className="scroll-mt-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <SectionLabel
              eyebrow="06 / Experience & Education"
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

        {/* İLETİŞİM / CONTACT */}
        <section id="contact" className="scroll-mt-28">
          <div className="relative overflow-hidden rounded-[32px] border border-emerald-400/15 bg-[#080b0f]/90">
            <div className="pointer-events-none absolute right-0 top-0 size-80 rounded-full bg-emerald-400/10 blur-[100px]" />
            <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-emerald-300">
                  07 / Dispatch
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
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-300 transition hover:border-white/[0.14] hover:text-white cursor-pointer"
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

        {/* FOOTER */}
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

      {/* DETAY MODALI */}
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
              className="absolute right-4 top-4 grid size-9 place-items-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-zinc-500 hover:text-white cursor-pointer"
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

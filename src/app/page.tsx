"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
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
  Layers3,
  Mail,
  Menu,
  Play,
  Radio,
  Send,
  Shield,
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
  Bot,
  Network,
  Layers,
  TrendingDown,
} from "lucide-react";

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
      <rect width="4" height="12" x="9" y="9" />
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
  badge: string;
  eyebrow: string;
  title: string;
  short: string;
  description: string;
  icon: React.ElementType;
  accent: "emerald" | "sky" | "amber" | "purple";
  tags: string[];
  bullets: string[];
};

type SwarmAgent = {
  id: string;
  step: string;
  name: string;
  badge: string;
  action: string;
  desc: string;
  tech: string;
  stat: string;
};

type SampleFile = {
  name: string;
  entropy: number;
  signed: boolean;
  hash: string;
  status: "safe" | "suspicious" | "malicious";
  desc: string;
};

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

export default function Home() {
  const [lang, setLang] = useState<Lang>("tr");
  const tr = lang === "tr";

  const [menuOpen, setMenuOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");

  const [clientIp, setClientIp] = useState<string>("Analyzing...");
  const [clientLocation, setClientLocation] = useState<string>("");
  const [showIp, setShowIp] = useState<boolean>(false);

  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "DAGSEC // DEFENSE CONSOLE v4.4",
    "Telemetry stream: ONLINE",
    "Sysmon collector: ATTACHED",
    "Scanning inbound network interface...",
  ]);

  const [simulating, setSimulating] = useState(false);
  const [activeProject, setActiveProject] = useState("aegis-arcswarm");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );
  const [copied, setCopied] = useState(false);
  const terminalRef = useRef<HTMLDivElement | null>(null);

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAgentId, setSelectedAgentId] = useState<string>("recon");
  const [showMatrixTable, setShowMatrixTable] = useState(false);

  // Canlı Uptime
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

  const maskedIp = "•••.•••.•••.•••";

  // DİNAMİK PROJELER LİSTESİ (TR / EN)
  const projects: Project[] = useMemo(
    () => [
      {
        id: "aegis-arcswarm",
        badge: tr ? "BAŞLICA AR-GE PROJEM" : "FLAGSHIP R&D SYSTEM",
        eyebrow: tr ? "YAPAY ZEKA & OFANSİF SWARM" : "AI & OFFENSIVE SWARM",
        title: tr
          ? "Aegis-ArcSwarm: Otonom Sızma & Çevik Mimari Doğrulama"
          : "Aegis-ArcSwarm: Autonomous Pentest & Agile Architecture Verification",
        short: tr
          ? "Çevik sprintlerde statik testleri tarihe gömen, kod PR aşamasındayken EDR bypass senaryolarını otonom yürüten çoklu yapay zeka ajanı platformu."
          : "Autonomous multi-agent platform verifying architecture against EDR-evading attacks directly inside CI/CD pull requests.",
        description: tr
          ? "2026 siber tehdit ortamında saldırganların sızma sürelerini 27 saniyeye indirmesine karşılık geliştirdiğim Ar-Ge projesi. Hiyerarşik çoklu ajan takımı; pgvector semantik hafızası, Neo4j bilgi grafiği ve aktif çağrı yığını manipülasyonu (LACUNA / BYOUD-Gap) kullanarak sistem mimarisini canlı test eder. Bulgular OWASP Precogly'e aktarılır ve zafiyetli kodun canlıya çıkması GitHub Actions SARIF kapısıyla engellenir."
          : "An R&D system countering autonomous threat actors infiltrating architectures in under 27 seconds. Hierarchical multi-agent swarms leverage pgvector semantic memory, Neo4j attack graphs, and EDR call-stack manipulation (LACUNA / BYOUD-Gap) to validate system design during sprints. Findings sync with OWASP Precogly and block vulnerable merges via GitHub Actions SARIF gates.",
        icon: Network,
        accent: "emerald",
        tags: [
          "Multi-Agent AI",
          "Python",
          "Go",
          "Neo4j",
          "pgvector",
          "EDR Evasion",
          "BYOUD-Gap",
          "OWASP Precogly",
          "SARIF Gate",
        ],
        bullets: tr
          ? [
              "Hiyerarşik Ajan Takımı (Recon, Coder, Exploit, ArchEval)",
              "EDR Çağrı Yığını Tespiti Kaçınması (LACUNA & BYOUD-Gap)",
              "Telemetri Karmaşıklık Saldırıları (TCA) ile DoA Simülasyonu",
              "GitHub Actions & SARIF Kalite Kapısı ile Otonom Bloklama",
            ]
          : [
              "Hierarchical Agent Swarm (Recon, Coder, Exploit, ArchEval)",
              "EDR Call-Stack Evasion (LACUNA & BYOUD-Gap)",
              "Telemetry Complexity Attacks (TCA) inducing DoA state",
              "Autonomous Pull Request Block via GitHub Actions SARIF Gate",
            ],
      },
      {
        id: "edr",
        badge: tr ? "TÜBİTAK 2209-A DESTEKLİ" : "TÜBİTAK 2209-A GRANT",
        eyebrow: tr
          ? "UÇ NOKTA GÜVENLİĞİ / ÇEKİRDEK MOTOR"
          : "ENDPOINT SECURITY / CORE ENGINE",
        title: tr
          ? "Sysmon ve Sezgisel Analiz Tabanlı Hibrit Uç Nokta Savunma Sistemi (EDR)"
          : "Sysmon & Heuristic-Based Hybrid Endpoint Detection and Response (EDR)",
        short: tr
          ? "Şüpheli süreçleri telemetri + Shannon entropi heuristiği + SQLite hash cache zincirinde yakalayan C# savunma ajanı."
          : "C# endpoint security agent inspecting suspicious processes via telemetry, Shannon entropy heuristics, and SQLite hash cache.",
        description: tr
          ? "Windows uç nokta telemetrilerini Sysmon Event Log üzerinden izleyip şüpheli proses davranışlarını analiz eden bir savunma prototipi. PE Shannon entropisi heuristiği, SQLite tabanlı hash önbelleği ve VirusTotal doğrulaması aynı karar hattında birleştirilerek otonom karantina uygulanır."
          : "A Windows defense prototype tracking kernel telemetries via Sysmon Event Logs. Combines PE Shannon entropy heuristics, local SQLite hash caching, and cloud threat intelligence to execute autonomous process containment.",
        icon: Shield,
        accent: "sky",
        tags: [
          "C#",
          ".NET Framework",
          "Sysmon",
          "SQLite",
          "VirusTotal API",
          "Windows Internals",
          "Shannon Entropy",
        ],
        bullets: tr
          ? [
              "Sysmon Event ID 1 / 3 / 7 çekirdek telemetrisi",
              "Shannon entropisi ile PE şifreli anomali tespiti",
              "Yerel hash cache + VirusTotal lookup",
              "4 milisaniyede otonom süreç sonlandırma / remediation",
            ]
          : [
              "Sysmon Event ID 1 / 3 / 7 kernel telemetry ingestion",
              "PE Shannon entropy anomaly detection for packed binaries",
              "High-speed local SQLite cache + VirusTotal API lookup",
              "Autonomous sub-millisecond process remediation & blacklisting",
            ],
      },
      {
        id: "secure-file",
        badge: tr ? "ANALİZ ARACI" : "TRIAGE TOOL",
        eyebrow: tr
          ? "ZARARLI YAZILIM ANALİZİ & PE ADLİ BİLİŞİM"
          : "MALWARE TRIAGE & PE FORENSICS",
        title: "Secure File Inspector",
        short: tr
          ? "Dosyaları imza, hash, metadata ve entropy sinyalleri ile inceleyen hızlı triage pipeline'ı."
          : "Pipeline inspecting binaries via digital signatures, cryptographic hashes, metadata, and section entropy.",
        description: tr
          ? "C# ve SQLite tabanlı dosya analiz uygulaması. Signed durumundan sürüm bilgisine, MD5/SHA1/SHA256 değerlerinden entropy analizine kadar çoklu sinyal toplayarak dosyayı anında sınıflandırır."
          : "C# and SQLite based forensic triage application. Gathers multi-layered signals from Authenticode signatures, compiler versions, and entropy scores to classify binaries rapidly.",
        icon: FileCode2,
        accent: "amber",
        tags: ["C#", "SQLite", "SHA-256", "SigCheck", "PE Analysis"],
        bullets: tr
          ? [
              "İmza / publisher / version metadata denetimi",
              "MD5, SHA1 ve SHA256 fingerprinting",
              "30 günlük lokal analiz cache",
              ".lnk / .url shortcut çözümleme",
            ]
          : [
              "Authenticode digital signature & publisher metadata inspection",
              "MD5, SHA1, and SHA256 cryptographic fingerprinting",
              "30-day local analysis cache engine",
              ".lnk / .url shortcut target resolution",
            ],
      },
      {
        id: "energy",
        badge: tr ? "DONANIM & YAZILIM" : "HARDWARE & IOT",
        eyebrow: tr
          ? "IOT / GERÇEK ZAMANLI TELEMETRİ"
          : "IOT / REAL-TIME TELEMETRY",
        title: tr
          ? "Flutter + ESP32 Canlı Enerji İzleme Paneli"
          : "Flutter + ESP32 Real-Time Energy Telemetry Dashboard",
        short: tr
          ? "Sensör verilerini gerçek zamanlı toplayan ve mobil arayüzde görselleştiren IoT sistemi."
          : "IoT system aggregating voltage and current sensor streams into a real-time mobile dashboard.",
        description: tr
          ? "ESP32 üzerinden akım ve voltaj verilerini alıp Firebase Realtime Database ile senkronize eden, Flutter arayüzünde canlı göstergeler ve anomalileri anlık görünür kılan uçtan uca sistem."
          : "End-to-end telemetry system reading current and voltage metrics via ESP32 microcontrollers, streaming to Firebase Realtime Database, and visualizing metrics on Flutter.",
        icon: Cpu,
        accent: "purple",
        tags: ["Flutter", "Dart", "ESP32", "Firebase", "Realtime Data"],
        bullets: tr
          ? [
              "Canlı akım / voltaj telemetri akışı",
              "Firebase Realtime Database senkronizasyonu",
              "Mobil dashboard ve anomali uyarıları",
              "Donanım üzeri veri filtreleme",
            ]
          : [
              "Real-time voltage and current telemetry streaming",
              "Firebase Realtime Database synchronization",
              "Mobile dashboard with instant anomaly indicators",
              "On-chip hardware signal filtering",
            ],
      },
    ],
    [tr],
  );

  // DİNAMİK AEGIS-ARCSWARM AJANLARI
  const swarmAgents: SwarmAgent[] = useMemo(
    () => [
      {
        id: "recon",
        step: "01",
        name: tr ? "Keşif Ajanı (Recon)" : "Recon Agent",
        badge: "TOPOLOGY & GRAPH",
        action: tr
          ? "Ağ ve Mimari Haritalandırma"
          : "Network & Architecture Mapping",
        desc: tr
          ? "Yazılım mimarisindeki tüm mikroservisleri ve açık API portlarını tarar. Tek başına zararsız görünen yetki zincirlerini Neo4j üzerinde sızma rotasına dönüştürür."
          : "Discovers microservice topology and accessible API endpoints. Correlates seemingly benign privilege chains into deterministic attack paths using Neo4j graph algorithms.",
        tech: "Neo4j Knowledge Graph • NetworkX • Port Discovery",
        stat: tr ? "14 Mikroservis Haritalandı" : "14 Microservices Mapped",
      },
      {
        id: "coder",
        step: "02",
        name: tr ? "Kodlama Ajanı (Coder)" : "Coder Agent",
        badge: "EVASION COMPILER",
        action: tr
          ? "EDR Çağrı Yığını Manipülasyonu"
          : "EDR Call-Stack Manipulation",
        desc: tr
          ? "Sistemde çalışan EDR'ın (Sysmon ID 10) çağrı geçmişi denetimini atlatmak için ntdll belleğindeki 3,913 NOP boşluğunu köprü çerçeve olarak kullanarak tespit edilemeyen stub derler."
          : "Defeats kernel-level stack-walking inspections (Sysmon ID 10) by compiling custom stubs utilizing 3,913 NOP gaps in ntdll.dll as valid bridge frames.",
        tech: "BYOUD-Gap • Stack Walking Bypass • PE Analysis",
        stat: tr ? "Çağrı Yığını Kör Edildi" : "Call-Stack Blinded",
      },
      {
        id: "exploit",
        step: "03",
        name: tr ? "İstismar Ajanı (Pentester)" : "Exploit Agent",
        badge: "TELEMETRY OVERLOAD",
        action: tr
          ? "Telemetri Karmaşıklık Saldırısı (TCA)"
          : "Telemetry Complexity Attack (TCA)",
        desc: tr
          ? "Hedef makinede aşırı derin rekürsif süreç ağaçları üreterek SIEM/Wazuh serileştiricilerini 'Analiz Engelleme' (DoA) durumuna sokar; saldırıyı log ekranlarından tamamen gizler."
          : "Spawns deeply nested recursive process hierarchies causing downstream SIEM/Wazuh serializers to enter Denial-of-Analysis (DoA), blinding analysts from malicious traces.",
        tech: "TCA (Complexity Attack) • Docker Isolation • Evasion",
        stat: tr ? "SIEM 'DoA' Durumuna Sokuldu" : "SIEM Ingestion in DoA",
      },
      {
        id: "archeval",
        step: "04",
        name: tr ? "Mimari Denetim (ArchEval)" : "ArchEval Agent",
        badge: "CI/CD QUALITY GATE",
        action: tr
          ? "Otonom PR Kilitleme & Tehdit Raporu"
          : "Autonomous PR Blocking & Threat Report",
        desc: tr
          ? "Doğrulanan sızma kanıtlarını OWASP Precogly tehdit modeline aktarır. DORA ve ASVS uyumluluk açıkları nedeniyle ilgili Pull Request'i SARIF formatında kilitler."
          : "Translates verified exploits into OWASP Precogly threat models. Locks the corresponding Pull Request via SARIF quality gates due to DORA and ASVS non-compliance.",
        tech: "SARIF Quality Gate • OWASP Precogly • DORA Compliance",
        stat: tr ? "Pull Request #42 Kilitlendi" : "Pull Request #42 Blocked",
      },
    ],
    [tr],
  );

  const activeAgent = useMemo(
    () => swarmAgents.find((a) => a.id === selectedAgentId) || swarmAgents[0],
    [swarmAgents, selectedAgentId],
  );

  const selectedProject = useMemo(
    () => projects.find((p) => p.id === selectedProjectId) || null,
    [projects, selectedProjectId],
  );

  // KARŞILAŞTIRMA MATRİSİ (TABLO 1)
  const comparisonTable = useMemo(
    () => [
      {
        layer: tr ? "Ajan Yapısı" : "Agent Architecture",
        pentest: tr
          ? "Tekil insan-yardımcı şablonu"
          : "Single interactive assistant",
        zen: tr
          ? "Sınırlı durum makinesi (4 faz)"
          : "State machine (Recon/Vuln/Exploit)",
        aegis: tr
          ? "Hiyerarşik Swarm + Otonom Akran Denetimi"
          : "Hierarchical Swarm + Autonomous Peer-Review",
      },
      {
        layer: tr ? "Hafıza & Öğrenim" : "Memory & Knowledge",
        pentest: tr ? "Oturum bazlı düz metin" : "Session-based raw text",
        zen: tr ? "Geçici bellek yönetimi" : "Ephemeral state memory",
        aegis: tr
          ? "pgvector Semantik Bellek + Neo4j Grafı"
          : "pgvector Semantic Memory + Neo4j Attack Graph",
      },
      {
        layer: tr ? "Saldırı Doğrulama" : "Attack Verification",
        pentest: tr
          ? "Doğrulama yok, teorik CLI"
          : "No verification, raw command suggestions",
        zen: tr
          ? "72+ araç ile sınırlı tarama"
          : "Limited tool execution without formal proof",
        aegis: tr
          ? "Asimetrik Üreteç-Doğrulayıcı + Deterministik Kanıt"
          : "Asymmetric Generator-Verifier + Proof Pipeline",
      },
      {
        layer: tr ? "Mimari Entegrasyon" : "Architecture Integration",
        pentest: tr ? "Yok (Manuel konsol)" : "None (Manual copy-paste)",
        zen: tr ? "Yalnızca statik tarama raporu" : "Scan report outputs only",
        aegis: tr
          ? "CI/CD SARIF Kalite Kapısı + Canlı Tehdit Modeli"
          : "CI/CD SARIF Quality Gate + Live Threat Sync",
      },
      {
        layer: tr ? "EDR Kaçınma (Evasion)" : "EDR Evasion",
        pentest: tr ? "Kaçınma yeteneği yok" : "No evasion capabilities",
        zen: tr ? "Statik komut şifreleme" : "Basic obfuscation",
        aegis: tr
          ? "Aktif Çağrı Yığını Manipülasyonu (BYOUD-Gap)"
          : "Active Call-Stack Manipulation (BYOUD-Gap & TCA)",
      },
    ],
    [tr],
  );

  // SANDBOX DOSYA LİSTESİ
  const sampleFiles: SampleFile[] = useMemo(
    () => [
      {
        name: "notepad.exe",
        entropy: 4.82,
        signed: true,
        hash: "a4f8d2b901ec...99b2",
        status: "safe",
        desc: tr
          ? "Standart Microsoft PE ikili dosyası. Sıkıştırma yok, dijital imza geçerli."
          : "Standard Microsoft PE binary. No compression, Authenticode signature is fully valid.",
      },
      {
        name: "update_patch.dll",
        entropy: 6.94,
        signed: false,
        hash: "7c12f0e4b8ad...110a",
        status: "suspicious",
        desc: tr
          ? "İmzasız dinamik kütüphane. Yüksek entropi: Muhtemel paketlenmiş/şifrelenmiş kod bölümleri."
          : "Unsigned DLL library. Elevated Shannon entropy: potential packed or encrypted sections.",
      },
      {
        name: "payload_packed.exe",
        entropy: 7.91,
        signed: false,
        hash: "d9e83120cb55...f098",
        status: "malicious",
        desc: tr
          ? "Kritik Shannon Entropisi! UPX/Themida benzeri koruma tespit edildi. VT skoru: 54/72 Zararlı."
          : "Critical Shannon Entropy! UPX/Themida packer evasion signal detected. Cloud VT score: 54/72 Malicious.",
      },
    ],
    [tr],
  );

  const [activeFile, setActiveFile] = useState<SampleFile>(sampleFiles[0]);

  useEffect(() => {
    setActiveFile(sampleFiles[0]);
  }, [sampleFiles]);

  // EDR ADIM AÇIKLAMALARI
  const stepExplanation = useMemo(() => {
    if (currentStep === 1) {
      return {
        title: tr
          ? "1. Şüpheli Süreç Yakalandı (Sysmon)"
          : "1. Suspicious Process Spawned (Sysmon)",
        detail: tr
          ? "Sahte bir sistem servisi ('svch0st.exe') cmd.exe tarafından başlatıldı. Gerçek svchost servisleri yalnızca 'services.exe' altından çalışabilir. Süreç soy ağacı anomali olarak işaretlendi."
          : "A spoofed system binary ('svch0st.exe') was executed via cmd.exe. Authentic svchost binaries only originate from services.exe. Process lineage flagged as anomalous.",
        tag: "PROCESS_ANOMALY",
      };
    }
    if (currentStep === 2) {
      return {
        title: tr
          ? "2. Sezgisel Entropi Analizi"
          : "2. Heuristic Entropy Calculation",
        detail: tr
          ? "Dosyanın PE başlıkları tarandı. 7.91 skoru, dosyanın içerisindeki kodların şifrelendiğini ve güvenlik yazılımlarından kaçmak için paketlendiğini (packed) kanıtlar."
          : "PE section headers analyzed. Score 7.91 / 8.00 indicates cryptographic packing designed to evade signature matching.",
        tag: "HIGH_ENTROPY",
      };
    }
    if (currentStep === 3) {
      return {
        title: tr
          ? "3. Tehdit İstihbaratı ve Doğrulama"
          : "3. Threat Intel Verification",
        detail: tr
          ? "Dosyanın SHA-256 özeti yerel SQLite veri tabanında bulunamadı. Bulut tehdit istihbaratına sorgu atıldı ve 54 antivirüs motoru tarafından zararlı olarak onaylandı."
          : "SHA-256 hash was a cache miss. Escalated to cloud intelligence; 54 detection engines confirmed active malicious payload.",
        tag: "INTEL_MATCHED",
      };
    }
    if (currentStep === 4) {
      return {
        title: tr
          ? "4. Otonom Karantina ve Müdahale"
          : "4. Automated Remediation",
        detail: tr
          ? "Zararlı süreç 4 milisaniyede öldürüldü (Process Terminated). Analiz için bellek dökümü alındı ve hash yerel veri tabanına kalıcı olarak engellenmek üzere yazıldı."
          : "Terminated malicious PID 5812 in 4ms. Forensic memory dump captured, and binary hash was permanently blacklisted into local SQLite.",
        tag: "THREAT_NEUTRALIZED",
      };
    }
    return {
      title: tr ? "Sistem Hazır ve Dinlemede" : "System Ready & Monitoring",
      detail: tr
        ? "Uç nokta ajanı Sysmon Event ID 1 (Process Create) ve Event ID 3 (Network Connect) çekirdek olaylarını dinliyor."
        : "Endpoint defense engine monitoring Sysmon Event ID 1 (Process Create) and Event ID 3 (Network Connect) events.",
      tag: "IDLE / MONITORING",
    };
  }, [currentStep, tr]);

  // IP YAKALAMA VE FIRESTORE LOGLAMA
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
            "Threat engine: READY. Type 'scan' or use quick action chips below.",
          ]);

          fetch("https://ipapi.co/json/")
            .then((r) => r.json())
            .then((geo) => {
              const loc = `${geo.city || ""}, ${geo.country_code || ""}`;
              if (geo && geo.city) {
                setClientLocation(loc);
              }

              fetch("/api/log-visit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  ip: ip,
                  location: loc,
                  city: geo.city || "Unknown",
                  country: geo.country_name || "Unknown",
                }),
              }).catch(() => {});
            })
            .catch(() => {
              fetch("/api/log-visit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ip: ip, location: "Unknown" }),
              }).catch(() => {});
            });
        }
      })
      .catch(() => {
        fetch("https://1.1.1.1/cdn-cgi/trace")
          .then((res) => res.text())
          .then((text) => {
            const ipMatch = text.match(/ip=(.+)/);
            const ip = ipMatch ? ipMatch[1].trim() : "127.0.0.1";
            setClientIp(ip);
            fetch("/api/log-visit", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ip: ip, location: "Unknown" }),
            }).catch(() => {});
          })
          .catch(() => {
            setClientIp("127.0.0.1");
          });
      });
  }, []);

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
      "[01] [SYSMON TRACE] Event ID 1: svch0st.exe [PID: 5812] created by cmd.exe (Parent: Explorer.exe)",
      "[02] [HEURISTICS] Shannon Section Entropy = 7.91 / 8.00 (Packed / Encrypted payload signal)",
      "[03] [INTEL LOOKUP] SQLite Cache: MISS -> Escalating to VirusTotal API... Match: Trojan.Generic.EDR_Evasion",
      "[04] [REMEDIATION] Terminating PID 5812 -> Memory Dumped -> Local SQLite Hash Blacklisted [CONTAINED]",
    ];

    steps.forEach((step, index) => {
      setTimeout(
        () => {
          setTerminalLogs((current) => [...current, step]);
          setCurrentStep(index + 1);
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
        "Stack: C# / .NET / Sysmon Telemetry / Windows Internals / Python / Go / SQLite",
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
        "Directives: scan | status | whoami | entropy | skills | clear",
      ]);
    } else {
      setTerminalLogs((current) => [
        ...current,
        `Unknown command '${cmd}'. Type 'help' or click the quick action chips below.`,
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
        ["02", "Aegis Swarm Simülatörü", "#aegis-swarm"],
        ["03", "Sysmon EDR Paneli", "#soc-terminal"],
        ["04", "Projelerim", "#my-projects"],
        ["05", "Sandbox", "#sandbox"],
        ["06", "Yetenekler", "#stack"],
        ["07", "İletişim", "#contact"],
      ]
    : [
        ["01", "Home", "#home"],
        ["02", "Aegis Swarm Sim", "#aegis-swarm"],
        ["03", "Sysmon EDR Panel", "#soc-terminal"],
        ["04", "My Projects", "#my-projects"],
        ["05", "Sandbox", "#sandbox"],
        ["06", "Stack", "#stack"],
        ["07", "Contact", "#contact"],
      ];

  const skillGroups = useMemo(
    () => [
      {
        title: tr ? "Otonom Yapay Zeka & Ofansif" : "Autonomous AI & Offensive",
        icon: Bot,
        items: tr
          ? [
              "Çoklu Ajan Swarmları",
              "Neo4j Saldırı Grafı",
              "pgvector Semantik Bellek",
              "EDR Çağrı Yığını Manipülasyonu",
              "Telemetri Karmaşıklığı (TCA)",
            ]
          : [
              "Multi-Agent Swarms",
              "Neo4j Attack Graphs",
              "pgvector Semantic Memory",
              "EDR Call-Stack Evasion",
              "Telemetry Complexity (TCA)",
            ],
      },
      {
        title: tr ? "Güvenlik Mühendisliği" : "Security Engineering",
        icon: Shield,
        items: tr
          ? [
              "Sysmon Telemetrisi",
              "Windows Internals",
              "Tehdit Avcılığı",
              "PE Shannon Entropisi",
              "Otonom Olay Müdahalesi",
            ]
          : [
              "Sysmon Telemetry",
              "Windows Internals",
              "Threat Hunting",
              "PE Shannon Entropy",
              "Autonomous Incident Response",
            ],
      },
      {
        title: tr ? "Yazılım & Sistemler" : "Development & Systems",
        icon: Code2,
        items: [
          "C#",
          ".NET Core/Framework",
          "Python",
          "Go",
          "SQLite",
          "Firebase",
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
                {tr ? "savunma mühendisliği" : "defense engineering"}
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
            {/* ZİYARETÇİ CANLI IP ROZETİ */}
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

              <button
                onClick={() => setShowIp((prev) => !prev)}
                className="p-1 -mr-1 rounded-md text-zinc-400 hover:text-emerald-300 hover:bg-emerald-400/10 transition cursor-pointer"
                title={
                  showIp
                    ? tr
                      ? "IP Adresini Gizle"
                      : "Hide IP Address"
                    : tr
                      ? "IP Adresini Göster"
                      : "Reveal IP Address"
                }
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

            {/* DİL DEĞİŞTİRİCİ BUTON */}
            <button
              onClick={() => setLang((v) => (v === "tr" ? "en" : "tr"))}
              className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2 font-mono text-[10px] text-zinc-300 transition hover:border-emerald-400/30 hover:text-white cursor-pointer"
              aria-label="Toggle language"
            >
              <Radio className="size-3 text-emerald-300" />
              <span className="font-bold">{tr ? "EN" : "TR"}</span>
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
                ? "Savunma & Otonom Güvenlik Mühendisliği"
                : "Defense & Autonomous Security Engineering"}
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
                  ? "Çoklu ajan tabanlı otonom sızma simülasyonları, uç nokta güvenliği (EDR) ve çevik savunma mimarileri tasarlıyorum."
                  : "I build multi-agent autonomous penetration systems, endpoint defense engines (EDR), and agile security architectures."}
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
                {tr
                  ? "Aegis-ArcSwarm otonom yapay zeka ajanlarından Sysmon ve Shannon entropi motorlarına; geliştirdiğim mühendislik projeleriyle saldırı ve savunma zincirini tek bir hatta birleştiriyorum."
                  : "From Aegis-ArcSwarm autonomous multi-agent pipelines to Sysmon heuristics; uniting offensive and defensive engineering into concrete systems."}
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#aegis-swarm"
                className="group inline-flex items-center gap-2 rounded-2xl bg-emerald-300 px-5 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[#07110d] shadow-[0_0_28px_rgba(52,211,153,0.18)] transition hover:-translate-y-0.5 hover:bg-emerald-200"
              >
                <Bot className="size-4" />
                {tr ? "Aegis Swarm Simülasyonu" : "Aegis Swarm Simulation"}
                <ArrowUpRight className="size-3.5 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#my-projects"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/[0.1] bg-white/[0.03] px-5 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-zinc-300 transition hover:border-emerald-400/25 hover:bg-white/[0.05] hover:text-white"
              >
                <Layers3 className="size-4" />
                {tr ? "Tüm Projelerimi İncele" : "Explore My Projects"}
              </a>
            </div>

            <div className="mt-9 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-4">
              {[
                ["01", "Aegis Swarm AI"],
                ["02", "Sysmon EDR"],
                ["03", "Shannon Entropy"],
                ["04", "SARIF CI/CD Gate"],
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
            <div className="relative overflow-hidden rounded-[28px] border border-white/[0.1] bg-[#080b0f]/85 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl p-5 sm:p-6">
              <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
                <div className="flex items-center gap-2">
                  <Radar className="size-4 text-emerald-300" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-300">
                    DAGSEC / SOC NODE
                  </span>
                </div>
                <span className="flex items-center gap-2 font-mono text-[9px] text-emerald-300">
                  <span className="size-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  {tr ? "CANLI TELEMETRİ" : "LIVE TELEMETRY"}
                </span>
              </div>

              <div className="grid gap-4 py-5 sm:grid-cols-[1fr_0.9fr]">
                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-4 space-y-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-500">
                    {tr ? "Sistem Durumları" : "System Status"}
                  </span>
                  {[
                    ["Sysmon Ingestion", "ACTIVE", "text-emerald-300"],
                    ["Entropy Engine", "ARMED", "text-sky-300"],
                    ["Swarm Core", "ONLINE", "text-purple-300"],
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

                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-500">
                      {tr ? "Gelen Sinyal Akışı" : "Inbound Signal Stream"}
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
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-4 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-emerald-300/80">
                    {tr ? "Mühendislik Paradigması" : "Engineering Paradigm"}
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">
                    {tr
                      ? "Teorik Tehditleri Deterministik Kanıtlarla Durdurma"
                      : "Validating Theoretical Threats via Deterministic Proofs"}
                  </p>
                </div>
                <Shield className="size-6 text-emerald-300/80" />
              </div>
            </div>
          </div>
        </section>

        {/* BÖLÜM 1: AEGIS-ARCSWARM ÖZEL ETKİLEŞİMLİ AR-GE SİMÜLATÖRÜ */}
        <section id="aegis-swarm" className="scroll-mt-28 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <SectionLabel
              eyebrow={
                tr ? "02 / Başlıca Ar-Ge Vitrini" : "02 / Flagship R&D Showcase"
              }
              title={
                tr
                  ? "Aegis-ArcSwarm: Çoklu Ajan Otonom Sızma Simülatörü"
                  : "Aegis-ArcSwarm: Multi-Agent Autonomous Pentest Simulator"
              }
              subtitle={
                tr
                  ? "2026 siber tehdit aktörleri sızma süresini 27 saniyeye indirdi. Aegis-ArcSwarm, her kod birleştirmede (Pull Request) çalışan otonom yapay zeka ajanlarıyla mimari açıkları anında kanıtlar."
                  : "Adversaries execute data exfiltration in 27 seconds using AI. Aegis-ArcSwarm validates architecture during code merges via autonomous red-team swarms."
              }
            />
            <div className="flex gap-2">
              <button
                onClick={() => setShowMatrixTable((v) => !v)}
                className="px-3.5 py-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 hover:bg-emerald-400/20 text-emerald-300 font-mono text-[11px] transition cursor-pointer flex items-center gap-1.5"
              >
                <Layers className="size-3.5" />
                {showMatrixTable
                  ? tr
                    ? "Simülasyona Dön"
                    : "Return to Simulation"
                  : tr
                    ? "Sektörel Karşılaştırma (Tablo 1)"
                    : "Platform Comparison (Table 1)"}
              </button>
            </div>
          </div>

          {!showMatrixTable ? (
            <div className="space-y-6">
              {/* Metrik Banner'ı */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="p-4 rounded-2xl border border-white/[0.08] bg-[#080b0f] font-mono">
                  <div className="text-[10px] text-zinc-500 uppercase">
                    {tr ? "Sızma Hızı (Otonom)" : "Attack Time (Autonomous)"}
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-400 mt-1 flex items-center gap-1.5">
                    {tr ? "27 Saniye" : "27 Seconds"}{" "}
                    <TrendingDown className="size-4 text-emerald-400" />
                  </div>
                  <div className="text-[9px] text-zinc-600 mt-0.5">
                    {tr ? "Sektör ortalaması: 48 dk" : "Industry avg: 48 min"}
                  </div>
                </div>

                <div className="p-4 rounded-2xl border border-white/[0.08] bg-[#080b0f] font-mono">
                  <div className="text-[10px] text-zinc-500 uppercase">
                    {tr ? "Ajan Başarı Çarpanı" : "Swarm Success Factor"}
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-sky-400 mt-1">
                    {tr ? "4.3x Daha Yüksek" : "4.3x Higher"}
                  </div>
                  <div className="text-[9px] text-zinc-600 mt-0.5">
                    {tr
                      ? "Tekil LLM modellerine kıyasla"
                      : "Compared to monolithic LLMs"}
                  </div>
                </div>

                <div className="p-4 rounded-2xl border border-white/[0.08] bg-[#080b0f] font-mono">
                  <div className="text-[10px] text-zinc-500 uppercase">
                    {tr ? "EDR Çağrı Yığını" : "EDR Call-Stack"}
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-purple-400 mt-1">
                    BYOUD-Gap
                  </div>
                  <div className="text-[9px] text-zinc-600 mt-0.5">
                    {tr
                      ? "3,913 NOP sled bridge frame"
                      : "3,913 NOP sled bridge frames"}
                  </div>
                </div>

                <div className="p-4 rounded-2xl border border-white/[0.08] bg-[#080b0f] font-mono">
                  <div className="text-[10px] text-zinc-500 uppercase">
                    {tr ? "Kalite Kapısı Durumu" : "Quality Gate Status"}
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-rose-400 mt-1 flex items-center gap-1.5">
                    PR #42 BLOCKED
                  </div>
                  <div className="text-[9px] text-zinc-600 mt-0.5">
                    {tr
                      ? "SARIF raporuyla mühürlendi"
                      : "Sealed via SARIF gate"}
                  </div>
                </div>
              </div>

              {/* 4 Ajanlı İnteraktif İşlem Hattı */}
              <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
                <div className="space-y-3">
                  {swarmAgents.map((ag) => {
                    const isSelected = activeAgent.id === ag.id;
                    return (
                      <button
                        key={ag.id}
                        onClick={() => setSelectedAgentId(ag.id)}
                        className={cn(
                          "w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between",
                          isSelected
                            ? "border-emerald-400/50 bg-emerald-400/[0.09] shadow-[0_0_24px_rgba(52,211,153,0.18)]"
                            : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.14]",
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={cn(
                              "font-mono text-xs font-bold",
                              isSelected ? "text-emerald-300" : "text-zinc-600",
                            )}
                          >
                            {ag.step}
                          </span>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-white">
                                {ag.name}
                              </span>
                              <span className="font-mono text-[9px] px-1.5 py-0.5 rounded border border-white/[0.08] bg-black/40 text-zinc-400">
                                {ag.badge}
                              </span>
                            </div>
                            <div className="text-xs text-zinc-400 mt-0.5">
                              {ag.action}
                            </div>
                          </div>
                        </div>
                        <ChevronRight
                          className={cn(
                            "size-4 text-zinc-600 transition",
                            isSelected && "translate-x-1 text-emerald-400",
                          )}
                        />
                      </button>
                    );
                  })}
                </div>

                <div className="p-6 sm:p-8 rounded-[28px] border border-emerald-400/20 bg-[#080b0f] flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                      <div className="flex items-center gap-2">
                        <Bot className="size-4 text-emerald-400" />
                        <span className="font-mono text-[10px] text-emerald-400 tracking-widest uppercase">
                          {tr
                            ? "Ajan Yürütme Motoru"
                            : "Agent Execution Engine"}
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded border border-emerald-400/30 bg-emerald-950/40 text-emerald-300 font-mono text-[10px]">
                        {activeAgent.stat}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-white">
                      {activeAgent.name}
                    </h3>

                    <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                      {activeAgent.desc}
                    </p>

                    <div className="p-4 rounded-2xl border border-white/[0.07] bg-black/40 space-y-2">
                      <span className="font-mono text-[10px] text-zinc-500 uppercase block">
                        {tr
                          ? "Geliştirdiğim Mimari Çözüm & Teknolojiler"
                          : "Engineered Architectural Pipeline"}
                      </span>
                      <span className="font-mono text-xs text-sky-300 font-bold block">
                        {activeAgent.tech}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[10px] text-zinc-500">
                    <span>
                      {tr
                        ? "Etki Alanı: Çevik Sprint Doğrulaması"
                        : "Impact: Agile Architecture Verification"}
                    </span>
                    <span className="text-emerald-400">
                      {tr
                        ? "Deterministik Kanıt Üretildi"
                        : "Deterministic Proof Generated"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* SEKTÖREL KARŞILAŞTIRMA MATRİSİ (TABLO 1) */
            <div className="rounded-[28px] border border-emerald-400/20 bg-[#080b0f] p-6 overflow-hidden">
              <div className="mb-4">
                <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest">
                  {tr
                    ? "Tablo 1 // Mimari ve Sektörel Karşılaştırma"
                    : "Table 1 // Architectural & Industry Benchmark"}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {tr
                    ? "Mevcut Otonom Platformlar vs Aegis-ArcSwarm"
                    : "Autonomous Offensive Platforms vs Aegis-ArcSwarm"}
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs">
                  <thead className="border-b border-white/[0.08] text-zinc-400 bg-black/40">
                    <tr>
                      <th className="py-3 px-4 font-normal">
                        {tr ? "MİMARİ KATMAN" : "ARCHITECTURAL LAYER"}
                      </th>
                      <th className="py-3 px-4 font-normal text-zinc-500">
                        PentestGPT
                      </th>
                      <th className="py-3 px-4 font-normal text-zinc-500">
                        Zen-AI-Pentest
                      </th>
                      <th className="py-3 px-4 font-normal text-emerald-400">
                        {tr
                          ? "Aegis-ArcSwarm (Projem)"
                          : "Aegis-ArcSwarm (My System)"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {comparisonTable.map((row) => (
                      <tr
                        key={row.layer}
                        className="hover:bg-white/[0.02] transition"
                      >
                        <td className="py-3.5 px-4 font-bold text-zinc-200">
                          {row.layer}
                        </td>
                        <td className="py-3.5 px-4 text-zinc-500">
                          {row.pentest}
                        </td>
                        <td className="py-3.5 px-4 text-zinc-500">{row.zen}</td>
                        <td className="py-3.5 px-4 text-emerald-300 font-semibold bg-emerald-500/[0.03]">
                          {row.aegis}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>

        {/* BÖLÜM 2: SYSMON EDR INCIDENT RESPONSE TERMİNALİ */}
        <section id="soc-terminal" className="scroll-mt-24 space-y-6">
          <SectionLabel
            eyebrow={
              tr
                ? "03 / SOC Incident Response Simulator"
                : "03 / SOC Incident Response Simulator"
            }
            title={
              tr
                ? "Sysmon EDR Canlı Olay Müdahalesi"
                : "Sysmon EDR Live Incident Response"
            }
            subtitle={
              tr
                ? "Geliştirdiğim C# Sysmon EDR ajanının çekirdek seviyesindeki olay yakalama, Shannon entropi analizi ve otonom karantina sürecini test edin."
                : "Inspect my C# Sysmon EDR agent running kernel event ingestion, Shannon entropy heuristics, and automated process containment."
            }
          />

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
            <div className="overflow-hidden rounded-[28px] border border-emerald-400/20 bg-[#080b0f]/95 shadow-[0_20px_80px_rgba(0,0,0,0.5)] flex flex-col">
              <div className="border-b border-white/[0.07] px-6 py-4 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-2">
                  <TerminalIcon className="size-4 text-emerald-300" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-300">
                    dagsec_terminal_v4.4 // SYSMON CORE
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
                    {tr
                      ? "çekirdek telemetri akışı inceleniyor..."
                      : "processing kernel telemetry stream..."}
                  </div>
                )}
              </div>

              <div className="px-6 py-3 border-t border-white/[0.06] bg-black/20 flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono text-zinc-500 mr-2">
                  {tr ? "Hızlı Komut:" : "Quick Directives:"}
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
                  onClick={() => executeCommand("clear")}
                  className="px-3 py-1 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-rose-500/20 text-zinc-400 hover:text-rose-300 font-mono text-[10px] transition cursor-pointer ml-auto"
                >
                  clear
                </button>
              </div>

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
                      : "Enter directive ('scan', 'whoami', 'status')..."
                  }
                />
              </form>
            </div>

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
                    ? "İmza tabanlı antivirüslerin kaçırdığı sıfır-gün zararlıları, davranışsal telemetri ve dosya içi Shannon entropisiyle anında yakalanır."
                    : "Zero-days evading static hashes are contained in milliseconds via behavioral heuristics and Shannon entropy spikes."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BÖLÜM 3: MÜHENDİSLİK PROJELERİM (TÜM PROJELER) */}
        <section id="my-projects" className="scroll-mt-28 space-y-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionLabel
              eyebrow={
                tr
                  ? "04 / Mühendislik Portfolyosu"
                  : "04 / Engineering Portfolio"
              }
              title={tr ? "Mühendislik Projelerim" : "My Engineering Projects"}
              subtitle={
                tr
                  ? "Geliştirdiğim her proje, siber güvenlik ve yazılım mühendisliğinde spesifik bir mimari problemi çözmek üzere tasarlandı."
                  : "Every system I engineer addresses structural bottlenecks across cybersecurity, machine learning, and systems software."
              }
            />
            <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-500">
              <CircleDot className="size-3 text-emerald-400" />
              {projects.length.toString().padStart(2, "0")}{" "}
              {tr ? "PROJE İNDEKSİ" : "SYSTEMS INDEXED"}
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="space-y-3">
              {projects.map((project) => {
                const Icon = project.icon;
                const active = activeProject === project.id;
                return (
                  <button
                    key={project.id}
                    onClick={() => setActiveProject(project.id)}
                    className={cn(
                      "group w-full rounded-2xl border p-4 text-left transition cursor-pointer",
                      active
                        ? "border-emerald-300/30 bg-emerald-300/[0.06]"
                        : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.12]",
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={cn(
                          "mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl border bg-black/30",
                          active
                            ? "border-emerald-400/40 text-emerald-300"
                            : "border-white/[0.06] text-zinc-400",
                        )}
                      >
                        <Icon className="size-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[9px] tracking-wider text-emerald-400 font-bold uppercase">
                            {project.badge}
                          </span>
                        </div>
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
                            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-bold">
                              {project.badge} // {project.eyebrow}
                            </span>
                            <h3 className="mt-2 max-w-xl text-2xl font-black tracking-tight text-white sm:text-3xl">
                              {project.title}
                            </h3>
                          </div>
                          <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06]">
                            <Icon className="size-5 text-emerald-300" />
                          </div>
                        </div>

                        <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
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
                            onClick={() => setSelectedProjectId(project.id)}
                            className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.05] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-emerald-300 transition hover:bg-emerald-400/[0.09] cursor-pointer"
                          >
                            <ExternalLink className="size-3.5" />
                            {tr ? "Detaylı İncele" : "Open details"}
                          </button>
                          <a
                            href="https://github.com/mustafaadag"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-300 transition hover:border-white/[0.14] hover:text-white"
                          >
                            <GitHubMark className="size-3.5" />
                            {tr ? "GitHub Repolarım" : "GitHub Repositories"}
                          </a>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>

        {/* BÖLÜM 4: SANDBOX */}
        <section id="sandbox" className="scroll-mt-28 space-y-6">
          <SectionLabel
            eyebrow={
              tr
                ? "05 / İnteraktif Dosya Sandbox"
                : "05 / Interactive File Sandbox"
            }
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

              <div className="p-5 rounded-2xl border border-white/[0.06] bg-black/30 space-y-2">
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  {tr ? "Dijital İmza Doğrulama" : "Signature Verification"}
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

              <div className="p-5 rounded-2xl border border-white/[0.06] bg-black/30 space-y-2">
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  {tr ? "Heuristik Karar" : "Heuristic Verdict"}
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

        {/* BÖLÜM 5: STACK */}
        <section id="stack" className="scroll-mt-28 space-y-8">
          <SectionLabel
            eyebrow={tr ? "06 / Teknik Yetenekler" : "06 / Technical Stack"}
            title={
              tr
                ? "Teknoloji listesi değil, birbirine bağlanan katmanlar."
                : "Not a list of tools — connected engineering layers."
            }
            subtitle={
              tr
                ? "Güvenlik tarafındaki telemetri, analiz ve müdahale akışını; yazılım ve veri tarafındaki araçlarla birleştiren bir stack."
                : "A stack uniting low-level telemetries, autonomous AI swarms, and data pipelines into production workflows."
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
                      {tr ? "aktif katman" : "active layer"}
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

        {/* BÖLÜM 6: DENEYİM & EĞİTİM */}
        <section id="experience" className="scroll-mt-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <SectionLabel
              eyebrow={
                tr ? "07 / Deneyim & Eğitim" : "07 / Experience & Education"
              }
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
                  role: tr ? "Siber Güvenlik Stajyeri" : "Cybersecurity Intern",
                  company: "CyberCyte",
                  text: tr
                    ? "Sysmon telemetrisi, EDR ajan prototiplemesi, güvenlik araştırmaları ve dosya analiz pipeline'ları üzerinde çalıştım."
                    : "Researched Sysmon telemetries, EDR agent prototyping, browser security analysis, and threat triage pipelines.",
                  live: true,
                },
                {
                  period: "2022 — 2023",
                  role: tr ? "Yazılım Geliştirici" : "Software Developer",
                  company: "Maarif Metaverse",
                  text: tr
                    ? "Unity ve C# ile 3D etkileşimli sanal derslik deneyimleri geliştirdim."
                    : "Engineered interactive 3D virtual classroom simulations using Unity and C#.",
                  live: false,
                },
                {
                  period: "2021 — 2026",
                  role: tr
                    ? "Bilgisayar Mühendisliği"
                    : "Computer Engineering (B.Sc.)",
                  company: "Karabük Üniversitesi",
                  text: tr
                    ? "Yazılım, sistem programlama ve güvenlik ekseninde mühendislik temeli."
                    : "Engineering foundation spanning software, operating systems, and cybersecurity.",
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

        {/* BÖLÜM 7: İLETİŞİM */}
        <section id="contact" className="scroll-mt-28">
          <div className="relative overflow-hidden rounded-[32px] border border-emerald-400/15 bg-[#080b0f]/90">
            <div className="pointer-events-none absolute right-0 top-0 size-80 rounded-full bg-emerald-400/10 blur-[100px]" />
            <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-emerald-300">
                  {tr
                    ? "08 / İletişim & Görevlendirme"
                    : "08 / Dispatch & Contact"}
                </p>
                <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-6xl">
                  {tr
                    ? "Bir sistem fikrin varsa, konuşalım."
                    : "Have a system idea? Let's build."}
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
                  {tr
                    ? "Cybersecurity, otonom yapay zeka sistemleri, uç nokta savunması veya birlikte geliştirebileceğimiz projeler için bana doğrudan ulaşabilirsin."
                    : "Reach out for cybersecurity, multi-agent AI systems, endpoint defense, or engineering collaborations."}
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

        {/* FOOTER & GİZLİ ADMIN LINKİ */}
        <footer className="flex flex-col gap-3 border-t border-white/[0.07] py-8 font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-700 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Mustafa Dağ</span>

          <Link
            href="/soc-admin"
            className="flex items-center gap-2 group transition cursor-pointer hover:text-emerald-300"
            title="SOC Station (Admin)"
          >
            <span className="size-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.6)] group-hover:scale-125 transition-transform" />
            <span>Defense systems / continuously evolving</span>
          </Link>
        </footer>
      </main>

      {/* DETAY MODALI */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md">
          <button
            aria-label="Close"
            className="absolute inset-0 cursor-default"
            onClick={() => setSelectedProjectId(null)}
          />
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[30px] border border-white/[0.1] bg-[#090c11] p-6 shadow-2xl sm:p-8">
            <button
              onClick={() => setSelectedProjectId(null)}
              className="absolute right-4 top-4 grid size-9 place-items-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-zinc-500 hover:text-white cursor-pointer"
            >
              <X className="size-4" />
            </button>

            <div className="pr-10">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-400 font-bold">
                {selectedProject.badge} // {selectedProject.eyebrow}
              </span>
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

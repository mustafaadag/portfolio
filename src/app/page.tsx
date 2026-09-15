"use client";

import { useState } from "react";
import {
  Shield,
  Terminal,
  Cpu,
  Briefcase,
  GraduationCap,
  Languages,
  LineChart,
  ExternalLink,
  ArrowUpRight,
  Mail,
  Layers,
  Activity,
  Send,
  Sparkles,
  CheckCircle2,
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

export default function Home() {
  const [lang, setLang] = useState<"tr" | "en">("tr");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "tr" ? "en" : "tr"));
  };

  const content = {
    tr: {
      badge: "Siber Güvenlik & Sistem Mühendisliği",
      heroTitle: "Mustafa Dağ",
      heroRole: "Endpoint Security Engineer & Software Developer",
      heroDesc:
        "Uç nokta tespiti (EDR), Windows Internals, Sysmon telemetri modelleme ve C# tabanlı yüksek performanslı siber savunma sistemleri geliştiriyorum.",
      stats: [
        { value: "EDR & SOC", label: "Uzmanlık Alanı" },
        { value: "C# / .NET", label: "Çekirdek Dil" },
        { value: "Bursa / Nilüfer", label: "Lokasyon" },
      ],
      ctaContact: "İletişime Geç",
      ctaProjects: "Projeleri İncele",
      aboutTitle: "Hakkımda",
      aboutSubtitle: "Mühendislik Vizyonu",
      aboutText:
        "Karabük Üniversitesi Bilgisayar Mühendisliği mezunuyum. Siber güvenlik odağında; Windows iç mimarisi (Windows Internals), Sysmon telemetrisi üzerinden şüpheli süreçlerin yakalanması, PE başlıkları üzerinde Shannon entropi analizi ve otonom tehdit müdahale mekanizmaları tasarlıyorum. Yazılım geliştirme pratiğimi modern uç nokta güvenliği ve telemetri boru hatlarıyla harmanlıyorum.",
      projectsTitle: "Öne Çıkan Çalışmalar",
      projectsSubtitle: "Bento Portfolyo",
      experienceTitle: "Kariyer & Eğitim",
      experienceSubtitle: "Zaman Çizelgesi",
      skillsTitle: "Yetkinlik Matrisi",
      skillsSubtitle: "Kullandığım Teknolojiler",
      contactTitle: "Bir Fikrin mi Var?",
      contactSubtitle: "Doğrudan İletişim",
      contactDesc:
        "Siber güvenlik mimarileri, sistem mühendisliği veya yazılım iş birlikleri için bana doğrudan ulaşabilirsiniz.",
    },
    en: {
      badge: "Cybersecurity & Systems Engineering",
      heroTitle: "Mustafa Dağ",
      heroRole: "Endpoint Security Engineer & Software Developer",
      heroDesc:
        "Architecting Endpoint Detection & Response (EDR) agents, Windows Internals telemetry pipelines, and resilient C# cyber defense engines.",
      stats: [
        { value: "EDR & SOC", label: "Core Specialty" },
        { value: "C# / .NET", label: "Primary Stack" },
        { value: "Bursa / TR", label: "Location" },
      ],
      ctaContact: "Get in Touch",
      ctaProjects: "Explore Works",
      aboutTitle: "About Me",
      aboutSubtitle: "Engineering Vision",
      aboutText:
        "Computer Engineering graduate from Karabük University. Specialized in Windows Internals, real-time Sysmon event auditing, Shannon entropy calculations across PE binaries, and automated threat mitigation pipelines. Merging disciplined systems development with proactive defensive telemetry.",
      projectsTitle: "Selected Works",
      projectsSubtitle: "Bento Showcase",
      experienceTitle: "Career & Credentials",
      experienceSubtitle: "Timeline",
      skillsTitle: "Core Proficiencies",
      skillsSubtitle: "Tech Stack",
      contactTitle: "Have a Project in Mind?",
      contactSubtitle: "Direct Channel",
      contactDesc:
        "Available for cybersecurity architectures, systems programming, and high-performance software collaborations.",
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#09090b] text-neutral-100 font-sans selection:bg-neutral-800 selection:text-white antialiased relative">
      {/* İnce Minimalist Izgara Arka Planı (Subtle Ambient Glow) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* NAVİGASYON */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[92%] max-w-5xl px-6 py-3.5 rounded-full border border-neutral-800/80 bg-neutral-950/70 backdrop-blur-xl shadow-2xl">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-white flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Mustafa Dağ
        </a>

        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="text-xs text-neutral-400 hover:text-white transition hidden sm:inline-block"
          >
            {lang === "tr" ? "Projeler" : "Projects"}
          </a>
          <a
            href="#about"
            className="text-xs text-neutral-400 hover:text-white transition hidden sm:inline-block"
          >
            {lang === "tr" ? "Hakkımda" : "About"}
          </a>
          <a
            href="#contact"
            className="text-xs text-neutral-400 hover:text-white transition hidden sm:inline-block"
          >
            {lang === "tr" ? "İletişim" : "Contact"}
          </a>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-700/80 bg-neutral-900 text-xs font-mono text-neutral-300 hover:text-white transition cursor-pointer"
          >
            <Languages className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold">{lang === "tr" ? "EN" : "TR"}</span>
          </button>
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-36 sm:pt-44 pb-32 space-y-36">
        {/* HERO SECTION - MODERN & BOLD */}
        <section className="space-y-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs font-mono text-neutral-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            {t.badge}
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white leading-none">
              {t.heroTitle}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-neutral-400 font-light max-w-3xl leading-snug">
              {t.heroRole}
            </p>
          </div>

          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
            {t.heroDesc}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition shadow-lg shadow-white/5"
            >
              <span>{t.ctaContact}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#projects"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-neutral-800 bg-neutral-950/60 text-neutral-300 hover:text-white hover:border-neutral-600 transition text-sm backdrop-blur-md"
            >
              <span>{t.ctaProjects}</span>
            </a>

            <div className="flex items-center gap-2 sm:ml-4 border-l border-neutral-800 pl-4">
              <a
                href="https://github.com/mustafaadag"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white hover:border-neutral-600 transition"
                title="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/mustafa-da%C4%9F-63609524a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white hover:border-neutral-600 transition"
                title="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* İstatistik Göstergesi */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-12 border-t border-neutral-800/80">
            {t.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HAKKIMDA (ÖZET PROFİL) */}
        <section
          id="about"
          className="p-8 sm:p-12 rounded-3xl border border-neutral-800/80 bg-neutral-900/30 backdrop-blur-xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-all duration-700" />
          <div className="relative z-10 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              {t.aboutSubtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {t.aboutTitle}
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-light pt-2 max-w-4xl">
              {t.aboutText}
            </p>
          </div>
        </section>

        {/* BENTO GRID PROJE VİTRİNİ */}
        <section id="projects" className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              {t.projectsSubtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {t.projectsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* BENTO 1: HİBRİT EDR SİSTEMİ (GENİŞ KART) */}
            <div className="md:col-span-2 p-8 sm:p-10 rounded-3xl border border-neutral-800/80 bg-neutral-900/40 backdrop-blur-xl hover:border-neutral-700 transition duration-300 flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-full border border-emerald-900/50 bg-emerald-950/40">
                    Endpoint Security & Agent
                  </span>
                  <Shield className="w-6 h-6 text-neutral-500 group-hover:text-emerald-400 transition" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {lang === "tr"
                    ? "Hibrit EDR & Sezgisel Tehdit Algılama Sistemi"
                    : "Hybrid EDR & Heuristic Threat Detection"}
                </h3>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                  {lang === "tr"
                    ? "Sysmon Event Log telemetrisini gerçek zamanlı dinleyen, PE dosyalarında Shannon Entropi formülüyle paketlenmiş/gizlenmiş kod arayan ve yerel SQLite önbellekli VirusTotal API doğrulaması yapan otonom C# uç nokta güvenlik ajanı."
                    : "A C# endpoint security agent hooking Sysmon telemetry in real-time, executing Shannon entropy heuristics on PE sections to spot packed payloads, backed by local SQLite caching and VirusTotal API."}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-neutral-800/60 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {lang === "tr"
                      ? "Sysmon Event ID 1, 3, 7 Telemetrisi"
                      : "Sysmon Event ID 1, 3, 7 Telemetry"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {lang === "tr"
                      ? "Shannon Entropi Sezgisel Analizi"
                      : "Shannon Entropy Heuristic Engine"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {lang === "tr"
                      ? "SQLite Önbellekleme & VT API"
                      : "SQLite Local Caching & VT API"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {lang === "tr"
                      ? "Otonom Süreç Karantinası"
                      : "Automated Process Remediation"}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "C#",
                  ".NET",
                  "Sysmon",
                  "Windows Internals",
                  "SQLite",
                  "VirusTotal API",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-neutral-400 bg-neutral-950 px-3 py-1 rounded-md border border-neutral-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* BENTO 2: TELEMETRİ BORU HATTI METRİĞİ */}
            <div className="p-8 sm:p-10 rounded-3xl border border-neutral-800/80 bg-neutral-900/40 backdrop-blur-xl hover:border-neutral-700 transition duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-sky-400 px-3 py-1 rounded-full border border-sky-900/50 bg-sky-950/40">
                    Pipeline
                  </span>
                  <Activity className="w-6 h-6 text-neutral-500" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {lang === "tr"
                    ? "Telemetri Boru Hattı"
                    : "Telemetry Pipeline"}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  {lang === "tr"
                    ? "Ham işletim sistemi loglarından başlayıp SOC aksiyonuna uzanan 4 adımlı otonom filtreleme mimarisi."
                    : "4-stage automated pipeline filtering kernel telemetry to targeted SOC responses."}
                </p>
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-300">
                  01. Sysmon Ingestion
                </div>
                <div className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-300">
                  02. Heuristic Entropy Scan
                </div>
                <div className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-300">
                  03. Cloud Threat Query
                </div>
                <div className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-emerald-400">
                  04. Quarantine / Terminate
                </div>
              </div>
            </div>

            {/* BENTO 3: IOT ENERJİ İZLEME PANELİ */}
            <div className="p-8 sm:p-10 rounded-3xl border border-neutral-800/80 bg-neutral-900/40 backdrop-blur-xl hover:border-neutral-700 transition duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-400 px-3 py-1 rounded-full border border-amber-900/50 bg-amber-950/40">
                    IoT & Mobile
                  </span>
                  <Cpu className="w-6 h-6 text-neutral-500" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {lang === "tr"
                    ? "Canlı Enerji İzleme Paneli"
                    : "Realtime Energy Dashboard"}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  {lang === "tr"
                    ? "ESP32 sensör telemetrisini Firebase Realtime DB üzerinden toplayıp Flutter mobil istemcisinde canlı görselleştiren sistem."
                    : "Live telemetry ingestion from ESP32 microcontrollers streaming to Firebase Realtime DB and visualised via Flutter."}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/60">
                {["Flutter", "Dart", "ESP32", "Firebase"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-neutral-400 bg-neutral-950 px-2.5 py-1 rounded-md border border-neutral-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* BENTO 4: PYTHON KONUT FİYAT TAHMİN MODELİ (GENİŞ KART) */}
            <div className="md:col-span-2 p-8 sm:p-10 rounded-3xl border border-neutral-800/80 bg-neutral-900/40 backdrop-blur-xl hover:border-neutral-700 transition duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-purple-400 px-3 py-1 rounded-full border border-purple-900/50 bg-purple-950/40">
                    Machine Learning
                  </span>
                  <LineChart className="w-6 h-6 text-neutral-500" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {lang === "tr"
                    ? "Konut Kira Fiyatı Tahmin & Regresyon Modeli"
                    : "Real Estate Rent Price Estimation Model"}
                </h3>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                  {lang === "tr"
                    ? "Açık kaynaklı konut veri setleri üzerinde aykırı değer filtreleme, özellik mühendisliği (feature scaling) ve istatistiksel regresyon modelleri uygulayarak piyasa manipülasyonlarını tespit eden analitik sistem."
                    : "Heuristic regression pipeline executing outlier elimination, feature scaling, and correlation metrics on real estate datasets to detect market price anomalies."}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/60">
                {[
                  "Python",
                  "Pandas",
                  "Scikit-Learn",
                  "Feature Engineering",
                  "Jupyter",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-neutral-400 bg-neutral-950 px-3 py-1 rounded-md border border-neutral-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DENEYİM & EĞİTİM ZAMAN ÇİZELGESİ */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              {t.experienceSubtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {t.experienceTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* KARİYER */}
            <div className="p-8 sm:p-10 rounded-3xl border border-neutral-800/80 bg-neutral-900/30 backdrop-blur-xl space-y-6">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-emerald-400" />
                {lang === "tr" ? "İş Deneyimi" : "Work Experience"}
              </h3>

              <div className="space-y-8 border-l border-neutral-800 pl-6">
                <div className="relative space-y-2">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-emerald-400 ring-4 ring-[#09090b]" />
                  <span className="text-xs font-mono text-neutral-500">
                    2025 - 2026
                  </span>
                  <h4 className="text-base font-semibold text-white">
                    Cybersecurity Intern
                  </h4>
                  <p className="text-xs font-mono text-emerald-400">
                    Cybercyte
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {lang === "tr"
                      ? "Sysmon log telemetrisi, EDR mimari ajan prototiplemesi, tarayıcı eklenti analizleri ve otonom sızma testi modelleri."
                      : "Sysmon log telemetry, EDR agent prototyping, browser extension audits, and automated penetration testing models."}
                  </p>
                </div>

                <div className="relative space-y-2">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-neutral-600 ring-4 ring-[#09090b]" />
                  <span className="text-xs font-mono text-neutral-500">
                    2022 - 2023
                  </span>
                  <h4 className="text-base font-semibold text-white">
                    Software Developer
                  </h4>
                  <p className="text-xs font-mono text-neutral-400">
                    Maarif Metaverse (Startup)
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {lang === "tr"
                      ? "Unity ve C# altyapısıyla sanal etkileşimli eğitim simülasyonları geliştirilmesi."
                      : "Building 3D interactive virtual learning spaces using Unity and C#."}
                  </p>
                </div>
              </div>
            </div>

            {/* EĞİTİM & DİL */}
            <div className="p-8 sm:p-10 rounded-3xl border border-neutral-800/80 bg-neutral-900/30 backdrop-blur-xl space-y-6">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-sky-400" />
                {lang === "tr" ? "Eğitim & Diller" : "Education & Languages"}
              </h3>

              <div className="space-y-8 border-l border-neutral-800 pl-6">
                <div className="relative space-y-2">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-sky-400 ring-4 ring-[#09090b]" />
                  <span className="text-xs font-mono text-neutral-500">
                    2021 - 2026
                  </span>
                  <h4 className="text-base font-semibold text-white">
                    {lang === "tr"
                      ? "Karabük Üniversitesi"
                      : "Karabük University"}
                  </h4>
                  <p className="text-xs font-mono text-sky-400">
                    {lang === "tr"
                      ? "Bilgisayar Mühendisliği Lisans"
                      : "B.Sc. in Computer Engineering"}
                  </p>
                  <p className="text-xs text-neutral-400">GPA: 2.82</p>
                </div>

                <div className="relative space-y-2">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-neutral-600 ring-4 ring-[#09090b]" />
                  <span className="text-xs font-mono text-neutral-500">
                    2016 - 2020
                  </span>
                  <h4 className="text-base font-semibold text-white">
                    KÜPKÖK 1112 Anadolu Lisesi
                  </h4>
                  <p className="text-xs text-neutral-400 font-mono">
                    {lang === "tr" ? "Lise Diploması" : "High School Diploma"}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs">
                <span className="text-neutral-400 font-medium">
                  {lang === "tr" ? "İngilizce Seviyesi" : "English"}
                </span>
                <span className="font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-900/40">
                  A2 - B1 Technical
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* TEKNOLOJİ & YETKİNLİKLER */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              {t.skillsSubtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {t.skillsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-xs font-mono">
            {[
              { name: "C# & .NET", level: "Advanced" },
              { name: "Sysmon Telemetry", level: "Specialist" },
              { name: "Windows Internals", level: "Intermediate" },
              { name: "EDR Architecture", level: "Advanced" },
              { name: "Python / ML", level: "Intermediate" },
              { name: "Flutter & Dart", level: "Intermediate" },
              { name: "SQLite & SQL", level: "Intermediate" },
              { name: "Threat Hunting", level: "SOC Operations" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-neutral-900/30 border border-neutral-800/80 space-y-1 hover:border-neutral-700 transition"
              >
                <div className="font-semibold text-white">{item.name}</div>
                <div className="text-[11px] text-neutral-500">{item.level}</div>
              </div>
            ))}
          </div>
        </section>

        {/* İLETİŞİM (CONTACT) */}
        <section
          id="contact"
          className="p-8 sm:p-12 rounded-3xl border border-neutral-800/80 bg-neutral-900/40 backdrop-blur-xl space-y-8"
        >
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              {t.contactSubtitle}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {t.contactTitle}
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              {t.contactDesc}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="mailto:m.dag0524@gmail.com"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition"
            >
              <Mail className="w-4 h-4" />
              <span>m.dag0524@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mustafa-da%C4%9F-63609524a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-neutral-800 bg-neutral-950 text-neutral-300 hover:text-white hover:border-neutral-600 transition text-sm"
            >
              <LinkedinIcon />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/mustafaadag"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-neutral-800 bg-neutral-950 text-neutral-300 hover:text-white hover:border-neutral-600 transition text-sm"
            >
              <GithubIcon />
              <span>GitHub</span>
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-12 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} Mustafa Dağ. All rights reserved.
          </div>
          <div>Nilüfer, Bursa / Turkey</div>
        </footer>
      </main>
    </div>
  );
}

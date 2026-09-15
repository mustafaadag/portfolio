"use client";

import { useEffect } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Ziyaretçi oturum süresi ve loglama mekanizması
  useEffect(() => {
    let docId: string | null = null;
    let startTime = Date.now();

    // 1. Ziyaretçi siteye girdiği an log kaydı oluştur ve ID al
    fetch("/api/log-visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.docId) {
          docId = data.docId;
        }
      })
      .catch((err) => console.error("Log kayıt hatası:", err));

    // 2. Her 10 saniyede bir süreyi güncelle (Heartbeat)
    const interval = setInterval(() => {
      if (!docId) return;
      const durationSeconds = Math.floor((Date.now() - startTime) / 1000);

      navigator.sendBeacon(
        "/api/log-visit",
        JSON.stringify({ docId, durationSeconds }),
      );
    }, 10000);

    // 3. Kullanıcı sekmeden ayrıldığında veya kapattığında son süreyi kaydet
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden" && docId) {
        const durationSeconds = Math.floor((Date.now() - startTime) / 1000);
        navigator.sendBeacon(
          "/api/log-visit",
          JSON.stringify({ docId, durationSeconds }),
        );
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (docId) {
        const durationSeconds = Math.floor((Date.now() - startTime) / 1000);
        navigator.sendBeacon(
          "/api/log-visit",
          JSON.stringify({ docId, durationSeconds }),
        );
      }
    };
  }, []);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

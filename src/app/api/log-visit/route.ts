import { NextResponse } from "next/server";
import { db } from "@/firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

export const dynamic = "force-dynamic";

// GET: Admin paneli için tüm logları listeler
export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, "visitor_logs"));
    const logs: any[] = [];

    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();
      let timeSec = 0;
      if (data.timestamp?.seconds) {
        timeSec = data.timestamp.seconds;
      } else if (data.timestamp?.toDate) {
        timeSec = Math.floor(data.timestamp.toDate().getTime() / 1000);
      }

      logs.push({
        id: docSnap.id,
        ip: data.ip || "127.0.0.1",
        city: data.city || "",
        country: data.country || "",
        location: data.location || "Bilinmiyor",
        userAgent: data.userAgent || "Belirtilmemiş",
        durationSeconds:
          typeof data.durationSeconds === "number" ? data.durationSeconds : 0,
        timeSec,
      });
    });

    logs.sort((a, b) => b.timeSec - a.timeSec);
    return NextResponse.json({ success: true, logs });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

// POST: Yeni ziyaretçi ekler VEYA mevcut oturumun süresini günceller
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));

    // Eğer süreyi güncellemek için docId gönderildiyse
    if (body.docId && typeof body.durationSeconds === "number") {
      const docRef = doc(db, "visitor_logs", body.docId);
      await updateDoc(docRef, {
        durationSeconds: Math.floor(body.durationSeconds),
      });
      return NextResponse.json({ success: true, updated: true });
    }

    // Yeni ziyaretçi kaydı
    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const headerIp = forwardedFor ? forwardedFor.split(",")[0].trim() : realIp;

    const ip = body.ip || headerIp || "127.0.0.1";
    const userAgent = request.headers.get("user-agent") || "unknown";

    const docRef = await addDoc(collection(db, "visitor_logs"), {
      ip,
      location: body.location || "Unknown",
      city: body.city || "Unknown",
      country: body.country || "Unknown",
      userAgent,
      durationSeconds: 0,
      timestamp: serverTimestamp(),
    });

    return NextResponse.json({ success: true, docId: docRef.id });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

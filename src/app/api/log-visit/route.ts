import { NextResponse } from "next/server";
import { db } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));

    // 1. İstemciden gelen gerçek IP, yoksa sunucu başlıkları, o da yoksa localhost
    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const headerIp = forwardedFor ? forwardedFor.split(",")[0].trim() : realIp;

    const ip = body.ip || headerIp || "127.0.0.1";
    const userAgent = request.headers.get("user-agent") || "unknown";

    await addDoc(collection(db, "visitor_logs"), {
      ip,
      location: body.location || "Unknown",
      city: body.city || "Unknown",
      country: body.country || "Unknown",
      userAgent,
      timestamp: serverTimestamp(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 },
    );
  }
}

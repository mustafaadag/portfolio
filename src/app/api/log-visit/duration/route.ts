import { NextResponse } from "next/server";
import { db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { docId, durationSeconds } = body;

    if (!docId || typeof durationSeconds !== "number") {
      return NextResponse.json(
        { success: false, error: "Missing parameters" },
        { status: 400 },
      );
    }

    const docRef = doc(db, "visitor_logs", docId);
    await updateDoc(docRef, {
      durationSeconds: Math.floor(durationSeconds),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 },
    );
  }
}

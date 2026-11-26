import { ImageResponse } from "next/og";
import sharp from "sharp";
import path from "node:path";

export const alt = "Aditya Malkar, Applied AI & ML Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const surface = await sharp(path.join(process.cwd(), "public", "work", "gaussian-surface.webp")).resize(600).png().toBuffer();
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "space-between", background: "#101d19", color: "#f5f6ef", padding: 56 }}>
      <div style={{ display: "flex", flexDirection: "column", width: "49%" }}>
        <span style={{ fontSize: 25, color: "#bef47f" }}>APPLIED AI & ML ENGINEER</span>
        <span style={{ fontSize: 96, lineHeight: 1.05, fontWeight: 700, marginTop: 30 }}>Aditya Malkar.</span>
        <span style={{ fontSize: 27, marginTop: 34 }}>adityamalkar.com</span>
      </div>
      <img src={"data:image/png;base64," + surface.toString("base64")} width={535} height={343} alt="" />
    </div>, size
  );
}

import { ImageResponse } from "next/og";

export const alt = "Aditya Malkar — Data Scientist & ML Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(160deg, #0d2530 0%, #07151c 100%)",
          padding: "68px 76px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* chart latitude lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 105 + i * 118,
              height: 1,
              background: "rgba(223,233,228,0.07)",
            }}
          />
        ))}

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              fontSize: 21,
              letterSpacing: 5,
              color: "#d9a441",
              textTransform: "uppercase",
            }}
          >
            Ship&apos;s Log · Entry 001
          </div>
          <div style={{ display: "flex", fontSize: 19, letterSpacing: 3, color: "#8aa3a3" }}>
            40.7440° N, 74.0324° W
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 700,
              color: "#dfe9e4",
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Aditya Malkar
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 46,
              color: "#d9a441",
              marginTop: 10,
              letterSpacing: -1,
            }}
          >
            Data Scientist &amp; ML Engineer
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 27,
              color: "#8aa3a3",
              marginTop: 26,
              maxWidth: 900,
              lineHeight: 1.45,
            }}
          >
            Deep learning models, AI agents, and data pipelines that hold up in open water.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {["M.S. Data Science · Stevens", "AWS Certified ×2", "adityamalkar.com"].map((chip, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                fontSize: 22,
                color: "#dfe9e4",
                border: "1px solid rgba(217,164,65,0.45)",
                borderRadius: 999,
                padding: "11px 24px",
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}

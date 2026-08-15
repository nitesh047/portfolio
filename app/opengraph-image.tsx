import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nitesh Saini — AI/ML Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbfaf8",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 800,
              letterSpacing: -3,
              color: "#12110f",
            }}
          >
            Nitesh Saini
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 32,
              color: "#494845",
              maxWidth: 980,
            }}
          >
            AI/ML Engineer — computer-vision &amp; RAG systems in production
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            fontSize: 24,
            color: "#7260bd",
            fontFamily: "monospace",
          }}
        >
          <div style={{ display: "flex" }}>IIT Delhi &apos;23</div>
          <div style={{ display: "flex", color: "#dfdeda" }}>/</div>
          <div style={{ display: "flex" }}>BIPP, ISB</div>
          <div style={{ display: "flex", color: "#dfdeda" }}>/</div>
          <div style={{ display: "flex" }}>Nature Sci. Data</div>
        </div>
      </div>
    ),
    { ...size }
  );
}

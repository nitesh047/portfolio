import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#12110f",
          borderRadius: 6,
          fontFamily: "monospace",
          fontSize: 20,
          fontWeight: 600,
          color: "#fbfaf8",
        }}
      >
        <div style={{ display: "flex" }}>n</div>
        <div style={{ display: "flex", color: "#7260bd" }}>.</div>
      </div>
    ),
    { ...size }
  );
}

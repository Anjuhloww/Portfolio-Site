import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Angelo Sacco — Healthcare & Finance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          backgroundColor: "#faf9f7",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontFamily: "Georgia, serif",
            color: "#1c1c1c",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Angelo Sacco
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#6b7280",
            lineHeight: 1.5,
            maxWidth: 700,
          }}
        >
          Building AI-powered tools at the intersection of healthcare and
          finance.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 6,
              backgroundColor: "#1c1c1c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#faf9f7",
              fontSize: 16,
              fontFamily: "Georgia, serif",
              fontWeight: 700,
            }}
          >
            AS
          </div>
          <div style={{ fontSize: 18, color: "#6b7280" }}>
            angelo.sacco2002@gmail.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

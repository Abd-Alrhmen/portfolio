import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(ellipse 80% 50% at 30% -10%, rgba(99,102,241,0.4), transparent 60%), #0a0a0b",
          fontFamily: "sans-serif",
          color: "#e6e6e9",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "20px",
            color: "#9aa0a6",
            fontFamily: "monospace",
          }}
        >
          <span style={{ color: "#6366f1" }}>~/</span>
          abdulrahman
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "80px",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
            }}
          >
            {siteConfig.name}.
          </div>
          <div style={{ fontSize: "32px", color: "#9aa0a6", maxWidth: "900px" }}>
            {siteConfig.title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            fontSize: "18px",
            fontFamily: "monospace",
            color: "#9aa0a6",
          }}
        >
          {siteConfig.techStack.slice(0, 5).map((t) => (
            <div
              key={t}
              style={{
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: "999px",
                padding: "8px 16px",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}

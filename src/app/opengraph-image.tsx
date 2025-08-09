import { siteConfig } from "@/config/site.config";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = siteConfig.description;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "linear-gradient(to bottom right, #1e293b, #334155)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 32,
            opacity: 0.8,
            marginBottom: 40,
          }}
        >
          {siteConfig.role}
        </div>
        <div
          style={{
            fontSize: 24,
            textAlign: "center",
            maxWidth: 800,
            opacity: 0.7,
            lineHeight: 1.4,
          }}
        >
          {siteConfig.description}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}

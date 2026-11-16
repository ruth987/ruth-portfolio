import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}: ${site.hero.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// next/og needs TTF/OTF; these are static instances of the site fonts (SIL OFL).
// Cached so the image is prerendered at build time (Cache Components).
async function loadFonts() {
  "use cache";
  const dir = join(process.cwd(), "src/assets/fonts");
  const read = async (file: string) => {
    const buf = await readFile(join(dir, file));
    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer;
  };
  const [fraunces, inter] = await Promise.all([read("Fraunces-Medium.ttf"), read("Inter-Regular.ttf")]);
  return { fraunces, inter };
}

export default async function OpengraphImage() {
  const { fraunces, inter } = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#faf7f2",
          color: "#1b1b1a",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 30, color: "#55524c" }}>
          <div style={{ width: 56, height: 4, background: "#0e5f5b" }} />
          {`${site.name} · ${site.role}, ${site.location}`}
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Fraunces",
            fontSize: 64,
            lineHeight: 1.12,
            maxWidth: 1040,
          }}
        >
          {site.hero.headline}
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#0e5f5b" }}>{site.hero.subline}</div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, style: "normal", weight: 500 },
        { name: "Inter", data: inter, style: "normal", weight: 400 },
      ],
    },
  );
}

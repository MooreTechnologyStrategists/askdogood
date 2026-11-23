import { Action, Section } from "@/components/Experience";
import { useState } from "react";

type Design = {
  id: string;
  name: string;
  type: "hoodie" | "skullcap" | "cap" | "headwrap";
  words: string[];
  garment: string;
  ink: string;
  backdrop: string;
  detail: string;
  artwork?: string;
};

const designs: Design[] = [
  {
    id: "outta-pocket",
    name: "Outta Pocket Hoodie",
    type: "hoodie",
    words: ["OUTTA", "POCKET"],
    garment: "#a6a4a4",
    artwork: "/images/merch/dmv-outta-pocket.webp",
    ink: "#f3e6d1",
    backdrop: "#e5e5e7",
    detail: "DMV expression up front; the DC three-star, two-bar flag is planned for the back.",
  },
  {
    id: "nah-moe",
    name: "Nah Moe Hoodie",
    type: "hoodie",
    words: ["NAH", "MOE"],
    garment: "#073cb2",
    ink: "#fff1c9",
    backdrop: "#dce6f8",
    artwork: "/images/merch/dmv-nah-moe.webp",
    detail: "A hometown phrase, with AskDoGood branding on the finished piece.",
  },
  {
    id: "lunchin-slim",
    name: "Whole Time, You Lunchin' Slim Hoodie",
    type: "hoodie",
    words: ["WHOLE TIME", "YOU LUNCHIN'", "SLIM"],
    garment: "#ca9f70",
    ink: "#7d3a23",
    backdrop: "#efe0cf",
    artwork: "/images/merch/dmv-lunchin-slim.webp",
    detail: "A familiar DMV line, built for a bold streetwear look.",
  },
  {
    id: "pg-pride",
    name: "PG Circle Hoodie",
    type: "hoodie",
    words: ["PG"],
    garment: "#4a2a21",
    ink: "#efb56a",
    backdrop: "#e9dace",
    artwork: "/images/merch/dmv-pg-circle.webp",
    detail: "Oversized PG initials, with a circular design celebrating Prince George's County.",
  },
  {
    id: "blue-logo",
    name: "I Still Make Plans — Powder Blue Hoodie",
    type: "hoodie",
    words: ["I STILL", "MAKE", "PLANS"],
    garment: "#add8e8",
    ink: "#173b66",
    backdrop: "#dce9ef",
    artwork: "/images/merch/dmv-i-still-make-plans.webp",
    detail: "The I Still Make Plans powder-blue front-and-back concept with a dark navy AskDoGood logo.",
  },
  {
    id: "outta-pocket-skullcap",
    name: "Outta Pocket Skull Cap",
    type: "skullcap",
    words: ["OUTTA", "POCKET"],
    garment: "#282c35",
    ink: "#f4e3cb",
    backdrop: "#e4e4e8",
    detail: "Knit headwear concept to match the Outta Pocket drop.",
  },
  {
    id: "nah-moe-baseball",
    name: "Nah Moe Baseball Cap",
    type: "cap",
    words: ["NAH", "MOE"],
    garment: "#143e35",
    ink: "#f4dba8",
    backdrop: "#e7efdc",
    detail: "Everyday baseball-cap concept with matching DMV lettering.",
  },
  {
    id: "lunchin-headwrap",
    name: "Lunchin' Slim Head Wrap",
    type: "headwrap",
    words: ["SLIM"],
    garment: "#172c4c",
    ink: "#f6d5b9",
    backdrop: "#e0eaf0",
    detail: "Women's head-wrap concept to pair with the Lunchin' Slim design.",
  },
  {
    id: "pg-cap",
    name: "PG Circle Cap",
    type: "cap",
    words: ["PG"],
    garment: "#24292a",
    ink: "#e9b466",
    backdrop: "#e8dcd1",
    detail: "A PG-centered cap design with the circular county-inspired treatment.",
  },
];

function DesignPreview({ design }: { design: Design }) {
  const [photoLoaded, setPhotoLoaded] = useState(false);
  const isHoodie = design.type === "hoodie";
  const isWrap = design.type === "headwrap";
  const isBeanie = design.type === "skullcap";
  const lineCount = design.words.length;
  const fontSize = design.id === "blue-logo" ? 38 : lineCount === 3 ? 28 : design.words[0].length > 7 ? 32 : 47;
  return (
    <div className="relative overflow-hidden rounded-xl" style={{ background: design.backdrop }}>
      <svg
        viewBox="0 0 600 580"
        role="img"
        aria-label={"Illustrative " + design.type + " preview for " + design.name + "; not the final product photograph"}
        className="block h-auto w-full"
      >
        <rect x="0" y="0" width="600" height="580" fill={design.backdrop} />
        <circle cx="300" cy="260" r="215" fill="#ffffff" opacity=".22" />
        {isHoodie ? (
          <>
            <path
              d="M213 155 175 171 118 212 63 401 151 426 180 332 184 525 416 525 420 332 449 426 537 401 482 212 425 171 387 155Z"
              fill={design.garment}
              stroke="#000000"
              strokeOpacity=".12"
              strokeWidth="3"
            />
            <path d="M212 161C216 113 249 83 300 82c51 1 84 31 88 79-20 37-48 52-88 52s-68-15-88-52Z" fill={design.garment} stroke="#ffffff" strokeOpacity=".16" strokeWidth="5" />
            <path d="M250 184q50 35 100 0" stroke="#ffffff" strokeOpacity=".18" fill="none" strokeWidth="3" />
            <path d="M281 211v51m38-51v51" stroke={design.ink} strokeOpacity=".45" strokeWidth="3" />
            <path d="M235 432h130l-13 57H248Z" fill="#000000" opacity=".1" />
          </>
        ) : isBeanie ? (
          <>
            <path d="M168 351c-4-94 49-167 132-167s136 73 132 167Z" fill={design.garment} />
            <rect x="145" y="339" width="310" height="82" rx="16" fill={design.garment} stroke="#ffffff" strokeOpacity=".16" strokeWidth="4" />
          </>
        ) : isWrap ? (
          <>
            <path d="M129 374c0-110 71-181 171-181s171 71 171 181l-48 67H177Z" fill={design.garment} />
            <path d="M288 255q-64-51-93-18c-24 28 9 67 94 58q78 9 109-30c23-33-24-62-110-10Z" fill={design.garment} stroke={design.ink} strokeOpacity=".35" strokeWidth="5" />
            <path d="M296 282q-31 74-8 177h72q-45-110-64-177Z" fill={design.garment} stroke={design.ink} strokeOpacity=".25" strokeWidth="4" />
          </>
        ) : (
          <>
            <path d="M161 357c-8-106 55-166 139-166s147 60 139 166Z" fill={design.garment} />
            <path d="M287 359q98-47 203 8c-4 48-102 70-209 41Z" fill={design.garment} stroke="#000000" strokeOpacity=".18" strokeWidth="4" />
            <path d="M164 358h273" stroke="#ffffff" strokeOpacity=".15" strokeWidth="7" />
          </>
        )}
        <g fill={design.ink} textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" letterSpacing="-1">
          {design.words.map((line, idx) => (
            <text
              key={line + idx}
              x="300"
              y={(isHoodie ? 318 : isWrap ? 350 : isBeanie ? 383 : 315) + (idx - (lineCount - 1) / 2) * (fontSize + 2)}
              fontSize={fontSize}
              textLength={line.length > 15 ? 235 : undefined}
              lengthAdjust="spacingAndGlyphs"
            >
              {line}
            </text>
          ))}
        </g>
        {design.id === "pg-pride" || design.id === "pg-cap" ? (
          <circle cx="300" cy={isHoodie ? 310 : 320} r={isHoodie ? 90 : 60} fill="none" stroke={design.ink} strokeWidth="5" strokeDasharray="6 13" />
        ) : null}
        <text x="300" y="554" fill="#263a37" textAnchor="middle" fontSize="16" fontWeight="700" letterSpacing="3">
          ASKDOGOOD • DMV COLLECTION
        </text>
      </svg>
      {design.artwork && (
        <img
          src={design.artwork}
          alt={design.name + " concept mockup"}
          loading="lazy"
          onLoad={() => setPhotoLoaded(true)}
          onError={() => setPhotoLoaded(false)}
          className={"absolute inset-0 h-full w-full object-contain transition-opacity " + (photoLoaded ? "opacity-100" : "opacity-0")}
        />
      )}
      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#173c32]">
        Design preview
      </span>
    </div>
  );
}

export default function DMVStreetwearDrop() {
  return (
    <Section id="dmv-drop" eyebrow="New design collection" title="DMV talk. Everyday style.">
      <p className="adg-lead">
        Outta Pocket. Nah Moe. Whole time, you lunchin' slim. And PG County front and center.
        These are the next AskDoGood streetwear concepts, with matching headwear in the mix.
      </p>
      <div className="mt-6 rounded-xl border border-[#173c32]/15 bg-[#f6f3eb] p-4 text-[#173c32]">
        <strong>Preview collection — not accepting orders yet.</strong>{" "}
        The graphics below are simplified design previews, not the final merchandise mockups.
        Pricing, product photographs, vendor proofs, size availability, and a secure order
        link will be published once production and fulfillment are confirmed.
        The existing original AskDoGood collection remains available below wherever checkout is enabled.
      </div>
      <div className="adg-grid adg-grid-three mt-8">
        {designs.map((design) => (
          <article className="adg-card" key={design.id}>
            <DesignPreview design={design} />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <span className="adg-eyebrow">{design.type === "hoodie" ? "Hoodie" : "Headwear"}</span>
              <span className="rounded-full border border-[#173c32]/20 px-3 py-1 text-xs font-semibold">Coming soon</span>
            </div>
            <h3 className="mt-2">{design.name}</h3>
            <p>{design.detail}</p>
            <div className="mt-4 flex items-center gap-3 border-t pt-3">
              <img
                src="/images/branding/askdogood-logo.png"
                alt="Official AskDoGood logo"
                loading="lazy"
                className="h-10 w-24 object-contain"
              />
              <span className="text-xs">Official AskDoGood brand identity</span>
            </div>
            <div className="mt-4">
              <Action
                href={"/contact?topic=" + encodeURIComponent("DMV merch launch: " + design.name)}
                secondary
              >
                Ask about this drop
              </Action>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

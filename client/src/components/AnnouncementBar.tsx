import { useState } from "react";
export default function AnnouncementBar() {
  const [paused, setPaused] = useState(false);
  if (Date.now() >= Date.parse("2027-01-01T05:00:00Z")) return null;
  const copy = "💥 DCT — HOME OF THE $25 CLASSES • Cloud · AI · Cybersecurity • Self-paced online • $25 per course through Dec. 31, 2026 • Bring your curiosity. Start here →";
  return (
    <aside className="dct-sale-strip" aria-label="DCT year-end course promotion" data-paused={String(paused)}>
      <style>{".dct-sale-strip{display:flex;align-items:center;background:#d9efff;color:#06386a;border-bottom:3px solid #ffdf00;position:relative;z-index:20;font-family:system-ui,sans-serif}.dct-sale-link{flex:1;min-width:0;overflow:hidden;color:#06386a;text-decoration:none;padding:12px 0;font-weight:800}.dct-sale-track{display:flex;width:max-content;animation:dct-sale-scroll 36s linear infinite}.dct-sale-copy{white-space:nowrap;padding:0 36px;font-size:clamp(14px,2vw,17px)}.dct-sale-strip:hover .dct-sale-track,.dct-sale-strip:focus-within .dct-sale-track,.dct-sale-strip[data-paused=\"true\"] .dct-sale-track{animation-play-state:paused}.dct-sale-control{background:#fff;color:#073d79;border:0;border-radius:6px;padding:7px 10px;margin:6px 10px;font:700 12px system-ui;cursor:pointer}.dct-sale-link:focus-visible,.dct-sale-control:focus-visible{outline:3px solid #ffdf00;outline-offset:-3px}@keyframes dct-sale-scroll{to{transform:translateX(-50%)}}@media(prefers-reduced-motion:reduce){.dct-sale-track{animation:none;width:auto}.dct-sale-copy{white-space:normal;padding:0 16px}.dct-sale-copy[aria-hidden=\"true\"]{display:none}.dct-sale-control{display:none}}"}</style>
      <a className="dct-sale-link" href="https://thedopecloudteacher.org/hub/enroll.html?utm_source=askdogood&utm_medium=announcement&utm_campaign=year_end_25">
        <span className="dct-sale-track"><span className="dct-sale-copy">{copy}</span><span className="dct-sale-copy" aria-hidden="true">{copy}</span></span>
      </a>
      <button type="button" className="dct-sale-control" aria-pressed={paused} aria-label={paused ? "Resume scrolling announcement" : "Pause scrolling announcement"} onClick={() => setPaused(!paused)}>{paused ? "Play" : "Pause"}</button>
    </aside>
  );
}

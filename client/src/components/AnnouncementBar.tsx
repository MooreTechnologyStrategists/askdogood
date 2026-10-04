import { useState } from "react";
import { Link } from "wouter";
import { X } from "lucide-react";
export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  return visible ? (
    <div className="adg-announcement">
      <div className="container">
        <span>Small steps start here.</span>{" "}
        <Link href="/product/7-day-reset">Explore the $17 reset guide</Link>
        <button
          aria-label="Close announcement"
          onClick={() => setVisible(false)}
        >
          <X size={18} />
        </button>
      </div>
    </div>
  ) : null;
}

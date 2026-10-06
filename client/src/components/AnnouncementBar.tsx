import { useState } from "react";
import { Link } from "wouter";
import { X } from "lucide-react";
export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  return visible ? (
    <div className="adg-announcement">
      <div className="container">
        <span>Good looks good on you.</span>{" "}
        <Link href="/merch">Meet the $29 cream tee</Link>
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

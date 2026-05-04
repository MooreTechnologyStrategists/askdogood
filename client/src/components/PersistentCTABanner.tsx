import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA_BANNER_URL = "https://askdogoodassets.blob.core.windows.net/images/products/thyroid-health-mastery-banner.webp";
const CHECKOUT_URL = "https://your-gumroad-checkout-link"; // TODO: Replace with actual checkout URL from catalogById

const PersistentCTABanner = () => (
  <div className="fixed bottom-0 left-0 w-full z-50 bg-gradient-to-r from-primary/90 to-secondary/90 shadow-2xl flex flex-col md:flex-row items-center justify-between px-4 py-3 md:py-2">
    <div className="flex items-center gap-4">
      <img
        src={CTA_BANNER_URL}
        alt="Thyroid Health Mastery Download"
        className="h-12 w-12 rounded-lg object-cover border-2 border-white shadow-md hidden md:block"
        loading="lazy"
      />
      <span className="text-white font-bold text-lg md:text-xl">
        Download the Thyroid Health Mastery Course – Start Your Reset Today!
      </span>
    </div>
    <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="mt-2 md:mt-0">
      <Button className="rounded-full px-7 py-3 text-base font-bold bg-white text-primary shadow-lg hover:bg-primary hover:text-white transition-all">
        Buy & Download Now
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </a>
  </div>
);

export default PersistentCTABanner;

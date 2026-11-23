import { useState } from "react";
import { TruckIcon, XIcon, ZapIcon } from "lucide-react";

const Banner = () => {
  const [bannerVisible, setBannerVisible] = useState(() => {
    return sessionStorage.getItem("banner_dismissed") !== "true";
  });

  const dismissBanner = () => {
    setBannerVisible(false);
    sessionStorage.setItem("banner_dismissed", "true");
  };

  if (!bannerVisible) return null;

  return (
    <div className="bg-gradient-to-r from-[#071e14] via-[#0f3822] to-[#071e14] text-white text-xs sm:text-sm border-b border-white/10 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center gap-4 sm:gap-8">
        {/* Free Delivery Perk */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex-center shrink-0">
            <TruckIcon className="w-3 h-3 text-emerald-300" />
          </div>
          <span className="font-medium tracking-tight">
            Free delivery on orders above <span className="font-bold text-emerald-300">$20</span>
          </span>
        </div>

        {/* Divider */}
        <span className="hidden sm:inline text-white/25">|</span>

        {/* Fresh Produce Perk */}
        <div className="hidden sm:flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-400/30 flex-center shrink-0">
            <ZapIcon className="w-3 h-3 fill-amber-300 text-amber-300" />
          </div>
          <span className="text-white/90">
            Farm-fresh produce delivered daily
          </span>
        </div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={dismissBanner}
        aria-label="Dismiss banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-white/60 hover:text-white hover:bg-white/15 rounded-full transition-colors focus:outline-none"
      >
        <XIcon className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

export default Banner;

import { ArrowRightIcon, LeafIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { heroSectionData } from "../../assets/assets";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[500px] lg:min-h-[560px] mb-8 rounded-3xl flex items-center border border-[#e8e3d8] shadow-sm">
      {/* Background Hero Image */}
      <img
        src={heroSectionData.hero_image}
        alt="Fresh farm groceries"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Layered Gradient Overlay for Optimal Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071e14] via-[#0f3822]/90 to-transparent sm:to-black/20" />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 w-full animate-fade-in">
        <div className="max-w-xl">
          {/* Farm-Fresh Badge */}
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-400/30 backdrop-blur-md rounded-full mb-5 tracking-wide">
            <LeafIcon className="w-3.5 h-3.5 text-emerald-400" />
            100% Farm-Fresh & Organic
          </span>

          {/* Headline with Editorial Serif */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.12] tracking-tight mb-5">
            Nourish your home with{" "}
            <span className="font-serif italic text-emerald-300 font-normal block sm:inline">
              Earth's finest.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-md">
            {heroSectionData.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              to="/products"
              className="btn-accent !rounded-full !px-8 !py-3.5 flex items-center gap-2"
            >
              <span>Shop Now</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>

            <Link
              to="/products"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-md border border-white/20 transition-all active:scale-[0.98]"
            >
              Browse All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

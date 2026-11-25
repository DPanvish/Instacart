import { appPromoBannerData, assets } from "../../assets/assets";
import { SparklesIcon } from "lucide-react";

const AppPromoBanner = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl my-10 sm:my-16 bg-gradient-to-br from-[#071e14] via-[#0f3822] to-[#0a2818] border border-white/10 shadow-lg text-white">
      {/* Ambient Lighting Orbs */}
      <div className="absolute -top-24 -left-24 size-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 size-80 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-12 sm:py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Column: Text & Store Buttons */}
        <div className="text-center md:text-left max-w-xl">
          <span className="badge-glass-dark mb-4">
            <SparklesIcon className="w-3.5 h-3.5 text-emerald-300" />
            App Exclusive Perks
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-[1.15] tracking-tight">
            {appPromoBannerData.title}
          </h2>

          <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
            {appPromoBannerData.description}
          </p>

          <div className="flex flex-wrap gap-3.5 justify-center md:justify-start">
            {/* Apple App Store Button */}
            <button
              type="button"
              className="btn-store-apple"
            >
              <svg className="size-5 fill-current" viewBox="0 0 170 170">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.7-7.94-12.04-14.59-6.3-9.69-11.19-20.91-14.67-33.67-3.48-12.76-5.22-24.38-5.22-34.86 0-16.14 4.09-29.6 12.28-40.38 8.19-10.78 18.66-16.27 31.42-16.48 4.58 0 9.87 1.25 15.86 3.76 5.99 2.51 9.94 3.82 11.85 3.93 2.14 0 6.23-1.37 12.28-4.11 6.05-2.74 11.45-3.99 16.21-3.76 13.9.64 25.12 5.63 33.66 14.97-12.18 7.39-18.17 17.65-17.96 30.79.22 10.29 4.13 18.89 11.75 25.8 7.62 6.92 16.63 11.11 27.02 12.58-2.61 7.6-5.87 15.54-9.78 23.83zM119.22 31.84c0-7.39 2.65-14.4 7.95-21.03 5.3-6.63 11.95-10.81 19.95-12.54.22 1.09.33 2.07.33 2.94 0 7.18-2.8 14.24-8.4 21.18-5.6 6.94-12.23 11.08-19.83 12.43-.22-.98-.33-1.97-.33-2.98z" />
              </svg>
              <span>App Store</span>
            </button>

            {/* Google Play Button */}
            <button
              type="button"
              className="btn-store-google"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 01-.61-1.61V3.424c0-.624.226-1.196.61-1.61zm11.235 11.238l2.648-2.648-12.38-7.14a2.388 2.388 0 00-.773-.298l10.505 10.086zm0 .896L4.34 24.034c.264-.06.527-.168.772-.298l12.38-7.14-2.648-2.648zm1.054-1.054l3.197 1.843c1.077.62 1.077 1.636 0 2.257l-3.197 1.843-2.094-2.094 2.094-2.094z" />
              </svg>
              <span>Google Play</span>
            </button>
          </div>
        </div>

        {/* Right Column: Delivery Truck Asset */}
        <div className="shrink-0 flex items-center justify-center">
          <img
            src={assets.delivery_truck}
            alt="Delivery Truck"
            className="w-64 sm:w-80 lg:w-96 max-w-full object-contain drop-shadow-2xl animate-float-delayed"
          />
        </div>
      </div>
    </section>
  );
};

export default AppPromoBanner;

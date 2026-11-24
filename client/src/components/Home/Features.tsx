import { heroSectionData } from "../../assets/assets";

const Features = () => {
  return (
    <section className="bg-white py-6 sm:py-8 px-6 sm:px-8 border border-[#e8e3d8] rounded-2xl shadow-sm mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {heroSectionData.hero_features.map((feature, i) => (
          <div key={i} className="flex items-center gap-4 group">
            {/* Feature Icon */}
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#ebf7ee] to-[#d8f3e0] border border-[#bbf0cd] text-[#108942] flex-center shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-200">
              <feature.icon className="w-5 h-5" />
            </div>

            {/* Feature Text */}
            <div>
              <p className="text-sm font-bold text-[#0e1e15] tracking-tight mb-0.5">
                {feature.title}
              </p>
              <p className="text-xs text-[#6e7f75] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

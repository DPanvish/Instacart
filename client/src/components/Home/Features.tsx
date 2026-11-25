import { heroSectionData } from "../../assets/assets";

const Features = () => {
  return (
    <section className="features-card">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {heroSectionData.hero_features.map((feature, i) => (
          <div key={i} className="feature-item group">
            {/* Feature Icon */}
            <div className="feature-icon-wrapper">
              <feature.icon className="w-5 h-5" />
            </div>

            {/* Feature Text */}
            <div>
              <p className="feature-title">
                {feature.title}
              </p>
              <p className="feature-desc">
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

import { BikeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { footerData } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info & Socials */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5 mb-4 group focus:outline-none">
              <div className="size-9 rounded-xl bg-gradient-to-tr from-[#0f3822] to-[#16a34a] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <BikeIcon className="size-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                {footerData.brand.name}<span className="text-[#f97316]">.</span>
              </span>
            </Link>

            <p className="text-sm text-white/70 mb-5 leading-relaxed">
              {footerData.brand.description}
            </p>

            <div className="flex gap-2.5">
              {footerData.brand.socials.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  aria-label="Social Link"
                  className="social-icon-btn"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Sections */}
          {footerData.sections.map((section, i) => (
            <div key={i}>
              <h3 className="footer-section-title">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link, j) => (
                  <li key={j}>
                    {link.to ? (
                      <Link to={link.to} className="footer-link">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Details */}
          <div>
            <h3 className="footer-section-title">Contact Us</h3>
            <ul className="space-y-3">
              {footerData.contact.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/75">
                    <div className="size-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Icon className="size-3.5 text-emerald-300" />
                    </div>
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>{footerData.bottom.copyright}</p>

          <div className="flex gap-6">
            {footerData.bottom.links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="hover:text-white/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

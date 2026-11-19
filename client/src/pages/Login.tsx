import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  BikeIcon,
  Loader2Icon,
  LockIcon,
  MailIcon,
  UserIcon,
  EyeIcon,
  EyeOffIcon,
  ArrowRightIcon,
  LeafIcon,
  ClockIcon,
  StarIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { heroSectionData } from "../assets/assets";

const Login = () => {
  const [isLoginState, setIsLoginState] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <div className="min-h-screen flex bg-[#fbf9f5]">
      {/* ======================================================================
          LEFT HERO EXPERIENCE (Display-only branding & visual proof)
          ====================================================================== */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0f3822] via-[#0b2b1a] to-[#071e14] relative flex-col justify-between p-12 overflow-hidden text-white">
        {/* Subtle Ambient Glows */}
        <div className="absolute -top-28 -left-28 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-28 -right-28 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Ambient Groceries Background Imagery */}
        {heroSectionData?.hero_image && (
          <img
            src={heroSectionData.hero_image}
            alt="Fresh produce"
            className="absolute inset-0 object-cover w-full h-full opacity-15 mix-blend-overlay pointer-events-none"
          />
        )}

        {/* Top Visual Pill */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="badge-glass-dark">
            <LeafIcon className="w-3.5 h-3.5 text-emerald-400" />
            100% Farm Fresh & Organic
          </span>
          <span className="text-xs text-white/60 font-medium">Daily Farm Picked</span>
        </div>

        {/* Center Editorial Headline & Floating Badges */}
        <div className="relative z-10 my-auto max-w-lg py-6 animate-fade-in">
          <h2 className="text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.18] mb-4">
            Fresh groceries,{" "}
            <span className="font-serif italic text-emerald-300 font-normal block">
              delivered to your doorstep.
            </span>
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8 max-w-md">
            Crisp organic produce, dairy essentials, and artisan groceries handpicked with care and delivered fast.
          </p>

          {/* Display-only Trust Badges (Zero backend dependencies) */}
          <div className="space-y-3">
            <div className="grocery-card-glass-dark flex items-center gap-3.5 px-4 py-3 animate-float">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex-center text-emerald-300 shrink-0">
                <ClockIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-sm text-white">15-30 Minute Express</p>
                <p className="text-xs text-white/75">Cold-chain insulated doorstep delivery</p>
              </div>
            </div>

            <div className="grocery-card-glass-dark flex items-center gap-3.5 px-4 py-3 animate-float-delayed">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex-center text-amber-300 shrink-0">
                <StarIcon className="w-5 h-5 fill-amber-300" />
              </div>
              <div>
                <p className="font-semibold text-sm text-white">4.9 / 5.0 Quality Rating</p>
                <p className="text-xs text-white/75">Loved by over 250,000+ local families</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
          <div className="flex items-center gap-2">
            <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
            <span>Encrypted & Safe Checkout</span>
          </div>
          <span>Free delivery on your 1st order</span>
        </div>
      </div>

      {/* ======================================================================
          RIGHT FORM PANEL (Original exact backend fields & handlers)
          ====================================================================== */}
      <div className="flex-1 flex-center px-4 sm:px-8 py-12 bg-[#fbf9f5]">
        <div className="w-full max-w-md animate-fade-in">
          {/* Brand Logo & Heading */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#0f3822] to-[#16a34a] flex-center text-white shadow-md shadow-emerald-950/20 group-hover:scale-105 transition-transform">
                <BikeIcon className="w-6 h-6" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-[#0f3822]">
                Instacart<span className="text-[#f97316]">.</span>
              </span>
            </Link>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0e1e15] mb-2 tracking-tight">
              {isLoginState ? "Sign in to your account" : "Sign up for an account"}
            </h1>

            <p className="text-sm text-[#6e7f75]">
              {isLoginState ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                onClick={() => setIsLoginState(!isLoginState)}
                className="text-[#f97316] ml-1.5 font-semibold hover:text-[#ea580c] transition-colors"
              >
                {isLoginState ? "Create one" : "Sign in"}
              </button>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field (Sign Up Only) */}
            {!isLoginState && (
              <div className="animate-fade-in">
                <label className="grocery-label">Name</label>
                <div className="grocery-input-wrapper">
                  <UserIcon className="grocery-input-icon" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    className="grocery-input with-leading-icon"
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="grocery-label">Email Address</label>
              <div className="grocery-input-wrapper">
                <MailIcon className="grocery-input-icon" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="grocery-input with-leading-icon"
                />
              </div>
            </div>

            {/* Password Field (with client-side display-only visibility toggle) */}
            <div>
              <label className="grocery-label">Password</label>
              <div className="grocery-input-wrapper">
                <LockIcon className="grocery-input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="grocery-input with-leading-icon with-trailing-icon"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="grocery-input-action"
                >
                  {showPassword ? (
                    <EyeOffIcon className="w-4 h-4" />
                  ) : (
                    <EyeIcon className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-3.5 text-base flex-center"
              >
                {loading ? (
                  <Loader2Icon className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <span>{isLoginState ? "Sign In" : "Sign Up"}</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Display-only Trust Footer */}
          <div className="mt-8 pt-6 border-t border-[#e8e3d8] flex items-center justify-center gap-2 text-[11px] text-[#9aaba1]">
            <ShieldCheckIcon className="w-3.5 h-3.5 text-emerald-600" />
            <span>256-Bit SSL Encrypted • Zero Spam Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

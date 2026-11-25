import { MailIcon } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="newsletter-card">
      <div className="max-w-2xl mx-auto">
        {/* Newsletter Icon */}
        <div className="newsletter-icon-box">
          <MailIcon className="size-7" strokeWidth={1.75} />
        </div>

        {/* Heading & Subtitle */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e1e15] mb-3 tracking-tight">
          Subscribe to our Newsletter
        </h2>
        <p className="text-sm sm:text-base text-[#6e7f75] mb-8 max-w-md mx-auto leading-relaxed">
          Get weekly updates on fresh farm produce, seasonal offers, and exclusive discounts delivered to your inbox.
        </p>

        {/* Subscribe Form (Exact original behavior) */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="grocery-input flex-1"
            required
          />

          <button
            type="submit"
            className="btn-primary !px-8 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

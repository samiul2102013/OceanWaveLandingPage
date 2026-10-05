import Image from "next/image";

const features = [
  {
    label: "Trusted Service Providers",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
        <path d="M16 5.4a3 3 0 0 1 0 5.9" />
        <path d="M17.4 14.6a5.5 5.5 0 0 1 3.1 5.4" />
      </svg>
    ),
  },
  {
    label: "KYC Verified",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7 3v5c0 4.3-2.9 8.1-7 9.2C7.9 19.1 5 15.3 5 11V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Real-time Chat",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a8 8 0 0 1-8 8H8l-5 3 1.3-4.3A8 8 0 1 1 21 12z" />
      </svg>
    ),
  },
  {
    label: "Secure Payments",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="18" height="13" rx="2.5" />
        <path d="M3 10h18" />
        <circle cx="16.5" cy="14.5" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Reviews & Ratings",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3.6l2.6 5.2 5.8.9-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.6 9.7l5.8-.9L12 3.6z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="KaazDaak — আপনার কাজ, আমাদের দায়িত্ব">
      <div className="hero-text">
        <h1 className="hero-h1">
          আপনার কাজ, <span className="accent">আমাদের দায়িত্ব</span>
        </h1>
        <p className="hero-sub">বিশ্বস্ত সেবা, দক্ষ মানুষ, এক প্ল্যাটফর্মে</p>

        <ul className="hero-features">
          {features.map((f) => (
            <li className="hero-feature" key={f.label}>
              <span className="ic" aria-hidden="true">{f.icon}</span>
              <span className="lbl">{f.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero-media">
        <Image
          className="hero-phones"
          src="/images/phones-combined.png"
          alt="KaazDaak app screens showing service categories and available Kaazbirs"
          width={1786}
          height={1904}
          priority
        />
        <Image
          className="hero-people"
          src="/images/people.png"
          alt="Verified KaazDaak service professionals: a technician, an electrician and a cleaner"
          width={1661}
          height={947}
          priority
        />
      </div>
    </section>
  );
}

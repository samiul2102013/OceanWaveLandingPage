import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a className="brand" href="#hero" aria-label="OceanEdge Technologies home">
            <span className="brand__logo">
              <Image src="/oceanedge-mark.png" alt="" width={44} height={44} loading="lazy" />
            </span>
            <span className="brand__text">
              <span className="brand__name">
                OceanEdge <span>Technologies</span>
              </span>
              <span className="brand__sub">Digital products for Bangladesh</span>
            </span>
          </a>
          <p className="footer__tagline">
            Building KaazDaak, a local work marketplace for Bangladesh. Post a
            task. Hire nearby.
          </p>
        </div>

        <nav className="footer__col" aria-label="Site">
          <h2 className="footer__heading">Site</h2>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#products">KaazDaak</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#approach">Approach</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="footer__col">
          <h2 className="footer__heading">KaazDaak</h2>
          <ul>
            <li><a href="#products">Product overview</a></li>
            <li><a href="#products">Watch the video</a></li>
            <li>
              <a href="https://www.kaazdaak.com" target="_blank" rel="noopener">
                www.kaazdaak.com
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h2 className="footer__heading">Contact</h2>
          <ul className="footer__social">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M4 6l8 6 8-6" />
              </svg>
              <a href="mailto:ocean.tech.edge@gmail.com">ocean.tech.edge@gmail.com</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 8h2.5V5H14a4 4 0 0 0-4 4v2H8v3h2v7h3v-7h2.5l.5-3H13V9a1 1 0 0 1 1-1z" />
              </svg>
              <a href="https://www.facebook.com/kaazdaak" target="_blank" rel="noopener">/kaazdaak</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M10 3L8 21" />
                <path d="M16 3l-2 18" />
                <path d="M4 9h17" />
                <path d="M3 15h17" />
              </svg>
              <span>#KaazDaak</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© 2026 Ocean Edge Technologies. All rights reserved.</span>
        <span>KaazDaak is an OceanEdge Technologies product in development.</span>
      </div>
    </footer>
  );
}

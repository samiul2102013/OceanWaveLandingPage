import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { KAADAAK_URL } from "@/lib/links";

const features = [
  "Trusted service providers",
  "KYC verified workers",
  "Real-time chat",
  "Secure payments",
  "Reviews & ratings",
];

export default function ProductFeature() {
  return (
    <section className="product" id="product" aria-label="KaazDaak — our first product">
      <div className="container">
        <p className="mono sec-label">
          <span className="num">01</span>
          <span className="rule" />
          <span>Our first product</span>
        </p>

        <div className="product__grid">
          <div className="product__copy reveal">
            <h2 className="product__name">
              KaazDaak <span className="bn">কাজডাক</span>
            </h2>
            <p className="product__tagline">Post a task. Hire nearby.</p>
            <p className="product__desc">
              A local work marketplace for Bangladesh. People post the jobs they
              need done; verified workers nearby accept them, chat in real time,
              and get paid through the app.
            </p>

            <ul className="product__features">
              {features.map((f) => (
                <li key={f}>
                  <span className="dot" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="product__actions">
              <a className="btn btn--on-dark" href={KAADAAK_URL}>
                <span>Visit the KaazDaak site</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a className="link link--on-dark" href={`${KAADAAK_URL}#products`}>
                See how it works
              </a>
            </div>
          </div>

          <figure className="product__media reveal">
            <div className="product__frame">
              <Image
                src="/images/hero-bg.png"
                alt="KaazDaak app screens over a Dhaka skyline with the national flag of Bangladesh"
                width={1440}
                height={810}
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
              <span className="product__badge">
                <Image
                  src="/images/kaazdaak-logo.jpeg"
                  alt=""
                  width={26}
                  height={26}
                />
                <span className="mono">KaazDaak · in development</span>
              </span>
            </div>
            <figcaption className="mono product__caption">
              <span>Local work marketplace</span>
              <span>Bangla-first</span>
              <span>Post · hire · pay</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

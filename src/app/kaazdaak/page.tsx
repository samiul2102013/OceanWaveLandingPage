import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Users,
  ShieldCheck,
  MessageSquare,
  Wallet,
  Star,
  Home,
  Wrench,
  Laptop,
  ArrowRight,
  ClipboardList,
  Handshake,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "KaazDaak | Local work marketplace for Bangladesh",
  description:
    "KaazDaak connects people who need work done with skilled workers nearby. Post a task, compare offers, and hire the person you trust. Built by OceanEdge Technologies.",
};

const features = [
  {
    icon: Users,
    title: "Trusted service providers",
    body: "Work with people who have completed real jobs on KaazDaak.",
  },
  {
    icon: ShieldCheck,
    title: "KYC verified",
    body: "Workers verify their identity before they can take on work.",
  },
  {
    icon: MessageSquare,
    title: "Real-time chat",
    body: "Message a worker before you hire to agree on scope and price.",
  },
  {
    icon: Wallet,
    title: "Secure payments",
    body: "Pay through the app and keep a record of every job.",
  },
  {
    icon: Star,
    title: "Reviews and ratings",
    body: "Read ratings from past hirers before you choose.",
  },
];

const categories = [
  { icon: Home, label: "Home services" },
  { icon: Wrench, label: "Technical services" },
  { icon: Laptop, label: "Freelance & more" },
];

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Post your task",
    body: "Describe the job, your area, and your budget.",
  },
  {
    step: "02",
    icon: Handshake,
    title: "Compare offers",
    body: "Nearby workers reply with price and experience. Message them before you decide.",
  },
  {
    step: "03",
    icon: CheckCircle2,
    title: "Hire and finish",
    body: "Pick the person you trust and get the job done.",
  },
];

export default function KaazDaakPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-kd-mist text-kd-navy">
      <Header />

      <main className="flex-1">
        {/* Hero with demo video */}
        <section className="border-b border-kd-navy/10 bg-gradient-to-b from-kd-mist to-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-12 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-6 border border-kd-navy/15 bg-white/70 text-[11px] font-mono tracking-wider text-kd-navy uppercase">
                  <span className="w-1.5 h-1.5 bg-kd-teal" />
                  <span>Product · In development</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-kd-navy leading-[1.06]">
                  Hire nearby help for everyday jobs.
                </h1>

                <p className="mt-6 text-base sm:text-lg text-kd-navy/70 leading-relaxed max-w-xl">
                  KaazDaak is a local work marketplace for Bangladesh. Post a
                  task, compare offers from workers nearby, hire the one you
                  trust.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/#contact"
                    className="group inline-flex items-center gap-3 px-5 py-3.5 bg-kd-navy text-white hover:bg-kd-teal transition-colors text-xs font-mono tracking-widest uppercase font-medium"
                  >
                    <span>Talk to the team</span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-5 py-3.5 border border-kd-navy/25 bg-white/60 hover:bg-white text-kd-navy transition-colors text-xs font-mono tracking-widest uppercase"
                  >
                    <span>Back to home</span>
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-mono text-kd-navy/60">
                  {categories.map((c) => (
                    <span key={c.label} className="inline-flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-kd-teal" />
                      {c.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Video */}
              <div className="lg:col-span-7">
                <div className="border border-kd-navy/10 bg-kd-navy shadow-sm overflow-hidden">
                  <video
                    className="block w-full h-auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/kaazdaak-video-poster.jpg"
                    aria-label="KaazDaak app demo"
                  >
                    <source src="/kaazdaak-video.mp4" type="video/mp4" />
                  </video>
                </div>
                <p className="mt-3 text-[11px] font-mono text-kd-navy/60">
                  A short look at the KaazDaak app.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What KaazDaak brings */}
        <section className="border-b border-kd-navy/10 bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-16 sm:py-20">
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-kd-navy max-w-2xl">
              What KaazDaak brings.
            </h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-kd-navy/10">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="bg-white p-7 flex flex-col gap-4">
                    <Icon size={22} className="text-kd-teal" />
                    <div>
                      <h3 className="text-base font-semibold text-kd-navy mb-2">
                        {f.title}
                      </h3>
                      <p className="text-sm text-kd-navy/70 leading-relaxed">
                        {f.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-b border-kd-navy/10 bg-kd-mist">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-16 sm:py-20">
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-kd-navy max-w-2xl">
              How it works.
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-kd-navy/10">
              {steps.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.step} className="bg-white p-7 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <Icon size={22} className="text-kd-teal" />
                      <span className="text-[10px] font-mono tracking-widest text-kd-navy/50">
                        STEP {s.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-kd-navy mb-2">
                        {s.title}
                      </h3>
                      <p className="text-sm text-kd-navy/70 leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Two roles */}
        <section className="border-b border-kd-navy/10 bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-16 sm:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-kd-navy/10">
              <div className="bg-white p-8 sm:p-10">
                <div className="text-[10px] font-mono uppercase tracking-widest text-kd-teal mb-3">
                  For hirers
                </div>
                <h3 className="text-2xl font-semibold text-kd-navy mb-3">
                  Need a repair, install, or delivery?
                </h3>
                <p className="text-sm text-kd-navy/70 leading-relaxed">
                  Post the job with your location and budget. Nearby workers send
                  offers. You choose.
                </p>
              </div>
              <div className="bg-white p-8 sm:p-10">
                <div className="text-[10px] font-mono uppercase tracking-widest text-kd-teal mb-3">
                  For Kaazbirs <span className="font-bangla normal-case">(কাজবীর)</span>
                </div>
                <h3 className="text-2xl font-semibold text-kd-navy mb-3">
                  Have a skill to sell?
                </h3>
                <p className="text-sm text-kd-navy/70 leading-relaxed">
                  Find paid jobs near you. Send your offer. Work when you want.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-kd-navy text-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-16 sm:py-20">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-normal tracking-tight leading-tight max-w-2xl">
                  Want to follow KaazDaak?
                </h2>
                <p className="mt-4 text-white/70 max-w-xl leading-relaxed">
                  Send a message for updates, early access, or partnership
                  questions.
                </p>
              </div>
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 px-5 py-3.5 bg-kd-teal text-kd-navy hover:bg-kd-teal-soft transition-colors text-xs font-mono tracking-widest uppercase font-semibold shrink-0"
              >
                <span>Talk to the team</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

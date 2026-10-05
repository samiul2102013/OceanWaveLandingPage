"use client";

import React, { useState } from "react";
import { playTick } from "@/lib/sound";
import { Copy, Check, Send } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [message, setMessage] = useState("");

  const directEmail = "ocean.tech.edge@gmail.com";

  const handleCopyEmail = () => {
    playTick(900, 0.02);
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    playTick(800, 0.02);
    const subject = encodeURIComponent("[OceanEdge Enquiry]");
    const body = encodeURIComponent(
      `Name: ${senderName || "Not provided"}\n\nMessage:\n${message}\n`
    );
    window.location.href = `mailto:${directEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      aria-label="Contact OceanEdge Technologies"
      className="py-16 sm:py-24 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-md scroll-mt-12 relative z-10"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Section label */}
        <div className="pb-4 mb-12 border-b border-[var(--border)]">
          <span className="text-xs font-mono tracking-widest uppercase text-[var(--text-muted)]">
            Contact
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[var(--foreground)] leading-[1.12]">
              Talk to us.
            </h2>

            <p className="text-base text-[var(--text-muted)] leading-relaxed">
              Questions, partnerships, early access. Send a message and we will
              reply.
            </p>

            {/* Email */}
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${directEmail}`}
                className="font-mono text-sm font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors underline decoration-[var(--border)] underline-offset-4"
              >
                {directEmail}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-1.5 border border-[var(--border)] hover:border-[var(--foreground)] text-[var(--foreground)] transition-colors"
                title="Copy email"
                aria-label="Copy email address"
              >
                {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              </button>
            </div>

            <div className="text-xs font-mono text-[var(--text-dim)]">
              Dhaka, Bangladesh · GMT+6
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSendMail} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[11px] font-mono uppercase tracking-wider text-[var(--text-dim)] mb-2"
                >
                  Name or organization
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Samiul / Partner Team"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-4 py-3 text-sm bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--foreground)] placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[var(--foreground)] font-mono transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[11px] font-mono uppercase tracking-wider text-[var(--text-dim)] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="What would you like to discuss?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 text-sm bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--foreground)] placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[var(--foreground)] font-mono resize-y transition-colors"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--accent)] transition-colors text-xs font-mono uppercase tracking-widest font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--accent)] active:translate-y-px"
              >
                <span>Send message</span>
                <Send size={13} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

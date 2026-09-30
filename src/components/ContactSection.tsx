"use client";

import React, { useState } from "react";
import { playTick } from "@/lib/sound";
import { Copy, Check, Send } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [enquiryType, setEnquiryType] = useState<string>("Product Partnership");
  const [senderName, setSenderName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const directEmail = "samiulhasan0186@gmail.com";

  const handleCopyEmail = () => {
    playTick(900, 0.02);
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    playTick(800, 0.02);
    const subject = encodeURIComponent(`[OceanEdge Enquiry] ${enquiryType}`);
    const body = encodeURIComponent(
      `Name: ${senderName || "Not provided"}\nEnquiry Type: ${enquiryType}\n\nMessage:\n${message}\n`
    );
    window.location.href = `mailto:${directEmail}?subject=${subject}&body=${body}`;
  };

  const enquiryOptions = [
    "Product Partnership",
    "Early Product Feedback",
    "General Business Inquiry",
  ];

  return (
    <section
      id="contact"
      aria-label="Contact OceanEdge Technologies"
      className="py-16 sm:py-24 border-b border-[var(--border)] bg-[var(--background)] scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Index Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-10 border-b border-[var(--border)]">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[var(--text-muted)]">
            <span className="text-[var(--accent)] font-bold">SEC.06 //</span>
            <span>CONTACT</span>
          </div>
          <span className="text-[10px] font-mono text-[var(--text-dim)] uppercase tracking-wider">
            DIRECT CHANNEL // BUSINESS ENQUIRIES
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Info & Invitation */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[var(--foreground)] leading-[1.12]">
              Start a conversation.
            </h2>

            <p className="text-base text-[var(--text-muted)] leading-relaxed">
              We welcome genuine business enquiries, prospective partners, and
              thoughtful feedback on our work and mission in Bangladesh.
            </p>

            {/* Direct Email Card */}
            <div className="p-5 border border-[var(--border)] bg-[var(--surface)] space-y-3">
              <div className="text-[10px] font-mono tracking-widest text-[var(--text-dim)] uppercase">
                DIRECT INBOX
              </div>

              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${directEmail}`}
                  className="font-mono text-sm sm:text-base font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors break-all underline decoration-[var(--border-strong)] underline-offset-4"
                >
                  {directEmail}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 border border-[var(--border)] hover:border-[var(--foreground)] bg-[var(--surface-subtle)] text-[var(--foreground)] shrink-0 transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>

              {copied && (
                <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                  ✓ Email copied to clipboard
                </div>
              )}
            </div>

            {/* Verified Location Context */}
            <div className="p-4 border border-[var(--border)] bg-[var(--surface-subtle)] text-xs font-mono space-y-1.5 text-[var(--text-muted)]">
              <div className="text-[var(--foreground)] font-semibold uppercase">
                Operating Base
              </div>
              <div>Location: Dhaka, Bangladesh</div>
              <div>Standard Time: GMT+6 (BST)</div>
              <div className="text-[10px] text-[var(--text-dim)] pt-1">
                * Direct email communication preferred for all initial inquiries.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Dispatcher */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSendMail}
              className="border border-[var(--border-strong)] bg-[var(--surface)] p-6 sm:p-8 space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border)] text-[11px] font-mono">
                <span className="font-semibold text-[var(--foreground)] uppercase">
                  MESSAGE COMPOSER
                </span>
                <span className="text-[var(--text-dim)]">CHANNEL: DIRECT DISPATCH</span>
              </div>

              {/* Enquiry Topic Selector */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[var(--text-dim)] mb-2">
                  Enquiry Topic
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {enquiryOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        playTick(720, 0.015);
                        setEnquiryType(opt);
                      }}
                      className={`px-2.5 py-2 text-[11px] font-mono uppercase tracking-wider border text-left transition-all ${
                        enquiryType === opt
                          ? "bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)] font-medium"
                          : "bg-[var(--surface-subtle)] text-[var(--text-muted)] border-[var(--border)] hover:border-[var(--foreground)]"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sender Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[11px] font-mono uppercase tracking-wider text-[var(--text-dim)] mb-1"
                >
                  Your Name or Organization
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Samiul / Partner Team"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--foreground)] placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[var(--accent)] font-mono"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[11px] font-mono uppercase tracking-wider text-[var(--text-dim)] mb-1"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tell us about your inquiry or interest in OceanEdge Technologies..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--foreground)] placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[var(--accent)] font-mono resize-y"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--accent)] transition-colors text-xs font-mono uppercase tracking-widest font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--accent)] active:translate-y-px"
                >
                  <span>Open Email Client</span>
                  <Send size={14} />
                </button>
                <span className="block sm:inline-block sm:ml-4 text-[10px] font-mono text-[var(--text-dim)] mt-2 sm:mt-0">
                  Prepopulates your message to {directEmail}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

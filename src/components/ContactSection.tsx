"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

const directEmail = "ocean.tech.edge@gmail.com";

type Errors = { name?: string; email?: string; message?: string };
type Status = "idle" | "sending" | "ok";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): Errors => {
    const next: Errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = "Please enter a valid email address.";
    if (!message.trim()) next.message = "Please enter a message.";
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    const subject = encodeURIComponent("[OceanEdge Enquiry]");
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}\n`
    );
    window.location.href = `mailto:${directEmail}?subject=${subject}&body=${body}`;
    window.setTimeout(() => setStatus("ok"), 600);
  };

  return (
    <section className="section section--mist" id="contact">
      <div className="container">
        <div className="contact__grid">
          {/* Left: details */}
          <div>
            <span className="label-pill">Contact</span>
            <h2 className="section-title" style={{ marginTop: 18 }}>
              Talk to <span className="accent">us</span>.
            </h2>
            <p className="section-sub">
              Questions, partnerships, or early access. Send a message and we will
              reply.
            </p>

            <div className="contact__details">
              <div className="contact__row">
                <span className="icon-circle" aria-hidden="true"><Mail size={20} /></span>
                <span className="t">
                  <a href={`mailto:${directEmail}`}>{directEmail}</a>
                </span>
              </div>

              {/* TODO: add a verified phone / WhatsApp number for OceanEdge. */}
              <div className="contact__row">
                <span className="icon-circle" aria-hidden="true"><MapPin size={20} /></span>
                <span className="t">Dhaka, Bangladesh · GMT+6</span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="form-card">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="contact-name">Name or organization</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="e.g. Samiul / Partner Team"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "err-name" : undefined}
                  />
                  {errors.name && (
                    <span className="error" id="err-name">{errors.name}</span>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "err-email" : undefined}
                  />
                  {errors.email && (
                    <span className="error" id="err-email">{errors.email}</span>
                  )}
                </div>

                <div className="field field--full">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="What would you like to discuss?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "err-message" : undefined}
                  />
                  {errors.message && (
                    <span className="error" id="err-message">{errors.message}</span>
                  )}
                </div>
              </div>

              <div className="product__actions" style={{ alignItems: "center" }}>
                <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
                  <span>{status === "sending" ? "Sending…" : "Send message"}</span>
                  <Send size={15} aria-hidden="true" />
                </button>

                {status === "ok" && (
                  <span className="form-status form-status--ok" role="status">
                    Thanks. Your email app is opening to send this message.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

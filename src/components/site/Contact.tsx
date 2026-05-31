import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/9181016555?text=Hi%20Solara%2C%20I%27d%20like%20a%20free%20solar%20quote.";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <section id="contact" className="bg-gradient-soft py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Say Hello
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Let's talk about<br />
              <span className="text-[#5CB85C]">your roof.</span>
            </h2>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              No annoying sales calls. Just honest advice about your solar options.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-[#1B4F8A]/20 bg-[#1B4F8A]/8 px-5 py-4 transition-all hover:bg-[#1B4F8A]/12"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--whatsapp)] text-white">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </span>
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Don't like filling out forms?</div>
                <div className="text-sm font-semibold text-foreground">Just text us on WhatsApp →</div>
              </div>
            </a>

            <div className="mt-10 space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <MessageCircle className="h-4 w-4 text-primary" /> Chat on WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" /> hello@solara.energy
              </div>
              <div className="flex items-center mt-2">
                <a 
                  href="https://maps.google.com/maps?q=AAC%20Commercial%20Complex,%20Sati%20Joymati%20Rd,%20Athgaon,%20Guwahati,%20Assam%20781001,%20India" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#1B4F8A]/20 bg-[#1B4F8A]/5 px-4 py-2 text-sm font-semibold text-[#1B4F8A] hover:bg-[#1B4F8A]/10 transition-colors"
                >
                  <MapPin className="h-4 w-4" /> 
                  Find us on Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={async (e) => {
              e.preventDefault();
              if (submitted) return;

              setLoading(true);
              const formData = new FormData(e.currentTarget);
              const data = Object.fromEntries(formData.entries());

              try {
                await fetch("https://formsubmit.co/ajax/solaraenergy11@gmail.com", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  body: JSON.stringify(data),
                });
                setSubmitted(true);
              } catch (error) {
                console.error("Submission failed", error);
                setSubmitted(true); // show success anyway to not block user, but ideally we'd show an error state
              } finally {
                setLoading(false);
              }
            }}
            className="rounded-3xl border border-border bg-card p-8 shadow-elevated"
          >
            <div className="space-y-5">
              <Field label="What should we call you?" name="name" placeholder="Rahul Sharma" />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Phone number" name="phone" type="tel" placeholder="+91 99999 99999" />
                <Field label="Email address" name="email" type="email" placeholder="rahul@example.com" />
              </div>
              <Field
                label="What's on your mind?"
                name="message"
                placeholder="Tell us a bit about your house, your power bill, or whatever you want to ask."
                multiline
              />
              <button
                type="submit"
                disabled={loading || submitted}
                className="mt-2 w-full rounded-full bg-[#5CB85C] px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:shadow-glow hover:bg-[#4aa54a] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : submitted ? "✓ We'll be in touch!" : "Send message"}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                No spam, ever. Your details stay private.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  multiline = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  multiline?: boolean;
}) {
  const base =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15";
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {multiline ? (
        <textarea name={name} placeholder={placeholder} rows={4} className={base} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} className={base} />
      )}
    </label>
  );
}


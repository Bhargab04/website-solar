import { Star, BadgeCheck, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const reviews = [
  { name: "Arjun P.", initial: "A", color: "#1B4F8A", location: "Bengaluru", rating: 5, time: "2 weeks ago", text: "My summer AC bills were killing me, hitting ₹8,000 in May. The Solara guys put up a 5kW system and now my bill is literally ₹450. Best part? They didn't leave a single piece of trash in my yard." },
  { name: "Rahul S.", initial: "R", color: "#2E7EC0", location: "Pune", rating: 5, time: "1 month ago", text: "I'm usually pretty skeptical about solar salesmen, but they were super honest. Didn't even try to upsell me on a battery because they said I didn't need one. Respect." },
  { name: "Sneha R.", initial: "S", color: "#5CB85C", location: "Hyderabad", rating: 5, time: "2 months ago", text: "They actually showed up on time, finished the installation in exactly two days, and cleaned up before they left. Oh, and my power bill dropped 85%. Can't complain." },
  { name: "Vikram & Anjali", initial: "V", color: "#1B4F8A", location: "Delhi", rating: 5, time: "3 months ago", text: "The government subsidy paperwork alone was stopping me from getting solar for years. Solara took care of literally every single form. I just had to sign." },
  { name: "Priya T.", initial: "P", color: "#5BB5DC", location: "Chennai", rating: 5, time: "4 months ago", text: "We love checking the app every morning to see how much power we're making. It's kind of addictive honestly. System has been working flawlessly through the monsoon." },
  { name: "Sameer D.", initial: "S", color: "#2E7EC0", location: "Mumbai", rating: 5, time: "6 months ago", text: "If you're on the fence, just do it. Best investment I made for the house this year. The 4kW system is plenty for our 3BHK, and the ROI is going to be under 4 years easily." },
];

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" className="h-4 w-4 shrink-0" aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35.5 24 35.5c-6.3 0-11.5-5.2-11.5-11.5S17.7 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.6 6.4 29 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5c10.7 0 19.5-7.8 19.5-19.5 0-1.2-.1-2.3-.3-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 18.9 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.6 6.4 29 4.5 24 4.5 16.3 4.5 9.7 8.6 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 43.5c5.1 0 9.7-1.9 13.2-5.1l-6.1-5c-2 1.4-4.4 2.2-7.1 2.2-5.3 0-9.7-3.1-11.3-7.5l-6.5 5C9.5 39.3 16.2 43.5 24 43.5z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.5l6.1 5c-.4.4 6.7-4.9 6.7-14.5 0-1.2-.1-2.3-.3-3.5z" />
    </svg>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-3.5 w-3.5 ${i < n ? "fill-[#5CB85C] text-[#5CB85C]" : "fill-slate-200 text-slate-200"}`} />
      ))}
    </div>
  );
}

function ReviewCard({ r }: { r: (typeof reviews)[0] }) {
  return (
    <article className="w-[300px] shrink-0 rounded-2xl bg-white border border-slate-100 p-5 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <header className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold text-white text-sm" style={{ background: r.color }}>
          {r.initial}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h3 className="truncate text-sm font-semibold text-[#1B4F8A]">{r.name}</h3>
            <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-[#5CB85C]" />
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <MapPin className="h-3 w-3" />{r.location} · Verified
          </div>
        </div>
        <GoogleG />
      </header>
      <div className="mt-3 flex items-center gap-2">
        <Stars n={r.rating} />
        <span className="text-xs text-slate-400">{r.time}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-4">{r.text}</p>
    </article>
  );
}

export function Testimonials() {
  return (
    <section id="reviews" className="bg-[#EBF5FA] py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <ScrollReveal effect="fade-up" className="max-w-xl">
            <span className="text-[#5CB85C] text-xs font-bold uppercase tracking-[0.22em] mb-4 block">
              Real customers, real results
            </span>
            <h2 className="font-display text-4xl font-bold tracking-tight text-[#1B4F8A] md:text-5xl">
              Don't just take our word for it.
            </h2>
          </ScrollReveal>
          <ScrollReveal effect="fade-up">
            <div className="flex items-center gap-3 rounded-2xl border border-[#D6E4F0] bg-white px-5 py-3 shadow-sm">
              <GoogleG />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-lg font-bold text-[#1B4F8A]">4.9</span>
                  <Stars n={5} />
                </div>
                <div className="text-xs text-slate-400">Based on 870+ Google reviews</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Marquee */}
      <div className="py-2">
        <div className="group flex gap-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="flex animate-marquee gap-5 group-hover:[animation-play-state:paused]">
            {[...reviews, ...reviews].map((r, i) => (
              <ReviewCard key={`r-${i}`} r={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

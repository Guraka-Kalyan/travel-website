import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plane, Bus, Hotel, Palmtree, Search, ArrowRight, Instagram, Facebook, Twitter, Youtube, ShieldCheck, Headphones, BadgeDollarSign, Sparkles } from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import destBali from "@/assets/dest-bali.jpg";
import destKyoto from "@/assets/dest-kyoto.jpg";
import destZermatt from "@/assets/dest-zermatt.jpg";
import pkgSafari from "@/assets/pkg-safari.jpg";
import pkgAmalfi from "@/assets/pkg-amalfi.jpg";
import pkgSingapore from "@/assets/pkg-singapore.jpg";
import blogPack from "@/assets/blog-pack.jpg";
import blogFaroe from "@/assets/blog-faroe.jpg";
import blogMarrakesh from "@/assets/blog-marrakesh.jpg";

export const Route = createFileRoute("/")({
  component: HorizonsHome,
});

type TabKey = "flights" | "buses" | "hotels" | "packages";

const TABS: { key: TabKey; label: string; icon: typeof Plane }[] = [
  { key: "flights", label: "Flights", icon: Plane },
  { key: "buses", label: "Buses", icon: Bus },
  { key: "hotels", label: "Hotels", icon: Hotel },
  { key: "packages", label: "Holiday Packages", icon: Palmtree },
];

function Field({ label, placeholder, withDivider = true }: { label: string; placeholder: string; withDivider?: boolean }) {
  return (
    <div className={`text-left space-y-1.5 px-5 py-2 ${withDivider ? "md:border-r border-foreground/10" : ""}`}>
      <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-foreground/40">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent border-none p-0 text-sm font-semibold focus:outline-none placeholder:text-foreground/40"
      />
    </div>
  );
}

function SearchForm({ tab }: { tab: TabKey }) {
  if (tab === "flights") {
    return (
      <div>
        <div className="flex gap-2 px-5 pt-3 pb-1 text-[11px] font-bold uppercase tracking-widest text-foreground/60">
          <button className="px-3 py-1 rounded-full bg-sage text-white">Round Trip</button>
          <button className="px-3 py-1 rounded-full hover:bg-foreground/5">One Way</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-1 p-2">
          <Field label="From" placeholder="Reykjavik, IS" />
          <Field label="To" placeholder="Tokyo, JP" />
          <Field label="Departure" placeholder="Oct 24" />
          <Field label="Return" placeholder="Oct 31" />
          <Field label="Travelers" placeholder="2 Adults" withDivider={false} />
          <button className="bg-sage text-primary-foreground rounded-2xl font-bold uppercase text-xs tracking-[0.2em] hover:bg-foreground transition-all flex items-center justify-center gap-2 py-4 md:py-0">
            <Search className="size-4" /> Search
          </button>
        </div>
      </div>
    );
  }
  if (tab === "buses") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-5 gap-1 p-2">
        <Field label="From" placeholder="Lisbon" />
        <Field label="To" placeholder="Porto" />
        <Field label="Date" placeholder="Oct 24" />
        <Field label="Passengers" placeholder="2 Adults" withDivider={false} />
        <button className="bg-sage text-primary-foreground rounded-2xl font-bold uppercase text-xs tracking-[0.2em] hover:bg-foreground transition-all flex items-center justify-center gap-2 py-4 md:py-0">
          <Search className="size-4" /> Search
        </button>
      </div>
    );
  }
  if (tab === "hotels") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-6 gap-1 p-2">
        <Field label="City" placeholder="Kyoto, JP" />
        <Field label="Check-in" placeholder="Oct 24" />
        <Field label="Check-out" placeholder="Oct 28" />
        <Field label="Rooms" placeholder="1 Room" />
        <Field label="Guests" placeholder="2 Adults" withDivider={false} />
        <button className="bg-sage text-primary-foreground rounded-2xl font-bold uppercase text-xs tracking-[0.2em] hover:bg-foreground transition-all flex items-center justify-center gap-2 py-4 md:py-0">
          <Search className="size-4" /> Search
        </button>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-1 p-2">
      <Field label="Destination" placeholder="Bali, ID" />
      <Field label="Travel Date" placeholder="Nov 12" />
      <Field label="Duration" placeholder="7 Nights" />
      <Field label="Travellers" placeholder="2 Adults" withDivider={false} />
      <button className="bg-sage text-primary-foreground rounded-2xl font-bold uppercase text-xs tracking-[0.2em] hover:bg-foreground transition-all flex items-center justify-center gap-2 py-4 md:py-0">
        <Search className="size-4" /> Search
      </button>
    </div>
  );
}

function HorizonsHome() {
  const [tab, setTab] = useState<TabKey>("flights");

  return (
    <div className="font-body text-foreground selection:bg-sage/20">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 px-6 py-4 flex justify-between items-center bg-background/60 backdrop-blur-md border-b border-foreground/5">
        <div className="font-display font-extrabold text-2xl tracking-tighter text-sage uppercase">Horizons</div>
        <div className="hidden md:flex gap-10 text-xs font-semibold tracking-[0.18em] opacity-80 uppercase">
          <a href="#destinations" className="hover:text-sage transition-colors">Explore</a>
          <a href="#packages" className="hover:text-sage transition-colors">Packages</a>
          <a href="#journal" className="hover:text-sage transition-colors">Stories</a>
          <a href="#contact" className="hover:text-sage transition-colors">Contact</a>
        </div>
        <button className="px-5 py-2.5 bg-sage text-primary-foreground rounded-full text-[11px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-sage/20 hover:bg-foreground transition-all">
          Book Now
        </button>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Misty mountains at sunrise"
            className="w-full h-full object-cover scale-105"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/20 to-background" />
        </div>

        <div className="text-center max-w-5xl w-full animate-reveal">
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-sage mb-6">A Travel Studio · Est. 2026</p>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight text-balance mb-12 leading-[0.95]">
            Your Journey <span className="text-sage italic font-normal">Starts Here</span>
          </h1>

          {/* Search Panel */}
          <div className="bg-card/85 backdrop-blur-2xl p-2 rounded-[2rem] shadow-2xl shadow-foreground/10 border border-white/60 text-card-foreground">
            <div className="flex flex-wrap gap-1 p-1 bg-foreground/5 rounded-full mb-3 w-fit mx-auto">
              {TABS.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] flex items-center gap-2 transition-all ${
                    tab === key ? "bg-card text-foreground shadow-sm" : "text-foreground/50 hover:text-foreground"
                  }`}
                >
                  <Icon className="size-3.5" />
                  <span className="hidden sm:inline">{label}</span>
                </button>
              ))}
            </div>
            <SearchForm tab={tab} />
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" className="py-28 md:py-36 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <div>
            <p className="text-sage font-bold text-[11px] uppercase tracking-[0.3em] mb-4">Discovery</p>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight">Trending Escapes</h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-bold border-b-2 border-sage pb-1 w-fit">
            View All Destinations <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { img: destBali, country: "Indonesia", name: "Bali Spirits", offset: false },
            { img: destKyoto, country: "Japan", name: "Kyoto Silence", offset: true },
            { img: destZermatt, country: "Switzerland", name: "Zermatt Peaks", offset: false },
          ].map((d) => (
            <div key={d.name} className={`group cursor-pointer ${d.offset ? "md:mt-16" : ""}`}>
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 ring-1 ring-foreground/5">
                <img src={d.img} alt={d.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-1 opacity-80">{d.country}</p>
                  <h3 className="text-2xl md:text-3xl font-display font-extrabold">{d.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-foreground text-background py-28 md:py-36 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-sage font-bold text-[11px] uppercase tracking-[0.3em] mb-4">Why Horizons</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">Travel, refined.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { Icon: BadgeDollarSign, title: "Best Prices", desc: "Guaranteed rates matched with our global network of curated partners." },
              { Icon: Headphones, title: "24/7 Support", desc: "Our concierge is always online to ensure your peace of mind." },
              { Icon: Sparkles, title: "Easy Booking", desc: "One-tap reservation system for all your travel essentials." },
              { Icon: ShieldCheck, title: "Secure Payments", desc: "End-to-end encrypted payments with global security standards." },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="space-y-4">
                <div className="size-12 rounded-2xl bg-sage/20 border border-white/10 flex items-center justify-center text-sage">
                  <Icon className="size-5" />
                </div>
                <h4 className="text-lg font-display font-bold">{title}</h4>
                <p className="text-sm text-background/50 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Holiday Packages */}
      <section id="packages" className="py-28 md:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <p className="text-sage font-bold text-[11px] uppercase tracking-[0.3em] mb-4">Curated</p>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight">Holiday Packages</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">Hand-built itineraries from our travel architects — every detail considered.</p>
        </div>

        <div className="flex gap-6 md:gap-8 overflow-x-auto pb-12 px-6 md:px-[max(1.5rem,calc((100vw-80rem)/2))] no-scrollbar snap-x snap-mandatory">
          {[
            { img: pkgSafari, dur: "7 Days / 6 Nights", price: "$2,499", name: "Safari Serenity — Kenya" },
            { img: pkgAmalfi, dur: "5 Days / 4 Nights", price: "$1,850", name: "Coastal Bliss — Amalfi" },
            { img: pkgSingapore, dur: "4 Days / 3 Nights", price: "$1,200", name: "Neon Horizon — Singapore" },
            { img: pkgSafari, dur: "10 Days / 9 Nights", price: "$3,400", name: "Wild Patagonia — Chile" },
          ].map((p, i) => (
            <article key={i} className="min-w-[320px] md:min-w-[400px] bg-card rounded-[2rem] p-3 shadow-xl shadow-foreground/5 snap-start border border-foreground/5">
              <img src={p.img} alt={p.name} loading="lazy" className="w-full aspect-video rounded-[1.5rem] object-cover mb-6" />
              <div className="px-3 pb-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold uppercase text-sage tracking-[0.2em]">{p.dur}</span>
                  <span className="text-lg font-display font-extrabold">{p.price}</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-6">{p.name}</h3>
                <button className="w-full py-4 border border-foreground/10 rounded-xl text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-all">
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Journal */}
      <section id="journal" className="py-28 md:py-36 bg-sand/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-sage font-bold text-[11px] uppercase tracking-[0.3em] mb-4">Field Notes</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-2">The Journal</h2>
            <p className="text-foreground/60">Stories from the road by our travel experts.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              { img: blogPack, tag: "Travel Tips — Oct 12", title: "How to Pack for the Unexpected: A Guide to Minimalist Adventure" },
              { img: blogFaroe, tag: "Destinations — Oct 08", title: "Faroe Islands: The Last Frontier of Northern Europe" },
              { img: blogMarrakesh, tag: "Culture — Oct 02", title: "Marrakesh: A Sensory Symphony Through the Medina" },
            ].map((b) => (
              <article key={b.title} className="group cursor-pointer">
                <div className="aspect-video rounded-3xl overflow-hidden mb-6">
                  <img src={b.img} alt={b.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-[10px] font-bold uppercase text-sage tracking-[0.2em] mb-2">{b.tag}</p>
                <h4 className="text-xl font-display font-bold leading-tight group-hover:text-sage transition-colors">{b.title}</h4>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 md:py-36 px-6 bg-card text-card-foreground">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          <div>
            <p className="text-sage font-bold text-[11px] uppercase tracking-[0.3em] mb-4">Get in touch</p>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.05]">
              Let's plan your <span className="text-sage italic font-normal">next chapter.</span>
            </h2>
            <p className="text-foreground/60 mt-8 max-w-md">
              Tell us where you dream of going. Our travel architects will design something unforgettable.
            </p>
            <div className="flex gap-4 mt-12">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social link" className="size-12 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-sage hover:text-primary-foreground hover:border-sage transition-all">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input type="text" placeholder="Full Name" className="w-full px-6 py-4 bg-background rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-sage placeholder:text-foreground/30" />
              <input type="email" placeholder="Email Address" className="w-full px-6 py-4 bg-background rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-sage placeholder:text-foreground/30" />
            </div>
            <textarea rows={5} placeholder="What's on your mind?" className="w-full px-6 py-4 bg-background rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-sage placeholder:text-foreground/30 resize-none" />
            <button type="submit" className="w-full py-5 bg-foreground text-background rounded-2xl font-bold uppercase tracking-[0.25em] text-xs hover:bg-sage transition-all">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-foreground/5 bg-background text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="font-display font-extrabold text-2xl tracking-tighter text-sage uppercase">Horizons</div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-10 opacity-60 font-medium">
            <a href="#" className="hover:text-sage transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sage transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-sage transition-colors">Partner with Us</a>
            <a href="#" className="hover:text-sage transition-colors">Careers</a>
          </div>
          <p className="opacity-40 text-xs">© 2026 Horizons Travel Studio</p>
        </div>
      </footer>
    </div>
  );
}

import { Droplets, Sparkles, Truck, MapPin, Phone, Instagram, Mail, Link2, Coffee, UtensilsCrossed, PartyPopper, Hotel, Store, Building2, Heart } from "lucide-react";
import { site, wa } from "@/lib/config";

const grad = "bg-gradient-to-br from-[#04104a] via-[#0038a8] to-[#0095d0]";
const navy = "text-[#060f4a]";
const wrap = "mx-auto w-full max-w-5xl px-6";

const features = [
  { Icon: Droplets, title: "Pure & purified", text: "Multi-stage purified, high-quality drinking water." },
  { Icon: Sparkles, title: "Your brand, your label", text: "Custom logo & label design that boosts marketing and brand appearance." },
  { Icon: Truck, title: "Reliable delivery", text: "On-time supply across Wah Cantt to Islamabad." },
];
const bottles = [
  { size: "500ml", text: "Perfect for events, meetings, cafe tables & guests on the go." },
  { size: "1.5L", text: "Ideal for offices, hotel rooms, restaurants & family dining." },
];
const serve = [[Coffee, "Cafes"], [UtensilsCrossed, "Restaurants"], [PartyPopper, "Events"], [Hotel, "Hotels"], [Store, "Shops"], [Building2, "Offices"], [Heart, "Marriage Halls"]] as const;
const areas = ["Wah Cantt", "Hassan Abdal", "Taxila", "Rawalpindi", "B-17 Islamabad"];
const contacts = [
  { Icon: Phone, label: "0325-1222622", href: site.phoneHref },
  { Icon: Instagram, label: "@triqua.waters", href: site.instagram },
  { Icon: Mail, label: site.email, href: `mailto:${site.email}` },
  { Icon: Link2, label: "linktr.ee/triqua.waters", href: site.linktree },
];

const Wave = ({ className = "", fill = "#f5faff" }: { className?: string; fill?: string }) => (
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden className={`block h-12 w-full sm:h-20 ${className}`}>
    <path fill={fill} d="M0 50C240 20 420 8 720 22C1020 36 1200 14 1440 4V80H0Z" />
  </svg>
);

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className={`${grad} relative text-white`}>
        <div className={`${wrap} grid max-w-6xl items-center gap-10 py-16 sm:py-24 lg:grid-cols-2`}>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-cyan-300"><Droplets size={16} />Private-label water supply</span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] sm:text-7xl">Label every bottle,<br /><span className="bg-gradient-to-r from-[#0a7be0] to-[#19c3f0] bg-clip-text text-transparent">mark every sip.</span></h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-white/85">Purified, high-quality water bottled with <em>your</em> logo and label design turning every sip into brand visibility.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={wa()} target="_blank" rel="noopener noreferrer" className="rounded-full bg-gradient-to-r from-[#0a6be8] to-[#2dd4f0] px-8 py-4 font-semibold text-[#060f4a] transition hover:brightness-110">Order on WhatsApp</a>
              <a href={site.phoneHref} className="rounded-full border border-white/30 px-8 py-4 font-semibold transition hover:bg-white/10">0325-1222622</a>
            </div>
          </div>
          {/* HERO IMAGE: drop your photo at public/images/hero.jpg (square works best). Until then this stays blank. */}
          <div role="img" aria-label="Triqua customized water bottles with your brand label" className="aspect-square w-full rounded-[2.5rem] bg-[#e9f4fb] bg-cover bg-center shadow-2xl" style={{ backgroundImage: "url(/images/hero.jpeg)" }} />
        </div>
        <Wave />
      </section>

      {/* TURNKEY */}
      <section className="py-20 sm:py-24">
        <div className={`${wrap} text-center`}>
          <h2 className={`text-4xl font-bold ${navy}`}>Turnkey co-branding</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">From purification and packaging to personalised labels we handle everything, you get an exclusive identity.</p>
          <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
            {features.map(({ Icon, title, text }) => (
              <div key={title} className="rounded-[2rem] border border-sky-100 bg-white p-8">
                <span className="grid size-[60px] place-items-center rounded-full bg-gradient-to-br from-[#0a6be8] to-[#2dd4f0] text-[#060f4a]"><Icon size={24} /></span>
                <h3 className={`mt-6 text-xl font-bold ${navy}`}>{title}</h3>
                <p className="mt-2 text-slate-500">{text}</p>
              </div>))}
          </div>
        </div>
      </section>

      {/* BOTTLES */}
      <section className="bg-[#dbf2fe] py-16 sm:py-20">
        <div className={`${wrap} max-w-6xl`}>
          <h2 className={`text-center text-4xl font-bold ${navy}`}>Our bottles</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {bottles.map((b) => (
              <div key={b.size} className={`${grad} rounded-[2rem] p-10 text-white`}>
                <p className="font-head text-6xl font-bold text-[#0a7be0]">{b.size}</p>
                <p className="mt-8 text-lg text-white/90">{b.text}</p>
                <p className="mt-9 text-cyan-300">Standard cylindrical · Textured diamond-faceted</p>
              </div>))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE + AREAS */}
      <section className="pt-20 sm:pt-24">
        <div className={`${wrap} max-w-6xl text-center`}>
          <h2 className={`text-4xl font-bold ${navy}`}>Who we serve</h2>
          <ul className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-7">
            {serve.map(([Icon, label]) => (
              <li key={label} className="flex flex-col items-center gap-3 rounded-[1.75rem] border border-sky-100 bg-white px-3 py-6 text-sm font-semibold"><Icon className="text-[#0a6be8]" size={30} />{label}</li>))}
          </ul>
          <h2 className={`mt-20 text-2xl font-bold ${navy}`}>Service areas</h2>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {areas.map((a) => (<li key={a} className="inline-flex items-center gap-2 rounded-full bg-[#dbf2fe] px-5 py-3 font-medium"><MapPin size={18} className="text-[#0a6be8]" />{a}</li>))}
          </ul>
        </div>
        <Wave className="mt-20" fill="#04104a" />
      </section>

      {/* CTA + FOOTER */}
      <section className={`${grad} -mt-px pb-12 pt-6 text-center text-white`}>
        <div className={`${wrap} max-w-6xl`}>
          <h2 className="text-4xl font-bold sm:text-5xl">Put your brand in every hand.</h2>
          <p className="mt-4 text-lg text-white/85">Aapki identity, har boond ke sath.</p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contacts.map(({ Icon, label, href }) => (
              <li key={label}><a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex h-16 items-center justify-center gap-3 rounded-full bg-white/10 px-4 transition hover:bg-white/20"><Icon size={18} className="text-cyan-300" />{label}</a></li>))}
          </ul>
          <p className="mt-10 text-sm text-white/65">© {site.name} · {site.location}</p>
        </div>
      </section>
    </main>
  );
}

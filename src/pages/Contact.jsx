import React from "react";

export default function Contact() {
  return (
    <section className="min-h-screen w-full bg-[#070E2C] text-white flex flex-col font-sans antialiased">

      {/* HEADER
      <header className="h- w-full border-b border-white/[0.06] flex items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white text-[#070E2C] font-bold text-xs flex items-center justify-center">A</div>
          <span className="text- font-semibold">Averixa Digital</span>
        </div>

        <div className="hidden md:flex items-center gap-1 bg-[#121A3F] border border-white/10 rounded-full p-1">
          <span className="px-4 py-1.5 text-xs text-white/50">Home</span>
          <span className="px-4 py-1.5 text-xs text-white/50">Service</span>
          <span className="px-4 py-1.5 text-xs text-white/50">About</span>
          <span className="px-4 py-1.5 text-xs text-white/50">Portfolio</span>
          <span className="px-4 py-1.5 text-xs bg-[#3B5BFF] rounded-full text-white font-medium">Contact</span>
        </div>

        <button className="bg-[#3B5BFF] hover:bg-[#344fe6] transition text-white text-xs font-medium px-4 py-2 rounded-lg">
          Book a session
        </button>
      </header> */}

      {/* BODY */}
      <div className="flex-1 px-6 lg:px-12 pt-16 relative">
        <p className="text- tracking-[0.2em] text-[#8FE9A3] font-semibold mb-4">CONTACT</p>

        <h1 style={{fontSize: '46px', lineHeight: '46px'}} className="font-bold tracking-tight max-w-">
          Let's talk about your <span className="font-serif italic font-normal text-[#8FE9A3]">growth</span>
        </h1>

        <p className="text-white/50 text- mt-4 max-w- leading-6">
          The fastest way to reach us is WhatsApp. Send a message and the team will reply directly.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.85fr] gap-4 mt-12 max-w-">

          {/* WhatsApp */}
          <div className="rounded-2xl border border-[#8FE9A3]/60 bg-[#111941]/80 p-7">
            <p className="text- tracking-widest text-[#8FE9A3] font-semibold">WHATSAPP</p>
            <h2 className="text- lg:text- font-bold mt-3">+234 800 000 0000</h2>
            <p className="text-white/40 text- mt-2">Tell us what you need. We usually reply within one business day.</p>
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex mt-6 bg-[#6EDD82] hover:bg-[#5fd474] text-[#08120A] text-xs font-semibold px-5 py-3 rounded-lg transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Social - CLICKABLE NOW */}
          <div className="flex flex-col gap-4">

            {/* INSTAGRAM - CLICKABLE */}
            <a
              href="https://instagram.com/averixadigital"
              target="_blank"
              rel="noreferrer"
              className="group flex-1 w-full rounded-2xl border border-white/10 bg-[#111941]/70 p-5 flex items-center justify-between hover:border-white/20 hover:bg-[#162052] transition-all cursor-pointer"
            >
              <div>
                <p className="text- tracking-widest text-white/40">INSTAGRAM</p>
                <p className="text-sm font-semibold mt-1">@averixadigital</p>
              </div>
              <span className="text-xs text-white/50 group-hover:text-white transition">Follow →</span>
            </a>

            {/* TIKTOK - CLICKABLE */}
            <a
              href="https://tiktok.com/@averixadigital"
              target="_blank"
              rel="noreferrer"
              className="group flex-1 w-full rounded-2xl border border-white/10 bg-[#111941]/70 p-5 flex items-center justify-between hover:border-white/20 hover:bg-[#162052] transition-all cursor-pointer"
            >
              <div>
                <p className="text- tracking-widest text-white/40">TIKTOK</p>
                <p className="text-sm font-semibold mt-1">@averixadigital</p>
              </div>
              <span className="text-xs text-white/50 group-hover:text-white transition">Follow →</span>
            </a>

          </div>
        </div>
      </div>

      {/* FOOTER
      <footer className="h- mt-12 border-t border-white/10 flex items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-white text-[#070E2C] font-bold text- flex items-center justify-center">A</div>
          <span className="text-xs font-semibold">Averixa Digital</span>
        </div>
        <div className="flex gap-2">
          <a href="https://instagram.com/averixadigital" target="_blank" rel="noreferrer" className="text- px-3 py-1.5 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition">Instagram</a>
          <a href="https://tiktok.com/@averixadigital" target="_blank" rel="noreferrer" className="text- px-3 py-1.5 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition">TikTok</a>
          <a href="https://wa.me/2348000000000" target="_blank" rel="noreferrer" className="text- px-3 py-1.5 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition">WhatsApp</a>
        </div>
      </footer> */}
    </section>
  );
}
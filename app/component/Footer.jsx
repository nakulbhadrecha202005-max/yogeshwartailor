import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#2d1a24] border-t border-[#A376A2]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* --- Brand Column --- */}
            <div className="lg:col-span-2">
              <span className="font-outfit text-3xl font-black tracking-tighter text-[#F1EDEE] uppercase block mb-6">
                Yogeshwar<span style={{ color: "#C08552" }}>.</span>
              </span>
              <p className="text-[#F1EDEE]/60 font-medium text-sm leading-relaxed max-w-sm mb-8">
                Premium ladies bespoke tailoring since 1999. Every garment
                stitched with love, skill, and an unwavering commitment to the
                perfect fit.
              </p>

              {/* Rating Section */}
              <div className="flex items-center gap-2 bg-white/5 w-fit px-4 py-2 rounded-2xl border border-white/5">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="material-symbols-outlined text-[#C08552] text-lg fill-current"
                    >
                      star
                    </span>
                  ))}
                </div>
                <span className="text-[#F1EDEE]/50 text-[11px] font-black uppercase tracking-widest ml-2">
                  5000+ Happy Customers
                </span>
              </div>
            </div>

            {/* --- Links Column --- */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#C08552] mb-6">
                Quick Links
              </p>
              <ul className="space-y-4">
                {[
                  "Home",
                  "Why Choose Us",
                  "Our Outfits",
                  "Visit Shop",
                  "Dashboard",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#F1EDEE]/70 text-sm font-bold hover:text-[#C08552] transition-colors flex items-center group"
                    >
                      <span className="w-0 h-[2px] bg-[#C08552] transition-all group-hover:w-3 mr-0 group-hover:mr-2"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- Contact Column --- */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#C08552] mb-6">
                Contact Us
              </p>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-[#F1EDEE]/70 text-sm font-medium">
                  <span className="material-symbols-outlined text-[#A376A2] text-xl shrink-0">
                    location_on
                  </span>
                  <span>
                    Kedareshwar Road, Anand Shopping Center 2nd Floor,
                    Porbandar, Gujarat
                  </span>
                </li>
                <li className="flex items-center gap-3 text-[#F1EDEE]/70 text-sm font-medium">
                  <span className="material-symbols-outlined text-[#A376A2] text-xl shrink-0">
                    call
                  </span>
                  +91 8200392919
                </li>
                <li className="flex items-center gap-3 text-[#F1EDEE]/70 text-sm font-medium">
                  <span className="material-symbols-outlined text-[#A376A2] text-xl shrink-0">
                    mail
                  </span>
                  himeshbhadrecha@gmail.com
                </li>
                <li className="flex items-start gap-3 text-[#F1EDEE]/70 text-sm font-medium">
                  <span className="material-symbols-outlined text-[#A376A2] text-xl shrink-0">
                    schedule
                  </span>
                  <div className="leading-tight">
                    <p className="mb-1 text-[#F1EDEE]">
                      Mon – Sat: 10AM-1PM | 4PM-9PM
                    </p>
                    <p className="text-[11px] text-[#A376A2]">Sun: 9AM - 1PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- Copyright Bar --- */}
        <div className="bg-black/20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:group md:flex-row items-center justify-between gap-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F1EDEE]/30">
              © 2026 Yogeshwar Tailor — Crafting Confidence Since 1999
            </p>

            <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/5 shadow-inner">
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#F1EDEE]/40">
                Designed by
              </span>
              <span className="text-[11px] font-black tracking-widest text-[#C08552]">
                &lt;Er. Bhadrecha Nakul/&gt;
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

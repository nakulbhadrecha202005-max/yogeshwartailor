import React from "react";

export const metadata = {
  title: "Yogeshwar Tailor – Best Ladies Tailor in Porbandar",
  description:
    "Yogeshwar Tailor Shop on Kedareshwar Road, Porbandar offers quality stitching for women’s wear with perfect fitting, stylish designs, and affordable prices.",

  metadataBase: new URL("https://yogeshwartailor.vercel.app"),

  keywords: [
    "tailor in porbandar",
    "ladies tailor porbandar",
    "yogeshwar tailor porbandar",
    "kedareshwar road porbandar tailor",
    "blouse stitching porbandar",
    "women tailoring porbandar",
  ],

  authors: [{ name: "Yogeshwar Tailor" }],
};
const page = () => {
  return (
    <div>
      <section
        id="why-us"
        className="bg-[#1A1619] mt-25 py-20 md:py-32 overflow-hidden"
        /* Using a custom very dark neutral-charcoal to make the palette pop */
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#40F99B]"></span>
              <span className="text-[#40F99B] font-black text-[11px] uppercase tracking-[0.35em]">
                Why Choose Us
              </span>
              <span className="w-8 h-[2px] bg-[#40F99B]"></span>
            </div>
            <h2 className="font-outfit text-4xl md:text-5xl font-extrabold text-[#F1EDEE] leading-tight mb-4">
              We Make Clothes That <br />
              <span className="text-[#C08552]">Fit You Perfectly.</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              We don't just sew clothes. We make sure you feel happy and
              confident in every outfit we make.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "history_edu",
                title: "25 Years Experience",
                desc: "We have been stitching clothes since 1999. We know exactly how to give you the best look.",
              },
              {
                icon: "straighten",
                title: "Perfect Measurements",
                desc: "We take careful measurements to make sure the dress fits your body shape perfectly.",
              },
              {
                icon: "schedule",
                title: "On Time Delivery",
                desc: "We always give your clothes on time. You will never have to wait for your special function.",
              },
              {
                icon: "auto_awesome",
                title: "Modern Styles",
                desc: "We stay updated with the latest fashion and designs. We can make any design you show us.",
              },
              {
                icon: "check_circle",
                title: "Best Quality Work",
                desc: "We use high-quality thread and materials. Our stitching is strong and looks clean.",
              },
              {
                icon: "support_agent",
                title: "Easy Changes",
                desc: "If you want any small change after the dress is ready, we do it for free with a smile.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-[#A376A2]/10 border border-[#A376A2]/20 hover:border-[#C08552] transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#A376A2]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#C08552] transition-colors">
                  <span className="material-symbols-outlined text-3xl text-[#C08552] group-hover:text-[#1A1619]">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="font-outfit text-xl font-bold text-[#F1EDEE] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#A376A2] text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Box - Dark Contrast */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 p-10 rounded-[2.5rem] bg-gradient-to-br from-[#A376A2] to-[#7d567c] shadow-2xl shadow-black/50">
            <div className="text-center md:text-left">
              <p className="font-outfit font-extrabold text-white text-2xl mb-2">
                Design your dream outfit with us
              </p>
              <p className="text-[#F1EDEE]/80 text-sm font-medium">
                Contact us today and get your dream outfit ready!
              </p>
            </div>

            {/* Mint Button for High Action Contrast */}
            <a
              href="tel:+918200392919"
              className="bg-[#c597c5] text-[#1A1619] px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#F1EDEE] transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3 group"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-[#1A1619]/10 rounded-full group-hover:bg-[#A376A2]/20 transition-colors">
                <span className="material-symbols-outlined text-base animate-pulse">
                  call
                </span>
              </div>
              <span>Book My Appointment</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;

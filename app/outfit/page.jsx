import React from "react";

export const metadata = {
  title:
    "Outfits – Bridal, Lehenga, Kurti & Custom Stitching | Yogeshwar Tailor Porbandar",

  description:
    "Explore premium ladies outfits stitched at Yogeshwar Tailor Porbandar. We specialize in bridal blouses, designer lehengas, kurti pants, salwar suits, and custom bespoke tailoring with perfect fit since 1999.",

  metadataBase: new URL("https://yogeshwartailor.vercel.app"),

  keywords: [
    "ladies outfits porbandar",
    "bridal blouse stitching porbandar",
    "designer lehenga tailor porbandar",
    "kurti pant stitching porbandar",
    "salwar suit tailor porbandar",
    "yogeshwar tailor outfits",
    "custom stitching porbandar ladies wear",
    "bespoke tailoring porbandar",
  ],

  authors: [{ name: "Yogeshwar Tailor" }],
};

const page = () => {
  return (
    <div>
      <section
        id="outfits"
        className="bg-[#121012] mt-25 py-20 md:py-28 relative overflow-hidden"
      >
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_#A376A215_0%,_transparent_50%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C08552]"></span>
              <span className="text-[#C08552] font-black text-[12px] uppercase tracking-[0.4em]">
                Exquisite Craftsmanship
              </span>
              <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C08552]"></span>
            </div>
            <h2 className="font-outfit text-4xl md:text-6xl font-extrabold text-[#F1EDEE] mb-6 tracking-tight">
              Style That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C08552] to-[#A376A2]">
                Defines You
              </span>
            </h2>
            <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto leading-relaxed italic">
              "From everyday elegance to your grandest celebrations — every
              stitch tells a story of perfection."
            </p>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Bridal Blouse",
                desc: "Intricate Hand-Embroidery",
                img: "/images/Bridalblouse.avif",
              },
              {
                title: "Bride Chaniya Choli",
                desc: "Royal Wedding Collection",
                img: "/images/Bridal-Lehenga.jpg",
              },
              {
                title: "Designer Kurti",
                desc: "Indo-Western Fusion",
                img: "/images/Kurtipant.jpg",
              },
              {
                title: "Modern Salwar",
                desc: "Classic Contemporary Comfort",
                img: "/images/krtipant.webp",
              },
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                {/* Card Shadow/Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-b from-[#A376A2]/30 to-transparent rounded-[2rem] blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative bg-[#1A181B] rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#C08552]/40 transition-all duration-500">
                  {/* Image Container */}
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A181B] via-transparent to-transparent opacity-60 z-10" />
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
                    />
                    {/* Hover Mint Tag */}
                    <div className="absolute top-4 right-4 z-20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="bg-[#40F99B] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                        Premium Fit
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6 relative z-20">
                    <h4 className="font-outfit font-bold text-[#F1EDEE] text-lg mb-1 group-hover:text-[#C08552] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[#A376A2] text-xs font-medium tracking-wide uppercase opacity-80">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;

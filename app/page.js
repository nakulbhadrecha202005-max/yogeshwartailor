"use client"

import { useEffect } from "react";
import { auth } from "./lib/firebase"
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function page() {
const router = useRouter();
const [User, setUser] = useState(null);
const [comments,setComments] = useState([]);
useEffect(() => {
const CheckingUser_login = onAuthStateChanged(auth, (user) => {

if(user){
setUser(user);
}
});
return () => CheckingUser_login();
}, [router]);

const SignoutUser = () => {
auth.signOut();
router.push("/login");
}

return (

    <div>
         {/* <style jsx>{`
            *{
                border:1px solid black;
            }
        `}</style> */}
    {User && (
  <div 
    style={{
      width: '100%',
      backgroundColor: 'rgba(163, 118, 162, 0.08)', // #A376A2 with 8% opacity
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(163, 118, 162, 0.2)',
      paddingTop: 'calc(120px + 1rem)', // Automatically pushes below navbar
      paddingBottom: '1rem',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
      fontFamily: 'sans-serif',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          marginTop: '10px', // Removed margin to prevent cutting
      marginBottom:'-80px',
    }}
    className="relative z-0"
  >
    <div 
      style={{
        maxWidth: '80rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem'
      }}
    >
      {/* Left Side: Welcome Branding */}
      <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span 
            style={{
              fontSize: '9px',
              backgroundColor: '#A376A2',
              color: '#ffffff',
              fontWeight: 900,
              padding: '2px 8px',
              borderRadius: '4px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            Live Session
          </span>
          <h2 
            style={{
              fontSize: 'clamp(0.875rem, 4vw, 1rem)', 
              fontWeight: 800,
              color: '#2d1a24',
              margin: 0,
              letterSpacing: '-0.025em',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            Hello, {User?.displayName || User?.email.split('@')[0]}!
          </h2>
        </div>
        <p 
          style={{
            color: '#78716c', // stone-500
            fontSize: '11px',
            fontWeight: 500,
            margin: '4px 0 0 0',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            opacity: 0.8
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '12px', color: '#A376A2' }}>
            verified_user
          </span>
          Logged in: {User?.email}
        </p>
      </div>

      {/* Right Side: Profile & Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
        
        {/* The Avatar Frame */}
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <div 
            style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              border: '2px solid rgba(163, 118, 162, 0.3)',
              padding: '2px',
              transition: 'all 0.3s ease'
            }}
          >
            <img 
              src={User?.photoURL || `https://ui-avatars.com/api/?name=${User?.displayName || User?.email.split('@')[0]}&background=A376A2&color=fff`} 
              alt="Profile"
              style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
            />
          </div>
          {/* Online Indicator */}
          <div 
            style={{
              position: 'absolute',
              bottom: '2px',
              right: '2px',
              width: '10px',
              height: '10px',
              backgroundColor: '#10b981',
              border: '2px solid #ffffff',
              borderRadius: '50%'
            }}
          />
        </div>

        {/* Logout Action */}
        <button 
          onClick={SignoutUser} 
          style={{
            background: 'none',
            border: 'none',
            padding: '8px',
            color: '#78716c',
            cursor: 'pointer',
            transition: 'color 0.2s ease',
            display: 'flex',
            alignItems: 'center'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#2d1a24'}
          onMouseOut={(e) => e.currentTarget.style.color = '#78716c'}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>logout</span>
        </button>
      </div>

    </div>
  </div>
)}
    <section style={{
           // Softens the "blobs"
          background: `
            radial-gradient(circle at 20% 20%, rgba(240, 236, 246, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 80% 0%, rgba(132, 89, 79, 1) 0%, transparent 50%),
            radial-gradient(circle at 0% 80%, rgba(110, 73, 75, 1) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(85, 54, 70, 1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(96, 62, 72, 0.5) 0%, transparent 70%)
          `
        }} className="border-violet-900/30 bg-[#f0ecf6cb] mt-20 min-h-screen flex items-center pt-28 pb-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 w-full ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* TEXT CONTENT - Order 2 on mobile, 1 on Laptop */}
                <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-[2px] bg-[#C08552]"></span>
                        <span
                            className="text-[#904B1B] font-black text-[10px] md:text-[11px] uppercase tracking-[0.35em]">
                            Premium Tailoring Since 1999
                        </span>
                        <span className="w-8 h-[2px] bg-[#C08552] lg:hidden"></span>
                    </div>

                    <h1
                        className="font-outfit text-[#472A38] text-4xl sm:text-5xl xl:text-7xl font-extrabold text-midnight leading-[1.1] mb-6">
                        Outfits Crafted <br className="hidden sm:block" />
                        <span className="text-[#904B1B]">For You,</span> <br />
                        Not the Rack.
                    </h1>

                    <p
                        className="text-[#904B1B] text-base md:text-lg font-medium leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                        Yogeshwar Tailor has been crafting perfect-fitting ladies garments for over two decades.
                        From bridal blouses to designer kurtis — every stitch tells story.
                    </p>

                    <div
                        className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 w-full sm:w-auto">
                        <a href="#contact"
                            className="bg-[#A376A2] text-rose-50 px-8 py-4 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-[#C08552] transition-all shadow-xl shadow-blue-950/20 active:scale-95 flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-base">calendar_month</span>
                            Book Appointment
                        </a>
                        <a href="#why-us"
                            className="bg-[#C08552] text-slate-800 px-8 py-4 rounded-full font-bold text-[11px] uppercase tracking-widest border border-stone-200  hover:text-slate-800 transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-base">explore</span>
                            Explore Shop
                        </a>
                    </div>

                    {/* STATS SECTION */}
                    <div
                        className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 pt-8 border-t border-stone-200 w-full lg:w-max">
                        <div className="text-center lg:text-left">
                            <p className="font-outfit text-xl sm:text-2xl font-black text-midnight">5000<span
                                    className="text-[#C08552]">+</span></p>
                            <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1">Happy
                                Customers</p>
                        </div>
                        <div className="text-center lg:text-left border-x border-stone-200 px-4 sm:px-8">
                            <p className="font-outfit text-xl sm:text-2xl font-black text-midnight">25<span
                                    className="text-[#C08552]">+</span></p>
                            <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1">Years
                                Exp.</p>
                        </div>
                        <div className="text-center lg:text-left">
                            <p className="font-outfit text-xl sm:text-2xl font-black text-midnight">12K<span
                                    className="text-[#C08552]">+</span></p>
                            <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1">Stitched
                            </p>
                        </div>
                    </div>
                </div>

                {/* IMAGE SECTION - Order 1 on mobile, 2 on Laptop */}
                <div className="order-1 lg:order-2 relative px-4 sm:px-0">
                    <div
                        className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden border-4 sm:border-8 border-white shadow-2xl bg-stone-100 aspect-square lg:aspect-[4/5]">

                        {/* Background Image */}
                        <img src="/images/photo.jpg" alt="Yogeshwar Tailor Shop"
                            className="absolute inset-0 w-full h-full object-cover" />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/10 transition-opacity hover:opacity-0 duration-500">
                        </div>

                        {/* Est Since Badge - Bottom Right */}
                        <div
                            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur rounded-2xl px-4 py-2 sm:px-6 sm:py-3 shadow-lg border border-stone-100 text-center">
                            <p className="font-outfit font-black text-lg sm:text-2xl text-[#C08552]">1999</p>
                            <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-slate-500">
                                Est. Since</p>
                        </div>

                        {/* Trusted Badge - Top Left */}
                        <div
                            className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[#A376A2] text-rose-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl flex items-center gap-2 shadow-lg scale-90 sm:scale-100">
                            <span
                                className="material-symbols-outlined text-xs sm:text-sm text-emerald-400">verified</span>
                            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest">Trusted
                                Tailor</span>
                        </div>
                    </div>

                    {/* Decorative Blobs - Hidden on smallest screens to avoid horizontal scroll */}
                    <div
                        className="absolute -bottom-8 -left-8 w-32 h-32 sm:w-48 sm:h-48 bg-[#C08552]/10 rounded-full -z-10 blur-xl">
                    </div>
                    <div
                        className="absolute -top-8 -right-3 w-24 h-24 sm:w-32 sm:h-32 bg-[#A376A2]/20 rounded-full -z-10 blur-xl">
                    </div>
                </div>
            </div>
        </div>
    </section>
    
        {/* second section */}
    <section id="why-us" className="bg-[#F5F5F5] py-20 md:py-28"> {/* White Smoke Background */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Header */}
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="w-8 h-[1px] bg-[#C08552]"></span>
        <span className="text-[#C08552] font-black text-[11px] uppercase tracking-[0.4em]">Our Promise</span>
        <span className="w-8 h-[1px] bg-[#C08552]"></span>
      </div>
      <h2 className="font-outfit text-3xl md:text-5xl font-extrabold text-[#472A38] mb-6">
        Why Choose Yogeshwar Tailor?
      </h2>
      <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
        For over 25 years, our customers return to us for one simple reason — we never compromise on fit,
        quality, or trust.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

      {/* Card 1 */}
      <div className="group bg-[#F1EDEE] rounded-3xl p-8 border border-white/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C08552]/10 transition-all duration-500 cursor-default">
        <div className="w-14 h-14 rounded-2xl bg-[#472A38] flex items-center justify-center mb-6 group-hover:bg-[#C08552] transition-colors duration-500 shadow-lg shadow-black/10">
          <span className="material-symbols-outlined text-white text-2xl">straighten</span>
        </div>
        <h3 className="font-outfit font-extrabold text-xl text-[#472A38] mb-3">Perfect Fitting Guarantee</h3>
        <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">
          Every garment is hand-measured and tailored specifically to your body. If the fit isn't perfect,
          we re-stitch it — free of charge.
        </p>
        <div className="flex items-center gap-2 text-[#C08552] border-t border-[#472A38]/5 pt-4">
          <span className="material-symbols-outlined text-base">verified</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Satisfaction Assured</span>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group bg-[#F1EDEE] rounded-3xl p-8 border border-white/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C08552]/10 transition-all duration-500 cursor-default">
        <div className="w-14 h-14 rounded-2xl bg-[#472A38] flex items-center justify-center mb-6 group-hover:bg-[#C08552] transition-colors duration-500 shadow-lg shadow-black/10">
          <span className="material-symbols-outlined text-white text-2xl">workspace_premium</span>
        </div>
        <h3 className="font-outfit font-extrabold text-xl text-[#472A38] mb-3">Experienced Since 1999</h3>
        <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">
          Our master tailors bring over 25 years of expertise. We have crafted more than 12,000 garments —
          each stitch reflects decades of skill.
        </p>
        <div className="flex items-center gap-2 text-[#C08552] border-t border-[#472A38]/5 pt-4">
          <span className="material-symbols-outlined text-base">verified</span>
          <span className="text-[10px] font-black uppercase tracking-widest">25+ Years Legacy</span>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group bg-[#F1EDEE] rounded-3xl p-8 border border-white/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C08552]/10 transition-all duration-500 cursor-default">
        <div className="w-14 h-14 rounded-2xl bg-[#472A38] flex items-center justify-center mb-6 group-hover:bg-[#C08552] transition-colors duration-500 shadow-lg shadow-black/10">
          <span className="material-symbols-outlined text-white text-2xl">person_pin</span>
        </div>
        <h3 className="font-outfit font-extrabold text-xl text-[#472A38] mb-3">Custom Records</h3>
        <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">
          We record and save every customer's precise measurements. Your next order is even faster — no
          need for re-measurement every time.
        </p>
        <div className="flex items-center gap-2 text-[#C08552] border-t border-[#472A38]/5 pt-4">
          <span className="material-symbols-outlined text-base">verified</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Personalised Records</span>
        </div>
      </div>

      {/* Card 4 */}
      <div className="group bg-[#F1EDEE] rounded-3xl p-8 border border-white/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C08552]/10 transition-all duration-500 cursor-default">
        <div className="w-14 h-14 rounded-2xl bg-[#472A38] flex items-center justify-center mb-6 group-hover:bg-[#C08552] transition-colors duration-500 shadow-lg shadow-black/10">
          <span className="material-symbols-outlined text-white text-2xl">diamond</span>
        </div>
        <h3 className="font-outfit font-extrabold text-xl text-[#472A38] mb-3">Premium Stitching</h3>
        <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">
          We use only high-quality threads and hand-finishing to ensure your
          garment looks stunning and lasts for years.
        </p>
        <div className="flex items-center gap-2 text-[#C08552] border-t border-[#472A38]/5 pt-4">
          <span className="material-symbols-outlined text-base">verified</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Premium Finish</span>
        </div>
      </div>

      {/* Card 5 */}
      <div className="group bg-[#F1EDEE] rounded-3xl p-8 border border-white/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C08552]/10 transition-all duration-500 cursor-default">
        <div className="w-14 h-14 rounded-2xl bg-[#472A38] flex items-center justify-center mb-6 group-hover:bg-[#C08552] transition-colors duration-500 shadow-lg shadow-black/10">
          <span className="material-symbols-outlined text-white text-2xl">local_florist</span>
        </div>
        <h3 className="font-outfit font-extrabold text-xl text-[#472A38] mb-3">Bridal Specialists</h3>
        <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">
          From intricate bridal blouses to festive wear, we specialise in outfits that
          make you feel like royalty.
        </p>
        <div className="flex items-center gap-2 text-[#C08552] border-t border-[#472A38]/5 pt-4">
          <span className="material-symbols-outlined text-base">verified</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Wedding Experts</span>
        </div>
      </div>

      {/* Card 6 */}
      <div className="group bg-[#F1EDEE] rounded-3xl p-8 border border-white/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C08552]/10 transition-all duration-500 cursor-default">
        <div className="w-14 h-14 rounded-2xl bg-[#472A38] flex items-center justify-center mb-6 group-hover:bg-[#C08552] transition-colors duration-500 shadow-lg shadow-black/10">
          <span className="material-symbols-outlined text-white text-2xl">local_shipping</span>
        </div>
        <h3 className="font-outfit font-extrabold text-xl text-[#472A38] mb-3">On-Time Delivery</h3>
        <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">
          We respect your time. Standard orders delivered within 7–10 days. Urgent stitching available
          on request.
        </p>
        <div className="flex items-center gap-2 text-[#C08552] border-t border-[#472A38]/5 pt-4">
          <span className="material-symbols-outlined text-base">verified</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Reliable Always</span>
        </div>
      </div>

    </div>
  </div>
        </section>
        
        {/* third section */}
        <section className="relative py-16 md:py-36 overflow-hidden bg-[#F1EDEE]">
  {/* Static Subtle Accents */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-0 w-full h-full opacity-30" 
         style={{ background: 'radial-gradient(circle at 90% 10%, #A376A2 0%, transparent 40%)' }} />
  </div>

  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

    {/* Header */}
    <div className="text-center mb-16 md:mb-28">
      <div className="inline-flex items-center gap-3 mb-4">
        <span className="w-8 md:w-12 h-[3px] rounded-full" style={{ backgroundColor: '#C08552' }} />
        <span className="font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em]" style={{ color: '#C08552' }}>
          Our Workflow
        </span>
        <span className="w-8 md:w-12 h-[3px] rounded-full" style={{ backgroundColor: '#C08552' }} />
      </div>
      <h2 className="font-outfit text-3xl md:text-5xl font-extrabold text-[#2d1a24] leading-tight mb-4 md:mb-6 px-2">
        How We Craft <span style={{ color: '#A376A2' }}>Your Style</span>
      </h2>
      <p className="text-slate-500 text-sm md:text-lg font-medium max-w-xl mx-auto leading-relaxed px-4">
        A seamless experience from your first visit to the final perfect fit.
      </p>
    </div>

    {/* ─── Unified Grid Layout ─────────────────── */}
    {/* Added 'overflow-visible' and adjusted gap for mobile */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 overflow-visible">
      {[
        { id: 1, title: "Visit Shop", icon: "storefront", desc: "Consult with our experts at your convenience", accent: "#A376A2" },
        { id: 2, title: "Choose Design", icon: "palette", desc: "Select from curated fabrics and patterns", accent: "#A376A2" },
        { id: 3, title: "Measurements", icon: "straighten", desc: "Detailed recording for a flawless drape", accent: "#A376A2" },
        { id: 4, title: "Expert Stitching", icon: "content_cut", desc: "Hand-crafted precision in every single seam", accent: "#40F99B" },
        { id: 5, title: "Trial Fitting", icon: "how_to_reg", desc: "Fine-tuning the fit for your absolute comfort", accent: "#40F99B" },
        { id: 6, title: "Final Delivery", icon: "celebration", desc: "Steam-pressed and ready for your occasion", accent: "#40F99B" },
      ].map((step) => (
        <div 
          key={step.id} 
          className="group relative bg-white p-6 md:p-8 rounded-[24px] md:rounded-[32px] shadow-sm border border-slate-100 transition-all duration-500 hover:shadow-xl md:hover:-translate-y-2"
        >
          
          {/* Step Number Badge - Adjusted positioning to prevent overflow */}
          <div className="absolute top-4 right-4 md:-top-3 md:-right-3 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-md border-2 md:border-4 border-white md:border-[#F1EDEE]"
               style={{ backgroundColor: '#C08552' }}>
            <span className="text-white font-black text-[10px] md:text-xs">{step.id}</span>
          </div>

          <div className="flex flex-col items-center text-center">
            {/* Icon Container */}
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-5 md:mb-6 transition-transform duration-500 group-hover:scale-110"
                 style={{ backgroundColor: `${step.accent}15` }}>
              <span className="material-symbols-outlined text-2xl md:text-3xl" style={{ color: step.accent }}>
                {step.icon}
              </span>
            </div>

            <h4 className="font-outfit font-bold text-lg md:text-xl text-[#2d1a24] mb-2 md:mb-3">
              {step.title}
            </h4>
            <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed">
              {step.desc}
            </p>
          </div>

          {/* Bottom Accent Bar */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 md:w-12 h-1 rounded-t-full transition-all duration-500 group-hover:w-20 md:group-hover:w-24"
               style={{ backgroundColor: step.accent }} />
        </div>
      ))}
    </div>

  </div>

  {/* Subtle Footer Divider */}
  <div className="absolute bottom-0 left-0 w-full h-px bg-slate-200/60" />
        </section>

    {/* fourth section */}
    <section id="outfits" className="relative py-16 md:py-32 bg-[#F1EDEE] overflow-hidden">
  
  {/* --- 1. INTERESTING DYNAMIC BACKGROUND (Overflow Safe) --- */}
  <div className="absolute inset-0 pointer-events-none select-none">
    {/* Large Soft Glows - Use percentages to stay within bounds */}
    <div 
      className="absolute top-0 left-[-10%] w-[50%] h-[50%] rounded-full blur-[80px] md:blur-[120px] opacity-20"
      style={{ backgroundColor: '#A376A2' }}
    />
    <div 
      className="absolute bottom-0 right-[-10%] w-[50%] h-[50%] rounded-full blur-[80px] md:blur-[120px] opacity-20"
      style={{ backgroundColor: '#C08552' }}
    />

    {/* Subtle Pattern Overlay */}
    <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
      style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/graphy.png")` }} 
    />
  </div>

  {/* --- 2. MAIN CONTAINER --- */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header Section */}
    <div className="text-center mb-12 md:mb-20">
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="w-8 md:w-10 h-[2px]" style={{ backgroundColor: '#C08552' }}></span>
        <span className="font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em]" style={{ color: '#C08552' }}>
          Our Specialities
        </span>
        <span className="w-8 md:w-10 h-[2px]" style={{ backgroundColor: '#C08552' }}></span>
      </div>
      <h2 className="font-outfit text-3xl md:text-6xl font-extrabold text-[#2d1a24] mb-4 md:mb-6 tracking-tight">
        Outfits We <span style={{ color: '#A376A2' }}>Perfect</span>
      </h2>
      <p className="text-slate-500 text-sm md:text-lg font-medium max-w-xl mx-auto leading-relaxed px-2">
        Scroll through our most-loved custom designs, each tailored to your unique story.
      </p>
    </div>

    {/* --- 3. RESPONSIVE GRID (NO OVERFLOW) --- */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 overflow-visible">
      {[
        { title: "Bridal Blouse", img: "/images/Bridalblouse.avif", desc: "Intricate Handwork", mt: "md:mt-0" },
        { title: "Bride Lehenga", img: "/images/Bridal-Lehenga.jpg", desc: "Grand Silhouettes", mt: "md:mt-12" },
        { title: "Kurti with Pant", img: "/images/Kurtipant.jpg", desc: "Modern Chic", mt: "md:mt-0" },
        { title: "Kurti with Salwar", img: "/images/krtipant.webp", desc: "Classic Comfort", mt: "md:mt-12" },
      ].map((item, index) => (
        <div
          key={index}
          className={`group relative bg-white/60 backdrop-blur-sm rounded-[2rem] md:rounded-[2.5rem] p-3 md:p-4 border border-white/50 transition-all duration-500 hover:shadow-2xl ${item.mt}`}
        >
          {/* Image Container - Using aspect-ratio for consistency */}
          <div className="aspect-[3/4] overflow-hidden rounded-[1.6rem] md:rounded-[2rem] relative bg-[#F1EDEE]">
            <img 
              src={item.img} 
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            {/* Overlay for mobile touch */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2d1a24]/40 to-transparent md:opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="absolute top-3 right-3 bg-[#40F99B] text-[#2d1a24] text-[8px] md:text-[9px] font-black uppercase px-2.5 py-1 rounded-full shadow-lg">
              Popular
            </div>
          </div>

          <div className="pt-4 pb-2 px-1 text-center">
            <h4 className="font-outfit font-black text-[#2d1a24] text-base md:text-lg leading-tight mb-1">
              {item.title}
            </h4>
            <p className="text-[#C08552] text-[10px] md:text-xs font-bold uppercase tracking-widest">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* --- 4. CTA BUTTON (MOBILE OPTIMIZED) --- */}
    <div className="text-center mt-12 md:mt-24 pb-4">
      <a href="tel:+918200392919"
        className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 md:px-14 py-4 md:py-5 rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-xl text-white"
        style={{ backgroundColor: '#2d1a24' }}>
        <span className="w-2 h-2 rounded-full bg-[#40F99B] animate-pulse" />
        Start Your Custom Stitching
        <span className="material-symbols-outlined text-sm md:text-base group-hover:translate-x-1 transition-transform">east</span>
      </a>
    </div>

  </div>
</section>


        {/* fifth section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#2d1a24]">
  
  {/* --- 1. DYNAMIC BACKGROUND (Hydration Safe) --- */}
  <div className="absolute inset-0 pointer-events-none">
    {/* Glows */}
    <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full blur-[100px] md:blur-[120px] opacity-20 translate-x-1/4 -translate-y-1/4"
         style={{ backgroundColor: '#A376A2' }} />
    <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full blur-[80px] md:blur-[100px] opacity-10 -translate-x-1/4 translate-y-1/4"
         style={{ backgroundColor: '#C08552' }} />
    
    {/* Pattern - Changed to a standard CSS background property to avoid SVG mismatches */}
    <div className="absolute inset-0 opacity-[0.05]" 
         style={{ 
           backgroundImage: 'radial-gradient(#F1EDEE 1px, transparent 1px)', 
           backgroundSize: '40px 40px' 
         }} />
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

    {/* Header Section */}
    <div className="text-center mb-16 md:mb-20">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-8 md:w-10 h-[2px]" style={{ backgroundColor: '#C08552' }} />
        <span className="font-black text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-white/60">
          Our Heritage
        </span>
        <div className="w-8 md:w-10 h-[2px]" style={{ backgroundColor: '#C08552' }} />
      </div>
      <h2 className="font-outfit text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
        Trusted by <span style={{ color: '#C08552' }}>Families</span> for Decades
      </h2>
      <p className="text-[#F1EDEE]/60 text-base md:text-lg font-medium max-w-xl mx-auto leading-relaxed px-4">
        Our legacy in numbers — built on craftsmanship, trust, and thousands of perfectly fitted garments.
      </p>
    </div>

    {/* --- 2. THE STAT CARDS --- */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
      {[
        { val: "25", label: "Years Experience", icon: "workspace_premium" },
        { val: "5K", label: "Happy Customers", icon: "people" },
        { val: "12K", label: "Outfits Stitched", icon: "checkroom" },
        { val: "95", label: "Repeat Rate", icon: "favorite", unit: "%" }
      ].map((stat, i) => (
        <div key={i} className="group relative bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2rem] p-6 md:p-10 text-center transition-all duration-500 hover:bg-white/[0.08] hover:border-[#C08552]/40">
          
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-500 group-hover:scale-110"
               style={{ backgroundColor: '#C08552' }}>
            <span className="material-symbols-outlined text-white text-2xl">{stat.icon}</span>
          </div>

          <div className="flex items-baseline justify-center gap-1 mb-2">
            <span className="font-outfit font-black text-4xl md:text-5xl text-white tracking-tighter">
              {stat.val}
            </span>
            <span className="text-xl md:text-2xl font-bold" style={{ color: '#40F99B' }}>
              {stat.unit || "+"}
            </span>
          </div>
          
          {/* Using div instead of p for labels to prevent potential nesting issues */}
          <div className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-white/80 transition-colors">
            {stat.label}
          </div>
        </div>
      ))}
    </div>

    {/* --- 3. REVIEWS SECTION --- */}
    <div className="w-full max-w-4xl mx-auto mt-20">
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#2d1a24] to-transparent z-20 pointer-events-none" />
        
        {/* max-h and overflow-y stay as is, perfectly safe for hydration */}
        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar relative z-10">
           <div className="p-6 bg-white/5 border border-white/5 rounded-2xl italic text-white/50 text-center">
              Real-time customer feedback appears here...
           </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#2d1a24] to-transparent z-20 pointer-events-none" />
      </div>

      <div className="mt-12 flex justify-center">
        <Link href="/comments/HomedisplayComments">
          <div className="group relative px-10 py-4 cursor-pointer border border-[#C08552]/30 text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:bg-[#C08552] text-center">
            <span className="relative z-10 flex items-center justify-center gap-3">
              View Customer Reviews
              <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">expand_more</span>
            </span>
          </div>
        </Link>
      </div>
    </div>

  </div>

  {/* Footer Border */}
  <div className="absolute bottom-0 left-0 w-full h-px opacity-20"
       style={{ background: 'linear-gradient(90deg, transparent, #C08552, transparent)' }} />
</section>

        {/* sixth section  */}

      <section className="relative py-24 md:py-32 overflow-hidden bg-[#F1EDEE]">
  
  {/* --- 1. THE "SILK & BONE" TEXTURED BACKGROUND --- */}
  <div className="absolute inset-0 pointer-events-none select-none">
    {/* Subtle Mesh Gradient for Depth */}
    <div className="absolute top-0 right-0 w-[50%] h-[50%] rounded-full blur-[120px] opacity-20"
         style={{ backgroundColor: '#A376A2' }} />
    <div className="absolute bottom-0 left-0 w-[40%] h-[40%] rounded-full blur-[100px] opacity-15"
         style={{ backgroundColor: '#C08552' }} />
    
    {/* Refined Texture: Subtle Cross-hatch (Fabric weave) */}
    <div className="absolute inset-0 opacity-[0.04]" 
         style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/pinstriped-suit.png")` }} />
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

      {/* --- LEFT SIDE: THE HERO CARD --- */}
      <div className="relative">
        {/* Card with a "Lifted" Shadow */}
        <div className="bg-white rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(45,26,36,0.1)] border border-white p-10 md:p-14 relative overflow-hidden group">
          
          {/* THE BLACK TROPHY - Fixed to "Shine" via a Metallic Gold backdrop */}
          <div className="relative w-24 h-24 rounded-[2rem] flex items-center justify-center mb-10 shadow-inner overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C08552] via-[#f3d3b6] to-[#C08552] animate-gradient-slow" />
            <span className="material-symbols-outlined text-black text-5xl relative z-10 font-bold drop-shadow-sm">
              emoji_events
            </span>
          </div>

          <h3 className="font-outfit font-black text-3xl md:text-5xl text-[#2d1a24] mb-6 leading-tight tracking-tight">
            Tailoring That <span style={{ color: '#A376A2' }}>Elevates</span> Your Presence
          </h3>
          
          <p className="text-slate-500 font-medium leading-relaxed mb-10 text-lg">
            At Yogeshwar Tailor, we don't just stitch clothes. We craft architectural fits that make you feel confident and uniquely you.
          </p>

          {/* Clean Glassmorphism Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "100%", label: "Custom Made", color: "#C08552", bg: "#FDF9F3" },
              { num: "Free", label: "Alterations", color: "#2d1a24", bg: "#F1EDEE" },
              { num: "7–10", label: "Days Delivery", color: "#C08552", bg: "#FDF9F3" },
              { num: "Saved", label: "Measurement", color: "#2d1a24", bg: "#F1EDEE" }
            ].map((box, i) => (
              <div key={i} className="rounded-2xl p-6 border border-white/50 shadow-sm transition-all hover:shadow-md"
                   style={{ backgroundColor: box.bg }}>
                <p className="font-outfit font-black text-3xl mb-1" style={{ color: box.color }}>{box.num}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{box.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Verified Badge (Contrast Green) */}
        <div className="absolute -bottom-6 -right-4 bg-[#2d1a24] text-[#F1EDEE] rounded-2xl p-5 shadow-2xl hidden sm:flex items-center gap-4 border border-white/10">
          <div className="w-10 h-10 rounded-full bg-[#40F99B]/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-[#40F99B] text-2xl font-bold">verified</span>
          </div>
          <div>
            <p className="font-outfit font-black text-sm">Quality</p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-[#A376A2]">Guaranteed</p>
          </div>
        </div>
      </div>

      {/* --- RIGHT SIDE: BENEFITS LIST --- */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <span className="w-12 h-[3px] rounded-full" style={{ backgroundColor: '#C08552' }} />
          <span className="font-black text-[11px] uppercase tracking-[0.4em]" style={{ color: '#C08552' }}>
            The Tailor Difference
          </span>
        </div>
        
        <h2 className="font-outfit text-4xl md:text-6xl font-black text-[#2d1a24] mb-8 leading-[1.1]">
          Why Our Stitching<br />Is <span className="italic font-medium">Legendary</span>
        </h2>
        
        <div className="space-y-6">
          {[
            { icon: "straighten", title: "Perfect Fitting Guaranteed", desc: "Every garment tailored to your exact body shape—no loose ends, no tight spots." },
            { icon: "save", title: "Measurements Saved for Life", desc: "We store your records securely. Future orders are faster—no re-measurement needed." },
            { icon: "design_services", title: "Free Alteration Support", desc: "Not fully satisfied? We offer free alterations until you're completely happy." }
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-6 p-6 rounded-3xl transition-all hover:bg-white hover:shadow-xl group cursor-default">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-2xl text-[#2d1a24] group-hover:text-[#A376A2] transition-colors">{item.icon}</span>
              </div>
              <div>
                <h4 className="font-outfit font-black text-[#2d1a24] text-xl mb-1">{item.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

        {/* section seven  */}
          
         <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-[#F1EDEE]">

  {/* --- 1. THE "LAVENDER GOSSAMER" BACKGROUND --- */}
  <div className="absolute inset-0 pointer-events-none select-none">
    {/* Large, soft Purple & Gold glows that "wash" over the light background */}
    <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
         style={{ backgroundColor: '#A376A2' }} />
    
    <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.15] blur-[100px]"
         style={{ backgroundColor: '#C08552' }} />

    {/* Subtle Luxury Pattern - Diagonal Stitched Lines */}
    <div className="absolute inset-0 opacity-[0.05]" 
         style={{ 
           backgroundImage: `repeating-linear-gradient(45deg, #2d1a24 0, #2d1a24 1px, transparent 0, transparent 50%)`, 
           backgroundSize: '30px 30px' 
         }} />
  </div>

  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

    {/* --- Header Section --- */}
    <div className="flex items-center justify-center gap-4 mb-6">
      <div className="w-10 h-[2px]" style={{ backgroundColor: '#A376A2' }} />
      <span className="text-[#2d1a24]/60 font-black text-[11px] uppercase tracking-[0.4em]">
        Get In Touch
      </span>
      <div className="w-10 h-[2px]" style={{ backgroundColor: '#A376A2' }} />
    </div>

    <h2 className="font-outfit text-4xl md:text-7xl font-black text-[#2d1a24] mb-8 leading-[1.1] tracking-tight">
      Visit Yogeshwar Tailor<br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A376A2] to-[#C08552] uppercase">
        Today
      </span>
    </h2>

    <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
      Experience the heritage of master craftsmanship. Whether it's a wedding or a formal suit, we're here to make you look your best.
    </p>

    {/* --- Action Buttons --- */}
    <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
      <a href="tel:+918200392919"
         className="flex items-center gap-3 px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest bg-[#2d1a24] text-white shadow-xl hover:scale-105 transition-all active:scale-95">
        <span className="material-symbols-outlined text-xl">calendar_month</span>
        Book Appointment
      </a>

      <a href="tel:+918200392919"
         className="flex items-center gap-3 px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest border border-[#A376A2]/30 text-[#2d1a24] hover:bg-[#A376A2]/10 transition-all active:scale-95">
        <span className="material-symbols-outlined text-xl">call</span>
        Call Now
      </a>

      <a href="https://maps.google.com" target="_blank" rel="noopener"
         className="flex items-center gap-3 px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest border border-[#A376A2]/30 text-[#2d1a24] hover:bg-[#A376A2]/10 transition-all active:scale-95">
        <span className="material-symbols-outlined text-xl">location_on</span>
        Visit Shop
      </a>
    </div>

    {/* --- Info Cards Grid --- */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {[
        { 
          icon: "location_on", 
          label: "Shop Address", 
          title: "Kedareshwar Road, Anand Shopping Center 27, Porbandar, Gujarat",
          accent: "#2d1a24" 
        },
        { 
          icon: "schedule", 
          label: "Shop Hours", 
          title: "Mon – Sat: 10AM-1PM & 4PM-9PM | Sunday: 10AM-1PM",
          accent: "#A376A2" 
        },
        { 
          icon: "alternate_email", 
          label: "Contact Us", 
          title: "+91 8200392919 himeshbhadrecha@gmail.com",
          accent: "#C08552" 
        }
      ].map((card, i) => (
        <div key={i} className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_30px_rgba(45,26,36,0.02)] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
          
          {/* Icon Circle */}
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-500 group-hover:rotate-[360deg] shadow-sm"
               style={{ backgroundColor: '#F1EDEE' }}>
            <span className="material-symbols-outlined text-2xl" style={{ color: card.accent }}>{card.icon}</span>
          </div>
          
          <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 text-slate-400">
            {card.label}
          </div>
          
          <div className="text-[#2d1a24] font-bold text-sm leading-relaxed">
            {card.title}
          </div>
          
          {/* Decorative bar at the bottom */}
          <div className="w-8 h-[3px] mx-auto mt-6 rounded-full opacity-30 transition-all group-hover:w-16"
               style={{ backgroundColor: card.accent }} />
        </div>
      ))}
    </div>
  </div>
        </section>
        
        {/* Question and section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-[#F1EDEE]">
  
  {/* --- 1. THE BRAND-COLORED AMBIANCE --- */}
  <div className="absolute inset-0 pointer-events-none select-none">
    {/* Large Lavender Glow */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]"
         style={{ backgroundColor: '#A376A2' }} />
    {/* Large Gold Glow */}
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.12] blur-[100px]"
         style={{ backgroundColor: '#C08552' }} />
  </div>

  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

    {/* --- Header Section --- */}
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="w-8 h-[2px]" style={{ backgroundColor: '#C08552' }}></span>
        <span className="font-black text-[11px] uppercase tracking-[0.4em]" style={{ color: '#A376A2' }}>
          Got Questions?
        </span>
        <span className="w-8 h-[2px]" style={{ backgroundColor: '#C08552' }}></span>
      </div>
      
      <h2 className="font-outfit text-4xl md:text-6xl font-black text-[#2d1a24] mb-6 leading-tight">
        Frequently Asked <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A376A2] to-[#C08552]">Questions</span>
      </h2>
      
      <p className="text-slate-500 text-lg font-medium max-w-xl mx-auto leading-relaxed opacity-80">
        Everything you need to know before your first visit — answered honestly.
      </p>
    </div>

    {/* --- FAQ Accordion --- */}
    <div className="space-y-4">
      {[
        { q: "How long does stitching usually take?", a: "Standard stitching takes 7 to 10 working days. For simpler garments like blouses, it can be ready in 5–7 days.", icon: "schedule" },
        { q: "Do you provide urgent stitching?", a: "Yes! We offer urgent stitching on request for weddings and festivals. Additional charges may apply.", icon: "speed" },
        { q: "Can I bring my own fabric?", a: "Absolutely! We welcome customer-provided fabric and handle it with the same master-level care.", icon: "inventory_2" },
        { q: "Do you save my measurements?", a: "Yes — we maintain a digital record of your fit, making future orders much faster and consistent.", icon: "save" }
      ].map((faq, i) => (
        <details key={i} className="group bg-white rounded-[2rem] border border-[#A376A2]/10 overflow-hidden shadow-[0_4px_20px_rgba(45,26,36,0.02)] transition-all duration-300 open:shadow-xl open:border-[#C08552]/30">
          <summary className="flex items-center justify-between gap-4 px-8 py-7 cursor-pointer list-none select-none hover:bg-[#FDF9F3] transition-colors duration-300">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all group-open:scale-110 group-open:bg-[#C08552] group-open:text-white bg-[#F1EDEE] text-[#A376A2]">
                <span className="material-symbols-outlined text-2xl">{faq.icon}</span>
              </div>
              <span className="font-outfit font-bold text-[#2d1a24] text-lg md:text-xl tracking-tight transition-colors group-open:text-[#C08552]">
                {faq.q}
              </span>
            </div>
            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center transition-all group-open:rotate-45 group-open:bg-[#2d1a24] group-open:border-[#2d1a24]">
              <span className="material-symbols-outlined text-slate-400 group-open:text-white text-xl">add</span>
            </div>
          </summary>
          
          <div className="px-8 pb-8">
            <div className="pl-0 md:pl-[68px]">
              <p className="text-slate-500 font-medium leading-relaxed text-base border-l-2 border-[#C08552]/20 pl-6">
                {faq.a}
              </p>
            </div>
          </div>
        </details>
      ))}
    </div>

    {/* --- Bottom CTA --- */}
    <div className="mt-16 text-center">
      <p className="text-[#2d1a24]/60 font-bold mb-6">Still have a question? We're happy to help.</p>
      <a href="tel:+918200392919"
         className="inline-flex items-center gap-3 bg-[#2d1a24] text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-[#A376A2] transition-all shadow-[0_15px_30px_rgba(45,26,36,0.2)] active:scale-95 group">
        <span className="material-symbols-outlined text-xl group-hover:rotate-12 transition-transform">support_agent</span>
        Ask Us Anything
      </a>
    </div>

  </div>
</section>
</div>
);
}
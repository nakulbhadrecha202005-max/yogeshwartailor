"use client";
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { db } from "@/app/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "Customer Reviews & Feedback – Yogeshwar Tailor Porbandar",

//   description:
//     "Read and share customer reviews, comments, and feedback for Yogeshwar Tailor Shop in Porbandar. Share your experience about stitching quality, fitting, and service.",

//   metadataBase: new URL("https://yogeshwartailor.vercel.app"),

//   keywords: [
//     "yogeshwar tailor reviews",
//     "tailor feedback porbandar",
//     "customer comments tailor shop",
//     "ladies tailor reviews porbandar",
//     "yogeshwar tailor feedback",
//     "tailor service reviews porbandar",
//   ],

//   authors: [{ name: "Yogeshwar Tailor" }],
// };

const page = () => {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [user, setUser] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    const checkAuth = onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log("Auth State Changed: ", user?.uid);
    });
    return () => checkAuth();
  }, []);

  if (!user) {
    return (
      <>
        <div className="max-w-md w-80 bg-[#F1EDEE] rounded-3xl m-auto mt-50 mb-20 shadow-2xl border border-white p-8 relative overflow-hidden font-sans">
          {/* Top Accent line using your Light Orange */}
          <div className="absolute top-0 left-0 w-full h-2 bg-[#C08552]"></div>

          <div className="mb-6">
            {/* Heading using your Purple */}
            <h4 className="text-sm font-black text-[#A376A2] uppercase tracking-wider">
              Join the Conversation
            </h4>
            <p className="text-slate-600 text-xs mt-2 font-medium">
              Please login to share your comments and rating with our community.
            </p>
          </div>

          <Link
            href="/login"
            /* Button using Purple base with Orange hover state */
            className="w-full py-3 bg-[#A376A2] hover:bg-[#C08552] text-white text-sm font-bold rounded-2xl shadow-lg shadow-[#A376A2]/20 transition-all duration-300 active:scale-[0.95] flex items-center justify-center gap-2"
          >
            Go to Login
            <span className="material-symbols-outlined text-sm">login</span>
          </Link>

          {/* Subtle bottom decorative element using your Green */}
          <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-[#40F99B]/10 rounded-full blur-2xl"></div>
        </div>
      </>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your Firebase logic here to save the comment
    if (!comment.trim() || rating === 0) {
      setIsSubmitting(false);
      return;
    }
    try {
      await addDoc(collection(db, "comments"), {
        textComments: comment,
        userId: user.uid,
        userName: user.displayName || user.email.split("@")[0] || "Anonymous",
        photoProfile:
          user.photoURL ||
          "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
        createdAt: serverTimestamp(),
        rating: rating || null,
        isApproved: false,
      });
    } catch (error) {
      alert("Error submitting comment in Google Firestore : ", error);
      setIsSubmitting(false);
      return;
    }
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Thank you for your feedback!");
      router.push("/");
      setComment("");
      setRating(0);
    }, 1500);
  };

  return (
    <div className="w-[90%] max-w-md bg-[#F1EDEE] rounded-3xl mt-40 mb-10 ml-auto mr-auto shadow-2xl border border-white p-8 relative overflow-hidden font-sans">
      {/* Top Accent line using your Light Orange */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[#C08552]"></div>

      <div className="mb-6">
        {/* Success Message using your Green palette */}
        {successMessage && (
          <p className="m-auto font-bold px-4 py-2 text-[#2e7d5a] text-center text-sm rounded-xl bg-[#40F99B]/20 border border-[#40F99B] mb-4 animate-bounce">
            {successMessage}
          </p>
        )}
        <h3 className="text-xl font-black text-[#A376A2] tracking-tight">
          Share Your Experience
        </h3>
        <p className="text-slate-500 text-xs mt-1 font-medium">
          Your feedback helps us maintain our "1000+ Clients" standard.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Star Rating Section */}
        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-black text-[#A376A2] uppercase tracking-[0.15em]">
            Overall Rating
          </label>
          <div className="flex gap-1 bg-white/50 w-fit p-2 rounded-2xl border border-white">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="transition-all transform active:scale-75 hover:scale-110"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              >
                <span
                  className={`material-symbols-outlined text-3xl ${
                    (hover || rating) >= star
                      ? "text-[#C08552]"
                      : "text-[#A376A2]/20"
                  }`}
                  style={{
                    fontVariationSettings: "'FILL' 1, 'wght' 400",
                  }}
                >
                  star
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Comment Textarea */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-black text-[#A376A2] uppercase tracking-[0.15em] flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">
              chat_bubble
            </span>
            Your Comments
          </label>
          <textarea
            required
            rows="4"
            spellCheck="false"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Tell us about the fit, fabric, or service..."
            className="w-full px-4 py-3 bg-white border border-[#A376A2]/20 rounded-2xl focus:ring-2 focus:ring-[#C08552] focus:border-[#C08552] outline-none transition-all text-sm resize-none text-slate-700 placeholder:text-slate-400"
          />
        </div>

        {/* Submit Button - Matches the Login style */}
        <button
          disabled={isSubmitting || !rating}
          type="submit"
          className="w-full py-4 bg-[#A376A2] hover:bg-[#C08552] text-white text-sm font-black rounded-2xl shadow-lg shadow-[#A376A2]/20 transition-all duration-300 active:scale-[0.96] disabled:opacity-40 disabled:grayscale flex items-center justify-center gap-2 uppercase tracking-widest"
        >
          {isSubmitting ? (
            "Posting..."
          ) : (
            <>
              Submit Review
              <span className="material-symbols-outlined text-sm">send</span>
            </>
          )}
        </button>
      </form>

      <p className="mt-6 text-[10px] text-center text-[#A376A2]/60 font-bold uppercase tracking-[0.2em]">
        Yogeshwar Tailoring © 2026
      </p>
    </div>
  );
};

export default page;

"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

// export const metadata = {
//   title: "Customer Comments & Reviews – Yogeshwar Tailor Porbandar",

//   description:
//     "Read all customer comments, reviews, and feedback for Yogeshwar Tailor Shop in Porbandar. See real experiences about stitching quality, fitting, and service from our customers.",

//   metadataBase: new URL("https://yogeshwartailor.vercel.app"),

//   keywords: [
//     "yogeshwar tailor reviews",
//     "tailor customer comments porbandar",
//     "ladies tailor feedback porbandar",
//     "customer reviews yogeshwar tailor",
//     "tailor shop reviews porbandar",
//     "real customer feedback tailor",
//   ],

//   authors: [{ name: "Yogeshwar Tailor" }],
// };

const Page = () => {
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("new"); // "new" or "old"

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "comments"));
        const commentsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, []);

  if (comments.length === 0) {
    return (
      <h2 className="mt-70 mb-30 text-4xl m-auto text-blue-800">
        Loading......
      </h2>
    );
  }

  const filter_comments = () => {
    return comments.filter(
      (e) =>
        e.textComments.toLowerCase().includes(search.toLowerCase()) ||
        e.userName.toLowerCase().includes(search.toLowerCase()),
    );
  };

  const getAvatarColor = (name) => {
    const firstLetter = name?.charAt(0).toUpperCase() || "U";

    // Map letters to specific Tailwind colors
    const colors = {
      A: "bg-red-800",
      B: "bg-blue-800",
      C: "bg-green-800",
      D: "bg-yellow-700",
      E: "bg-indigo-800",
      F: "bg-purple-800",
      G: "bg-pink-800",
      H: "bg-orange-700",
      I: "bg-teal-800",
      J: "bg-cyan-800",
      K: "bg-lime-700",
      L: "bg-amber-700",
      M: "bg-emerald-800",
      N: "bg-violet-800",
      O: "bg-fuchsia-800",
      P: "bg-rose-800",
      Q: "bg-sky-800",
      R: "bg-stone-700",
      S: "bg-neutral-700",
      T: "bg-zinc-700",
      U: "bg-gray-700",
      V: "bg-slate-700",
      W: "bg-red-600",
      X: "bg-blue-600",
      Y: "bg-green-600",
      Z: "bg-yellow-600",

      // ... add more or use a default
    };

    return colors[firstLetter] || "bg-slate-700"; // Default color
  };

  return (
    // Page background is now pure white
    <div className="min-h-screen mt-30 bg-gradient-to-br from-[#A376A2] via-[#A376A2]/10 to-[#C08552]/10 py-20 px-4 relative">
      {/* Ambient Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#A376A2]/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-[#C08552]/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Search Section --- */}
        <div className="relative w-full max-w-4xl mx-auto mb-20 group px-4">
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-[#40F99B] animate-pulse shadow-[0_0_8px_#40F99B]"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#A376A2] group-focus-within:text-[#C08552] transition-colors">
                Search and see you comments and other's
              </span>
            </div>
            <div className="hidden sm:block h-[1px] flex-1 mx-8 bg-[#A376A2]/20 group-focus-within:bg-[#C08552]/40 transition-colors"></div>
          </div>

          <div className="relative flex items-center bg-white/80 backdrop-blur-md rounded-full md:rounded-[2.5rem] p-1.5 md:p-2 shadow-[0_20px_50px_-20px_rgba(163,118,162,0.3)] border border-white transition-all duration-500 group-focus-within:border-[#C08552]/50">
            {/* Icon Container */}
            <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-[#A376A2] rounded-full md:rounded-[2rem] text-white shadow-lg shadow-[#A376A2]/30 shrink-0">
              <span className="material-symbols-outlined text-xl md:text-2xl">
                receipt_long
              </span>
            </div>

            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              spellCheck="false"
              placeholder="Search feedback..."
              className="flex-1 min-w-0 px-3 md:px-6 bg-transparent text-slate-800 font-bold md:font-extrabold text-base md:text-lg placeholder:text-slate-400 outline-none"
            />

            <div className="md:hidden pr-2 flex items-center">
              <span className="material-symbols-outlined text-[#A376A2]">
                swap_vert
              </span>
            </div>
          </div>
        </div>

        {/* --- Comments Grid --- */}
        <div className="max-w-2xl mx-auto space-y-6">
          {filter_comments().map((comment) => (
            <div
              key={comment.id}
              className="bg-[#a376a238] backdrop-blur-sm rounded-3xl p-4 md:p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-white hover:shadow-2xl hover:shadow-[#A376A2]/10 transition-all duration-300"
            >
              <div className="flex flex-col gap-5">
                {/* Profile & Name Section */}
                <div className="flex items-center gap-4">
                  <div className="shrink-0">
                    {comment.avatar ? (
                      <img
                        src={comment.avatar}
                        alt={comment.userName}
                        className={`w-14 h-14 rounded-full object-cover border-2 border-[#C08552] p-0.5`}
                      />
                    ) : (
                      <div
                        className={`w-14 h-14 rounded-full bg-gradient-to-br from-[#A376A2] to-[#C08552] flex items-center justify-center text-white font-bold shadow-inner`}
                      >
                        {comment.userName?.charAt(0).toUpperCase() || "U"}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-slate-900 font-bold text-lg leading-tight tracking-tight">
                      {comment.userName || "Anonymous"}
                    </h3>
                    <p className="text-[#A376A2] text-[10px] font-bold uppercase tracking-wider">
                      {comment.createdAt?.toDate
                        ? comment.createdAt
                            .toDate()
                            .toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })
                        : "March 31, 2026"}
                    </p>
                  </div>
                </div>

                {/* Comment Text */}
                <div className="flex-1 pl-1">
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
                    {comment.textComments || "No comment provided."}
                  </p>
                </div>

                {/* Stars Section */}
                <div className="mt-2 pt-4 border-t border-[#F1EDEE] flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`material-symbols-outlined text-xl ${
                          i < (comment.rating || 5)
                            ? "text-[#C08552]"
                            : "text-slate-200"
                        }`}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <div className="h-1.5 w-1.5 rounded-full bg-[#40F99B]"></div>
                </div>
              </div>
            </div>
          ))}

          {comments.length === 0 && (
            <p className="text-center text-[#A376A2] font-bold mt-10">
              No comments yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;

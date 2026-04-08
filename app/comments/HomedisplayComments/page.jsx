"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

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
    <div className="min-h-screen mt-30 bg-white py-10 px-4">
      <div className="relative w-full max-w-4xl mx-auto mb-20 group px-4">
        <div className="flex items-center justify-between mb-4 px-2">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-focus-within:text-blue-900 transition-colors">
              Search and see you comments and other's
            </span>
          </div>
          <div className="hidden sm:block h-[1px] flex-1 mx-8 bg-slate-100 group-focus-within:bg-blue-900/10 transition-colors"></div>
        </div>

        <div className="relative flex items-center bg-slate-300 rounded-full md:rounded-[2.5rem] p-1.5 md:p-2 shadow-[0_20px_50px_-20px_rgba(30,58,138,0.15)] border border-slate-100 transition-all duration-500 group-focus-within:border-blue-900/30 group-focus-within:shadow-[0_30px_70px_-20px_rgba(30,58,138,0.25)]">
          {/* Icon Container: Scaled down for mobile */}
          <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-blue-900 rounded-full md:rounded-[2rem] text-white shadow-lg shadow-blue-900/30 shrink-0">
            <span className="material-symbols-outlined text-xl md:text-2xl">
              receipt_long
            </span>
          </div>

          {/* Input: Adjusted text size and padding for mobile */}
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            spellCheck="false"
            placeholder="Search feedback..."
            // Note: Use a shorter placeholder for mobile or CSS logic for the long one
            className="flex-1 min-w-0 px-3 md:px-6 bg-transparent text-blue-900 font-bold md:font-extrabold text-base md:text-lg placeholder:text-slate-600 placeholder:font-medium outline-none"
          />

          {/* Mobile Sort Icon: Visible only on small screens */}
          <div className="md:hidden pr-2 flex items-center">
            <span className="material-symbols-outlined text-blue-900/40">
              swap_vert
            </span>
          </div>
        </div>

        <div className="absolute -bottom-6 right-10 flex items-center gap-4">
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-blue-900/10"></div>
            <div className="w-1 h-1 rounded-full bg-blue-900/20"></div>
            <div className="w-1 h-1 rounded-full bg-blue-900/40"></div>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto space-y-4">
        {filter_comments().map((comment) => (
          <div
            key={comment.id}
            className="bg-slate-300 rounded-2xl p-5 md:p-6 shadow-sm border border-slate-400/20"
          >
            {/* Changed md:flex-row to flex-col to keep comment below the name */}
            <div className="flex flex-col gap-4">
              {/* Profile & Name Section */}
              <div className="flex items-center gap-4">
                <div className="shrink-0">
                  {comment.avatar ? (
                    <img
                      src={comment.avatar}
                      alt={comment.userName}
                      className={`w-12 h-12 rounded-full object-cover border ${getAvatarColor(comment.userName)}`}
                    />
                  ) : (
                    <div
                      className={`w-12 h-12 rounded-full ${getAvatarColor(comment.userName)} flex items-center justify-center text-white font-bold`}
                    >
                      {comment.userName?.charAt(0).toUpperCase() || "U"}
                    </div>
                  )}
                </div>

                <div className="flex flex-col">
                  <h3 className="text-slate-900 font-bold text-base leading-tight">
                    {comment.userName || "Anonymous"}
                  </h3>
                  <p className="text-slate-600 text-[10px] uppercase tracking-wider">
                    {comment.createdAt?.toDate
                      ? comment.createdAt.toDate().toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "March 31, 2026"}
                  </p>
                </div>
              </div>

              {/* Comment Text: Now naturally falls below the name section */}
              <div className="flex-1">
                <p className="text-slate-800 text-sm md:text-base leading-relaxed">
                  {comment.textComments || "No comment provided."}
                </p>
              </div>
            </div>

            {/* Stars Section */}
            <div className="mt-4 pt-3 border-t border-slate-400/30 flex justify-center">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`material-symbols-outlined text-xl ${
                      i < (comment.rating || 5)
                        ? "text-orange-500"
                        : "text-slate-400"
                    }`}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {comments.length === 0 && (
          <p className="text-center text-slate-400 mt-10">No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default Page;

"use client";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { auth, db } from "../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [adminData, setAdminData] = useState([]);
  const [user, setUser] = useState(null);

  // Auth & Admin Logic
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchAdmins = async () => {
      const querySnapshot = await getDocs(collection(db, "admin_users"));
      setAdminData(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
      );
    };
    fetchAdmins();
  }, []);

  const isAdmin = useMemo(() => {
    if (!user) return false;
    return adminData.some((item) => item.email === user.email);
  }, [adminData, user]);

  const handleLogout = async () => {
    await signOut(auth);
    setOpen(false);
    router.push("/login");
  };

  return (
    <header className="fixed top-0 mb-20 left-0 w-full z-50">
      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Note: -50% works if you have duplicated the content exactly. 
       Ensure the container is wide enough.
    */
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex; /* Changed from inline-flex */
          white-space: nowrap;
          min-width: max-content; /* Prevents text compression on small screens */
          animation: scroll-left 30s linear infinite;
          will-change: transform; /* Boosts mobile performance */
          backface-visibility: hidden; /* Fixes flickering on iOS */
        }
        @media (min-width: 1024px) {
          .nav-gradient {
            background:
              radial-gradient(
                ellipse 60% 100% at -5% 50%,
                rgba(139, 92, 246, 0.18) 0px,
                transparent 100%
              ),
              radial-gradient(
                ellipse 60% 100% at 105% 50%,
                rgba(236, 72, 153, 0.14) 0px,
                transparent 100%
              ),
              radial-gradient(
                ellipse 100% 60% at 50% 160%,
                rgba(56, 189, 248, 0.1) 0px,
                transparent 100%
              ),
              rgba(252, 249, 255, 0.98) !important;
          }
        }

        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content; /* Critical for mobile */
          animation: scroll-left 20s linear infinite;
          will-change: transform;
        }
        /* Ensure the body doesn't scroll when menu is open */
        .menu-open {
          overflow: hidden;
        }
      `}</style>

      {/* Marquee Bar */}
      <div
        className="w-full overflow-hidden flex items-center h-10 border-b border-violet-900/30"
        style={{
          background: `radial-gradient(ellipse at 0% 50%, rgba(139, 92, 246, 0.40) 0px, transparent 60%),
                 radial-gradient(ellipse at 100% 50%, rgba(236, 72, 153, 0.32) 0px, transparent 55%),
                 #07040f`,
        }}
      >
        <div className="animate-marquee">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="px-4 md:px-8 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] flex items-center whitespace-nowrap"
              style={{ color: "rgba(233, 221, 255, 0.90)" }}
            >
              Perfect Fit Since 1999 ● India's Premier Ladies Custom Tailor ●
              Quality Stitched Heritage ● Luxury Bespoke ●&nbsp;
            </div>
          ))}
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className="w-full border-b border-violet-200/40 nav-gradient"
        style={{
          background: `
            radial-gradient(ellipse at 0% 50%, rgba(139, 92, 246, 0.18) 0px, transparent 50%),
            radial-gradient(ellipse at 100% 50%, rgba(236, 72, 153, 0.14) 0px, transparent 50%),
            radial-gradient(ellipse at 50% 150%, rgba(56, 189, 248, 0.10) 0px, transparent 55%),
            rgba(252, 249, 255, 0.98)
          `,
          boxShadow: "0 4px 24px rgba(139, 92, 246, 0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="font-outfit text-xl md:text-2xl font-black tracking-tighter text-violet-950 uppercase">
                {isAdmin ? (
                  <Link href="/customDesign">
                    Yogeshwar<span className="text-pink-600">.</span>
                  </Link>
                ) : (
                  <Link href="/">
                    Yogeshwar<span className="text-pink-600">.</span>
                  </Link>
                )}
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8 text-xs font-bold tracking-[0.1em]">
              <Link
                href="/"
                className="text-violet-900 hover:text-pink-600 transition-colors uppercase"
              >
                Home
              </Link>
              <Link
                href="/whyus"
                className="text-violet-900 hover:text-pink-600 transition-colors uppercase"
              >
                Why Us
              </Link>
              <Link
                href="/outfit"
                className="text-violet-900 hover:text-pink-600 transition-colors uppercase"
              >
                Outfits
              </Link>

              {/* COMMENTS DROPDOWN */}
              <div className="relative group cursor-pointer">
                <button className="text-violet-900 flex items-center gap-1 hover:text-pink-600 uppercase tracking-widest outline-none">
                  Comments{" "}
                  <span className="material-symbols-outlined text-sm">
                    expand_more
                  </span>
                </button>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-52 bg-white shadow-xl rounded-2xl p-2 border border-violet-100">
                    <Link
                      href="/comments/HomedisplayComments"
                      className="block px-4 py-2 text-xs hover:text-white hover:bg-violet-700 font-bold text-violet-800 tracking-widest rounded-xl transition"
                    >
                      Customer Reviews
                    </Link>
                    <Link
                      href="/comments/add"
                      className="block px-4 py-2 text-xs hover:text-white hover:bg-violet-700 font-bold text-violet-800 tracking-widest rounded-xl transition"
                    >
                      Post Comment
                    </Link>
                    <Link
                      href="/comments/UserUploadedComments"
                      className="block px-4 py-2 text-xs hover:text-white hover:bg-violet-700 font-bold text-violet-800 tracking-widest rounded-xl transition"
                    >
                      Manage My Comments
                    </Link>

                    <Link
                      href="/admin/Managecomments"
                      className="block px-4 py-2 text-xs hover:bg-black hover:text-white font-bold text-black tracking-widest rounded-xl transition border-t mt-1"
                    >
                      Admin: Review All
                    </Link>
                  </div>
                </div>
              </div>

              {/* Account Dropdown */}
              <div className="relative group cursor-pointer">
                <button className="text-violet-900 flex items-center gap-1 hover:text-pink-600 uppercase tracking-widest outline-none">
                  Account{" "}
                  <span className="material-symbols-outlined text-sm">
                    expand_more
                  </span>
                </button>
                <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-52 bg-white shadow-xl rounded-2xl p-2 border border-violet-100">
                    {/* {!user ? ( */}
                    <>
                      <Link
                        href="/signup"
                        className="block px-4 py-2 text-xs hover:text-white hover:bg-violet-700 font-bold text-violet-800 tracking-widest rounded-xl transition"
                      >
                        Signup
                      </Link>
                      <Link
                        href="/login"
                        className="block px-4 py-2 text-xs hover:text-white hover:bg-violet-700 font-bold text-violet-800 tracking-widest rounded-xl transition"
                      >
                        Login
                      </Link>
                    </>
                    {/* ) : ( */}
                    <>
                      {/* <Link
                          href="/edit-profile"
                          className="block px-4 py-2 text-xs hover:text-white hover:bg-violet-700 font-bold text-violet-800 tracking-widest rounded-xl transition"
                        >
                          Edit Profile
                        </Link> */}
                      {/* {isAdmin && ( */}
                      <Link
                        href="/admin/ManageCustomernameUI"
                        className="block px-4 py-2 text-xs hover:text-white hover:bg-violet-700 font-bold text-violet-800 tracking-widest rounded-xl transition"
                      >
                        Admin Dashboard
                      </Link>
                      {/* )} */}
                      {/* {isAdmin && ( */}
                      <Link
                        onClick={() => setOpen(false)}
                        href="/customDesign"
                        className="block px-4 py-2 text-xs hover:text-white hover:bg-violet-700 font-bold text-violet-800 tracking-widest rounded-xl transition"
                      >
                        Custom Dashboard
                      </Link>
                      {/* )} */}
                      <button
                        onClick={handleLogout}
                        className="w-full text-left block px-4 py-2 text-xs hover:text-white hover:bg-violet-700 font-bold text-violet-800 tracking-widest rounded-xl transition"
                      >
                        Logout
                      </button>{" "}
                    </>
                    {/* )} */}
                  </div>
                </div>
              </div>

              {/* <Link
                href="/contact"
                className="bg-violet-900 text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-pink-600 hover:text-white transition-all shadow-lg active:scale-95"
              >
                Book Visit
              </Link> */}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-violet-700 focus:outline-none"
            >
              <span className="material-symbols-outlined text-3xl">
                {open ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Content - Scrollable & Compact */}
        {open && (
          <div
            className="fixed left-0 right-0 bottom-0 z-[60] overflow-y-auto px-6 py-8 space-y-8 animate-in slide-in-from-top duration-300"
            style={{
              /* Use top-full or a calculated height to ensure it starts after the nav */
              top: "104px",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              background:
                "linear-gradient(337deg,rgba(163, 118, 162, 1) 43%, rgba(192, 133, 82, 1) 100%)",
              borderTop: "1px solid rgba(139, 92, 246, 0.2)",
            }}
          >
            {/* Primary Links */}
            <div className="space-y-4">
              <Link
                onClick={() => setOpen(false)}
                href="/"
                className="block text-sm font-bold uppercase tracking-widest text-[#FEFEDF]"
              >
                Home
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href="/whyus"
                className="block text-sm font-bold uppercase tracking-widest text-[#FEFEDF]"
              >
                Why Us
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href="/outfit"
                className="block text-sm font-bold uppercase tracking-widest text-[#FEFEDF]"
              >
                Outfits
              </Link>
              <hr className="border-violet-800/40" />
            </div>

            {/* Comments Section */}
            <div className="space-y-3">
              <p className="text-[15px] font-black uppercase tracking-[0.1em] text-violet-400">
                Community
              </p>
              <div className="grid grid-cols-1 gap-3 pl-2">
                <Link
                  onClick={() => setOpen(false)}
                  href="/comments/HomedisplayComments"
                  className="text-[#FEFEDF] font-bold text-sm"
                >
                  Customer Reviews
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  href="/comments/add"
                  className="text-[#FEFEDF] font-bold text-sm"
                >
                  Post Comment
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  href="/comments/UserUploadedComments"
                  className="text-[#FEFEDF] font-bold text-sm"
                >
                  Manage My Comments
                </Link>
                {isAdmin && (
                  <Link
                    onClick={() => setOpen(false)}
                    href="/admin/Managecomments"
                    className="text-xs text-[#FEFEDF] font-bold italic"
                  >
                    Admin Review Comments
                  </Link>
                )}
              </div>
            </div>

            <hr className="border-violet-800/40" />

            {/* Account Section */}
            <div className="space-y-3">
              <p className="text-[15px] font-black uppercase tracking-[0.1em] text-pink-400">
                Account Details
              </p>
              <div className="grid grid-cols-1 gap-4 pl-2">
                <>
                  {/* <Link
                    onClick={() => setOpen(false)}
                    href="/edit-profile"
                    className="text-[#FEFEDF] font-bold text-sm"
                  >
                    Edit Profile
                  </Link> */}
                  <Link
                    onClick={() => setOpen(false)}
                    href="/admin/ManageCustomernameUI"
                    className="text-[#FEFEDF] font-bold text-sm"
                  >
                    Admin Dashboard
                  </Link>
                  <Link
                    onClick={() => setOpen(false)}
                    href="/customDesign"
                    className="text-[#FEFEDF] font-bold text-sm"
                  >
                    Custom Design
                  </Link>
                  <Link
                    onClick={() => setOpen(false)}
                    href="/login"
                    className="text-[#FEFEDF] font-bold text-sm"
                  >
                    Login
                  </Link>
                  <Link
                    onClick={() => setOpen(false)}
                    href="/signup"
                    className="text-[#FEFEDF] font-bold text-sm"
                  >
                    Signup
                  </Link>
                  {user && (
                    <button
                      onClick={handleLogout}
                      className="text-left text-sm font-bold text-pink-400 tracking-widest mt-1"
                    >
                      Logout
                    </button>
                  )}

                  {/* <>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/login"
                      className="font-bold text-violet-200 tracking-widest border border-violet-400/30 rounded-lg p-1 text-center"
                    >
                      Login
                    </Link>
                    <Link
                      onClick={() => setOpen(false)}
                      href="/signup"
                      className="text-xs font-bold bg-violet-700 uppercase text-white tracking-widest rounded-lg p-3 text-center shadow-lg"
                    >
                      Signup
                    </Link>
                  </> */}
                </>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

import React from "react";

const page = () => {
  return (
    <div>
      <div className="min-h-screen mt-30 flex items-center justify-center bg-[#1a1c23] p-4 font-sans">
        <div className="max-w-xl w-full p-10 rounded-2xl border border-[#4a4e69] bg-[#1a1c23] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center border-2 border-[#d4af37] rounded-full p-4 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d4af37"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <polyline points="17 11 19 13 23 9" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-[#d4af37]">
              Request Admin Privileges
            </h1>
            <p className="text-[#888da8] text-base mt-2 max-w-sm mx-auto">
              Please provide the following details to submit your request for
              administrator access.
            </p>
          </div>

          {/* Form Section */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name Input */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-[#d4af37]">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border bg-[#2d303e] text-[#d4af37] border-[#4a4e69] placeholder-[#888da8]/80 outline-none transition duration-300 focus:border-[#d4af37]"
                />
              </div>

              {/* Email Address Input */}
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-[#d4af37]">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="john.doe@company.com"
                  className="w-full px-4 py-3 rounded-lg border bg-[#2d303e] text-[#d4af37] border-[#4a4e69] placeholder-[#888da8]/80 outline-none transition duration-300 focus:border-[#d4af37]"
                />
              </div>
            </div>

            {/* Department Input */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#d4af37]">
                Department / Role
              </label>
              <input
                type="text"
                placeholder="e.g. Senior Software Engineer - Platform Team"
                className="w-full px-4 py-3 rounded-lg border bg-[#2d303e] text-[#d4af37] border-[#4a4e69] placeholder-[#888da8]/80 outline-none transition duration-300 focus:border-[#d4af37]"
              />
            </div>

            {/* Reason for Request Textarea */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#d4af37]">
                Reason for Request
              </label>
              <textarea
                placeholder="Briefly describe why you require administrative access..."
                rows="4"
                className="w-full px-4 py-3 rounded-lg border bg-[#2d303e] text-[#d4af37] border-[#4a4e69] placeholder-[#888da8]/80 outline-none transition duration-300 focus:border-[#d4af37] resize-none"
              ></textarea>
            </div>

            {/* Form Action Buttons */}
            <div className="pt-8 flex flex-col md:flex-row items-center justify-end gap-4">
              {/* Cancel Button */}
              <button
                type="button"
                className="w-full md:w-auto px-6 py-2.5 rounded-lg text-[#d4af37] hover:bg-[#2d303e] transition duration-300 text-sm font-semibold active:scale-95"
              >
                Cancel
              </button>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-auto flex items-center justify-center gap-2.5 px-8 py-3 rounded-lg border transition-all duration-300 bg-[#1a1c23] border-[#d4af37] text-[#1a1c23] hover:bg-[#d4af37] active:scale-95 group shadow-lg"
                style={{ backgroundColor: "#d4af37" }} // Primary button uses gold background
              >
                <span className="font-semibold text-sm tracking-wide">
                  Submit Request
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;

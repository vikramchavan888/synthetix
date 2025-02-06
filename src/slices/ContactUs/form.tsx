"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import the Player component
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false, // Disable server-side rendering for this component
  },
);

const Form = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {submitted ? (
        <div className="flex h-[318px] w-full items-center justify-center overflow-hidden">
          <Player
            src="https://lottie.host/cdf2112a-f1d1-4c60-93f5-bb7a15cf867a/mA5Gs35pNH.json"
            className="w-[340px] pt-[120px]"
            autoplay
          />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex w-full flex-col gap-[12px]"
        >
          <input
            type="text"
            className="block w-full rounded-lg bg-white/[0.03] px-6 py-[14px] text-[16px] leading-[22.4px] text-[#fff] placeholder:text-[#fff]/50 focus:outline-none"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            className="block w-full rounded-lg bg-white/[0.03] px-6 py-[14px] text-[16px] leading-[22.4px] text-[#fff] placeholder:text-[#fff]/50 focus:outline-none"
            placeholder="Email"
            required
          />
          <textarea
            rows={5}
            className="block max-h-[132px] w-full rounded-lg bg-white/[0.03] px-6 py-[14px] text-[16px] leading-[22.4px] text-[#fff] placeholder:text-[#fff]/50 focus:outline-none"
            placeholder="How can we help you?"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full rounded-lg bg-[#FF6D00]/[0.25] px-6 py-[14px] text-center text-base font-medium leading-[22.4px] text-white transition-colors hover:bg-[#FF6D00]/[0.15] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default Form;

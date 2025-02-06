"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useRef, useState } from "react";

const Form = () => {
  const playerRef = useRef<Player>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        playerRef?.current?.pause();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <>
      {submitted ? (
        <div className="flex h-[318px] w-full items-center justify-center overflow-hidden">
          <Player
            src="https://lottie.host/cdf2112a-f1d1-4c60-93f5-bb7a15cf867a/mA5Gs35pNH.json"
            className="w-[340px] pt-[120px]"
            autoplay
            ref={playerRef}
          />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex w-full flex-col gap-[12px]"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="block w-full rounded-lg bg-white/[0.03] px-6 py-[14px] text-[16px] leading-[22.4px] text-[#fff] placeholder:text-[#fff]/50 focus:outline-none"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="block w-full rounded-lg bg-white/[0.03] px-6 py-[14px] text-[16px] leading-[22.4px] text-[#fff] placeholder:text-[#fff]/50 focus:outline-none"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
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

"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("August 21, 2026 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTime({ days, hours, minutes, seconds });
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(interval);
  }, []);

  const format = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="w-full py-12 bg-[#16181E] flex flex-col items-center justify-center font-inter-display">
      <p className="subtitle text-[18px] sm:text-[20px] mb-8 text-center text-white/50">2026 Hackathon starts in</p>

      <div className="flex items-start justify-center gap-3 sm:gap-8 text-white w-full max-w-[360px] sm:max-w-4xl px-4">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[32px] sm:text-[40px] font-normal leading-tight">{format(time.days)}</span>
          <span className="text-[14px] sm:text-[18px] text-white/60 font-light">Days</span>
        </div>

        <span className="text-[24px] sm:text-[32px] mt-1 text-white/40">:</span>

        <div className="flex flex-col items-center gap-1">
          <span className="text-[32px] sm:text-[40px] font-normal leading-tight">{format(time.hours)}</span>
          <span className="text-[14px] sm:text-[18px] text-white/60 font-light">Hours</span>
        </div>

        <span className="text-[24px] sm:text-[32px] mt-1 text-white/40">:</span>

        <div className="flex flex-col items-center gap-1">
          <span className="text-[32px] sm:text-[40px] font-normal leading-tight">{format(time.minutes)}</span>
          <span className="text-[14px] sm:text-[18px] text-white/60 font-light">Minutes</span>
        </div>

        <span className="text-[24px] sm:text-[32px] mt-1 text-white/40">:</span>

        <div className="flex flex-col items-center gap-1">
          <span className="text-[32px] sm:text-[40px] font-normal leading-tight">{format(time.seconds)}</span>
          <span className="text-[14px] sm:text-[18px] text-white/60 font-light">Secs</span>
        </div>
      </div>
    </div>
  );
}

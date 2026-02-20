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
    <div className="w-full py-[30px] bg-[#16181E] flex flex-col items-center justify-center md:text-[20px]">
      <p className="subtitle text-[18px] md:text-[20px] mb-8 text-center text-white/50 md:text-inherit md:text-white md:mb-0">2026 Hackathon starts in</p>

      <div className="flex md:hidden items-start justify-center gap-3 text-white w-full max-w-[360px] px-4">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[32px] font-normal leading-tight">{format(time.days)}</span>
          <span className="text-[14px] text-white/60 font-light">Days</span>
        </div>
        <span className="text-[24px] mt-1 text-white/40">:</span>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[32px] font-normal leading-tight">{format(time.hours)}</span>
          <span className="text-[14px] text-white/60 font-light">Hours</span>
        </div>
        <span className="text-[24px] mt-1 text-white/40">:</span>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[32px] font-normal leading-tight">{format(time.minutes)}</span>
          <span className="text-[14px] text-white/60 font-light">Minutes</span>
        </div>
        <span className="text-[24px] mt-1 text-white/40">:</span>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[32px] font-normal leading-tight">{format(time.seconds)}</span>
          <span className="text-[14px] text-white/60 font-light">Secs</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4 text-white/90 text-[20px]">
        <p>{format(time.days)} Days</p>
        <p>:</p>
        <p>{format(time.hours)} Hours</p>
        <p>:</p>
        <p>{format(time.minutes)} Minutes</p>
        <p>:</p>
        <p>{format(time.seconds)} Secs</p>
      </div>
    </div>
  );
}

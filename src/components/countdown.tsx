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
    <div className="w-full text-[20px] py-[30px] bg-[#16181E] flex flex-col items-center">
      <p className="subtitle">2026 Hackathon starts in</p>

      <div className="flex items-center gap-4 text-white/90 mt-7">
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

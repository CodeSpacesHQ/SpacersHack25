export default function Countdown() {
  return (
    <div className="w-full text-[20px] py-[30px] bg-[#16181E] flex flex-col items-center">
      <p className="subtitle">2026 Hackathon starts in</p>

      <div className="flex items-center gap-4 text-white/90 mt-7">
        <p>06 Months</p>
        <p>:</p>
        <p>08 Hours</p>
        <p>21 Minutes</p>
        <p>:</p>
        <p>32 Secs</p>
      </div>
    </div>
  );
}

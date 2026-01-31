export default function Ticket() {
  return (
    <div className="max-w-xl relative flex items-center flex-col mx-auto">
      <div className="absolute top-2 h-[250px] w-20 bg-gradient-to-b from-white/0 to-white/2 border-x-[0.5] border-white/2.5 z-1 backdrop-blur-[50px]"></div>
      <div className="backdrop-blur-3xl relative border-[0.5] border-white/6 w-full mx-auto rounded-[36px] bg-white/2 py-7 mt-[199px]">
        <div className="w-36 h-8 border-[0.4] border-white/10 rounded-full mx-auto bg-[#0F1117]"></div>

        <div className="px-[50px]">
          <h2 className="font-bold text-6xl uppercase text-center text-white mt-8 leading-[60px] tracking-normal">
            {"Spacer's Hack Conference"}
            <br />

            <span className="text-center text-[#4F46E5] font-black">2026</span>
          </h2>

          <div className="flex justify-between items-center text-white/80 max-w-lg mx-auto mt-14">
            <p>Lagos</p>
            <p>1,000+ Developers</p>
            <p>$20k in prizes</p>
            <p>20+ Speakers</p>
          </div>
        </div>
        <div className="bg-[#2C2E33]/30 py-3 w-full text-center text-white mt-10">
          <p>AUG 21ST - 29TH 2026</p>
        </div>

        <div className="px-11 mt-10">
          <h3 className="text-2xl text-white">
            {"GET YOUR TICKET TO"}
            <br />
            {"SPACER'S HACK CONF 2026"}
          </h3>
        </div>
        <div className="mt-10 h-[0.5px] bg-white/10" />
        <div className="mt-10 px-11">
          <p className="text-lg text-white/50 uppercase">Early Bird Ticket</p>
          <p className="text-white text-[42px] font-medium">₦30,000</p>
        </div>
        <div className="px-8 mt-8">
          <button className="uppercase bg-[#4F46E5] relative w-full h-14 rounded-xl text-white group">
            <div className="absolute bg-gradient-to-b from-white/0 to-white group-hover:opacity-20 transition-all cursor-pointer w-full h-full z-0 opacity-15 inset-0 rounded-xl" />
            <span>Purchase Ticket</span>
          </button>
        </div>
      </div>
    </div>
  );
}

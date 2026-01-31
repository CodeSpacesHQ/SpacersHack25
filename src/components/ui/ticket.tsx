import { ChevronRight } from "lucide-react";
import { Button } from "./button";

export default function Ticket() {
  return (
    <div className="max-w-md relative flex items-center flex-col mx-auto">
      <div className="absolute top-2 h-[250px] w-[69px] bg-gradient-to-b from-white/0 to-white/2 border-x-[0.5] border-white/2.5 z-1 backdrop-blur-[50px]"></div>
      <div className="relative border-[0.5] border-white/6 w-full mx-auto rounded-[36px] bg-white/2 py-5 mt-[206.5px]">
        <div className="w-36 h-8 border-[0.4] border-white/10 rounded-full mx-auto bg-[#0F1117]"></div>

        <h2 className="font-bold text-5xl uppercase text-center text-white mt-8">
          {"Spacer’s Hack Conference"}
        </h2>
        <h2 className="text-5xl uppercase text-center text-primary font-black">
          2026
        </h2>
      </div>
    </div>
  );
}

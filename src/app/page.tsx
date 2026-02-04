import Container from "@/components/container";
import Countdown from "@/components/countdown";
import EventHighlights from "@/components/Index/EventHighlights";
import FAQ from "@/components/Index/FAQ";
import Mandate from "@/components/Index/Mandate";
import Schedule from "@/components/Index/Schedule";
import Speakers from "@/components/Index/Speakers";
import Sponsors from "@/components/Index/Sponsors";
import ThemeAndActivities from "@/components/Index/ThemeAndActivities";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import Ticket from "@/components/ui/ticket";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="absolute left-0 right-0 -top-96 rounded-full blur-[250px] h-[1600px] w-[1600px] bg-[#4F46E5]/35 pointer-events-none -z-10" />

      <div className="w-full relative bg-[url('/background.png')] flex flex-col min-h-screen bg-cover bg-center bg-no-repeat">
        <NavBar />
        <div className="my-auto h-full z-1 relative">
          <Container className="flex flex-col lg:flex-row items-center w-full my-auto h-full pt-32 lg:pt-0 pb-0 lg:pb-0">
            <div className="flex flex-col z-10 w-full lg:w-auto">
              <div>
                <h1 className="font-medium text-white uppercase leading-tight text-[28px] lg:text-[52px] max-w-2xl font-inter-display">
                  {"Spacer's Hack"} <br /> {"Conference 2026"}
                </h1>
                <p className="text-[14.5px] lg:text-[20px] subtitle font-light max-w-lg mt-2 font-inter-display text-white/60 leading-[130%] tracking-tight">
                  Join us for a day of learning, connection, and unwinding,
                  immersed in inspiration, integration, innovation, and fun.
                </p>

                <div className="flex flex-row items-center gap-[10px] sm:gap-4 mt-8 w-full sm:w-auto scrollbar-hide">
                  <Button
                    variant="secondary"
                    className="uppercase flex-1 sm:flex-none sm:w-auto bg-[#BB06C7] hover:bg-[#A005AB] text-white h-[35px] sm:h-12 rounded-[10px] sm:rounded-[8px] text-[10px] sm:text-sm px-2 sm:px-6"
                  >
                    Register for Hackathon
                  </Button>
                  <Button className="!pr-3 text-[#BB06C7] uppercase flex-1 sm:flex-none sm:w-auto bg-[#F0F0FB] hover:bg-[#E0E0EB] h-[35px] sm:h-12 rounded-[10px] sm:rounded-[8px] text-[10px] sm:text-sm px-2 sm:px-6 border border-white/10">
                    View 2024 Highlights
                    <ChevronRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>
                <div className="mt-10 lg:mt-16">
                  <p className="text-[14px] lg:text-xl text-white max-w-xl font-inter-display leading-[135%]">
                    JUL 25TH - 30TH, 2026
                  </p>
                  <p className="text-[14px] lg:text-xl text-[#BB06C7] max-w-xl mt-1 font-medium font-inter-display uppercase leading-[135%]">
                    SPACER'S HACK CONF 2026
                  </p>
                </div>
              </div>
            </div>

            <Image
              src="/astronaut.png"
              alt="Background"
              width={1146}
              height={859}
              className="z-0 select-none mt-0 lg:mt-auto w-[170%] -ml-[35%] max-w-none sm:w-[60%] sm:ml-auto sm:max-w-full lg:w-[1146px] lg:absolute lg:bottom-0 lg:right-0 relative pointer-events-none"
            />
          </Container>
        </div>
        <Container className="relative pb-8 z-1 hidden lg:block">
          <div className="mt-16">
            <p className="text-sm sm:text-base md:text-[16px] subtitle">
              {"Last year’s stats"}
            </p>

            <div className="mt-1 flex items-center text-white/90 text-[20px] gap-[30px]">
              <p>1,200 attendees</p>
              <p>40 projects built</p>
              <p>16 sponsors</p>
            </div>
          </div>
        </Container>
      </div>
      <Countdown />
      <Mandate />
      <EventHighlights />
      <ThemeAndActivities />
      <Schedule />
      <Speakers />
      <Sponsors />
      <FAQ />
    </main>
  );
}

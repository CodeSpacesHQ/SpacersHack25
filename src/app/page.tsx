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
        <div className="my-auto h-full z-1">
          <Container className="flex items-center w-full my-auto h-full">
            <div className="flex flex-col">
              <div>
                <h1 className="font-medium text-white uppercase leading-tight text-3xl sm:text-4xl lg:text-[52px] max-w-2xl">
                  {"Spacer's Hack"} <br /> {"Conference 2026"}
                </h1>
                <p className="text-sm sm:text-base md:text-[20px] subtitle font-light max-w-lg mt-2">
                  Join us for a day of learning, connection, and unwinding,
                  immersed in inspiration, integration, innovation, and fun.
                </p>

                <div className="flex items-center space-x-4 mt-8">
                  <Button variant="secondary" className="uppercase">
                    Register for Hackathon
                  </Button>
                  <Button className="!pr-3 text-secondary uppercase bg-[#F0F0FB] hover:bg-[#F0F0F8]/80">
                    View 2024 Highlights
                    <ChevronRight />
                  </Button>
                </div>
                <div className="mt-16">
                  <p className="text-sm sm:text-base md:text-xl text-white max-w-xl">
                    AUG 21ST - 29TH 2026
                  </p>
                  <p className="text-sm sm:text-base md:text-xl text-secondary max-w-xl mt-1 font-medium">
                    SPACER'S HACK CONF 2026
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Container className="relative pb-8 z-1">
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
        <Container className="relative">
          <Image
            src="/astronaut.png"
            alt="Background"
            width={1146}
            height={859}
            className="z-0 select-none absolute bottom-0 right-0 mt-auto"
          />
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

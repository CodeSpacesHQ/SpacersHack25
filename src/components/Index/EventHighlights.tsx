import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "../container";
import { Button } from "../ui/button";
import Image from "next/image";

export default function EventHighlights() {
  return (
    <Container className="my-12 lg:my-24">
      {/* Desktop Layout */}
      <div className="hidden lg:flex gap-12 items-center">
        <div className="flex flex-col gap-12 flex-1">
          <div className="w-full h-[420px] bg-[#111319] shadow-[0px_0px_20px_4px_rgba(34,34,34,0.03)] border-l-[12px] border-r-[12px] border-t-[12px] border-b-[50px] border-[#16181E] relative overflow-hidden">
            <Image src="/images/image1.png" alt="Event highlight" fill className="object-cover" />
          </div>
          <div className="mb-8 w-full h-[420px] bg-[#111319] shadow-[0px_0px_20px_4px_rgba(34,34,34,0.03)] border-l-[12px] border-r-[12px] border-t-[12px] border-b-[50px] border-[#16181E] relative overflow-hidden">
            <Image src="/images/image3.png" alt="Event highlight" fill className="object-cover" />
          </div>
        </div>
        <div className="flex flex-col gap-12 flex-1">
          <div className="w-full h-[420px] bg-[#111319] shadow-[0px_0px_20px_4px_rgba(34,34,34,0.03)] border-l-[12px] border-r-[12px] border-t-[12px] border-b-[50px] border-[#16181E] relative overflow-hidden">
            <Image src="/images/image8.png" alt="Event highlight" fill className="object-cover" />
          </div>
          <a
            href="https://youtu.be/9wDcD6T6OqY?si=kl6w3JSh_xCXWtCd"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit mx-auto"
          >
            <Button
              variant="secondary"
              className="bg-white hover:bg-white/90 text-black !pl-1.5 w-fit uppercase rounded-full h-[48px] px-6"
            >
              <span className="bg-white rounded-full p-2 flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  fill="#dc2626"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-73.74,65-40,28A8,8,0,0,1,108,156V100a8,8,0,0,1,12.59-6.55l40,28a8,8,0,0,1,0,13.1Z" />
                </svg>
              </span>
              Watch 2025 Event
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="ml-1"
                viewBox="0 0 256 256"
              >
                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
              </svg>
            </Button>
          </a>
          <div className="mb-8 w-full h-[420px] bg-[#111319] shadow-[0px_0px_20px_4px_rgba(34,34,34,0.03)] border-l-[12px] border-r-[12px] border-t-[12px] border-b-[50px] border-[#16181E] relative overflow-hidden">
            <Image src="/images/image7.png" alt="Event highlight" fill className="object-cover" />
          </div>
        </div>

        <div className="flex flex-col gap-12 flex-1">
          <div className="w-full h-[420px] bg-[#111319] shadow-[0px_0px_20px_4px_rgba(34,34,34,0.03)] border-l-[12px] border-r-[12px] border-t-[12px] border-b-[50px] border-[#16181E] relative overflow-hidden">
            <Image src="/images/image9.png" alt="Event highlight" fill className="object-cover" />
          </div>
          <div className="w-full h-[420px] bg-[#111319] shadow-[0px_0px_20px_4px_rgba(34,34,34,0.03)] border-l-[12px] border-r-[12px] border-t-[12px] border-b-[50px] border-[#16181E] relative overflow-hidden">
            <Image src="/images/image6.png" alt="Event highlight" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex lg:hidden flex-col gap-8">
        <div className="grid grid-cols-2 gap-4 items-start">
          {/* Left Column - Offset Down */}
          <div className="flex flex-col gap-4 mt-12">
            <div className="w-full h-[210px] bg-[#111319] shadow-[0px_0px_20px_4px_rgba(34,34,34,0.03)] border-l-[5px] border-r-[5px] border-t-[5px] border-b-[20px] border-[#16181E] relative overflow-hidden">
              <Image src="/images/image1.png" alt="Event highlight" fill className="object-cover" />
            </div>
            <div className="w-full h-[210px] bg-[#111319] shadow-[0px_0px_20px_4px_rgba(34,34,34,0.03)] border-l-[5px] border-r-[5px] border-t-[5px] border-b-[20px] border-[#16181E] relative overflow-hidden">
              <Image src="/images/image8.png" alt="Event highlight" fill className="object-cover" />
            </div>
            <div className="w-full h-[210px] bg-[#111319] shadow-[0px_0px_20px_4px_rgba(34,34,34,0.03)] border-l-[5px] border-r-[5px] border-t-[5px] border-b-[20px] border-[#16181E] relative overflow-hidden">
              <Image src="/images/image9.png" alt="Event highlight" fill className="object-cover" />
            </div>
          </div>

          {/* Right Column - Starts Top */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-[210px] bg-[#111319] shadow-[0px_0px_20px_4px_rgba(34,34,34,0.03)] border-l-[5px] border-r-[5px] border-t-[5px] border-b-[20px] border-[#16181E] relative overflow-hidden">
              <Image src="/images/image3.png" alt="Event highlight" fill className="object-cover" />
            </div>
            <div className="w-full h-[210px] bg-[#111319] shadow-[0px_0px_20px_4px_rgba(34,34,34,0.03)] border-l-[5px] border-r-[5px] border-t-[5px] border-b-[20px] border-[#16181E] relative overflow-hidden">
              <Image src="/images/image7.png" alt="Event highlight" fill className="object-cover" />
            </div>
            <div className="w-full h-[210px] bg-[#111319] shadow-[0px_0px_20px_4px_rgba(34,34,34,0.03)] border-l-[5px] border-r-[5px] border-t-[5px] border-b-[20px] border-[#16181E] relative overflow-hidden">
              <Image src="/images/image6.png" alt="Event highlight" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="https://youtu.be/9wDcD6T6OqY?si=kl6w3JSh_xCXWtCd"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit mx-auto"
          >
            <Button
              variant="secondary"
              className="bg-white hover:bg-white/90 text-black !pl-1.5 w-fit uppercase rounded-full h-[48px] px-6"
            >
              <span className="bg-white rounded-full p-2 flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  fill="#dc2626"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-73.74,65-40,28A8,8,0,0,1,108,156V100a8,8,0,0,1,12.59-6.55l40,28a8,8,0,0,1,0,13.1Z" />
                </svg>
              </span>
              Watch 2025 Event
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="ml-1"
                viewBox="0 0 256 256"
              >
                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
              </svg>
            </Button>
          </a>
        </div>
      </div>
    </Container>
  );
}

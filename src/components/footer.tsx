"use client";
import React from "react";
import Link from "next/link";
import Container from "@/components/container";
import NewsletterForm from "@/components/newsletter-form";
import { other_links, quick_links, socials } from "@/data";

const Footer = () => {
  return (
    <div className="bg-[#16181E] pt-20 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
          {/* Left Column: Newsletter & Socials */}
          <div className="w-full lg:max-w-xl">
            <div>
              <h4 className="text-[#4F46E5] font-normal mb-6 font-inter-display text-[18px]">
                Subscribe To Our Newsletter
              </h4>
              <NewsletterForm isDark={true} layout="inline" />
            </div>

            <div className="mt-12">
              <h4 className="text-[#4F46E5] font-normal mb-4 font-inter-display text-[18px]">
                Reach out to us
              </h4>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {[
                  { name: "Facebook", url: "https://www.facebook.com/share/15hbaU6ZpC/?mibextid=LQQJ4d" },
                  { name: "LinkedIn", url: "https://www.linkedin.com/company/codespacehq" },
                  { name: "X (Formally Twitter)", url: "https://twitter.com/CodeSpaceHQ" },
                  { name: "Instagram", url: "https://instagram.com/CodesSpace" },
                  { name: "GitHub", url: "https://github.com/CodeSpaceHQ" }
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#4F46E5] transition-colors font-inter-display text-[16px] font-normal"
                  >
                    {social.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Links */}
          <div className="grid grid-cols-2 gap-[50px]">
            <ul className="space-y-4">
              <li className="text-[#4F46E5] font-normal mb-6 font-inter-display text-[18px]">
                Quick links
              </li>
              {quick_links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-[#4F46E5] transition-colors font-inter-display text-[16px] font-normal"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="space-y-4">
              <li className="text-[#4F46E5] font-normal mb-6 font-inter-display text-[18px]">
                Others
              </li>
              {other_links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-[#4F46E5] transition-colors font-inter-display text-[16px] font-normal"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Large Bottom Text */}
      <div className="mt-8 w-full flex justify-center pb-0 leading-none select-none pointer-events-none overflow-hidden">
        <div
          className="w-full h-[18vw] lg:h-[13vw] bg-[#2b2f3b] translate-y-[5%]"
          style={{
            maskImage: "url('/codespacelogo.png')",
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center bottom",
            WebkitMaskImage: "url('/codespacelogo.png')",
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center bottom"
          }}
        />
      </div>
    </div>
  );
};

export default Footer;

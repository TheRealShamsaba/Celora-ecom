"use client";
import React from "react";
import Image from "next/image";

interface WaveLayoutProps {
  children: React.ReactNode;
}

export default function WaveLayout({ children }: WaveLayoutProps) {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f9f3eb] to-[#f3efe6]">
      {/* Wave Top */}
      <div className="absolute top-0 left-0 w-full h-[200px] sm:h-[250px] md:h-[320px] z-0 overflow-hidden">
        <Image
          src="/wave_top.svg"
          alt="Wave Top"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] sm:h-[250px] md:h-[320px] z-0 overflow-hidden">
        <Image
          src="/wave_bottom.svg"
          alt="Wave Bottom"
          fill
          className="object-cover object-bottom"
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 pt-[200px] pb-[200px] px-6">
        {children}
      </div>
    </div>
  );
}

"use client";
import React from "react";

export default function ShopPageBackground({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9f3eb] to-[#f3efe6]" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/content/8094288.jpg')" }}
        />

        {/* Blob */}
        <svg
          className="absolute -top-10 -left-10 w-64 h-64 opacity-30"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f3e9dd"
            d="M45.4,-58.1C57.4,-49.2,64.6,-32.8,68.7,-16.3C72.9,0.3,73.9,17,65.9,29.4C57.9,41.7,40.8,49.7,24.3,56.2C7.8,62.7,-8,67.7,-22.6,63.4C-37.3,59.2,-50.8,45.7,-57.4,30.4C-64.1,15.1,-63.9,-2.1,-57.3,-16.7C-50.7,-31.2,-37.7,-43.1,-23.6,-52.7C-9.5,-62.3,6.6,-69.6,22.9,-67.6C39.2,-65.5,56.6,-54.4,45.4,-58.1Z"
            transform="translate(100 100)"
          />
        </svg>

        {/* Sparkles */}
        <svg className="absolute top-24 right-24 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#d4baa3" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m6.364 3.636l-1.414 1.414M20 12h-2M6.364 17.636l1.414-1.414M4 12h2m1.222-4.778l1.415 1.414M12 20v2m4.778-1.222l-1.414-1.415" />
        </svg>
      </div>

      <div className="relative z-20">{children}</div>
    </main>
  );
}

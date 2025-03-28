"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#f3efe6]">
      {/* Leaf Background using <Image> */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Image
          src="/content/8094288.jpg"
          alt="Leafy background"
          width={1920}
          height={1080}
          className="object-cover"
          priority
        />
      </div>

      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f3efe6]/50 to-[#ede5d9] opacity-90 pointer-events-none" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-[56px] md:text-[72px] font-bold text-[#5a5145]"
      >
        <span className="text-[#B08968]">Celora</span>
        <br />
        هنر زیبایی طبیعی
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="z-10 mt-4 text-xl md:text-2xl text-[#7d6f5a] max-w-2xl"
      >
        محصولات دست‌ساز با عشق به طبیعت برای شما
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="z-10 mt-8"
      >
        <Link href="/shop">
          <button className="px-8 py-3 bg-[#B08968] text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            مشاهده محصولات
          </button>
        </Link>
      </motion.div>
    </section>
  );
}

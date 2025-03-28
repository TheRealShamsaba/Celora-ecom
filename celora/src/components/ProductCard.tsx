"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export type ProductCardProps = {
  name: string;
  price: string;
  imageUrl: string;
  index: number;
};

export default function ProductCard({ name, price, imageUrl, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col w-full"
    >
      {/* Image section */}
      <div className="relative aspect-[4/3] w-full rounded-t-2xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-2 flex-grow">
        <h2 className="text-right font-bold text-[#5a5145] text-base line-clamp-2">{name}</h2>
        <p className="text-right text-sm text-[#b08968]">{price}</p>
        <button className="mt-auto bg-[#b08968] text-white text-sm rounded-full py-2 px-4 hover:bg-[#a17456] transition">
          مشاهده جزئیات
        </button>
      </div>
    </motion.div>
  );
}

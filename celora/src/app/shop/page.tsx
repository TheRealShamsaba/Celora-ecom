"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { StrapiProductItem, StrapiProductResponse } from "@/types/StrapiProduct";
import ShopPageBackground from "@/components/ShopPageBackground";
import ProductCard from "@/components/ProductCard";

export default function ShopPage() {
  const [products, setProducts] = useState<StrapiProductItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://localhost:1337/api/products?populate=*");
        const data: StrapiProductResponse = await res.json();
        setProducts(data.data || []);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <ShopPageBackground>
     <div className="relative w-fit mx-auto mb-12 mt-28 px-4" dir="rtl">
        <h1 className="text-5xl sm:text-6xl font-lalezar text-center text-[#b08968] drop-shadow-md leading-[1.2]">
          فروشگاه
          <span className="inline-block -mt-2 ml-1 animate-pulse">✨</span>
        </h1>
      </div>



      {loading && (
        <p className="text-center text-[#5a5145]">در حال بارگذاری...</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 max-w-5xl mx-auto">
        <AnimatePresence>
          {products.map((item, index) => {
            const { id, Name, price, Image: imageArray } = item;
            const imageUrl =
              imageArray?.[0]?.url
                ? `http://localhost:1337${imageArray[0].url}`
                : "/images/placeholder.png";

            return (
              <ProductCard
                key={id}
                name={Name}
                price={price}
                imageUrl={imageUrl}
                index={index}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </ShopPageBackground>
  );
}

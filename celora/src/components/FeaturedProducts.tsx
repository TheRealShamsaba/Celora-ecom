"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  StrapiProductItem,
  StrapiProductResponse,
} from "@/types/StrapiProduct";

export default function FeaturedProducts() {
  const [products, setProducts] = useState<StrapiProductItem[]>([]);

  useEffect(() => {
    const url =
      "http://localhost:1337/api/products?populate=*&filters[featuredProducts][$eq]=true";

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Strapi error: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((data: StrapiProductResponse) => {
        console.log("Strapi data:", data);
        if (!data?.data) {
          console.error("No data array in response:", data);
          setProducts([]);
          return;
        }
        setProducts(data.data);
      })
      .catch((err) => {
        console.error("Error:", err);
        setProducts([]);
      });
  }, []);

  return (
    <section className="py-10 px-6">
      <h2 className="text-2xl font-bold mb-8">محصولات ویژه</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((item, index) => {
          // if there's no Name or no fields at all, skip or show fallback
          if (!item.Name) {
            console.log("NO NAME for item:", item);
            return (
              <div key={index} className="text-red-600">
                محصول ناقص (بدون Name)
              </div>
            );
          }

          const { id, Name, price, Image: imageArray } = item;
          const productName = Name;
          const productPrice = price || "بدون قیمت";

          // If "Image" is an array, pick the first entry
          let imageUrl = "/images/placeholder.png";
          if (imageArray && imageArray.length > 0) {
            imageUrl = `http://localhost:1337${imageArray[0].url}`;
          }

          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-4"
            >
              <div className="relative w-full h-60 mb-4">
                <Image
                  src={imageUrl}
                  alt={productName}
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              <h3 className="text-xl font-semibold text-[#5a5145] mb-2">
                {productName}
              </h3>
              <p className="text-lg text-[#b08968] font-medium mb-4">
                {productPrice}
              </p>

              <button className="px-6 py-2 text-white bg-[#b08968] rounded-full font-semibold hover:bg-[#a17456] transition-colors duration-300">
                خرید
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

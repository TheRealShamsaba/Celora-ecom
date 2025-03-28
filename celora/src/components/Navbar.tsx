"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Our list of menu items (label + path)
  const navItems = [
    { label: "خانه", href: "/" },
    { label: "فروشگاه", href: "/shop" },
    { label: "درباره ما", href: "/about" },
    { label: "تماس با ما", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: scrolled ? -5 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`navbar ${scrolled ? "scrolled" : ""}`}
    >
      <div className="relative z-10 flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        
        {/* 🔵 Floating Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link href="/" className="navbar-logo">
            Celora
          </Link>
        </motion.div>

        {/* 🟢 Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex navbar-links" dir="rtl">
          {navItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="hidden md:block"
            >
              <Link href={item.href}>{item.label}</Link>
            </motion.div>
          ))}
        </div>

        {/* 🛒 Cart Icon (Only on Desktop) */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="relative cursor-pointer hidden md:block"
        >
          <span className="text-3xl text-[#5a5145]">🛒</span>
          <span className="cart-badge">2</span>
        </motion.div>

        {/* 🍃 Mobile Menu Button (Hidden on Desktop) */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-[#5a5145] transition-all duration-300"
          animate={{ rotate: isOpen ? 90 : 0 }}
        >
          {isOpen ? "✕" : "≡"}
        </motion.button>
      </div>

      {/* 🌊 Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="absolute top-full right-0 w-[85%] bg-[#f3efe6] shadow-xl rounded-lg p-5 md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Link 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

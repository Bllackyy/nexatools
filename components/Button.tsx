"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  type?: "button" | "submit";
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  type = "button",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-500 text-white"
      : "border border-white/10 bg-white/5 hover:bg-white/10 text-white";

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`rounded-xl px-6 py-3 font-semibold transition ${styles} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </motion.button>
  );
}
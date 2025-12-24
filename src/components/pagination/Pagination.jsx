"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

const Pagination = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get("page")) || 1;

  return (
    <motion.div
      className="sm:flex hidden items-center justify-between mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.button
        whileHover={page !== 1 ? { scale: 1.05 } : {}}
        whileTap={page !== 1 ? { scale: 0.95 } : {}}
        transition={{ duration: 0.2 }}
        className="px-5 py-2 text-sm font-semibold rounded-full border border-gray-300 hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={page === 1}
        onClick={() => router.push(`/?page=${page - 1}`, { scroll: false })}
      >
        ← Previous
      </motion.button>

      <motion.button
        whileHover={page !== 3 ? { scale: 1.05 } : {}}
        whileTap={page !== 3 ? { scale: 0.95 } : {}}
        transition={{ duration: 0.2 }}
        className="px-5 py-2 text-sm font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={page === 3}
        onClick={() => router.push(`/?page=${page + 1}`, { scroll: false })}
      >
        Next →
      </motion.button>
    </motion.div>
  );
};

export default Pagination;

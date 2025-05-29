'use client';
import React from 'react';
import LinkCategory from '../components/LinkCategory';
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen py-8 px-4 mx-8">
      <AnimatePresence>
        <motion.div
          key="diagnosisResult"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className=" w-full mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-5xl font-bold text-cyan-500 mb-2">
              Sistem Pakar Perawatan Motor Matic
            </h1>
            <p className="text-cyan-600 text-[20px] mt-3">
              Silakan pilih kategori pengecekan yang ingin dilakukan untuk motor matic Anda.
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
      <LinkCategory />

    </div >
  );
}

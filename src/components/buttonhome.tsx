'use client';
import React from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from "framer-motion";


const Buttonhome: React.FC = () => {
    return (
        <div className="flex">
            <Link href='/'>
                <AnimatePresence>
                    <motion.div
                        key="buttonhome"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        whileHover={{ scale: 1.1, x: -3 }}
                        whileTap={{ scale: 0.95 }}>
                        <button className="flex items-center cursor-pointer group mb-4 px-4 py-2 text-lg font-semibold text-cyan-700 hover:text-white bg-white border border-cyan-400 hover:bg-cyan-600 shadow-md hover:shadow-xl rounded-full transition-all duration-300 ease-in-out">
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                whileHover={{ x: -3 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </motion.svg>
                            <span>Kembali</span>
                        </button>
                    </motion.div>
                </AnimatePresence>
            </Link>
        </div>

    )
}

export default Buttonhome;


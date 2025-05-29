'use client';
import React from 'react';
import { Category } from '../types';
import Link from 'next/link';
import { AnimatePresence, motion } from "framer-motion";


interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="perspective-1000">
      <AnimatePresence>
        <motion.div
          key="linkCategory"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          whileHover={{
            scale: 1.03,
            rotateX: 5,
            rotateY: -5,
            boxShadow: "0px 15px 30px rgba(0, 200, 255, 0.25)",
          }}
          whileTap={{ scale: 0.98 }}
          className="mb-4 p-6 border border-cyan-300 rounded-2xl shadow-sm hover:bg-cyan-50 cursor-pointer transition-colors"
        >
          <Link href={`/care/${category.id}`} passHref>
            <div >
              <h3 className="text-lg font-semibold text-cyan-800">
                {category.name}
              </h3>
              <p className="text-sm text-cyan-600 mt-1">
                {category.description}
              </p>
            </div>
          </Link>
        </motion.div>
      </AnimatePresence>
    </div>


  );
};

export default CategoryCard; 
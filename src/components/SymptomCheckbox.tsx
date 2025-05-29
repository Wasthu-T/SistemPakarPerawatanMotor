'use client';
import { motion, AnimatePresence } from "framer-motion";

interface Symptomcard {
  id: string;
  text: string;
  isChecked: boolean;
  onChange: (id: string, checked: boolean) => void;
}

const Symptomcard: React.FC<Symptomcard> = ({ id, text, isChecked, onChange }) => {
  return (
    <AnimatePresence mode="wait"
      key={id}>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}

        className="flex items-center mb-2 p-2 bg-cyan-50 rounded hover:bg-cyan-100"
      >
        <input
          id={`symptom-${id}`}
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onChange(id, e.target.checked)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
        <label
          htmlFor={`symptom-${id}`}
          className="ml-2 text-sm font-medium text-cyan-800"
        >
          {text}
        </label>
      </motion.div>
    </AnimatePresence>
  );
}

export default Symptomcard;
'use client';
import React from 'react';
import { Problem } from '../types';
import { motion } from 'framer-motion';

interface ProblemCardProps {
  problem: Problem;
}

const Problemcard: React.FC<ProblemCardProps> = ({ problem }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="mb-4 p-4 border border-cyan-400 rounded-lg shadow-sm bg-cyan-50">
      <h3 className="text-lg font-semibold text-cyan-800">
        {problem.name}
      </h3>
      <p className="text-[16px] font-medium text-cyan-600 mb-2">
        {problem.description}
      </p>
      <div className="mt-2">
        <h4 className="text-md font-bold text-cyan-700">Solusi:</h4>
        <p className="text-sm text-cyan-600">
          {problem.solution}
        </p>
      </div>
    </motion.div>

  );
}
// export default function ProblemCard({ symptomdata }: { symptomdata: any[] }) {
//   // Handle diagnosis submission
//   // const { userSelections, handleSymptomChange, matchingProblems } = useSymptomSelections(symptomdata);

//   useEffect(() => {
//     console.log("matchingProblems updated:", matchingProblems);
//   }, [matchingProblems]); // Akan men-trigger console setiap matchingProblems berubah


//   return (
//     <div className="mb-4 p-4 border border-cyan-400 rounded-lg shadow-sm bg-cyan-50">
//       <h2 className="text-xl font-bold text-cyan-800 mb-2">Hasil Diagnosis</h2>

//       {matchingProblems.length === 0 ? (
//         <p className="text-cyan-600">Belum ada hasil. Pilih gejala terlebih dahulu.</p>
//       ) : (
//         <ul className="space-y-2">

//           {matchingProblems.map((problem, index) => (
//             <li key={index} className="p-3 bg-white rounded shadow">
//               <h3 className="font-semibold text-cyan-700">{problem.name}</h3>
//               <p className="text-sm text-cyan-600">{problem.solution}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

export default Problemcard;
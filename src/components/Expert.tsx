'use client';
import { useEffect, useState } from "react";
import { UserSelection, Problem } from "@/types";
import { forwardChaining } from "@/utils/forwardChaining";
import SymptomCheckbox from "@/components/SymptomCheckbox";
import Problemcard from "./ProblemCard";

function Symptompagination({
    totalPages,
    currentPage,
    onNext,
    onPrev
}: {
    totalPages: number;
    currentPage: number;
    onNext: () => void;
    onPrev: () => void;
}) {
    return (
        <div className="flex items-center justify-between gap-4 mt-4">
            {/* Tombol Previous */}
            <button
                onClick={onPrev}
                disabled={currentPage === 1}
                className="text-cyan-700 hover:text-cyan-900 disabled:text-gray-300 text-2xl"
            >
                &lt;
            </button>

            {/* Bullet */}
            <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, index) => (
                    <span
                        key={index}
                        className={`w-3 h-3 rounded-full ${index + 1 === currentPage
                                ? 'bg-cyan-700'
                                : 'bg-cyan-200'
                            }`}
                    ></span>
                ))}
            </div>

            {/* Tombol Next */}
            <button
                onClick={onNext}
                disabled={currentPage === totalPages}
                className="text-cyan-700 hover:text-cyan-900 disabled:text-gray-300 text-2xl"
            >
                &gt;
            </button>
        </div>

    );
}

function handlepagination(
    data: any[],
    PerPage: number
    // userSelections: any[],
    // handleSymptomChange: void,
) {
    // const { userSelections, handleSymptomChange } = getuserSelections(symptomdata);

    const itemsPerPage = PerPage;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const dataPaginated = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    // Navigasi halaman
    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return {
        dataPaginated,
        totalPages,
        currentPage,
        nextPage,
        prevPage
    }
    // return symptomdata.slice(startIndex, endIndex);
}

interface ExpertSystemProps {
    symptomdata: any[];
}

// export default function useSymptomSelections(symptomdata: any[]) {
const ExpertSystem: React.FC<ExpertSystemProps> = ({ symptomdata }) => {
    const [userSelections, setUserSelections] = useState<UserSelection[]>([]);
    const [matchingProblems, setMatchingProblems] = useState<Problem[]>([]);
    // const [diagnosisSubmitted, setDiagnosisSubmitted] = useState(false);
    const Category = symptomdata[0]?.categoryId || null; // Assuming the first item has the category info
    useEffect(() => {
        if (symptomdata.length > 0) {
            setUserSelections(
                symptomdata.map(symptom => ({
                    symptomId: symptom.id,
                    selected: false,
                }))
            );
        }
    }, [symptomdata]);

    // Jalankan forward chaining setiap kali userSelections berubah
    useEffect(() => {
        if (Category) {
            const results = forwardChaining(userSelections, Category);
            setMatchingProblems(results);
            console.log("Matching Problems1:", matchingProblems.length);
        }
    }, [userSelections, Category]);

    const handleSymptomChange = (symptomId: string, isChecked: boolean) => {
        setUserSelections(prev =>
            prev.map(selection =>
                selection.symptomId === symptomId
                    ? { ...selection, selected: isChecked }
                    : selection
            )
        );
    };

    const paginationSymptoms = handlepagination(symptomdata, 5);
    const paginationProblems = handlepagination(matchingProblems, 1);

    // // Handle diagnosis submission
    // const handleSubmitDiagnosis = () => {
    //     if (Category) {
    //         const results = forwardChaining(userSelections, Category);
    //         setMatchingProblems(results);
    //         setDiagnosisSubmitted(true);
    //     }
    // };
    return (
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-400">
                <h2 className="text-xl font-semibold mb-4 text-cyan-800">
                    Gejala yang Dialami
                </h2>
                {paginationSymptoms.dataPaginated.map(symptom => (
                    <SymptomCheckbox
                        key={symptom.id}
                        id={symptom.id}
                        text={symptom.text}
                        isChecked={
                            userSelections.find(s => s.symptomId === symptom.id)?.selected || false
                        }
                        onChange={handleSymptomChange}
                    />
                ))}
                <Symptompagination
                    totalPages={paginationSymptoms.totalPages}
                    currentPage={paginationSymptoms.currentPage}
                    onNext={paginationSymptoms.nextPage}
                    onPrev={paginationSymptoms.prevPage}
                />
            </div>
            <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-400">
                <h2 className="text-xl font-semibold mb-4 text-cyan-800">
                    {paginationProblems.totalPages} Masalah yang didapatkan
                </h2>

                {paginationProblems.dataPaginated.length > 0 ? (
                    <>
                        {paginationProblems.dataPaginated.map((problem, index) => (
                            <Problemcard key={`${problem.id}-${index}`} problem={problem} />
                        ))}

                        <Symptompagination
                            totalPages={paginationProblems.totalPages}
                            currentPage={paginationProblems.currentPage}
                            onNext={paginationProblems.nextPage}
                            onPrev={paginationProblems.prevPage}
                        />
                    </>
                ) : (
                    <p className="text-cyan-600">
                        Tidak dapat menentukan masalah spesifik berdasarkan gejala yang dipilih. Mohon periksa kembali gejala atau konsultasikan dengan mekanik.
                    </p>
                )}
            </div>
        </div>
    );
}

export default ExpertSystem;
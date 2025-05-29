import { symptoms, categories } from '../../../data/expertSystem';
import Buttonhome from '../../../components/buttonhome';
import ExpertSystem from '@/components/Expert';

export default async function CategoryPage({
    params,
}: {
    params: Promise<{ categoryid: string }>;
}) {

    const { categoryid } = await params;
    // Get symptoms
    const Symptoms = symptoms.filter(
        symptom => symptom.categoryId === categoryid
    );

    // Get category
    const category = categories.find(
        category => category.id === categoryid
    );
    return (
        <div className="max-w-4xl mx-auto py-4">
            <Buttonhome />
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-cyan-800 mb-2">
                    {category?.name} Motor Matic
                </h1>
                <h1 className="text-3xl font-bold text-cyan-800 mb-2">
                </h1>
                <p className="text-cyan-600">
                    Pilih gejala-gejala yang dialami oleh motor matic Anda
                </p>
                <p className="text-cyan-600">
                    Sistem akan mendiagnosis gejala dan memberikan solusi Anda
                </p>
            </div>
            <ExpertSystem
                symptomdata={Symptoms}
            />
        </div>
    );
};
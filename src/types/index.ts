export interface Symptom {
  id: string;
  text: string;
  categoryId: string;
}

export interface Problem {
  id: string;
  name: string;
  description: string;
  solution: string;
  categoryId: string;
}

export interface Rule {
  id: string;
  symptoms: string[];
  problemId: string;
  categoryId: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface UserSelection {
  symptomId: string;
  selected: boolean;
} 
import { Rule, Problem, UserSelection } from '../types';
import { problems, rules } from '../data/expertSystem';

export function forwardChaining(userSelections: UserSelection[], categoryId: string): Problem[] {
  // Extract selected symptom IDs
  const selectedSymptoms = userSelections
    .filter(selection => selection.selected)
    .map(selection => selection.symptomId);
  
  if (selectedSymptoms.length === 0) {
    return [];
  }

  // Filter rules by category
  const categoryRules = rules.filter(rule => rule.categoryId === categoryId);
  
  // Apply forward chaining to find matching problems
  const matchingProblems: Problem[] = [];
  
  // For each rule in the category, check if all of its symptoms are in the selected symptoms
  categoryRules.forEach(rule => {
    const isRuleMatched = rule.symptoms.every(symptomId => 
      selectedSymptoms.includes(symptomId)
    );
    
    // If the rule is matched, find the corresponding problem
    if (isRuleMatched) {
      const problem = problems.find(p => p.id === rule.problemId);
      if (problem && !matchingProblems.some(p => p.id === problem.id)) {
        matchingProblems.push(problem);
      }
    }
  });
  return matchingProblems;
} 
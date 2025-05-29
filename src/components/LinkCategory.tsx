import React from 'react';
import { categories } from '../data/expertSystem';
import CategoryCard from './CategoryCard';


const LinkCategory: React.FC = () => {
    return (
        <div className="grid md:grid-cols-2 gap-6 ">
          {categories.map(category => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
    )
}

export default LinkCategory;


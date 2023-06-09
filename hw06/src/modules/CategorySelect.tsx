import React, { useState, useEffect } from 'react';
import { Category } from '../model/Category';

interface CategorySelectorProps {
  onCategorySelected: (categoryId: number) => void;
}

function CategorySelector(props: CategorySelectorProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch('https://opentdb.com/api_category.php');
      const data = await response.json();
      setCategories([{ id: 0, name: '' }, ...data.trivia_categories])
    }
    fetchCategories();
  }, []);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeout(()=>{props.onCategorySelected(parseInt(event.target.value))},1000)
  };

  return (
    <div className='CategorySelecton'>
      <label className='SelectText' htmlFor="category">Select a category:</label>
      <select className='Select' id="category" onChange={handleCategoryChange}>
        {categories.map((category) => (
          <option className='Option' key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategorySelector;

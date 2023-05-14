import React, { useState } from 'react'
import QuestionToReturn from './modules/QuestionToReturn'
import CategorySelect from './modules/CategorySelect'

function App() {
  const [category, setCategory] = useState<number | null>(null)

  const handleCategorySelected = (categoryId: number) => {
    setCategory(categoryId)
    console.log(category)
  };

  const resetCategory =()=>{
    setCategory(null)
  }

  return (
    <div className='App'>
      {category ? (
        <>
          <QuestionToReturn categoryId={category} resetCategory={resetCategory} />
        </>
      ) : (
        <>
          <h1>Welcome to the Trivia App</h1>
          <h2>Chose your category</h2>
          <CategorySelect onCategorySelected={handleCategorySelected} />
        </>
      )}
      
    </div>
  );
}

export default App;

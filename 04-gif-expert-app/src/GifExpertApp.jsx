import { useState } from 'react'
import { AddCategory, GifGrid } from './components'
import './styles.css'

export const GifExpertApp = () => {
  // const [categories, setCategories] = useState(['one punch'])
  const [categories, setCategories] = useState(['one punch'])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return

    // setCategories([...categories, newCategory])
    // setCategories((c) => [...c, newCategory])
    setCategories([newCategory, ...categories])
  }

  return (
    <div>
      <h1>Gif Expert App</h1>

      <AddCategory
        // setCategories={ setCategories }
        onNewCategory={onAddCategory}
      />

      {categories.map((category) => (
        <GifGrid
          key={category}
          category={category}
        />
      ))}
    </div>
  )
}

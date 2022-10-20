import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifFinderApp = () => {
  const [categories, setCategories] = useState(['One Punch','buru']);
  const onAddCategory = ()=>{
    setCategories([...categories, 'Valoshit']);
  }

  return (
    <div>
        <h1>GifFinderApp</h1>
        <button onClick={onAddCategory}>Agregar</button>
        <AddCategory setCategories={setCategories} categories={categories}/>
        <ol>
          {categories.map(categorie=>{
            return <li key={categorie}>{categorie}</li>
          })}
        </ol>
        </div>
  )
}

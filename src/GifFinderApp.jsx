import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifFinderApp = () => {
  const [categories, setCategories] = useState(['']);
  const onAddCategory = (newCategory)=>{
    if(categories.includes(newCategory)){
      return ;
    }
    setCategories([newCategory,...categories]);
  }

  return (
    <div>
        <h1>GifFinderApp</h1>
        <AddCategory 
          onNewCategory = {onAddCategory}
        />
        <ol>
          {categories.map((category)=>{
            return <GifGrid 
                    key={category} 
                    category={category}
                    />
          })}
        </ol>
        </div>
  )
}

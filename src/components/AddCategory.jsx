import {useState} from 'react'

export const AddCategory = ({categories,setCategories}) => {
    const [inputValue, setInputValue] = useState('One Punch');
    const onInputChange = ({target})=>{
        setInputValue(target.value);
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        setCategories([...categories, inputValue]);
        console.log(categories);
    }

  return (
    <form onSubmit={(event)=>onSubmit(event)}>
        <input
        type="text"
        placeholder="Search Gif..."
        value={inputValue}
        onChange={onInputChange}
        />
    </form>
  )
}

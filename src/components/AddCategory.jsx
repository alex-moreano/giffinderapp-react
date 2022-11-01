import {useState} from 'react';

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = ({target})=>{
        setInputValue(target.value);
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        let newInputValue = inputValue.trim();
        if(newInputValue.length <= 1) return;
        newInputValue = newInputValue;
        onNewCategory(newInputValue);
        setInputValue('');
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
  AddCategory.propTypes={
    onNewCategory: PropTypes.func.isRequired
  }
}

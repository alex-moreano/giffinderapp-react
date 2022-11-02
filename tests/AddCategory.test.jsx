import { fireEvent, render,screen } from "@testing-library/react";
import { AddCategory } from "../src/components/AddCategory";

describe('Tests on add category',()=>{
    test('should change the input value', () => { 
        render(<AddCategory onNewCategory={()=>{}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'Saitaam'}});

        expect(input.value).toBe('Saitaam');
     });

     test('shoul call onnewcategory with input value', () => { 
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        expect(input.value).toBe('');
        //expect(onNewCategory).toHaveBeenCalled();
        //expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
      });

      test('not have to call on new category empty',()=>{
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: ''}});
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(0);
      });
});

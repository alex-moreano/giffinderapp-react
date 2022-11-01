import { fireEvent, render,screen } from "@testing-library/react";
import { AddCategory } from "../src/components/AddCategory";

describe('Tests on add category',()=>{
    test('should change the input value', () => { 
        render(<AddCategory onNewCategory={()=>{}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'Saitaam'}});

        expect(input.value).toBe('Saitaam');
     })
});

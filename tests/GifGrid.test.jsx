import { render,screen } from"@testing-library/react";
import { useFetchGifs } from "../src/hooks/useFetchGifs";
const { GifGrid } = require("../src/components/GifGrid");

jest.mock('../src/hooks/useFetchGifs');
describe('Tests on gifgrid', () => {
    const category = 'One Punch'
    test('should show loading', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
     });

     test('should show images from usefetchgifs', () => { 
         const gifs = [{
             id:'abc',
             title: 'saitama',
             url: 'https://localhost.com/saitama.jpg'
            }]
            useFetchGifs.mockReturnValue({
                images: [],
                isLoading: false
            });
            render(<GifGrid category={category}/>);
            expect(screen.getAllByRole('img').length).toBe(1)
      });
});
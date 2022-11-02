import { renderHook,waitFor } from "@testing-library/react"
import { useFetchGifs } from "../src/hooks/useFetchGifs"

describe('tests on usefecthgifs', () => {
    test('should return initial state', () => {
        const {result}=renderHook(()=>{
           return useFetchGifs('One Punch');
        })

        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
     });

     test('should reutrn array images and isloading false', async() => { 
        const {result}=renderHook(()=>{
            return useFetchGifs('One Punch');
         })
 
         await waitFor(
            ()=>expect(result.current.images.length).toBeGreaterThan(0)
         );
        const {images, isLoading} = result.current;
            

         expect(images.length).toBeGreaterThan(0);
         expect(isLoading).toBeFalsy();
      });
}); 
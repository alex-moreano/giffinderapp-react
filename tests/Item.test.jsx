import { render } from "@testing-library/react";
import { GifGridItem } from "../src/components/GifGridItem";

describe('Tests on gif grid item component',()=>{
    test('Title and url must be on the props', () => {
        const title = 'This is a title';
        const {getByText} = render (<GifGridItem title={title}/>);
        expect(getByText(title)).toBeTruthy();
    });

    /*test('Url must be on the props and title on alt', () => {
        render (<GifGridItem title={title} url={url}/>);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });*/

    test('Must match the snapshot', () => {
        const title = 'This is a title';
        const url = 'https://www.something.com';
        const {container} = render (<GifGridItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });
});
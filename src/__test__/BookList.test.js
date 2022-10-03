import { render, screen } from "@testing-library/react"
import BookList from "../Components/BookList";
import renderer from 'react-test-renderer';

//5. Use decribe block and it/test block appropriately
describe('BookListComponent', () => {
    //3. Have a right BookList component snapshot
      it('has right BookList component snapshot', () => {
        const snapshotJSON = renderer.create(<BookList name='Book Library' numberOfBooks='1000'/>).toJSON();
        expect(snapshotJSON).toMatchSnapshot();
      });
    //4. Test whether BookList component has the following text in it
      it('should have Welcome to My Favorite Book Portal in the document', () => {
        render(<BookList/>)
        const elem = screen.getByText('Welcome to My Favorite Book Portal');
        expect(elem).toBeInTheDocument();
      })
      
})

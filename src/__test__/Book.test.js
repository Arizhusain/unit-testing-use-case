import { render, screen, fireEvent } from "@testing-library/react";
import Book from "../Components/Book";

//5. Use decribe block and it/test block appropriately
describe("BookComponent", () => {
  const bookInfo = [
    {
      bookId: "1",
      bookName: "The Intelligent Investor",
      bookAuthor: "Benjamin Graham",
    },
  ];

  //1. Testing whether Book Component is receving props from BookList component
  it("should receive props", () => {
    render(<Book bookInfo={bookInfo} />);
    const bookElem = screen.getByTestId("1");
    expect(bookElem.textContent).toBe(
      "The Intelligent Investor by Benjamin Graham"
    );
  });

  //2. Test whether 'Add to Reading List of Book Component is working well
  it("should add book and author details when 'Add to Reading List' button is clicked", () => {
    const anotherBook = {
      bookId: "2",
      bookName: "The Odyssey",
      bookAuthor: "Homer",
    }
    render(<Book bookInfo={bookInfo} />);
    const button = screen.getByRole('button')

    //Adding book details on click
    fireEvent.click(button, bookInfo.push(anotherBook))

    //re-rendering the component
    render(<Book bookInfo={bookInfo} />);
    const bookElem = screen.getByTestId("2");
    expect(bookElem.textContent).toBe(
      "The Odyssey by Homer"
    );
  });
});

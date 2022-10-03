import React from "react";

const Book = (props) => {
  return (
    <div>
      <button onClick={props.addBookDetails}>Add to reading list</button>
      <br />
      <h2>Reading list : </h2>
      <ul>
        {props.bookInfo.map((item, index) => (
          <li key={index} data-testid={`${index + 1}`}>
            {item.bookName} by {item.bookAuthor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Book;

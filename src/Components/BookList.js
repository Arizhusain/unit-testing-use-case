import React, { Component } from "react";
import Book from "./Book";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookDetailsObj: {
        id: '',
        bookName: '',
        bookAuthor: '',
      },
      bookInfo: [
        {
          id: 1,
          bookName: "The Intelligent Investor",
          bookAuthor: "Benjamin Graham",
        },
      ],
    };
  }
  render() {
    const handleChange = (event) => {
      const lastElem = this.state.bookInfo.slice(-1)[0];
      this.setState({
        bookDetailsObj: {
          ...this.state.bookDetailsObj,
          [event.target.name]: event.target.value,
          id: lastElem.id + 1,
        },
      });
    };
    const addBookDetails = (event) => {
      event.preventDefault();
      if (
        this.state.bookInfo.find(
          (item) => item.bookName === this.state.bookDetailsObj.bookName
        )
      ) {
        alert("Book Already present, please change thebook name");
      } else {
        this.setState((prevState) => ({
          bookInfo: [...prevState.bookInfo, this.state.bookDetailsObj],
        }));
      }
    };

    return (
      <div>
        <h1>Welcome to My Favorite Book Portal</h1>
        <hr />
        <h2>
          {this.props.name} - {this.props.numberOfBooks}
        </h2>
        <hr />
        <h4>Add book details for reading list</h4>
        Book Name :{" "}
        <input
          name="bookName"
          type="text"
          placeholder="Book Name"
          value={this.state.bookDetailsObj.bookName}
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <br />
        Book Author :{" "}
        <input
          name="bookAuthor"
          type="text"
          placeholder="Author"
          value={this.state.bookDetailsObj.bookAuthor}
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <br />
        <hr />
        <Book bookInfo={this.state.bookInfo} addBookDetails={addBookDetails} />
      </div>
    );
  }
}

export default BookList;

import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Save from "../components/Save";
import View from "../components/View";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Search, Input, FormBtn } from "../components/Search";

function Books() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})
  
    // Load all books and store them with setBooks
    useEffect(() => {
      loadBooks()
    }, [])
  
    // Loads all books and sets them to books
    function loadBooks() {
      API.getBooks()
        .then(res => 
          setBooks(res.data)
        )
        .catch(err => console.log(err));
    };
  
  
      return (
        <div>
            <Jumbotron />
            <Search>
                <form>
                    <Input 
                    onChange={() => {}}
                    name="title"
                    placeholder="Title (required)" />
                    <FormBtn
                    disabled={!(formObject.author && formObject.title)}
                    onClick={() => {}}>
                        Search
                    </FormBtn>
                </form>
            </Search>
            <List>
                {books.map(book => {
                        return (
                        <ListItem key={book._id}>
                            <a href={"/books/" + book._id}>
                            <strong>
                                {book.title} by {book.author}
                            </strong>
                            </a>
                            <Save onClick={() =>{}} />
                            <View onClick={() =>{}} />
                        </ListItem>
                        );
                    })}
            </List>
        </div>
      ); 
}
export default Books;
  
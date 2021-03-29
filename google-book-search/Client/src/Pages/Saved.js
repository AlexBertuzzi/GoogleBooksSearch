import React, { useState } from "react";
import Delete from "../components/Delete"
import View from "../components/View";
import API from "../utils/API";
import { List, ListItem } from "../components/List";

function SavedBooks() {
    const [saved, setSaved] = useState([])

    function searchBooks() {
        API.getBooks()
            .then(res => {
                setSaved(res.data)
                console.log(res.data)
            })
    }
    searchBooks();

    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => {
                searchBooks()
                console.log(res.data)
            })
    }

    return (
        <div className="jumbotron">
            {saved.length ? (
                saved.map(book => {
                    return (
                        <List>
                            <ListItem key={book.id}>
                                <h2>
                                    {book.volumeInfo.title} by {book.volumeInfo.authors}
                                </h2>
                                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                                <p>{book.volumeInfo.description}</p>        
                                <Delete onClick={deleteBook(book.id)} />
                                <View href={book.volumeInfo.infoLink} />
                            </ListItem>
                        </List>
                    )})) : (
                        <h2>No Saved Books</h2>
                )}         
        </div>
    );
}

export default SavedBooks;
        


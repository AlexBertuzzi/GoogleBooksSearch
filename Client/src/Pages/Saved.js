import React, { useEffect, useState } from "react";
import Delete from "../components/Delete"
import View from "../components/View";
import API from "../utils/API";
import { List, ListItem } from "../components/List";

function SavedBooks() {
    const [saved, setSaved] = useState([])

    useEffect(() => {
        searchBooks()
    }, []);

    function searchBooks() {
        API.getBooks()
            .then(res => {
                setSaved(res.data)
                console.log(res.data)
            })
    }
    

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
                            <ListItem key={book._id}>
                                <h2>
                                    {book.title} by {book.authors}
                                </h2>
                                <img src={book.image} alt={book.title} />
                                <p>{book.description}</p>        
                                <Delete onClick={() => deleteBook(book._id)} />
                                <View>
                                    <a href={book.link} style={ {color:"white"} }>View</a>
                                </View>
                            </ListItem>
                        </List>
                    )})) : (
                        <h2>No Saved Books</h2>
                )}         
        </div>
    );
}

export default SavedBooks;
        


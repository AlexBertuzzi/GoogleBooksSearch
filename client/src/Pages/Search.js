import React, { useState } from "react";
import Save from "../components/Save";
import View from "../components/View";
import API from "../utils/API";
import { List, ListItem } from "../components/List";

function Books() {
    // Setting our component's initial state
    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);

    function saveBook(title, authors, description, image, link) {
        API.saveBook({
            title: title,
            authors: authors,
            description: description,
            image: image,
            link: link
        })        
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        API.googleBooks(book)
        .then(data => {
            console.log(data.data.items);
            setResult(data.data.items);
        })
    }

    function handleInputChange(event) {
        const book = event.target.value;
        setBook(book);
    }  
  
      return (
        <div>
            <div>
                <form onSubmit={handleFormSubmit} className="form-group" style={{margin: "5%"}}>
                    <h3>Book Search</h3>
                    <input 
                    className="form-control"
                    onChange={handleInputChange}
                    name="title"
                    placeholder="Title (required)">
                    </input>
                    <button
                    style={{ float: "right", margin: 10 }}
                    className="btn btn-success"
                    type="submit" value="Search">
                        Search
                    </button>
                </form>
            </div>
            <div className="jumbotron">
                {result.length ? (
                    result.map(book => {
                       
                    return (
                        <List>
                            <ListItem key={book.id}>
                                <h2>
                                    {book.volumeInfo.title} by {book.volumeInfo.authors}
                                </h2>
                                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                                <p>{book.volumeInfo.description}</p>
                                <Save onClick={() => saveBook(book.volumeInfo.title, book.volumeInfo.authors, book.volumeInfo.description, book.volumeInfo.imageLinks.thumbnail, book.volumeInfo.infoLink)} />
                                <View>
                                    <a href={book.volumeInfo.infoLink} style={ {color:"white"} }>View</a>
                                </View> 
                            </ListItem>
                        </List>
                    )})) : (
                        <h2> No Results to Display</h2>
                )}
            </div>
        </div>
      ); 
}
export default Books;
import axios from "axios";
const apiKey= "AIzaSyCh9dLDGp7lmrqQKRLWPOMqFiVuGBD8sD0"
export default {
  googleBooks: function(book) {
      return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=10")
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/book");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/book/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/book/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/book", bookData);
  }
};
import React from "react";
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import About from "./components/About";
import Books from "./components/Book/Books";
import BookDetail from "./components/Book/BookDetail";


function App() {
  return (
    <React.Fragment>
      <header>
        <Header></Header>
      </header>
      <main>
        <Routes>
        <Route path="/" element={<Home></Home>} exact></Route>
        <Route path="/add" element={<AddBook></AddBook>} exact></Route>
        <Route path="/books" element={<Books></Books>} exact></Route>
        <Route path="/about" element={<About></About>} exact></Route>
        <Route path="/books/:id" element={<BookDetail></BookDetail>} exact></Route>
         
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;

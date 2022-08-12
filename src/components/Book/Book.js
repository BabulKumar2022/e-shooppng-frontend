import React from 'react';
import "./Book.css"
const Book = (props) => {

    const {_id, name, author, description, price, image} = props.book;
    return (
        <div className='card'>
            <img src={image} alt={name} />
            <article>by {author}</article>
            <h3>{name}</h3>
            <p>{description}</p>
            <h2>$ :{price}</h2>
            <button className='btn'>Update</button>
            <button className='btn'>Delete</button>
        </div>
    );
};

export default Book;
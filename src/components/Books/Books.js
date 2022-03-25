import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import  './Books.css'
import ShowBooks from './ShowBooks';

const Books = () => {
    const [books , setBooks] = useState([])
    const [cart , setCart] = useState([])
    useEffect(() =>{
        fetch('books.json')
         .then(res => res.json())
         .then(data => setBooks(data))
    },[])
    const handleBtn = (book) =>{
        const newcart = [...cart , book]
        setCart(newcart)
    }
    return (
        <div className='books-container container'>
            <div class="row row-cols-1 row-cols-md-3 g-4 container mx-auto my-3">
                    {
                         books.map(book => <ShowBooks 
                            book={book} 
                            key={book.id}
                            handleBtn={handleBtn}
                            ></ShowBooks>)
                     }
            </div>
            <div className='cart'>
               {
                   cart.map(item => <Cart item={item}></Cart>)
               }
            </div>
            
        </div>
    );
};

export default Books;
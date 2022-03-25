import React from 'react';
import { Card } from 'react-bootstrap';
import './Books.css'

const ShowBooks = ({book}) => {
    const {name , img , price} = book
    console.log(book);
    return (
      <div>
        <div class="col">
          <div class="card h-100">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-danger fw-bold">
                {name}
              </h5>
              <p class="card-text">
               price : ${price}
              </p>
              <p class="card-text">
              
              </p>
            </div>
            <div class="card-footer border-0">
              <button className='btn btn-info  text-white fw-bold'>Details</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ShowBooks;
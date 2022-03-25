import React from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';

import './Books.css'

const ShowBooks = ({book , handleBtn}) => {
    const {name , img , price} = book
   
    return (
      <div className='showbooks-container'>
        <div class="col">
          <div class="card h-75">
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
            <div class="card-footer border-0 mx-auto">
              <button onClick={()=>handleBtn(book)} className='btn btn-info d-flex align-items-center     text-white fw-bold'>
                  Add To Cart 
                  <BsFillCartCheckFill size={25}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ShowBooks;
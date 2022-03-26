import React from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';

import './Books.css'

const ShowBooks = ({book , handleBtn}) => {
 
    const {name , img , price} = book
   
    return (
      <div className="showbooks-container">
        <div className="col">
          <div className="card  rounded-lg">
            <img className='custom-width card-img-top' src={img}  alt="..." />
            <div className="card-body">
              <h5 className="card-title text-danger fw-bold">{name.slice(0,20)}</h5>
              <p className="card-text">price : ${price}</p>
              
            </div>
            <div class="card-footer border-0 mx-auto">
              <button
                onClick={() => handleBtn(book)}
                className="btn btn-info d-flex align-items-center  text-white fw-bold"
              >
                Add To Cart
                <BsFillCartCheckFill size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ShowBooks;
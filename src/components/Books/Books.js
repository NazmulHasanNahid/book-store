import React, { useEffect, useState } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { FaCommentMedical } from "react-icons/fa";
import Cart from "../Cart/Cart";
import "./Books.css";
import ShowBooks from "./ShowBooks";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const Books = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [random, setRandom] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  const handleBtn = (book) => {
    
    const newcart = [...cart, book];
    if(cart.length < 4){
      setCart(newcart);
    }
    else{
      alert('you Cant add more')
    }
   // setCart(newcart);
  };
  const chooseBtn = () => {
    setCart([]);
  };

  const handleRandom = () => {
      const newCart = [...cart];
      let randomItem = newCart[Math.floor(Math.random() * newCart.length)];
      setRandom(randomItem);
      setIsOpen(true);
   
    }

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="books-container container">
      <div class="row row-cols-1 row-cols-md-3 g-4 container mx-auto my-3">
        {books.map((book) => (
          <ShowBooks
            book={book}
            key={book.id}
            handleBtn={handleBtn}
          ></ShowBooks>
        ))}
      </div>

      <div className="cart ">
        <h4 className="fw-bold text-info  ">
          Selected Items :{" "}
          <small>
            {" "}
            <span className="text-danger">{cart.length}</span>
          </small>{" "}
        </h4>
        {cart.map((item) => (
          <Cart key={item.id} item={item}></Cart>
        ))}
        <div className="btn-custom">
          <button
            onClick={handleRandom}
            className="btn btn-info text-white m-2"
          >
            Choose 1 For Me <FaCommentMedical size={25} />
          </button>

          <button
            onClick={chooseBtn}
            className="btn btn-info text-white m-2 custom-margin  d-flex align-items-center "
          >
            Choose Again <MdRemoveShoppingCart size={30} />
          </button>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p>
         
          <img width="20px" src={random?.img? random.img : 'Please Select Product'  }  alt="" /> {random?.name ? random.name:'Please Select Product'}
        </p>
        <button className="btn btn-info text-white" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default Books;

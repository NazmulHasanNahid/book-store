import React, { useEffect, useState } from 'react';
import {MdRemoveShoppingCart} from 'react-icons/md'
import {FaCommentMedical} from 'react-icons/fa'
import Modal from 'react-modal';
import Cart from '../Cart/Cart';
import  './Books.css'
import ShowBooks from './ShowBooks';



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');

const Books = () => {
    const [books , setBooks] = useState([])
    const [cart , setCart] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        //setIsOpen(true);
        const newCart = [...cart]
        let randomItem = newCart[Math.floor(Math.random() * newCart.length)]
        const {name, img} = randomItem
        console.log(randomItem);
        alert(name , img)
        setCart([])
        
      }
    
      
      function closeModal() {
        setIsOpen(false);
      }



    useEffect(() =>{
        fetch('books.json')
         .then(res => res.json())
         .then(data => setBooks(data))
    },[])
    const handleBtn = (book) =>{
        const newcart = [...cart , book]
        setCart(newcart)
    }
    const chooseBtn = () =>{
        setCart([])
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
               
            <div className='cart '>
            <h4 className='fw-bold text-info  '>Selecd Items : {cart.length} </h4>
               {
                   cart.map(item => <Cart key={item.id} item={item}></Cart>)
                   
               }
               <div className='btn-custom'>
               <button onClick={openModal}  className='btn btn-info text-white m-2'>Choose 1 For Me <FaCommentMedical size={25}/></button>

               <button onClick={chooseBtn} className='btn btn-info text-white m-2 custom-margin  d-flex align-items-center '>Choose Again <MdRemoveShoppingCart size={30} /> </button>
               </div>

               <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                
                >
                   
                  
                    <button onClick={closeModal} className='btn btn-info text-white'>Close</button>
                </Modal>
            </div>
            
        </div>
    );
};

export default Books;
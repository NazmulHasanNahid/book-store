import React from 'react';
import '../Books/Books'
const Question = () => {
    return (
        <>
        <h4 className='text-info my-5 fw-bold text-center'>Question And Answer  <br /> ____</h4>
        <div className='container d-flex question-style'>
            
            <div className="border m-2 p-2">
                
                <p className='fw-bold'>How useState works?</p>
                <p>First of all You Have to keep Data i mean store data in State using useState and than you can use this data using map loop and whatever what do you want , actually useState  is a Hook that enables state variables to be used in functional components. This function takes the initial state and returns a variable with the current state value not necessarily the starting state and another function to update it.</p>
                <p></p>
               
                </div>
                <div className="border m-2 p-2">
               
                <p className='fw-bold'> Whats is the difference between props and state ?</p>
                <p>Ans : The Main difference is props are read only and state can be changes asynchronous  and props can not be modified but state can be modified using this.setState , And also you can store data using State  but you can't store data using props , props used just for send data , and state used for store data props is sending method and state as like a bucket where you can store all kind of data </p>
               
                </div>
           
        </div>
        </>
    );
};

export default Question;
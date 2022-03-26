import React from 'react';

const Question = () => {
    return (
        <div className='container m-5'>
            <div className="row g-5">
                <div className="col-lg-6 w-50 border p-3">
                <span className='m-3'>
                <p>How useState works?</p>
                <p>First of all You Have to keep Data i mean store data in State using useState and than you can use this data using map loop and whatever what do you want , actually useState  is a Hook that enables state variables to be used in functional components. This function takes the initial state and returns a variable with the current state value not necessarily the starting state and another function to update it.</p>
                <p></p>
                </span>
                </div>
                <div className="col-lg-6 w-50 border p-3 ">
                <span className='m-3'>
                <p> Whats is the difference between props and state ?</p>
                <p>Ans : The Main difference is props are read only and state can be changes asynchronous  and props can not be modified but state can be modified using this.setState , And also you can store data using State  but you can't store data using props , props used just for send data , and state used for store data props is sending method and state as like a bucket where you can store all kind of data </p>
                </span>
                </div>
            </div>
            
           
        </div>
    );
};

export default Question;
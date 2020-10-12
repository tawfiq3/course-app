import React from 'react';

const Count = (props) => {
    const count = props.count
    let amount = 0;

    for (let i = 0; i < count.length; i++) {
        const course = count[i];
        amount = amount + course.price
        
    }
    
    return (
        <div>
           <h2>Course Added:{count.length}</h2>
           <h2>Total Amount: {amount}</h2>
         
        </div>
    );
};

export default Count;

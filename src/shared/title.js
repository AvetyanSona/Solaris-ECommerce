import React from 'react';


export  function Title({name}) {
    return (
        <div className = 'row mx-0'>
           <h1 className = 'col-10 mx-auto my-2 text-center text-title text-capitalize font-weight-bold font'>{name}</h1> 
        </div>
    )
}


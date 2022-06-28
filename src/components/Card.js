import React from "react";
import '../index.css';
const Card = (props) => {
    return ( 
        <>
        <div className="card">
            <img src={props.image} className="card-image"/>
            <div className="card-title">
            <h2>
            {props.title}
            </h2>
            </div>     
        </div>
        </>  
     );
}

export default Card;
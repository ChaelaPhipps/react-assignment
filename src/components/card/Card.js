import React from 'react';
import "./Card.css";


function Card(props) {
  return (
    <div
      className="crd"
      
    >
      <img
                  src={props.src}
                  alt={props.alt}
                  width={52}
                  height={52}
                />
      <h2>{props.name}</h2><br></br>
      <p>{props.text} </p>
    </div>
  );
}

export default Card;
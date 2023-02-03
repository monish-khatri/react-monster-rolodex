import React from "react";
import './Card.css'

const Card = ({cardDetail: {id,name,email}}) => (
    <div key={id} className='card-container'>
        <img src={`https://robohash.org/${id}?set=set2&sizes=180*180`} alt={`monster ${name}`}/>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
)

export default Card;
import React, {Component} from "react";
import './Card.css'
class Card extends Component {
    render() {
        const {id,name,email} = this.props.cardDetail;

        return (
            <div key={id} className='card-container'>
                <img src={`https://robohash.org/${id}?set=set2&sizes=180*180`} alt={`monster ${name}`}/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}

export default Card;
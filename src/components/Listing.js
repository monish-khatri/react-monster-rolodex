import React from "react";
import Card from "./Card";
import './Listing.css'

const Listing = ({data}) => (
    <div className="card-list">
        {
            data.map((detail) => {
                return (
                    <Card cardDetail={detail} key={detail.id}/>
                )}
            )
        }
    </div>
)

export default Listing;
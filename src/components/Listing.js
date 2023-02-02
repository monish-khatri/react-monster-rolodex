import React, {Component} from "react";
import Card from "./Card";
import './Listing.css'
class Listing extends Component {
    render() {
        const {data} = this.props;
        return (
            <div className="card-list">
                {
                    data.map((detail) => {
                        return (
                            <Card cardDetail={detail}/>
                        )}
                    )
                }
            </div>
        )
    }
}

export default Listing;
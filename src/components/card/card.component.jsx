import React from 'react';
import './card.styles.css';

export const Card = props => {
    return (
        <div className="card-container">
            <img alt='legend' src={`https://robohash.org/${props.legend.id}?set=set2&size=180x180`}/>
            <h2>{props.legend.name}</h2>
            <p>{props.legend.email}</p>
        </div>
    )
}
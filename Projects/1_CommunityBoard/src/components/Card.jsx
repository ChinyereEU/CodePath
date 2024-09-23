import React from "react";
import './Card.css';

const Card = ({title, description, imageUrl, link}) => {
    const handleButtonClick = () => {
        window.open(link, "_blank");
    };

    return (
        <div className="Card">
            <img src={imageUrl} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={handleButtonClick}>View Menu</button>
        </div>
    );
}

export default Card;
import React from 'react';

const CategCard = (props) => {
    const {image, title, paragraph} = props;
    return (
        <div id='big-card-container'>
            <img src={image} alt="" style={{height: "150px", width: "auto", position: "relative", zIndex: "2"}}/>
            <div id='cat-card-container'>
            <div id='cat-card'>
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
            </div>
        </div>
    );
}

export default CategCard;

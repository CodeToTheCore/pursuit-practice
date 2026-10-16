// import { getDefaultNormalizer } from '@testing-library/dom';
import React from 'react';

function CardComponent(){
    return (
        <div className="card" style={{ width: '18rem'}}> {/* Sets the card width */}
        <img src="path_to_image.jpg" className="card-img-top" alt="A descriptive and concise description of the image"/>
        <div className="card-body">
            <h5 className='card-title'>Card Title</h5>
            <p clasName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className='btn btn-primary'>Go somewhere</button>
        </div>
        </div>
    )
    
}

export default CardComponent;
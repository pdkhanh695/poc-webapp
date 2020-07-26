import React from 'react';

const Image = ({ image, handleImageRemove = (f) => f }) => (
    <img
        src={`https://res.cloudinary.com/dz8grtx7i/image/upload/v1593324557/1593324557693.jpg`} //image.url}
        key={image.public_id}
        alt={image.public_id}
        style={{ height: '100px' }}
        className="img-thumbnail m-3"
        onClick={() => handleImageRemove(image.public_id)}
    />
);

export default Image;
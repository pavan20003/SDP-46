import React from 'react';
import one from '../images/1.jpg'
import two from '../images/2.jpg'
import three from '../images/3.jpg'
import four from '../images/4.jpg'
import five from '../images/5.jpg'
import six from '../images/6.jpg'
import seven from '../images/7.jpg'
import eight from '../images/8.jpg'
const images = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
];

const Gallery = () => {
  const handleMouseEnter = (index) => {
    // Add any additional logic when the mouse enters an image
    console.log(`Mouse entered image ${index + 1}`);
  };

  const handleMouseLeave = (index) => {
    // Add any additional logic when the mouse leaves an image
    console.log(`Mouse left image ${index + 1}`);
  };

  return (
    <div className="gallery-container">
      {images.map((imageName, index) => (
        <div
          key={index}
          className="image-item"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <img
            src={imageName}
            src={imageName}
            alt={`Image ${index + 1}`}
            className="gallery-image"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

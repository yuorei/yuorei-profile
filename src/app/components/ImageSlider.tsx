"use client"
import React, { useEffect, useState } from 'react';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className='bg-yellow-300'
      />
    </div>
  );
};

export default ImageSlider;

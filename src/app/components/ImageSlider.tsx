"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './ImageSlider.module.css';
interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div>
      <Image className={styles.image} src={images[currentIndex]} alt={`Slide ${currentIndex}`} fill />
    </div>
  );
};

export default ImageSlider;

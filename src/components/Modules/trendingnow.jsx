import { Play } from 'lucide-react';
import React, { useRef } from 'react'
import Kettle from '../images/Kettle.png'
import Remotecar from '../images/Remote car.png'
import Smartwatch from '../images/Smartwatch.png'
import Sneaker from '../images/Sneakers.png'
import Sofa from '../images/Sofa.png'
import BeardKit from '../images/Beard Grooming kit.png'
import Blender from '../images/Blender.png'
import Desk from '../images/Desk.png'






const categories = ['All', 'Kitchen', 'Furniture', 'Electronics', 'Kids & Toys', 'Fashion', 'Beauty'];

const productVideos = [
  {
    title: 'Electric Kettle',
    category: 'Kitchen',
    tag: 'Hot',
    image: Kettle,
  },
  {
    title: 'Modern Cushion Sofa',
    category: 'Furniture',
    tag: 'New',
    image: Sofa,
  },
  {
    title: 'High-Speed Blender',
    category: 'Kitchen',
    tag: 'Popular',
    image: Blender,
  },
  {
    title: 'Wooden Study Desk',
    category: 'Furniture',
    image: Desk,
  },
  {
    title: 'Smartwatch',
    category: 'Electronics & Gadgets',
    image: Smartwatch,
  },
  {
    title: 'Trendy Sneakers (Unisex)',
    category: 'Fashion & Lifestyle',
    image: Sneaker,
  },
  {
    title: 'Remote Control Car',
    category: 'Kids & Toys',
    image: Remotecar,
  },
  {
    title: 'Beard Grooming Kit',
    category: 'Beauty & Wellness',
    image: BeardKit,
  },
];

function Trendingnow() {
  const scrollRef = useRef(null);

  const scrollCarousel = (direction) => {
  const scrollAmount = 300;
  if (scrollRef.current) {
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }
};

  return (
    <div>
      <section className="trending-section">
      <div className="trending-header">
        <div>
          <h2 className="trending-title">Trending Now: Products in Action</h2>
          <p className="trending-subtitle">
            Watch short videos and discover how products work before you buy.
          </p>
        </div>
        <a href="#" className="view-all">View all &gt;</a>
      </div>

      <div className="carousel-wrapper">
  <button className="scroll-btn left" onClick={() => scrollCarousel('left')}>&lt;</button>

  <div className="carousel-scroll" ref={scrollRef}>
    {productVideos.map((item, index) => (
      <div key={index} className="video-card">
        {item.tag && <div className="video-tag">{item.tag}</div>}
        <div className="video-image-wrapper">
          <img src={item.image} alt={item.title} className="video-image" />
          <div className="play-button">
            <Play color="#fff" size={30} />
          </div>
        </div>
        <div className="video-info">
          <h3>{item.title}</h3>
          <p>{item.category}</p>
        </div>
      </div>
    ))}
  </div>

  <button className="scroll-btn right" onClick={() => scrollCarousel('right')}>&gt;</button>
</div>

    </section>

    </div>

  )
}

export default Trendingnow

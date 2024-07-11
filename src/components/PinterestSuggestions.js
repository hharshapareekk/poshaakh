import React, { useEffect, useState } from 'react';
import image1 from '../images/featured-1.png';
import image2 from '../images/gallery-2.png';
import image3 from '../images/gallery-3.png';
import image4 from '../images/gallery-4.png';

const PinterestSuggestions = () => {
  const images = [
    {
      id: 1,
      src: image1,
      title: "For Those Gen-z Influence",
      category: "Oversided Tshirts",
    },
    {
      id: 2,
      src: image2,
      title: "Cottage Core",
      category: "dresses & ribbons",
    },
    {
      id: 3,
      src: image3,
      title: "Fusion",
      category: "Tradition X Trends",
    },
    {
      id: 4,
      src: image4,
      title: "Formal Looks",
      category: "Shirts & Trousers",
    },
  ];

  const [clothes, setClothes] = useState([
    {
      id: 1,
      image: image1,
      name: 'Summer Dress',
      description: 'Lightweight, breathable dress for warm weather',
    },
    {
      id: 2,
      image: image2,
      name: 'Casual T-Shirt',
      description: 'Comfortable, relaxed-fit tee for everyday wear',
    },
    {
      id: 3,
      image: image4,
      name: 'Fashionable Blazer',
      description: 'Stylish, versatile blazer for women',
    },
    // Add more clothes data here...
  ]);

  const [suggestedClothes, setSuggestedClothes] = useState([]);

  useEffect(() => {
    // Simple suggestion algorithm: suggest clothes based on image titles
    const suggestedClothes = clothes.filter(cloth => {
      const imageTitles = images.map(image => image.title.toLowerCase());
      const clothName = cloth.name.toLowerCase();
      return imageTitles.some(title => clothName.includes(title));
    });
    setSuggestedClothes(suggestedClothes);
  }, [clothes, images]);

  return (
    <div>
      <h2>Clothes Suggestions based on your Pinterest Board</h2>
      <ul>
        {suggestedClothes.map(cloth => (
          <li key={cloth.id}>
            <img src={URL.createObjectURL(cloth.image)} alt={cloth.name} />
            <h4>{cloth.name}</h4>
            <p>{cloth.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PinterestSuggestions;
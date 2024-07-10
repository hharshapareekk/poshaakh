import image1 from '../images/gallery-1.jpeg';
import image2 from '../images/gallery-2.png';
import image3 from '../images/gallery-3.png';
import image4 from '../images/gallery-4.png';
import GalleryItem from "./GalleryItem";

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

const Gallery = () => {
  return (
    <section className="gallery">
      <h2 className="section-title">Gallery</h2>
      <div className="gallery-wrapper">
        {images.map((image) => (
          <GalleryItem key={image.id} image={image} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;

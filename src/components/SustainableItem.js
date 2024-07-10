import { useRef } from "react";
import {
    useGsapGalleryCategory,
    useGsapGalleryImage,
    useGsapGalleryTitle,
} from "../hooks/gsap";

const SustainableItem = ({ image }) => {
  const galleryTitleRef = useRef(null);
  const galleryCategoryRef = useRef(null);
  const galleryImageRef = useRef(null);

  useGsapGalleryTitle(galleryTitleRef, galleryImageRef);
  useGsapGalleryCategory(galleryCategoryRef, galleryImageRef);
  useGsapGalleryImage(galleryImageRef);

  return (
    <div className="sustainable-item">
      <h1 className="sustainable-item-title" ref={galleryTitleRef}>
        {image.title}
      </h1>
      <p className="sustainable-item-category" ref={galleryCategoryRef}>
        {image.category}
      </p>

      <div
        className="sustainable-item-img"
        ref={galleryImageRef}
        style={{ backgroundImage: `url(${image.src})`,
            width:800,
            height:450,
      }}
      ></div>
    </div>
  );
};

export default SustainableItem;

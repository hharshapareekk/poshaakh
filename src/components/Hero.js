import { useRef } from "react";
import {
  useGsapPhotoDropping,
  useGsapPhotoLevitate,
  useGsapShutterUnveil,
} from "../hooks/gsap";

import image1 from '../images/shoes-1.png';
import image5 from '../images/gallery-2.png';
import image3 from '../images/outfit-1.png';
import image2 from '../images/outfit-2.png';
import image4 from '../images/outfit-3.png';


const Hero = () => {
  const heroRef = useRef(null);
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);

  const photo1Ref = useRef(null);
  const photo2Ref = useRef(null);
  const photo3Ref = useRef(null);
  const photo4Ref = useRef(null);
  const photo5Ref = useRef(null);

  const photosArr = [photo1Ref, photo2Ref, photo3Ref, photo4Ref, photo5Ref];

  useGsapShutterUnveil(shutter1, 0, heroRef);
  useGsapShutterUnveil(shutter2, 0.2, heroRef);
  useGsapPhotoDropping(photosArr);
  useGsapPhotoLevitate(photosArr, heroRef);
  return (
    <section className="hero wrapper" ref={heroRef}>
      <h1 className="poshaak">
        Poshaak <span ref={shutter1}></span>
      </h1>
      <div className="photos">
        <div
          ref={photo1Ref}
          className="photo one"
          style={{
            backgroundImage: `url(${image1})`,
          }}
        ></div>
        <div
          ref={photo2Ref}
          className="photo two"
          style={{
            backgroundImage: `url(${image2})`,
          }}
        ></div>
        <div
          ref={photo3Ref}
          className="photo three"
          style={{
            backgroundImage: `url(${image3})`,
          }}
        ></div>
        <div
          ref={photo4Ref}
          className="photo four"
          style={{
            backgroundImage: `url(${image4})`,
          }}
        ></div>
        <div
          ref={photo5Ref}
          className="photo five"
          style={{
            backgroundImage: `url(${image5})`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
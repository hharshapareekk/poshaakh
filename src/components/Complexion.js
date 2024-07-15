  import { useRef } from "react";
import {
  useGsapFeatureLeftShutterUnveil,
  useGsapFeatureRightShutterUnveil,
} from "../hooks/gsap";
import image1 from "../images/skintone.png";
import image2 from "../images/colorskin.png";
const  Complexion = () => {
  const featureRef = useRef(null);
  const featureLeftShutterRef = useRef(null);
  const featureRightShutterRef = useRef(null);

  useGsapFeatureLeftShutterUnveil(featureLeftShutterRef, featureRef);
  useGsapFeatureRightShutterUnveil(featureRightShutterRef, featureRef);

  return (
    <section className="featured wrapper" ref={featureRef}>
      <h2 className="section-title">Complexion Crafted</h2>
      <div className="features">
        <div className="feature-l">
          <img
            src = {image2}
            alt="wardrobe"
          />
          <span
            className="feature-shutter-l"
            ref={featureLeftShutterRef}
          ></span>
        </div>
        <div className="feature-r">
        <span className="delivery-text"></span>
          <p className="delivery-para"> 
          Get ready to experience the ultimate in personalized beauty with our Complexion Crafted feature! Our innovative Skin Tone Detection Module uses advanced machine learning algorithms, including K-means clustering, to precisely identify your unique skin tone from your uploaded image. This cutting-edge technology ensures that our recommendations are tailored to your individual complexion, so you can say goodbye to guessing games and hello to flawless, customized looks. Whether you're searching for the perfect foundation match, wanting to find complementary shades for your skin, or simply looking for inspiration to enhance your natural glow, Complexion Crafted has got you covered. Let our technology work its magic to uncover your ideal beauty palette, and discover a world of confidence-boosting, skin-loving possibilities!

          </p>
          <span
            className="feature-shutter-r"
            ref={featureRightShutterRef}
          ></span>
        </div>
        
      </div>
      <img  className="virtualwardrobe" src = {image1}
        width={1400}
        height={800}
        ></img>
    </section>
  );
};

export default Complexion;

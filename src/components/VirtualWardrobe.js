import { useRef } from "react";
import {
  useGsapFeatureLeftShutterUnveil,
  useGsapFeatureRightShutterUnveil,
} from "../hooks/gsap";
import image1 from "../images/virtualwardrobe.png";
import image2 from "../images/vr.png"
const  VirtualWardrobe = () => {
  const featureRef = useRef(null);
  const featureLeftShutterRef = useRef(null);
  const featureRightShutterRef = useRef(null);

  useGsapFeatureLeftShutterUnveil(featureLeftShutterRef, featureRef);
  useGsapFeatureRightShutterUnveil(featureRightShutterRef, featureRef);

  return (
    <section className="featured wrapper" ref={featureRef}>
      <h2 className="section-title">Virtual Wardrobe</h2>
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
        <span className="delivery-text">Virtual Try-On</span>
          <p className="delivery-para"> 
          Unlock the ultimate fashion fantasy with our Virtual Wardrobe! Imagine being able to try on hundreds of outfits in seconds, without ever having to step foot in a dressing room. With our cutting-edge technology, you can upload a photo of yourself and instantly see how you'd look in our vast collection of stylish apparel. Our Geometric Matching Module (GMM) works its magic to precision-wrap the garment around your body, while our Try-ON Module (TOM) brings the look to life with stunning realism. Want to see how that trendy new top would look with your favorite jeans? Or how about pairing a bold dress with your go-to accessories? The possibilities are endless in your Virtual Wardrobe! Experiment with different styles, discover new favorites, and get ready to revolutionize your fashion game. The future of fashion is here – and it's all about you!

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

export default VirtualWardrobe;



  import { useRef } from "react";
import {
  useGsapFeatureLeftShutterUnveil,
  useGsapFeatureRightShutterUnveil,
} from "../hooks/gsap";
import image2 from "../images/HomeDecor.png";
  const  HomeDecor = () => {
    const featureRef = useRef(null);
    const featureLeftShutterRef = useRef(null);
    const featureRightShutterRef = useRef(null);
  
    useGsapFeatureLeftShutterUnveil(featureLeftShutterRef, featureRef);
    useGsapFeatureRightShutterUnveil(featureRightShutterRef, featureRef);
  
    return (
      <section className="featured wrapper" ref={featureRef}>
        <h2 className="section-title">Home Decor Studio</h2>
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
            Imagine walking into your dream room, where every piece of furniture, every color, and every texture comes together in perfect harmony. Our Home Decor Studio makes that vision a reality. <br></br>Simply upload a photo of your room, add the items you already have, and describe the style and atmosphere you're aiming for. Our cutting-edge AI technology will then generate stunning, photorealistic visuals of your space, complete with personalized product recommendations that fit your unique taste and budget. With our vast library of furniture, decor, and materials at your fingertips, you'll be able to explore endless design possibilities, experiment with different layouts, and visualize the final result before making a single purchase. Whether you're a design novice or a seasoned pro, our Home Decor Studio is the ultimate tool to help you bring your design vision to life and create a space that truly reflects your personality.
  
            </p>
            <span
              className="feature-shutter-r"
              ref={featureRightShutterRef}
            ></span>
          </div>

        </div>
      </section>
    );
  };
  
  export default HomeDecor;
  
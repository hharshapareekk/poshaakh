import { useRef } from "react";
import {
  useGsapFeatureLeftShutterUnveil,
  useGsapFeatureRightShutterUnveil,
} from "../hooks/gsap";
import image1 from '../images/delivery.png';

const Delivery = () => {
  const featureRef = useRef(null);
  const featureLeftShutterRef = useRef(null);
  const featureRightShutterRef = useRef(null);

  useGsapFeatureLeftShutterUnveil(featureLeftShutterRef, featureRef);
  useGsapFeatureRightShutterUnveil(featureRightShutterRef, featureRef);

  return (
    <section className="featured wrapper" ref={featureRef}>
      <h2 className="section-title">Warp Speed Delivery</h2>
      <div className="features">
        <div className="feature-l">
          <img
            src = {image1}
            alt="barbie-core"
          />
          <span
            className="feature-shutter-l"
            ref={featureLeftShutterRef}
          ></span>
        </div>
        <div className="feature-r">
        <span className="delivery-text">SUPER FAST DELIVERY IN 45 MINS</span>
          <p className="delivery-para"> 
          Fashion emergencies can strike at any moment, but don't let a missing accessory or a wardrobe malfunction ruin your day!At Poshaakh, we're the 'wheel' deal when it comes to getting your packages to their destination in a 'jiffy'! Whether you need a last-minute outfit change or a quick accessory upgrade, we'll get it to you in no time. Our team is always on the move, delivering style and sophistication to your doorstep in a flash. With Poshaakh, you'll never have to worry about being underdressed or unfashionable again. So why wait? Place your order now and let us take care of the rest. With Poshaakh, you're never more than 45 minutes away from looking your best! We're committed to delivering on our promise of speed – every time, on time!"

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

export default Delivery;

import image1 from "../images/sustainable-1.png";
import image2 from "../images/sustainable-2.png";
import image3 from "../images/sustainable-3.png";

import SustainableItem from "./SustainableItem";

const images = [
  {
    id: 1,
    src: image1,
    title: "Garment Resale",
    category: "Bring your unwanted products to us. We’ll make sure they get reworn, reused or recycled. Earn 20 points and a 15% off digital voucher every 1 kg.",
  },
  {
    id: 2,
    src: image2,
    title: "Eco-Friendly Packaging",
    category: "Choose eco-friendly packaging for your online orders. Opt for reusable or biodegradable packaging and earn 15 points per order. Make a greener choice with every purchase.",
  },
  {
    id: 3,
    src: image3,
    title: "Tree Planting Initiative",
    category: "For every purchase above INR 1000, we plant a tree in your name. Earn 30 points and a special tree planting certificate. Help us reforest and restore natural habitats.",
  },
];

const Sustainable = () => {
  return (
    <section className="sustainable">
      <h2 className="section-title">Sustainable Shopping</h2>
      <p>
        Every decision you make before, during, and after shopping counts.
        That’s why we’ve devised fresh ways to reward our members.We aim to
        inspire everyone to embrace a more sustainable lifestyle. How you plan
        your trip to our website or how you take care of your favorite items
        might seem trivial.But with these small, everyday actions,
        you're stitching together a more sustainable fashion future. That’s
        worth getting rewarded for, wouldn't you say?<br></br>
        Check out some ways you can rack up points with these little actions –{" "}
        it’s a “seam-sational” opportunity!
      </p>
      <div className="sustainable-wrapper">
        {images.map((image) => (
          <SustainableItem key={image.id} image={image} />
        ))}
      </div>
    </section>
  );
};

export default Sustainable;

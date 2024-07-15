import { useState } from "react";
import cover from "../images/pinfluence-cover.png";
import image1 from "../images/sustainable-1.png";
import image2 from "../images/sustainable-2.png";
import image3 from "../images/sustainable-3.png";
import PinfluenceItem from "./PinflueneceItem";

const images = [
  {
    id: 1,
    src: image1,
    title: "Garment Resale",
    category:
      "Bring your unwanted products to us. We’ll make sure they get reworn, reused or recycled. Earn 20 points and a 15% off digital voucher every 1 kg.",
  },
  {
    id: 2,
    src: image2,
    title: "Eco-Friendly Packaging",
    category:
      "Choose eco-friendly packaging for your online orders. Opt for reusable or biodegradable packaging and earn 15 points per order. Make a greener choice with every purchase.",
  },
  {
    id: 3,
    src: image3,
    title: "Tree Planting Initiative",
    category:
      "For every purchase above INR 1000, we plant a tree in your name. Earn 30 points and a special tree planting certificate. Help us reforest and restore natural habitats.",
  },
];

const Pinfluence = () => {
  const [containers, setContainers] = useState([]);

  const handleGenerate = () => {
    const newContainers = [];
    for (let i = 0; i < 6; i++) {
      newContainers.push(
        <div
          key={i}
          className="container"
          style={{
            width: "250px",
            height: "150px",
            backgroundColor: "#f7f7f7",
            border: "1px solid #ddd",
            padding: "20px",
            margin: "10px",
          }}
        >
          Container {i + 1}
        </div>
      );
    }
    setContainers(newContainers);
  };

  return (
    <section className="sustainable">
      <h2 className="section-title">Pinterest Influenced Shopping </h2>
      <p>
        Hey, Fam! We've got our eyes on your Pinterest board and, let's be real,
        it's a total mood. We're talkin' fire outfits, swoon-worthy styles, and
        a whole lot of fashion inspo. So, we decided to take it to the next
        level and create a wardrobe that's, like, totally on fleek with your
        vibes. <br></br>Introducing Pinfluence, your new BFF for all things
        fashion! We'll be serving up looks that are so on-point, you'll be
        low-key obsessed. From statement pieces to everyday essentials, we've
        got you covered. Ready to level up your style game and slay the fashion
        scene? Let's get this fashion party started!
      </p>
      <img
        src={cover}
        width={1000}
        style={{
          display: "block",
          marginLeft: "280px",
          marginBottom: "30px",
        }}
      />
      <button
        onClick={handleGenerate}
        style={{
          backgroundColor: "#d53f41",
          color: "#FFFFFF",
          padding: "10px",
          borderRadius: "20px",
          border: "none",
          cursor: "pointer",
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "20px",
          marginLeft: "650px",
          width: "250px",
          height: "50px",
          letterSpacing: "4px",
        }}
      >
        Generate
      </button>
      <div
        className="container-wrapper"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
          gap: "20px",
        }}
      >
        {containers}
      </div>
      <h2> Your Personalized Aesthetic Learnings</h2>
      <div className="sustainable-wrapper">
        {images.map((image) => (
          <PinfluenceItem key={image.id} image={image} />

        ))}
      </div>
    </section>
  );
};

export default Pinfluence;
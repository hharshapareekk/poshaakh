import { useState } from "react";
import image1 from "../images/pin1.png";
import image2 from "../images/pin2.png";
import image3 from "../images/pin3.png";
import cover from "../images/pinfluence-cover.png";
import PinfluenceItem from "./PinflueneceItem";
import imagee from "../images/generate.png";
const images = [
  {
    id: 1,
    src: image1,
    title: "Crop Top with Baggy Jeans",
    category:
      "You're a master of effortless style, and your go-to combo of baggy jeans and a crop top is the perfect proof. ",
  },
  {
    id: 2,
    src: image2,
    title: "Monochrome Outfits",
    category:
      "You love monochrome outfits, finding simplicity in the single-color palette. A monochrome look is your go-to for a chic, easy style.",
  },
  {
    id: 3,
    src: image3,
    title: "Kurti And Jeans",
    category:
      "You love mixing and matching different styles, pairing a traditional cotton kurti with baggy jeans for a unique look. Adding bold jhumkas to the mix, you create a fascinating fusion of aesthetics that's all your own.",
  },
];

const Pinfluence = () => {
  const [generatedImage, setGeneratedImage] = useState(null);

  const handleGenerate = () => {
    setGeneratedImage(imagee);
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
      <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }}
>
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
      marginBottom: "10px",
      width: "250px",
      height: "50px",
      letterSpacing: "4px",
    }}
  >
    Generate
  </button>
  {generatedImage && (
          <img
            src={generatedImage}
            style={{ width: "1050px", height: "550px", margin: "10px" }}
          />
        )}
</div>
      <h2 className="pinfluence-heading">
        {" "}
        Your Personalized Aesthetic Learnings
      </h2>
      <div className="sustainable-wrapper">
        {images.map((image) => (
          <PinfluenceItem key={image.id} image={image} />
        ))}
      </div>
    </section>
  );
};

export default Pinfluence;

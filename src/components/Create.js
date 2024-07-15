import React, { useEffect, useState } from "react";
import tshirt from "../images/Tshirt.jpg";
import bottle from "../images/bottle.png";
import frame from "../images/frame.png";
import notebook from "../images/notebook.png";
import phonecase from "../images/phonecase.png";
import pillowcase from "../images/pillowcase.png";
import pod from "../images/pod.png";
import postCard from "../images/postcard.png";
import totebag from "../images/totebag.png";
const Create = () => {
  const [uploaded, setUploaded] = useState(false);
  const [fileName, setFileName] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedImageBase64, setUploadedImageBase64] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  const handleUpload = (event) => {
    setUploaded(true);
    setFileName(event.target.files[0].name);
    setUploadedImage(event.target.files[0]);

    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImageBase64(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleReset = () => {
    setUploaded(false);
    setFileName("");
    setUploadedImage(null);
    setUploadedImageBase64("");
    setPreviewUrl("");
  };

  const generateProductPreview = async () => {
    const token = "YOUR_vKeQ3KdGJQHcIDH9sf9722ej7qaynWOrDdBrvjYI";
    const productId = "3054"; // Replace with the product ID
    const imageData = uploadedImageBase64;

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const data = {
      image: imageData,
      product_id: productId,
      width: 200,
      height: 200,
    };

    try {
      const response = await fetch(
        "https://api.printful.com/v1/mockup/generate",
        {
          method: "POST",
          headers,
          body: JSON.stringify(data),
        }
      );
      const previewUrl = await response.json().preview_url;
      setPreviewUrl(previewUrl);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (uploadedImageBase64) {
      generateProductPreview();
    }
  }, [uploadedImageBase64]);

  return (
    <section className="create wrapper">
      <h2 className="section-title">Poshaakh Create</h2>
      <p>
        Ready, Set, Slay the fashion game! Our Create feature is like a magic
        wand that turns your wildest style dreams into tangible, touchable, and
        totally Instagrammable reality. Imagine uploading your favorite doodle,
        quote, or abstract masterpiece, and watching it come to life on a
        statement-making t-shirt, a chic tote bag, or a phone case that's as
        unique as you are. And who knows, your new design might just be the
        perfect conversation starter to catch someone's eye ;)<br></br>
        With our endless product possibilities, the only limit is your
        imagination. Unlock your creativity, defy fashion norms, and turn your
        personal style into a work of art that's all about you!
      </p>

      {!uploaded && (
        <div className="upload-container">
          <div className="upload-area">
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleUpload}
            />
            <label htmlFor="image-upload">
              <i className="fas fa-cloud-upload-alt" />
              <span>Click To Upload</span>
            </label>
            <p className="upload-hint">
              Max file size: 10MB, accepted formats: JPG, PNG, JPEG
            </p>
          </div>
          <button className="upload-btn" onClick={handleUpload}>
            Upload & Create
          </button>
        </div>
      )}

      {uploaded && (
        <div>
          <nav className="UploadedImage">
            <img
              src={uploadedImage ? URL.createObjectURL(uploadedImage) : pod}
              alt="Uploaded Image"
              style={{
                width: "450px",
                height: "400px",
                margin: "30px",
              }}
            />
            <ul className="form">
              <li>
                <label>Title (required):</label>
                <p className="subheading">
                  Use a descriptive title that explains your work in 4-8 words.
                </p>
                <input type="text" />
              </li>
              <li>
                <label>Description:</label>

                <p className="subheading">
                  Share the story or meaning behind your work.{" "}
                </p>
                <textarea />
              </li>
            </ul>
          </nav>

          <div class="grid-container">
            <div class="grid-item">
              <img
                src={tshirt}
                alt="Product Preview"
                width={400}
                height={400}
              />
              <div class="overlay">
                <img
                  src={uploadedImage ? URL.createObjectURL(uploadedImage) : pod}
                />
              </div>
              <div class="textbox-container">
                <p>T-Shirt</p>
              </div>
            </div>
            <div class="grid-item">
              <img
                src={totebag}
                alt="Product Preview"
                width={400}
                height={400}
              />
              <div class="overlay">
                <img
                  src={uploadedImage ? URL.createObjectURL(uploadedImage) : pod}
                />
              </div>
              <div class="textbox-container">
                <p>Tote Bag</p>
              </div>
            </div>
            <div class="grid-item">
              <img
                src={phonecase}
                alt="Product Preview"
                width={400}
                height={400}
              />
              <div class="overlay">
                <img
                  src={uploadedImage ? URL.createObjectURL(uploadedImage) : pod}
                />
              </div>
              <div class="textbox-container">
                <p>Phone Case</p>
              </div>
            </div>
            <div class="grid-item">
              <img
                src={uploadedImage ? URL.createObjectURL(uploadedImage) : pod}
                alt="Product Preview"
                width={400}
                height={400}
              />
              <div class="textbox-container">
                <p>Sticker</p>
              </div>
            </div>
            <div class="grid-item">
              <img
                src={notebook}
                alt="Product Preview"
                width={400}
                height={400}
              />
              <div class="overlay">
                <img
                  src={uploadedImage ? URL.createObjectURL(uploadedImage) : pod}
                />
              </div>
              <div class="textbox-container">
                <p>Spiral notebook</p>
              </div>
            </div>
            <div class="grid-item">
              <img
                src={pillowcase}
                alt="Product Preview"
                width={400}
                height={400}
              />
              <div class="overlay">
                <img
                  src={uploadedImage ? URL.createObjectURL(uploadedImage) : pod}
                />
              </div>
              <div class="textbox-container">
                <p>Pillow Cover</p>
              </div>
            </div>
            <div class="grid-item">
              <img
                src={postCard}
                alt="Product Preview"
                width={400}
                height={400}
              />
              <div class="overlay">
                <img
                  src={uploadedImage ? URL.createObjectURL(uploadedImage) : pod}
                />
              </div>
              <div class="textbox-container">
                <p>Post Card</p>
              </div>
            </div>
            <div class="grid-item">
              <img
                src={bottle}
                alt="Product Preview"
                width={400}
                height={400}
              />
              <div class="overlay">
                <img
                  src={uploadedImage ? URL.createObjectURL(uploadedImage) : pod}
                />
              </div>
              <div class="textbox-container">
                <p>Bottle</p>
              </div>
            </div>
            <div class="grid-item">
              <img src={frame} alt="Product Preview" width={400} height={400} />
              <div class="overlay">
                <img
                  src={uploadedImage ? URL.createObjectURL(uploadedImage) : pod}
                />
              </div>
              <div class="textbox-container">
                <p>Photo Frame</p>
              </div>
            </div>
          </div>

          <button className="change-image-btn" onClick={handleReset}>
            Change Image
          </button>
        </div>
      )}
    </section>
  );
};

export default Create;

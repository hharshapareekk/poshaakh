import React, { useState } from 'react';
import image1 from '../images/shoes-1.png';

const Create = () => {
  const [uploaded, setUploaded] = useState(false);
  const [fileName, setFileName] = useState('');
  const [images, setImages] = useState([image1, image1, image1, image1, image1, image1, image1, image1, image1, image1, image1, image1]);

  const handleUpload = (event) => {
    setUploaded(true);
    setFileName(event.target.files[0].name);
  };

  const handleReset = () => {
    setUploaded(false);
    setFileName('');
  };

  return (
    <section className="create wrapper">
      <h2 className="section-title">Poshaakh Create</h2>
      <p>
        Ready, Set, Slay the fashion game! Our Create feature is like a magic wand that turns your wildest style dreams into tangible, touchable, and totally Instagrammable reality. Imagine uploading your favorite doodle, quote, or abstract masterpiece, and watching it come to life on a statement-making t-shirt, a chic tote bag, or a phone case that's as unique as you are. And who knows, your new design might just be the perfect conversation starter to catch someone's eye ;)<br></br>
        With our endless product possibilities, the only limit is your imagination. Unlock your creativity, defy fashion norms, and turn your personal style into a work of art that's all about you!
      </p>

      {!uploaded && (
        <div className="upload-container">
          <div className="upload-area">
            <input type="file" id="image-upload" accept="image/*" onChange={handleUpload} />
            <label htmlFor="image-upload">
              <i className="fas fa-cloud-upload-alt" />
              <span>Click To Upload</span>
            </label>
            <p className="upload-hint">Max file size: 10MB, accepted formats: JPG, PNG, JPEG</p>
          </div>
          <button className="upload-btn" onClick={handleUpload}>Upload & Create</button>
        </div>
      )}

      {uploaded && (
        <div>
          <div className="large-container-grid">
            {Array(3)
           .fill(0)
           .map((_, row) => (
                <div key={row} className="large-container-row">
                  {Array(4)
                 .fill(0)
                 .map((_, col) => (
                      <img
                        key={col}
                        src={images[row * 4 + col]}
                        alt="Uploaded Image"
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          marginTop: '10px',
                          padding: '10px',
                          borderRadius: '10px',
                        }}
                      />
                    ))}
                </div>
              ))}
          </div>
          <button className="change-image-btn" onClick={handleReset}>Change Image</button>
        </div>
      )}
    </section>
  );
};

export default Create;
import React from "react";
import "./Gallery.css";

export default function Gallery(props) {
  console.log(props.images.photos);

  if (props.images) {
    return (
      <section className="Gallery">
        <h4>gallery</h4>
        <div className="row">
          {props.images.photos.map((image, index) => {
            return (
              <div className="col col-4" key={index}>
                <a href={image.src.landscape} target="_blank" rel="noreferrer">
                  <img
                    src={image.src.landscape}
                    alt={image.alt}
                    className="image"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}

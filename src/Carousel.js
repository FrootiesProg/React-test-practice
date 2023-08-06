import React, { useState } from "react";
import Card from "./Card";
import "./Carousel.css";

function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);
  const isOnFirstImage = currCardIdx === 0;

  if (!photos || photos.length === 0) {
    return (
      <div className="Carousel">
        <h1>{title}</h1>
        <p>No photos to display.</p>
      </div>
    );
  }

  const total = photos.length;
  const isOnLastImage = currCardIdx === total - 1;

  // Move to the previous image (decrement currCardIdx)
  function goBack() {
    if (currCardIdx > 0) {
      setCurrCardIdx(currCardIdx - 1);
    }
  }

  // Move to the next image (increment currCardIdx)
  function goForward() {
    if (currCardIdx < total - 1) {
      setCurrCardIdx(currCardIdx + 1);
    }
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          className={`bi bi-arrow-left-circle ${
            isOnFirstImage ? "disabled" : ""
          }`}
          onClick={goBack}
          data-testid="left-arrow"
        />
        <Card
          caption={photos[currCardIdx].caption}
          src={photos[currCardIdx].src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className={`bi bi-arrow-right-circle ${
            isOnLastImage ? "disabled" : ""
          }`}
          onClick={goForward}
          data-testid="right-arrow"
        />
      </div>
    </div>
  );
}

export default Carousel;

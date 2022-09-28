import React, { useState } from "react";

const Tour = ({ id, name, price, info, image, removeOneTour }) => {
  const [readmore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />

      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price"> ${price}</h4>
        </div>
        <p>
          {readmore ? info : `${info.substring(0, 200)}...`}
          <button className="tour-price" onClick={() => setReadMore(!readmore)}>
            {readmore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeOneTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;

import React from "react";
import Tour from "./Tour";
const Tours = ({ tourData, removeData }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tourData.map((tour) => {
          return <Tour key={tour.id} {...tour} removeOneTour={removeData} />;
        })}
      </div>
    </section>
  );
};

export default Tours;

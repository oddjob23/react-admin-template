import React from "react";
import Card from "../Card";
import img from "../../images/card_image_one.jpg";
// import img2 from "../../images/card_image_two.jpg";
import img3 from "../../images/card_image_three.jpg";

const types = ["default"];
const imagePositions = ["top", "bottom", "middle", "left", "right"];

const CardsPage = () => {
  const cards = [
    {
      type: "default",
      img: {
        src: img,
        description: "default",
      },
    },
    {
      type: "title-top",
      img: {
        src: img3,
        description: "title-top",
      },
    },
    {
      type: "title-top-subtitle",
      img: {
        src: img,
        description: "title-top",
      },
    },
    {
      type: "image-top-subtitle",
      img: {
        src: img3,
        description: "default",
      },
    },
  ];
  return (
    <div className="row">
      {cards.map((card, index) => (
        <div className="col-xl-3" key={index}>
          <Card {...card} />
        </div>
      ))}
    </div>
  );
};

export default CardsPage;

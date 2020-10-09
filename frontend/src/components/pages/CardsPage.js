import React from "react";
import Card from "../Card";
import img from "../../images/card_image_one.jpg";
import img2 from "../../images/card_image_two.jpg";
import img3 from "../../images/card_image_three.jpg";
import img4 from "../../images/card_image_four.jpg";

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
        src: img2,
        description: "title-top",
      },
    },
    {
      type: "title-top-subtitle",
      img: {
        src: img3,
        description: "title-top",
      },
    },
    {
      type: "image-top-subtitle",
      img: {
        src: img4,
        description: "default",
      },
    },
  ];
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="page-title d-flex align-items-center justify-content-between">
            <h4 className="mb-0 font-size-18">Cards</h4>
            <div className="page-title-right">
              <nav className="" aria-label="breadcrumb">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="#">UI Elements</a>
                  </li>
                  <li className="active breadcrumb-item" aria-current="page">
                    <a href="#r">Cards</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-xl-3" key={index}>
            <Card {...card} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CardsPage;

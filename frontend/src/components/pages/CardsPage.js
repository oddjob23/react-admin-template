import React from "react";
import Card from "../Card";
import img from "../../images/card_image_one.jpg";
import img2 from "../../images/card_image_two.jpg";
import img3 from "../../images/card_image_three.jpg";
import img4 from "../../images/card_image_four.jpg";

const CardsPage = () => {
  const cards = [
    {
      type: "layoutOne",
      img: {
        src: img,
        description: "default",
        position: "top",
      },
      title: "Card Title 1",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolorem vel voluptates!",
      button: {
        type: "block",
        color: "primary",
        text: "Go somewhere",
      },
      cols: "col-xl-3",
    },
    {
      type: "layoutTwo",
      img: {
        src: img2,
        description: "title-top",
        position: "after-title",
      },
      title: "Card Title 2",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolorem vel voluptates!",
      list: [{ text: "Item 1" }, { text: "Item 2" }],
      links: ["Card link", "Another link"],
      button: null,
      cols: "col-xl-3",
    },
    {
      type: "layoutOne",
      img: {
        src: img,
        description: "default",
        position: "top",
      },
      title: null,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolorem vel voluptates!",
      button: null,
      cols: "col-xl-3",
    },
    {
      type: "layoutFour",
      img: {
        src: img4,
        description: "title-top",
        position: "after-title",
      },
      title: "Card Title",
      subtitle: "Layout Three Subtitle",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolorem vel voluptates!",
      list: [],
      links: ["Card Link"],
      button: null,
      cols: "col-xl-3",
    },
  ];
  const cardsNoImage = [
    {
      title: "Special Card Title",
      subtitle: null,
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, non?",
      button: {
        type: "block",
        color: "primary",
        text: "Go somewhere",
      },
      cols: "col-md-6",
    },
    {
      title: "Special Card Title 2",
      subtitle: null,

      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, non?",
      button: "Link to somewhere",
      cols: "col-md-6",
      button: {
        type: "block",
        color: "warning",
        text: "Go somewhere",
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
          <div className={card.cols} key={index}>
            <Card {...card} />
          </div>
        ))}
      </div>
      <div className="row mt-4">
        {cardsNoImage.map((card, index) => (
          <div className={card.cols} key={index}>
            <Card {...card} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CardsPage;

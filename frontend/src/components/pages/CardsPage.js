import React from "react";
import Card from "../Card";
import img from "../../images/card_image_one.jpg";
import img2 from "../../images/card_image_two.jpg";
import img3 from "../../images/card_image_three.jpg";
import img4 from "../../images/card_image_four.jpg";
import img5 from "../../images/img_one.jpg";
import img6 from "../../images/img_two.jpg";
import img7 from "../../images/img_three.jpg";
import PageTitle from "../PageTitle";
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
      cols: "col-md-6",
      button: {
        type: "block",
        color: "warning",
        text: "Go somewhere",
      },
    },
  ];
  const cardsWithAllignemnt = [
    {
      title: "Special Card Title",
      alignTitle: "left",
      subtitle: null,
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, non?",
      button: {
        type: "block",
        color: "primary",
        text: "Go somewhere",
      },
      cols: "col-md-4",
    },
    {
      title: "Special Card Title 2",
      alignTitle: "center",
      alignText: "center",

      subtitle: null,

      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, non?",
      cols: "col-md-4",
      button: {
        type: "block",
        color: "warning",
        text: "Go somewhere",
      },
    },
    {
      title: "Special Card Title",
      alignTitle: "right",
      alignText: "right",

      subtitle: null,
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, non?",
      button: {
        type: "block",
        color: "primary",
        text: "Go somewhere",
      },
      cols: "col-md-4",
    },
  ];
  const featuredCards = [
    {
      header: {
        show: true,
        text: "Featured",
      },
      title: "Special Featured Card Title",
      subtitle: null,
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, non?",
      button: {
        type: "",
        color: "primary",
        text: "Go somewhere",
      },
      cols: "col-md-4",
    },
    {
      header: {
        show: true,
        text: "Quote",
      },
      title: "Special Featured Card Title",
      subtitle: null,
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, non?",
      button: null,
      quote: { text: "Someone famous in", source: "Source of the info" },
      cols: "col-md-4",
    },
    {
      header: {
        show: true,
        text: "Featured",
      },
      title: "Special Featured Card Title",
      footer: {
        show: true,
        text: "2 days",
      },
      subtitle: null,
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, non?",
      button: {
        type: "",
        color: "primary",
        text: "Go somewhere",
      },
      quote: null,
      cols: "col-md-4",
    },
  ];
  const variantCardsWithImages = [
    {
      header: null,
      img: {
        src: img5,
        description: "default",
        position: "top",
      },
      title: "Special Featured Card Title",
      subtitle: null,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorem iusto labore. In alias magnam quia ea omnis illo eum libero labore!",
      button: null,
      smallText: "Last updated 3 mins ago",

      cols: "col-md-4",
    },
    {
      header: null,
      img: {
        src: img6,
        description: "default",
        position: "bottom",
      },
      title: "Special Featured Card Title",
      subtitle: null,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto culpa vel maiores, commodi ad possimus adipisci soluta et minima, suscipit tenetur porro.",
      button: null,
      smallText: "Last updated 3 mins ago",

      cols: "col-md-4",
    },
    {
      header: null,
      type: "img-overlay",
      img: {
        src: img7,
        description: "default",
        position: "overlay",
      },
      title: "Special Featured Card Title",
      footer: {
        show: true,
        text: "2 days",
      },
      subtitle: null,
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, non?",
      smallText: "Last updated 3 mins ago",

      button: {
        type: "",
        color: "primary",
        text: "Go somewhere",
      },
      quote: null,
      cols: "col-md-4",
    },
  ];
  const sideImageCards = [
    {
      header: null,
      type: "side-image",
      img: {
        src: img3,
        description: "default",
        position: "left-side",
      },
      title: "Card Title",
      subtitle: null,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorem iusto labore. In alias magnam quia ea omnis illo eum libero labore!",
      button: null,
      smallText: "Last updated 3 mins ago",

      cols: "col-md-6",
    },
    {
      header: null,
      type: "side-image",

      img: {
        src: img4,
        description: "default",
        position: "right-side",
      },
      title: "Card Title",
      subtitle: null,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorem iusto labore. In alias magnam quia ea omnis illo eum libero labore!",
      button: null,
      smallText: "Last updated 3 mins ago",

      cols: "col-md-6",
    },
  ];
  const coloredCards = [
    [
      {
        type: "primary",
        title: {
          text: "Primary Card",
          show: true,
        },
        subtitle: null,
        text:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis ratione maxime obcaecati perspiciatis porro aspernatur saepe quam.",
        icon: (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-bullseye"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              fillRule="evenodd"
              d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
            />
            <path
              fillRule="evenodd"
              d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
            />
            <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        ),
      },
      {
        type: "success",
        title: {
          text: "Success Card",
          show: true,
        },
        subtitle: null,
        text:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis ratione maxime obcaecati perspiciatis porro aspernatur saepe quam.",
        icon: (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-check2-all"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.354 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
            />
            <path d="M6.25 8.043l-.896-.897a.5.5 0 1 0-.708.708l.897.896.707-.707zm1 2.414l.896.897a.5.5 0 0 0 .708 0l7-7a.5.5 0 0 0-.708-.708L8.5 10.293l-.543-.543-.707.707z" />
          </svg>
        ),
      },
      {
        type: "info",
        title: {
          text: "Info Card",
          show: true,
        },
        subtitle: null,
        text:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis ratione maxime obcaecati perspiciatis porro aspernatur saepe quam.",
        icon: (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-info-circle"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
            <circle cx="8" cy="4.5" r="1" />
          </svg>
        ),
      },
    ],
    [
      {
        type: "warning",
        title: {
          text: "Warning Card",
          show: true,
        },
        subtitle: null,
        text:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis ratione maxime obcaecati perspiciatis porro aspernatur saepe quam.",
        icon: (
          <svg
            width="1.0625em"
            height="1em"
            viewBox="0 0 17 16"
            className="bi bi-exclamation-triangle"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"
            />
            <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
          </svg>
        ),
      },
      {
        type: "danger",
        title: {
          text: "Danger Card",
          show: true,
        },
        subtitle: null,
        text:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis ratione maxime obcaecati perspiciatis porro aspernatur saepe quam.",
        icon: (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-slash-circle"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              fillRule="evenodd"
              d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        ),
      },
      {
        type: "dark",
        title: {
          text: "Dark Card",
          show: true,
        },
        subtitle: null,
        text:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis ratione maxime obcaecati perspiciatis porro aspernatur saepe quam.",
        icon: (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-info-circle"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
            <circle cx="8" cy="4.5" r="1" />
          </svg>
        ),
      },
    ],
  ];
  const outlineCards = [
    [
      {
        type: "outline",
        header: {
          show: true,
          text: "Primary Outline Card",
          color: "primary",
        },
        title: {
          text: "Primary Outline Card",
          show: true,
        },
        subtitle: null,
        text:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis ratione maxime obcaecati perspiciatis porro aspernatur saepe quam.",
        icon: (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-bullseye"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              fillRule="evenodd"
              d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
            />
            <path
              fillRule="evenodd"
              d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
            />
            <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        ),
      },
      {
        type: "outline",
        header: {
          show: true,
          text: "Danger Outline Card",
          color: "danger",
        },
        title: {
          text: "Danger Outline Card",
          color: "danger",
          show: true,
        },
        subtitle: null,
        text:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis ratione maxime obcaecati perspiciatis porro aspernatur saepe quam.",
        icon: (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-check2-all"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.354 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
            />
            <path d="M6.25 8.043l-.896-.897a.5.5 0 1 0-.708.708l.897.896.707-.707zm1 2.414l.896.897a.5.5 0 0 0 .708 0l7-7a.5.5 0 0 0-.708-.708L8.5 10.293l-.543-.543-.707.707z" />
          </svg>
        ),
      },
      {
        type: "outline",
        header: {
          show: true,
          text: "Danger Outline Card",
          color: "success",
        },
        title: {
          text: "Danger Outline Card",
          color: "success",
          show: true,
        },
        subtitle: null,
        text:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis ratione maxime obcaecati perspiciatis porro aspernatur saepe quam.",
        icon: (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-check2-all"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.354 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
            />
            <path d="M6.25 8.043l-.896-.897a.5.5 0 1 0-.708.708l.897.896.707-.707zm1 2.414l.896.897a.5.5 0 0 0 .708 0l7-7a.5.5 0 0 0-.708-.708L8.5 10.293l-.543-.543-.707.707z" />
          </svg>
        ),
      },
    ],
  ];
  return (
    <>
      <PageTitle title={"Cards"} link1={"UI Elements"} link2={"Cards"} />
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
      <div className="row mt-4">
        {cardsWithAllignemnt.map((card, index) => (
          <div className={card.cols} key={index}>
            <Card {...card} />
          </div>
        ))}
      </div>
      <div className="row mt-4">
        {featuredCards.map((card, index) => (
          <div className={card.cols} key={index}>
            <Card {...card} />
          </div>
        ))}
      </div>
      <div className="row mt-4">
        {variantCardsWithImages.map((card, index) => (
          <div className={card.cols} key={index}>
            <Card {...card} />
          </div>
        ))}
      </div>
      <div className="row mt-4">
        {sideImageCards.map((card, index) => (
          <div className={card.cols} key={index}>
            <Card {...card} />
          </div>
        ))}
        {coloredCards.map((row, rowIndex) => {
          return (
            <div className="row mt-4" key={rowIndex}>
              {row.map((card, cIndex) => {
                return (
                  <div className={`col-md-${row.length + 1}`} key={cIndex}>
                    <Card {...card} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="row mt-4">
        {outlineCards.map((row, index) => {
          return (
            <div className="row mt-4" key={index}>
              {row.map((card, ind) => {
                return (
                  <div className={`col-md-${row.length + 1}`} key={ind}>
                    <Card {...card} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardsPage;

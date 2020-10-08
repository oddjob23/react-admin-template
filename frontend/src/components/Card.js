import React from "react";
/**
 *
 * Default:
 *  Image
 *  Title
 *  Text
 *  Button
 */

/**
 *
 * With List
 * Default + list
 */
/**
 *
 * With Links
 * Default + list
 */
const Card = (props) => {
  const { type, title, button, buttonText, cardBody, img, subtitle } = props;
  const renderDefault = () => {
    return (
      <div className="card">
        <img
          src={img.src}
          alt={img.description}
          className="img-fluid card-img-top"
        />
        <div className="card-body">
          <div className="card-title">{title}</div>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            dolores eius provident.
          </p>
          <button className="btn btn-primary">Button</button>
        </div>
      </div>
    );
  };
  const renderTitleTop = () => {
    return (
      <div className="card">
        <div className="card-body">
          <div className="card-title">{title}</div>
        </div>
        <img
          src={img.src}
          alt={img.description}
          className="img-fluid card-img-top"
        />
        <div className="card-body">
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            dolores eius provident.
          </p>
          <button className="btn btn-primary">Button</button>
        </div>
      </div>
    );
  };
  const renderSubtitleTop = () => {
    return (
      <div className="card">
        <div className="card-body">
          <div className="card-title">{title}</div>
          <div className="font-13 text-muted card-subtitle">{subtitle}</div>
        </div>
        <img
          src={img.src}
          alt={img.description}
          className="img-fluid card-img-top"
        />
        <div className="card-body">
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            dolores eius provident.
          </p>
          <button className="btn btn-primary">Button</button>
        </div>
      </div>
    );
  };
  const renderImageTopSubtitle = () => (
    <div className="card">
      <img
        src={img.src}
        alt={img.description}
        className="img-fluid card-img-top"
      />
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="font-13 text-muted card-subtitle">{subtitle}</div>

        <p className="card-text pt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolores
          eius provident.
        </p>
        <button className="btn btn-primary">Button</button>
      </div>
    </div>
  );
  switch (type) {
    case "default":
      return renderDefault();
    case "title-top":
      return renderTitleTop();
    case "title-top-subtitle":
      return renderSubtitleTop();
    case "image-top-subtitle":
      return renderImageTopSubtitle();
    default:
      return renderDefault();
  }
};
Card.defaultProps = {
  title: "Card title",
  subtitle: "Subtitle of the card",
  body:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae totam amet quae.",
  action: "Button",
};
export default Card;

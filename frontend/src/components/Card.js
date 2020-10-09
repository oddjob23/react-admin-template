import React from "react";
/**
 *
 * LAYOUTS
 * #1
 *  Image > cardbody [ title, text, button]
 *
 */
const Card = (props) => {
  const {
    type,
    title,
    button,
    buttonText,
    text,
    img,
    subtitle,
    list,
    links,
  } = props;
  const renderLayout1 = () => (
    <div className="card">
      {img && (
        <img
          src={img.src}
          alt={img.description}
          className="img-fluid card-img-top"
        />
      )}

      <div className="card-body">
        {title && <div className="card-title">{title}</div>}

        {subtitle && (
          <div className="font-14 text-muted card-subtitle">{subtitle}</div>
        )}
        <p className={`"card-text" ${subtitle ? "pt-2" : ""}`}>{text}</p>

        {button && (
          <button
            className={`btn btn-${button.color} ${
              button.type === "block" ? "btn-block" : ""
            }`}
          >
            Button
          </button>
        )}
      </div>
    </div>
  );
  const renderLayout2 = () => (
    <div className="card">
      <img
        src={img.src}
        alt={img.description}
        className="img-fluid card-img-top"
      />
      <div className="card-body">
        {title && <div className="card-title">{title}</div>}
        {subtitle && (
          <div className="font-14 text-muted card-subtitle">{subtitle}</div>
        )}
        <p className={`"card-text" ${subtitle ? "pt-2" : ""}`}>{text}</p>
      </div>
      {list.length > 0 && (
        <ul className="list-group list-group-flush">
          {list.map((el, i) => (
            <li key={i} className="list-group-item">
              {el.text}
            </li>
          ))}
        </ul>
      )}
      <div className="card-body">
        {button && <button className="btn btn-primary">Button</button>}
        {links.length > 0 && (
          <>
            {links.map((link, index) => (
              <a href="#" className="card-link" key={index}>
                {link}
              </a>
            ))}
          </>
        )}
      </div>
    </div>
  );
  const renderLayout4 = () => (
    <div className="card">
      <div className="card-body">
        {title && <div className="card-title">{title}</div>}
        {subtitle && (
          <div className="font-14 text-muted card-subtitle">{subtitle}</div>
        )}
      </div>
      <img
        src={img.src}
        alt={img.description}
        className="img-fluid card-img-top"
      />
      <div className="card-body">
        <p className={`"card-text"`}>{text}</p>

        {button && <button className="btn btn-primary">Button</button>}
        {links.length > 0 && (
          <>
            {links.map((link, index) => (
              <a href="#" className="card-link" key={index}>
                {link}
              </a>
            ))}
          </>
        )}
      </div>
    </div>
  );
  switch (type) {
    case "layoutOne":
      return renderLayout1();
    case "layoutTwo":
      return renderLayout2();
    case "layoutFour":
      return renderLayout4();
    default:
      return renderLayout1();
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

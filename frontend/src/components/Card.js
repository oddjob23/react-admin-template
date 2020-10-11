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
    alignText,
    alignTitle,
    header,
    footer,
    quote,
    smallText,
    icon,
  } = props;

  const renderImageOverlay = () => (
    <div className="card">
      <img src={img.src} alt="Skote" className="img-fluid card-img" />
      <div className="card-img-overlay">
        <div className="text-white mt-0 card-title">{title}</div>
        <p className="text-light card-text">{text}</p>
        <p className="card-text">
          <small className="text-white">{smallText}</small>
        </p>
      </div>
    </div>
  );
  const renderColoredCard = () => (
    <div className={`card text-white-50 bg-${type}`}>
      <div className="card-body">
        <div className="mb-4 text-white card-title">
          <span className="mr-3"> {icon}</span>
          {title.text}
        </div>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
  const renderImageOnSide = () => (
    <div className="card">
      <div className="no-gutters align-items-center row">
        {img.position === "left-side" && (
          <>
            <div className="col-md-4">
              <img className="img-fluid card-img" src={img.src} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="card-title">{title}</div>
                <p className="card-text">{text}</p>
                {smallText && (
                  <p className="card-text">
                    {" "}
                    <small className="text-muted font-size-12">
                      {smallText}
                    </small>
                  </p>
                )}
              </div>
            </div>
          </>
        )}
        {img.position === "right-side" && (
          <>
            <div className="col-md-8">
              <div className="card-body">
                <div className="card-title">{title}</div>
                <p className="card-text">{text}</p>
                {smallText && (
                  <p className="card-text">
                    <small className="text-muted font-size-12">
                      {smallText}
                    </small>
                  </p>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <img className="img-fluid card-img" src={img.src} />
            </div>
          </>
        )}
      </div>
    </div>
  );
  const renderLayout1 = () => (
    <>
      {type === "warning" ||
      type === "primary" ||
      type === "danger" ||
      type === "success" ||
      type === "info" ||
      type === "dark" ? (
        renderColoredCard()
      ) : type === "outline" ? (
        <div className={`border card border-${header.color}`}>
          <div className="bg-transparent card-header">
            <h5 className={`my-0 text-${header.color}`}>
              <span className="mx-3">{icon}</span>
              {header.text}
            </h5>
          </div>
          <div className="card-body">
            <div className="mt-0 card-title">{title.text}</div>
            <p className="card-text">{text}</p>
          </div>
        </div>
      ) : (
        <div className="card">
          {header && (
            <>
              {header.show && (
                <div className="card-header mt-0">{header.text}</div>
              )}
            </>
          )}
          {img && (
            <>
              {img.position === "top" && (
                <img
                  src={img.src}
                  alt={img.description}
                  className="img-fluid card-img-top"
                />
              )}
            </>
          )}

          <div className="card-body">
            {title && (
              <div
                className={`card-title ${
                  alignTitle ? `text-${alignTitle}` : ""
                }`}
              >
                {title.text}
              </div>
            )}

            {subtitle && (
              <div className="font-14 text-muted card-subtitle">{subtitle}</div>
            )}
            <p
              className={`"card-text" ${subtitle ? "pt-2" : ""} ${
                alignText ? `text-${alignText}` : ""
              }`}
            >
              {text}
            </p>
            {quote && (
              <footer className="blockquote-f font-size-12 card-text">
                {quote.text} <cite title={quote.source}>{quote.source}</cite>
              </footer>
            )}
            {smallText && (
              <p className="card-text">
                <small className="text-muted">{smallText}</small>
              </p>
            )}
            {button && (
              <button
                className={`btn btn-${button.color} ${
                  button.type === "block" ? "btn-block" : ""
                }`}
              >
                {button.text ? button.text : "Button"}
              </button>
            )}
          </div>
          {img && (
            <>
              {img.position === "bottom" && (
                <img
                  src={img.src}
                  alt={img.description}
                  className="img-fluid card-img-top"
                />
              )}
            </>
          )}
          {footer && (
            <div className="card-footer text-muted">{footer.text}</div>
          )}
        </div>
      )}
    </>
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
    case "img-overlay":
      return renderImageOverlay();
    case "side-image":
      return renderImageOnSide();
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

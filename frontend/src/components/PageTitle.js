import React from "react";
import { Link } from "react-router-dom";
const PageTitle = ({ title, link1, link2 }) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="page-title d-flex align-items-center justify-content-between">
          <h4 className="mb-0 font-size-18">{title}</h4>
          <div className="page-title-right">
            <nav className="" aria-label="breadcrumb">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <Link to={`/${link1}`}>{link1}</Link>
                </li>
                <li className="active breadcrumb-item" aria-current="page">
                  <Link to={`/${link2}`}>{link2}</Link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;

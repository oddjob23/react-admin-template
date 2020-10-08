import React from "react";

const MainContent = ({ children }) => {
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title d-flex align-items-center justify-content-between">
                <h4 className="mb-0 font-size-18">Page Title</h4>
                <div className="page-title-right">
                  <nav className="" aria-label="breadcrumb">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="#">Utility</a>
                      </li>
                      <li
                        className="active breadcrumb-item"
                        aria-current="page"
                      >
                        <a href="#r">Starter Page</a>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default MainContent;

import React from "react";
import PageTitle from "../PageTitle";

const FormPage = () => {
  const exampleInputs = [
    {
      type: "text",
      label: "Text",
      placeholder: "Name and Last Name",
      value: "Milos Karaklajic",
      id: "example1",
    },
    {
      type: "search",
      label: "Search",
      placeholder: "Search the website",
      id: "example2",
      value: "How to build react app",
    },
    {
      type: "email",
      label: "Email",
      placeholder: "example@email.com",
      value: "johndoe@gmail.com",
      id: "example3",
    },
    {
      type: "url",
      label: "URL",
      placeholder: "enter URL https://www.google.com",
      value: "https://awesomewebsite.com",
      id: "example4",
    },
    {
      type: "tel",
      value: "+38160123321",
      placeholder: "Enter your phone number",
      id: "example5",
      label: "Telephone",
    },
    {
      type: "password",
      value: "admin",
      placeholder: "Enter your password",
      id: "example6",
      label: "Password",
    },
    {
      type: "number",
      value: 42,
      placeholder: "Enter the number value",
      id: "example7",
      label: "Number",
    },
    {
      type: "datetime-local",
      label: "Date and time",
      value: new Date(),
      id: "example8",
    },
    {
      type: "date",
      label: "Date",
      value: new Date().toLocaleDateString(),
      id: "example9",
    },
    {
      type: "month",
      label: "Month",
      value: new Date().toDateString(),
      id: "example10",
    },
    {
      type: "week",
      label: "Week",
      value: new Date(),
      id: "example11",
    },
    {
      type: "color",
      label: "Color",
      value: "#535232",
      id: "example12",
    },
    {
      type: "select",
      label: "Select",
      options: [
        {
          id: "option1",
          value: "option_one",
          text: "Option One",
        },
        {
          id: "option2",
          value: "option_two",
          text: "Option Two",
        },
      ],
      id: "example13",
    },
  ];
  const sizingInputs = [
    {
      type: "text",
      placeholder: "Default Input",
      value: "",
      size: null,
    },
    {
      type: "text",
      placeholder: ".form-control-sm",
      size: "sm",
    },
    {
      type: "text",
      placeholder: ".form-control-lg",
      size: "lg",
    },
  ];
  const rangeInputs = [
    {
      type: "range",
      title: "Example",
      id: "rangeExample1",
    },
    {
      type: "custom",
      title: "Another Example",
      id: "anotherExample1",
      inner: [
        {
          type: "range",
          title: "",
          id: "customRangeExample1",
        },
        {
          type: "range",
          title: "",
          id: "customRangeExample2",
        },
      ],
    },
  ];
  return (
    <>
      <PageTitle title="Form Elements" link1={"Forms"} link2={"Elements"} />
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Textual Inputs</div>
              <div className="card-subtitle mb-3">
                Examples of <code>.form-control</code> applied to each textual
                HTML5 <code>input type</code>
              </div>
              {exampleInputs.map((i, ind) => {
                return (
                  <div className="form-group row" key={ind}>
                    <label htmlFor={i.id} className="col-md-2 col-form-label">
                      {i.label}
                    </label>
                    <div className="col-md-10">
                      {i.type !== "select" ? (
                        <input
                          type={i.type}
                          className="form-control"
                          value={i.value}
                        />
                      ) : (
                        <select className="form-control">
                          {i.options.map((option) => (
                            <option key={option.id} value={option.value}>
                              {option.text}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-xl-6">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Sizing</div>
              <div className="card-subtitle mb-4">
                Set heights using class names like <code>.form-control-lg</code>{" "}
                and <code>.form-control-sm</code>
              </div>
              {sizingInputs.map((inp, ind) => {
                return (
                  <div className="mb-4" key={ind}>
                    <input
                      type={inp.type}
                      placeholder={inp.placeholder}
                      className={`form-control ${
                        inp.size ? `form-control-${inp.size}` : ""
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="col-xl-6">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Range inputs</div>
              <div className="card-subtitle mb-3">
                Set horizontally scrollable range inputs using{" "}
                <code>.form-control-range.</code>
              </div>
              {rangeInputs.map((i, ind) => (
                <div key={ind} className={ind > 0 ? "mt-4" : ""}>
                  <h5 className="font-size-14">{i.title}</h5>
                  {i.type !== "custom" ? (
                    <input
                      type={i.type}
                      className="form-control-range"
                      id={i.id}
                    />
                  ) : (
                    <>
                      {i.inner.map((el, index) => (
                        <input
                          type={el.type}
                          key={el.id}
                          className={`custom-range ${index > 0 ? "mt-4" : ""}`}
                        />
                      ))}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <div className="card-title mb-4">Checkboxes</div>
              <div className="row">
                <div className="col-md-5">
                  <>
                    <h5 className="font-size-14 mb-4">Default Checkboxes</h5>
                    <div className="form-check mb-3">
                      <input
                        type="checkbox"
                        name=""
                        id="checkbox1"
                        className="form-check-input"
                      />
                      <label className="form-check-label" htmlFor="checkbox1">
                        Default checkbox
                      </label>
                    </div>
                  </>
                </div>
                <div className="col-md-6 ml-auto">
                  <div className="mt-4 mt-lg-0">
                    <h5 className="font-size-14 mb-4">Custom Checkboxes</h5>
                    <div className="custom-control custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="CustomCheck1"
                      />
                      <label className="custom-control-label">
                        Custom checkbox
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox custom-control-right">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck2"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck2"
                      >
                        Custom checkbox Right
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <div className="card-title mb-4">Checkboxes</div>
              <div className="row">
                <div className="col-md-5">
                  <>
                    <h5 className="font-size-14 mb-4">Default Radios</h5>
                    <div className="form-check mb-3">
                      <input
                        type="radio"
                        name=""
                        id="radio1"
                        className="form-check-input"
                      />
                      <label className="form-check-label" htmlFor="radio1">
                        Default Radio input
                      </label>
                    </div>
                  </>
                </div>
                <div className="col-md-6 ml-auto">
                  <div className="mt-4 mt-lg-0">
                    <h5 className="font-size-14 mb-4">Custom radios</h5>
                    <div className="custom-control custom-checkbox mb-3">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="customRadio1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customRadio1"
                      >
                        Custom Radio input
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox custom-control-right">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="customRadio2"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customRadio2"
                      >
                        Custom radio Right
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Switches</div>
              <div className="mb-3 card-subtitle">
                A switch has the markup of a custom checkbox but uses the{" "}
                <code>.custom-switch</code> className to render a toggle switch.
                Switches also support the <code>disabled</code> attribute.
              </div>
              <div className="custom-control custom-switch mb-2" dir="ltr">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitch1"
                />
                <label className="custom-control-label" htmlFor="customSwitch1">
                  Toggle this switch element
                </label>
              </div>
              <div className="custom-control custom-switch" dir="ltr">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  disabled
                  id="customSwitch2"
                />
                <label className="custom-control-label" htmlFor="customSwitch2">
                  Disabled switch element
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <div className="card-title">File browser</div>
              <div className="mb-3 card-subtitle">
                The file input is the most gnarly of the bunch and requires
                additional JavaScript if you’d like to hook them up with
                functional <em>Choose file…</em> and selected file name text.
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile"
                />
                <label className="custom-file-label" htmlFor="customFile">
                  Choose file
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormPage;

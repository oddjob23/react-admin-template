import React from "react";

const RadioSettings = ({ input, title, onChange }) => {
  return (
    <>
      <div className="radio-settings">
        <span className="mb-2 d-block">{title}</span>
        {input.map((el) => (
          <React.Fragment key={el.id}>
            <input
              type={el.type}
              defaultChecked={el.checked}
              id={el.id}
              name={el.name}
              value={el.value}
              onChange={(e) => {
                console.log();
                onChange({ [e.target.name]: e.target.value });
              }}
            />
            <label htmlFor={el.id}>{el.value}</label>
          </React.Fragment>
        ))}
      </div>
      <hr className="mt-1" />
    </>
  );
};

export default RadioSettings;

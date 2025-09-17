import React from "react";

const CheckboxGroup = ({ label, title, data, value = [], onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label>{title}</label>
      <div className="flex gap-4">
        {data.map((item, index) => (
          <label key={index} className="flex items-center gap-2">
            <input
              type="checkbox"
              name={label}
              value={item.value}
              checked={value.includes(item.value)}
              onChange={onChange}
            />
            <span>{item.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;

import MarkIcon from "@/assets/icons/mark.svg?react";
import CheckboxIcon from "@/assets/icons/checkbox.svg?react";
import { useState } from "react";

const Checkbox = ({ checked }) => {
  return (
    <div
      className="checkbox"
    >
      <CheckboxIcon
        className={checked ? "checkbox--checked" : "checkbox--normal"}
      />
      {checked && <MarkIcon className="checkbox--mark" />}
    </div>
  );
};

export default Checkbox;

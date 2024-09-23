import React, { useState } from "react";
import s from "./ButtonGuide.module.scss";

type ButtonGuideType = {
  value: number;
  isActive: boolean;

};

const ButtonGuide = ({ value, isActive }: ButtonGuideType) => {

    const [active, setActive] = useState(isActive)

    const heandleClick = () => {
        setActive((prev) => !prev)
    }

  return (
    <button
      className={ active ? s.isActive : s.isInActive}
      value={value}
      onClick={heandleClick}
    >
      {value}
    </button>
  );
};

export default ButtonGuide;

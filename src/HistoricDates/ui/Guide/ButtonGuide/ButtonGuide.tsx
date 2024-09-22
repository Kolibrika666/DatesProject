import React, { useState } from "react";
import s from "./ButtonGuide.module.scss";

type ButtonGuideType = {
  value: number;

};

const ButtonGuide = ({ value }: ButtonGuideType) => {

    const [isActive, setisActive] = useState(false)



    const heandleClick = () => {
        setisActive((prev) => !prev)
    }

  return (
    <button
      className={ isActive ? s.isActive : s.is}
      value={value}
      onClick={heandleClick}
    >
      {value}
    </button>
  );
};

export default ButtonGuide;

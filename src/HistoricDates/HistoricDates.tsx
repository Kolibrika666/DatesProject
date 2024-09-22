import React from "react";
import s from "./HistoricDates.module.scss";

const HistoricDates = () => {
  return (
    <>
      <div className={s.main}>
      <div className={s.item}>
          <picture>icon</picture>
          <h1>
            Исторические <p></p>даты
          </h1>
        </div>
        <div className={s.circle}>
          <svg
            viewBox="0 0 100 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="40"
              r="30"
              fill="none"
              stroke="rgba(66, 86, 122, 0.2)"
              stroke-width="0.2"
            />
          </svg>
        </div>
        <div className={s.period}>
        period
        </div>
        <div className={s.swip}>
        svip
        </div>
        
        <div className={s.item}></div>
        <div className={s.item}></div>
        <div className={s.item}></div>
      </div>
    </>
  );
};

export default HistoricDates;

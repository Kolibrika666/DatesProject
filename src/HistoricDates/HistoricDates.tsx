import React from "react";
import s from "./HistoricDates.module.scss";
import { Period } from "./ui";
import Guide from "./ui/Guide/Guide";

export const HistoricDates = () => {
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
         <Guide/>
        </div>
        <div className={s.period}>
        <Period/>
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



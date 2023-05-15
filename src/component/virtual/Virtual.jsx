import React from "react";
import css from "./Virtual.module.css";
import Shade from "../../assets/shade.png";
import Before from '../../assets/before.png'
import After from '../../assets/after.png'
import ReactCompareImg from "react-compare-image"

export default function Virtual() {
  return (
    <div className={css.Virtual}>
      <div className={css.left}>
        <span>Virtual try-on</span>
        <span>Never buy the wrong shade again</span>
        <span>Try Now!</span>
        <img src={Shade} alt=""></img>
      </div>
      <div className={css.right}>
      <div className={css.wrapper}>
      <ReactCompareImg leftImage={Before} rightImage={After} />

      </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "../quiz.module.scss";
import { ReactComponent as BannerLeft } from "../../../assets/images/game/banner/banner-left.svg";

export default function Banner({ continent = "Europe", mode = "Countries" }) {
  return (
    <div className={styles.banner}>
      <BannerLeft className={styles.bannerLeft} />
      <div className={styles.bannerBox}>
        <div className={styles.bannerBoxText}>
          <span>{continent}</span>
          <span>{mode}</span>
        </div>
      </div>
      <BannerLeft className={styles.bannerRight} />
    </div>
  );
}

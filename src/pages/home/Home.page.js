import React from "react";
import styles from "./home.module.css";

const HomePage = () => {
  return (
    <div className={styles["container-home"]}>
      <div className={styles["thumb"]}>
        <img
          src="https://threesnackateers.com/wp-content/uploads/2022/05/Puff-Pastry-Raspberry-Tarts-720x405.jpeg"
          alt="sweet"
        ></img>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
          Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet,
          wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
          rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in
          turpis pulvinar facilisis. Ut felis.
        </p>
      </div>
    </div>
  );
};

export default HomePage;

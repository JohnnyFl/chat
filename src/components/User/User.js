import React from "react";
import styles from "./User.module.css";

const User = ({
  name = "Josh",
  info = "Top 5 Surgeons in the USA",
  src = ""
}) => {
  return (
    <div className={styles.container}>
      <img
        src={src}
        alt="avatar"
        width={80}
        height={80}
        className={styles.avatar}
      />
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <div>{info}</div>
      </div>
    </div>
  );
};

export default User;

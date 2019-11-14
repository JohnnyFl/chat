import React from "react";
import User from "../User/User";
import styles from "./UsersList.module.css";

const UsersList = () => {
  return (
    <div className={styles.container}>
      <User
        name="Josh"
        info="Top Surgeon"
        src="https://source.unsplash.com/80x80/?health"
      />
      <User
        name="Brad"
        info="Therapist"
        src="https://source.unsplash.com/80x80/?people"
      />
      <User
        name="Dude"
        info="Where is my car, duuude?"
        src="https://source.unsplash.com/80x80/?fashion"
      />
    </div>
  );
};

export default UsersList;

import React from "react";
import styles from "./Message.module.css";

const Message = props => {
  return (
    <div className={!props.isDoctor ? styles.patient : styles.doctor}>
      <img
        src={
          !props.isDoctor
            ? "https://images.unsplash.com/photo-1573592218994-1f3a1e5e3c01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            : "https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        }
        width={50}
        height={50}
        className={styles.avatar}
        alt="avatar"
      />
      <span className={styles.time}>{props.time}</span>

      <span
        className={
          !props.isDoctor ? styles.messagePatient : styles.messageDoctor
        }
      >
        {props.message}
      </span>
    </div>
  );
};

export default Message;

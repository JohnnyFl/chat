import React, { useState } from "react";
import styles from "./Messages.module.css";
import send from "../../assets/send.png";
import Message from "../Message/Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const [isDoctor, setIsDoctor] = useState(false);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSend = () => {
    if (value.length > 0) {
      setMessages(
        messages.concat({
          isDoctor,
          message: value,
          time: new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
          })
        })
      );
      setValue("");
    } else {
      return;
    }
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      handleSend();
    }
  };

  const handleIsDoctor = () => {
    setIsDoctor(!isDoctor);
  };

  return (
    <div className={styles.container}>
      <div className={styles.messagesContainer}>
        {messages.map(msg => (
          <Message
            key={msg.message}
            isDoctor={msg.isDoctor}
            message={msg.message}
            time={msg.time}
          />
        ))}
      </div>
      <div className={styles.typeMessage}>
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            className={styles.input}
            value={isDoctor}
            onClick={handleIsDoctor}
          />
        </div>
        <input
          placeholder="Writing message here"
          className={styles.input}
          onChange={handleChange}
          value={value}
          onKeyDown={onKeyDown}
        />
        <button className={styles.imageContainer} onClick={handleSend}>
          <img src={send} width={35} height={35} alt="send" />
        </button>
      </div>
    </div>
  );
};

export default Messages;

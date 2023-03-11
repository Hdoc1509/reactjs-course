import React from "react";

const Message = ({ message, bgColor }) => {
  const styles = {
    paddin: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    backgroundColor: bgColor,
    color: "#fff",
    fontWeight: "bold",
  };

  return (
    <div style={styles}>
      <h2>
        <p>{message}</p>
      </h2>
    </div>
  );
};

export default Message;

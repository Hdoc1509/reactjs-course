import React from "react";

const Message = ({ message, bgColor }) => {
  const styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    backgroundColor: bgColor,
    color: "#fff",
    fontWeight: "bold",
  };

  return (
    <div style={styles}>
      {/*<p>{message}</p>*/}
      <p dangerouslySetInnerHTML={{__html: message}}/>
    </div>
  );
};

export default Message;

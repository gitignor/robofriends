import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "500px",
      }}
    >
      {props.children}
    </div>
  );
};
//class Scroll extends Component {}

export default Scroll;

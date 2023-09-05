import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="false" spellCheck="false">
      My Favourite Foods
    </h1>

    <div>
      <img src={img} className="Food" /> <br />
      <img
        src="https://www.whiskaffair.com/wp-content/uploads/2021/05/Gochujang-Noodles-2-3.jpg"
        className="Food"
      />{" "}
      <br />
      <img
        src="https://static.toiimg.com/thumb/52446409.cms?width=1200&height=900"
        className="Food"
      />
      <br />
      <img
        src="https://static.toiimg.com/thumb/53007558.cms?width=1200&height=900"
        className="Food"
      />
      <br />
    </div>
  </div>,
  document.getElementById("root")
);

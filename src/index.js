import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App-v1";
import StarRating2 from "./StarRating2";
// import App from "./App-quote";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} color="red" className="test" defaultRating={2} />

    <Test /> */}
    {/* <StarRating2 maxRating={5} messages={['bad', 'nah', 'ok', 'great', 'amazing']}/>
    <StarRating2 maxRating={7} size='33' color="green" defaultRating={2}/> */}
  </React.StrictMode>
);

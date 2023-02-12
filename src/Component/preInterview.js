import React, { useEffect, useState } from "react";
import "./styling.css";

const App = ({ changeActiveIndex, navigateToPlayground }) => {
  const [time, setTime] = useState(5);
  useEffect(() => {
    if (time > 0) {
      setTimeout(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }
  }, [time]);
  return (
    <div style={{}}>
      <a
        style={{ marginBottom: 10 }}
        onClick={(e) => {
          e.preventDefault();
          changeActiveIndex("3");
        }}
        className="btn"
        href="#"
      >
        &#8592;
      </a>
      <div
        style={{
          marginLeft: 25,
        }}
      >
        <h1>Your Interview will start in {`${time} secs`}</h1>
        {time === 0 ? (
          <a
            onClick={(e) => {
              e.preventDefault();
              navigateToPlayground();
            }}
            className="btn btn-full"
            href=""
          >
            Start
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default App;

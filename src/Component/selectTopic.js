import React, { useEffect, useState } from "react";
import "./styling.css";

const App = ({ changeActiveIndex, setTopics }) => {
  const [range, setRange] = useState([0, 6]);

  console.log({ range });

  const arrayChunk = (arr, n) => {
    const array = arr.slice();
    // let [first, second] = rang;
    const chunks = [];
    while (array.length) {
      chunks.push(array.splice(0, n));
    }
    return chunks;
  };

  useEffect(() => {}, [range]);

  return (
    <div style={{}}>
      <a
        style={{ marginBottom: 10 }}
        onClick={(e) => {
          e.preventDefault();
          range[0] !== 0
            ? setRange([Math.min(range[0] - 6), range[0]])
            : changeActiveIndex("2");
        }}
        className="btn"
        href="#"
      >
        &#8592;
      </a>
      {arrayChunk(companies, 1).map((row, i) => {
        console.log({ i });
        if (i >= range[0] && i < range[1]) {
          return (
            <div key={i} style={{ marginTop: "5px" }} className="row mx-auto">
              {row.map((col, i) => (
                <span style={{ margin: "5px" }}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      changeActiveIndex("4");
                      setTopics(col);
                    }}
                    className="btn btn-ghost"
                    href=""
                  >
                    {" " + col}
                  </a>
                </span>
              ))}
            </div>
          );
        }
      })}
      <div
        style={{
          marginTop: "100px",
          marginLeft: 25,
        }}
      >
        <a
          onClick={(e) => {
            e.preventDefault();
            if (range[1] >= companies.length) return;
            setRange([range[1], Math.min(range[1] + 6, companies.length)]);
            console.log("pressed");
          }}
          className="btn btn-full"
          href=""
        >
          {range[1] >= companies.length ? "List ended" : "View next list"}
        </a>
      </div>
    </div>
  );
};

export default App;

const companies = [
  "Data structures and Algorithms",
  "Javascript",
  "React js",
  "React native",
  "Angular",
  "SQL",
  "Puzzles",
  "Behavioral questions",
];

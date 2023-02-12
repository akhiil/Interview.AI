import React, { useEffect, useState } from "react";
import "./styling.css";

const App = ({ changeActiveIndex, setCompany }) => {
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
            : changeActiveIndex("1");
        }}
        className="btn"
        href="#"
      >
        &#8592;
      </a>
      {arrayChunk(companies, 1).map((row, i) => {
        if (i >= range[0] && i < range[1]) {
          return (
            <div key={i} style={{ marginTop: "5px" }} className="row mx-auto">
              {row.map((col, i) => (
                <span style={{ margin: "5px" }}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setCompany(col);
                      changeActiveIndex("3");
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
  "Google",
  "Meta",
  "Apple",
  "Microsoft",
  "Amazon",
  "Adobe",
  "De Shaw",
  "Deutsche bank",
  "Tower Research",
  "Uber",
  "Codenation",
  "LinkedIn",
  "Twitter",
  "Flipkart",
  "CRED",
  "American Express",
  "BrowserStack",
  "Master Card",
  "Yahoo",
  "Salesforce",
  "Slack",
  "Oracle",
  "Paypal",
  "Rippling",
  "ShareChat",
  "Goldman Sachs",
  "Intel",
  "Atlassian",
  "Qualcomm",
  "Visa",
  "Intuit",
  "Walmart",
  "ServiceNow",
  "Expedia",
  "Paytm",
  "Swiggy",
  "Grab",
  "Morgan Stanley",
  "NVIDIA",
  "DropBox",
  "Cisco",
  "Hotstar",
  "Ola",
  "MakeMyTrip",
  "Samsung",
  "Times Internet",
  "Zomato",
  "Synopsys",
  "Myntra",
  "Cadence",
  "PayU",
  "Policybazaar",
  "JpMorgan Chase",
  "Zerodha",
  "Groww",
  "Innovaccer",
  "Lenskart",
  "RazorPay",
  "Meesho",
];

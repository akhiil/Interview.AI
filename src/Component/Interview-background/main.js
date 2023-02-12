import React, { useState, useEffect } from "react";
import "./styles.css";
import Countdown from "react-countdown";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { HashLoader, FadeLoader } from "react-spinners";
import BuyMeCoffee from "../../Component/image/buymeacoffee.jpeg";
import Scanner from "../image/Scanner.jpeg";
import Timer from "../timer";

const App = () => {
  const navigate = useNavigate();
  const [questionTerms, setQuestionTerms] = useState("");
  const [showloader, setShowLoader] = useState(false);
  const [openPaymentOptions, setOpenPaymentOptions] = useState(false);
  const [feedbackText, setFeedBackText] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [feedbackAnswersArray, setFeedbackAnswersArray] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [feedbackPending, setFeedbackPending] = useState(false);
  const [feedbackBlocker, setFeedbackBlocker] = useState(true);
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    if (!data?.topics || !data?.company) navigate("/");
    else {
      getQuestions();
    }
  }, []);

  const location = useLocation();

  // console.log({ questionTerms, feedbackText });
  console.log({ feedbackBlocker });

  const getQuestions = async () => {
    setShowLoader(true);
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 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",
    };
    const body = {
      model: "text-davinci-003",
      prompt: `Ask me a medium level ${data?.topics} question earlier asked in ${data?.company} with given input output.`,
      temperature: 0.7,
      max_tokens:
        data?.topics === "Data structures and Algorithms" ? 1500 : 1000,
    };
    await axios
      .post("https://api.openai.com/v1/completions", body, { headers })
      .then((res) => {
        // console.log({ res });
        setShowLoader(false);
        setQuestionTerms(res.data.choices[0].text);
        setQuestionNumber((prev) => prev + 1);
        setFeedbackBlocker(false);
      })
      .catch((err) => {
        setShowLoader(false);
        console.log({ err });
      });
  };

  const getNextQuestion = () => {
    if (questionNumber >= 2) {
      alert("Only 2 questions in an interview.");
    }
    getQuestions();
  };

  const getFeedback = async () => {
    setFeedbackPending(true);
    setFeedbackBlocker(true);
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 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",
    };
    const body = {
      model: "text-davinci-003",
      prompt: `${questionTerms}, check my code for this question and give feedback. ${userAnswer}`,
      temperature: 0.7,
      max_tokens:
        data?.topics === "Data structures and Algorithms" ? 1500 : 1000,
    };
    // console.log("feedback function called", body.prompt);
    await axios
      .post("https://api.openai.com/v1/completions", body, { headers })
      .then((res) => {
        console.log(res.data);
        // setShowLoader(false);
        setFeedBackText(res.data.choices[0].text);
        setFeedbackAnswersArray([
          ...feedbackAnswersArray,
          res.data.choices[0].text,
        ]);
        setFeedbackPending(false);
      })
      .catch((err) => {
        setShowLoader(false);
        console.log({ err });
        alert("Error getting feedback");
      });
  };

  function replaceWithBr(haiku) {
    return haiku.replace("\n\n", "\n");
  }

  const data = location?.state;

  const Completionist = () => <span>Time is over!!</span>;

  // console.log(process.env.REACT_APP_SECRET_NAME);
  console.log({ feedbackAnswersArray });

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };
  return (
    <div style={{ fontFamily: "Verdana", color: "#aaaaaa" }}>
      <div
        style={{
          backgroundColor: "#e5e5e5",
          padding: "15px",
          textAlign: "center",
        }}
      >
        <h3>{`Question ${questionNumber} of 2`}</h3>
        {!showloader ? (
          <p style={{ whiteSpace: "pre-wrap" }}>
            {replaceWithBr(questionTerms)}
          </p>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <HashLoader color="#e67e22" />
          </div>
        )}
      </div>

      <div style={{ overflow: "auto" }}>
        <div className="menu">
          <a
            onClick={(e) => {
              e.preventDefault();
              if (userAnswer === "") {
                alert("write your answer and then submit");
                return;
              }
              if (!feedbackBlocker) getFeedback();
              else {
                console.log("answer is there");
              }
            }}
            className="btn btn-ghost"
            href="#"
          >
            {/* Submit answer */}
            {feedbackPending ? <FadeLoader color="#e67e22" /> : "Submit answer"}
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              getNextQuestion();
            }}
            className="btn btn-ghost"
            href="#"
          >
            Next question
          </a>
          <a onClick={() => navigate("/")} className="btn btn-ghost" href="#">
            End Interview
          </a>
        </div>

        <div className="main">
          <h2>Write your answer below</h2>
          <textarea
            style={{ width: "100%", height: "500px", padding: 20 }}
            name="postContent"
            rows={4}
            cols={40}
            onChange={setUserAnswer}
          />
          {feedbackText ? (
            <textarea
              style={{ width: "100%", height: "250px", padding: 20 }}
              name="postContent"
              rows={4}
              cols={40}
              value={feedbackText}
            />
          ) : null}
        </div>

        <div className="right btn btn-ghost">
          <h2>Remaining time</h2>
          <Countdown date={time + 3600000} renderer={renderer} />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#e5e5e5",
          textAlign: "center",
          padding: "10px",
          marginTop: "7px",
        }}
      >
        <a
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();
            setOpenPaymentOptions(!openPaymentOptions);
          }}
        >
          © Support to Interview-AI
        </a>

        {openPaymentOptions ? (
          <div
            style={{
              backgroundColor: "#e5e5e5",
              textAlign: "center",
              padding: "10px",
            }}
          >
            <div>
              <img
                src={Scanner}
                alt="Phonepe scanner"
                style={{ height: 200, width: 200 }}
              />
              <p style={{ fontFamily: "monospace" }}>
                UPI ID:- akhilkatreat@ybl
              </p>
            </div>
            <div style={{ margin: "20px 0" }} />
            <a
              href="https://www.buymeacoffee.com/akhilcsk11g"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={BuyMeCoffee}
                alt="Buy me a Coffee"
                style={{ height: 60, width: 240 }}
              />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default App;

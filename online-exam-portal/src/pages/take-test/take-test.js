import { useEffect, useState } from "react";
import axios from "axios";
import "./take-test.css";
import { useNavigate } from "react-router-dom";
let questions = [
  {
    question: "What is the fullform of DOM",
    option1: "Document object model",
    option2: "Dome object model",
    option3: "Document other model",
    option4: "none of the above",
    correctAnswer: "Document object modelx",
  },
  {
    question: "What is the fullform of HTML",
    option1: "Document object model",
    option2: "Dome object model",
    option3: "Document other model",
    option4: "none of the above",
    correctAnswer: "Document object modelx",
  },
  {
    question: "What is the fi=ullform of CSS",
    option1: "Document object model",
    option2: "Dome object model",
    option3: "Document other model",
    option4: "none of the above",
    correctAnswer: "Document object modelx",
  },
  {
    question: "What is the fi=ullform of HOC",
    option1: "Document object model",
    option2: "Dome object model",
    option3: "Document other model",
    option4: "none of the above",
    correctAnswer: "Document object modelx",
  },
];

function TakeTest() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  useEffect(() => {
    getQuestions();
  }, []);

  let submitAnswers = () => {
    alert("Test submitted successfully");
    navigate("/home");
  };
  const [allQuestions, setAllQuestions] = useState([]);
  let getQuestions = () => {
    // axios.get("http://localhost:3001/allquestions").then((response) => {
    //   console.log(response);
    //   setAllQuestions(response);
    // });
    console.log(questions);
  };
  return (
    <div className="test-container">
      <h1>Choose the correct answer</h1>
      {questions.map((question, index) => {
        return (
          <div className="question-box">
            <p>
              {index + 1} {question.question}
            </p>
            <div>
              <input
                type="radio"
                name={`question${index + 1}`}
                value={question.option1}
              ></input>
              <label>{question.option1}</label>
            </div>
            <div>
              <input
                type="radio"
                name={`question${index + 1}`}
                value={question.option2}
              ></input>
              <label>{question.option2}</label>
            </div>
            <div>
              <input
                type="radio"
                name={`question${index + 1}`}
                value={question.option3}
              ></input>
              <label>{question.option3}</label>
            </div>
            <div>
              <input
                type="radio"
                name={`question${index + 1}`}
                value={question.option4}
              ></input>
              <label>{question.option4}</label>
            </div>
          </div>
        );
      })}
      <button onClick={() => submitAnswers()}>Submit</button>
    </div>
  );
}
export default TakeTest;

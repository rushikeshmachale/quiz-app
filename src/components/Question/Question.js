import { Box, Button } from "@material-ui/core";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import "./Question.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currQues > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };

  return (
    <div className="question">
      <h1 data-aos="fade-down" >Question {currQues + 1} </h1>

      <div className="singleQuestion">
        <h2 data-aos="fade-right" >{questions[currQues].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button style={{ borderRadius: "32px", fontSize: "16px" ,height:"auto"}}
                className={`singleOption  ${selected && handleSelect(i)}` }
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls" >
          <Button 
            variant="contained"
            size="large"
            style={{ width: 100, color: "white", backgroundColor:"#FF5252"}}
            
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button 
            variant="contained"
            color="#4EB7EE"
            size="small"
            style={{ width: 100, color: "white", backgroundColor: "#4EB7EE" }}
            onClick={handleNext}
          >
            {currQues > 20 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;

import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css";

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name]);

  return (
    <div className="result">
      <span className="title">
        <span data-aos="fade-right" >Your Final Score : </span>
        <span data-aos="fade-left" > {score}</span>
      </span>
      <Button
        data-aos="fade-up" 
        variant="contained"
        // color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20, backgroundColor: "#4ED6EE"}}
        href="/"
      >
        Go to home
      </Button>
    </div>
  );
};

export default Result;

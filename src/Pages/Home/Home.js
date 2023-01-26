import { Button, MenuItem, TextField } from "@material-ui/core";
import Aos from "aos";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Categories from "../../Data/Categories";
import "./Home.css";

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="content">
      <div className="settings">
        {/* <span style={{ fontSize: 30 }}>Enter in Quiz</span> */}
        <div className="settings__select">
          {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
          <TextField data-aos="fade-left" 
            style={{ marginBottom: 25}}
            label="Enter Your Name"
            // variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField data-aos="fade-left" 
          type="number"
            style={{ marginBottom: 25}}
            label="Enter Your Age"
            // variant="outlined"
          />
          <TextField
            data-aos="fade-left" 
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            // variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            data-aos="fade-left" 
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            // variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button data-aos="fade-right"
            variant="contained"
            style={{ backgroundColor: "#4ED6EE"}}
            size="large"
            onClick={handleSubmit}
          >
            Start
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;

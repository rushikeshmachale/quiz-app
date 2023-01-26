import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import bg from './img/signinbackground.jpg'
import Aos from 'aos'
import "aos/dist/aos.css"
function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  useEffect(()=>{
    Aos.init({duration : 2000})
  },[])

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=103${category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: 'url("./img/signinbackground.jpg")' }}>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home
            name={name}
            setName={setName}
            fetchQuestions={fetchQuestions}
          />}>

          </Route>
          <Route path="/quiz" element={<Quiz
            name={name}
            questions={questions}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />}>

          </Route>
          <Route path="/result" element={<Result name={name} score={score} />}>

          </Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

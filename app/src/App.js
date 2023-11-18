import logo from "./logo.svg";
import "./style.css";
import IndexPage from "./components/IndexPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LearnPage from "./components/LearnPage";
import QuizPage from './components/QuizPage'
import Quiz1 from "./components/Quiz1";
import Quiz2 from "./components/Quiz2";
import Quiz3 from "./components/Quiz3";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/quiz/1" element={<Quiz1 />} />
          <Route path="/quiz/2" element={<Quiz2 />} />
          <Route path="/quiz/3" element={<Quiz3 />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

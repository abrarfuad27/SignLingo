import logo from "./logo.svg";
import "./style.css";
import IndexPage from "./components/IndexPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LearnPage from "./components/LearnPage";
import QuizPage from './components/QuizPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/quiz" element={<QuizPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./style.css";
import IndexPage from "./components/IndexPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LearnPage from "./components/LearnPage";
import QuizPage from "./components/QuizPage";
import Quiz1 from "./components/Quiz1";
import Quiz2 from "./components/Quiz2";
import Quiz3 from "./components/Quiz3";
import { UserContextProvider } from "./UserContext";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import RecordsPage from "./components/RecordsPage";

function App() {
  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/quiz/1" element={<Quiz1 />} />
            <Route path="/quiz/2" element={<Quiz2 />} />
            <Route path="/quiz/3" element={<Quiz3 />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />} />
            <Route path="/records" element={<RecordsPage />} />

          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  );
}

export default App;

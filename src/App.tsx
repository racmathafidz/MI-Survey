import { BrowserRouter, Route, Routes } from "react-router-dom";
import SurveyPage from "./pages/Survey";
import SummaryPage from "./pages/Summary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SurveyPage />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

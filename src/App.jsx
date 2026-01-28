import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import CalculatorPage from "./CalculatorPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<CalculatorPage />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

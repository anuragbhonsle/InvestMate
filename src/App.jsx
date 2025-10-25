import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

function App() {
  const [formData, setFormData] = useState({
    initialInvestment: "10000",
    annualInvestment: "15000",
    expectedReturn: "10",
    duration: "10",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div>
      <Header />
      <section id="user-input" className="card">
        <UserInput values={formData} onChange={handleChange} />
      </section>
      <section id="result" className="card">
        <Result input={formData} />
      </section>
    </div>
  );
}

export default App;

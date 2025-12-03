import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import { calculateInvestmentResults } from "./util/investment.js";

const INITIAL_FORM = {
  initialInvestment: "10000",
  annualInvestment: "15000",
  expectedReturn: "10",
  duration: "10",
};

const PRESETS = [
  {
    id: "conservative",
    label: "Conservative",
    values: {
      initialInvestment: "5000",
      annualInvestment: "6000",
      expectedReturn: "5",
      duration: "10",
    },
  },
  {
    id: "balanced",
    label: "Balanced",
    values: {
      initialInvestment: "10000",
      annualInvestment: "12000",
      expectedReturn: "8",
      duration: "15",
    },
  },
  {
    id: "aggressive",
    label: "Aggressive",
    values: {
      initialInvestment: "15000",
      annualInvestment: "15000",
      expectedReturn: "12",
      duration: "20",
    },
  },
];

function validateInput(input) {
  const errors = {};

  if (!Number.isFinite(input.duration) || input.duration < 1) {
    errors.duration = "Duration should be at least 1 year.";
  } else if (input.duration > 50) {
    errors.duration = "Durations above 50 years are not supported here.";
  }

  if (!Number.isFinite(input.expectedReturn)) {
    errors.expectedReturn = "Please enter a valid expected return.";
  } else if (input.expectedReturn < 0) {
    errors.expectedReturn = "Expected return cannot be negative.";
  } else if (input.expectedReturn > 30) {
    errors.expectedReturn = "Expected return above 30% is unusually high.";
  }

  return errors;
}

function App() {
  const [formData, setFormData] = useState(INITIAL_FORM);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handlePresetSelect(presetId) {
    const preset = PRESETS.find((p) => p.id === presetId);
    if (!preset) return;
    setFormData(preset.values);
  }

  function handleReset() {
    setFormData(INITIAL_FORM);
  }

  const parsedInput = {
    initialInvestment: Number(formData.initialInvestment),
    annualInvestment: Number(formData.annualInvestment),
    expectedReturn: Number(formData.expectedReturn),
    duration: Number(formData.duration),
  };

  const errors = validateInput(parsedInput);

  const hasValidDuration =
    !errors.duration &&
    Number.isFinite(parsedInput.duration) &&
    parsedInput.duration > 0;

  const resultData = hasValidDuration
    ? calculateInvestmentResults(parsedInput)
    : [];

  return (
    <div className="app">
      <Header />
      <main className="layout">
        <section id="user-input" className="card">
          <UserInput
            values={formData}
            onChange={handleChange}
            presets={PRESETS}
            onPresetSelect={handlePresetSelect}
            onReset={handleReset}
            errors={errors}
          />
        </section>
        <section id="result" className="card">
          <Result input={parsedInput} data={resultData} />
        </section>
      </main>
      <footer className="app-footer">
        <p>
          Built with <span aria-hidden="true"></span> React & Recharts ·
          Interactive investment growth visualizer
        </p>
      </footer>
    </div>
  );
}

export default App;

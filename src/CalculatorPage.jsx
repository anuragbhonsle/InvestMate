import { useState } from "react";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import { calculateInvestmentResults } from "./util/investment.js";
import BackgroundWrapper from "./components/BackgroundWrapper.jsx";

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
  if (!Number.isFinite(input.duration) || input.duration < 1)
    errors.duration = "Duration should be at least 1 year.";
  else if (input.duration > 50)
    errors.duration = "Durations above 50 years are not supported here.";
  if (!Number.isFinite(input.expectedReturn))
    errors.expectedReturn = "Please enter a valid expected return.";
  else if (input.expectedReturn < 0)
    errors.expectedReturn = "Expected return cannot be negative.";
  else if (input.expectedReturn > 30)
    errors.expectedReturn = "Expected return above 30% is unusually high.";
  return errors;
}

export default function CalculatorPage() {
  const [formData, setFormData] = useState(INITIAL_FORM);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePresetSelect = (presetId) => {
    const preset = PRESETS.find((p) => p.id === presetId);
    if (!preset) return;
    setFormData(preset.values);
  };

  const handleReset = () => setFormData(INITIAL_FORM);

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
    <BackgroundWrapper>
      <main className="mx-auto max-w-7xl px-6 py-8 space-y-8">
        <section id="user-input">
          <UserInput
            values={formData}
            onChange={handleChange}
            presets={PRESETS}
            onPresetSelect={handlePresetSelect}
            onReset={handleReset}
            errors={errors}
          />
        </section>

        <section id="result">
          <Result input={parsedInput} data={resultData} />
        </section>
      </main>
      <div className="pt-8">
        <footer className="pt-3 absolute bottom-4 w-full text-center text-sm text-white">
          © 2026 Investment Calculator · Built by{" "}
          <a
            href="https://x.com/Anuraaaag7"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Anurag
          </a>
        </footer>
      </div>
    </BackgroundWrapper>
  );
}

import React from "react";

export default function UserInput({ values, onChange }) {
  return (
    <div className="input-container">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            name="initialInvestment"
            value={values.initialInvestment}
            onChange={onChange}
            type="number"
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            name="annualInvestment"
            value={values.annualInvestment}
            onChange={onChange}
            type="number"
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return (%)</label>
          <input
            name="expectedReturn"
            value={values.expectedReturn}
            onChange={onChange}
            type="number"
            required
          />
        </p>
        <p>
          <label>Duration (years)</label>
          <input
            name="duration"
            value={values.duration}
            onChange={onChange}
            type="number"
            required
          />
        </p>
      </div>
    </div>
  );
}

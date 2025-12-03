export default function UserInput({
  values,
  onChange,
  presets,
  onPresetSelect,
  onReset,
  errors = {},
}) {
  return (
    <div className="input-container">
      <div className="input-header">
        <div>
          <h2 className="section-title">Set your investment assumptions</h2>
        </div>
        {presets && presets.length > 0 && (
          <div className="input-actions" aria-label="Quick presets">
            {presets.map((preset) => (
              <button
                key={preset.id}
                type="button"
                className="chip-button"
                onClick={() => onPresetSelect?.(preset.id)}
              >
                {preset.label}
              </button>
            ))}
            <button
              type="button"
              className="link-button"
              onClick={() => onReset?.()}
            >
              Reset
            </button>
          </div>
        )}
      </div>

      <p className="helper-text">
        Adjust the assumptions below to experiment with different investment
        strategies. Values update the chart and table in real-time.
      </p>
      <div className="input-group stacked">
        <p>
          <label htmlFor="initialInvestment">Initial Investment (USD)</label>
          <input
            id="initialInvestment"
            name="initialInvestment"
            value={values.initialInvestment}
            onChange={onChange}
            type="number"
            min="0"
            step="100"
            required
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment (USD)</label>
          <input
            id="annualInvestment"
            name="annualInvestment"
            value={values.annualInvestment}
            onChange={onChange}
            type="number"
            min="0"
            step="100"
            required
          />
        </p>
      </div>
      <div className="input-group stacked">
        <p>
          <label htmlFor="expectedReturn">Expected Return (% per year)</label>
          <input
            id="expectedReturn"
            name="expectedReturn"
            value={values.expectedReturn}
            onChange={onChange}
            type="number"
            min="0"
            max="30"
            step="0.1"
            required
          />
          {errors.expectedReturn && (
            <p className="field-error">{errors.expectedReturn}</p>
          )}
        </p>
        <p>
          <label htmlFor="duration">Duration (years)</label>
          <input
            id="duration"
            name="duration"
            value={values.duration}
            onChange={onChange}
            type="number"
            min="1"
            max="50"
            required
          />
          {errors.duration && <p className="field-error">{errors.duration}</p>}
        </p>
      </div>
    </div>
  );
}

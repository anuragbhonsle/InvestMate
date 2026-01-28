export default function UserInput({
  values,
  onChange,
  presets,
  onPresetSelect,
  onReset,
  errors = {},
}) {
  return (
    <div className="rounded-2xl border border-zinc-300 bg-white/85 backdrop-blur-sm p-6 shadow-lg space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold text-zinc-900">
          Set your investment assumptions
        </h2>

        {presets?.length > 0 && (
          <div
            className="flex flex-wrap items-center gap-2"
            aria-label="Quick presets"
          >
            {presets.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => onPresetSelect?.(preset.id)}
                className="rounded-full border border-zinc-300 bg-white/70 px-4 py-1.5 text-sm font-medium text-zinc-800 transition hover:bg-zinc-100 hover:text-zinc-900 hover:shadow-sm"
              >
                {preset.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => onReset?.()}
              className="text-sm font-medium text-red-600 hover:text-red-700 hover:underline"
            >
              Reset
            </button>
          </div>
        )}
      </div>

      {/* Helper text */}
      <p className="text-sm text-zinc-600">
        Adjust the assumptions below to experiment with different investment
        strategies. Results update in real time.
      </p>

      {/* Inputs */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Initial Investment */}
        <InputField
          id="initialInvestment"
          label="Initial Investment (USD)"
          name="initialInvestment"
          value={values.initialInvestment}
          onChange={onChange}
          step="100"
        />

        {/* Annual Investment */}
        <InputField
          id="annualInvestment"
          label="Annual Investment (USD)"
          name="annualInvestment"
          value={values.annualInvestment}
          onChange={onChange}
          step="100"
        />

        {/* Expected Return */}
        <InputField
          id="expectedReturn"
          label="Expected Return (% per year)"
          name="expectedReturn"
          value={values.expectedReturn}
          onChange={onChange}
          step="0.1"
          error={errors.expectedReturn}
        />

        {/* Duration */}
        <InputField
          id="duration"
          label="Duration (years)"
          name="duration"
          value={values.duration}
          onChange={onChange}
          error={errors.duration}
        />
      </div>
    </div>
  );
}

function InputField({ id, label, name, value, onChange, step, error }) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="text-sm font-medium text-zinc-800">
        {label}
      </label>

      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        type="number"
        step={step}
        required
        className={`w-full rounded-lg border px-3 py-2 text-sm text-zinc-900 bg-white/60 backdrop-blur-sm
          ${
            error
              ? "border-red-400 focus:border-red-500 focus:ring-red-500"
              : "border-zinc-300 focus:border-zinc-900 focus:ring-zinc-900"
          }
          focus:outline-none focus:ring-1`}
      />

      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}

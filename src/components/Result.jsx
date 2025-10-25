import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { formatter, calculateInvestmentResults } from "../util/investment";

export default function Result({ input }) {
  if (!input) return null;

  const data = calculateInvestmentResults({
    initialInvestment: Number(input.initialInvestment),
    annualInvestment: Number(input.annualInvestment),
    expectedReturn: Number(input.expectedReturn),
    duration: Number(input.duration),
  });

  return (
    <div>
      <h2 className="center">Investment Growth Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, bottom: 5, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="year" stroke="#c2e9e0" />
          <YAxis stroke="#c2e9e0" />
          <Tooltip
            formatter={(value) => formatter.format(value)}
            contentStyle={{
              backgroundColor: "rgba(0,0,0,0.7)",
              borderRadius: "8px",
            }}
          />
          <Line
            type="monotone"
            dataKey="valueEndOfYear"
            stroke="#00ffcc"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>

      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Interest</th>
            <th>Annual Investment</th>
            <th>End of Year Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.year}>
              <td>{d.year}</td>
              <td>{formatter.format(d.interest)}</td>
              <td>{formatter.format(d.annualInvestment)}</td>
              <td>{formatter.format(d.valueEndOfYear)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

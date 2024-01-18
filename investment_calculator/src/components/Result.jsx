import {
  calculateInvestmentResults,
  formatter,
  colNames,
} from "../util/investment.js";

export default function Result({ paramInputs }) {
  const calculatedResult = calculateInvestmentResults(paramInputs);

  return (
    <table id="result" className="center">
      <thead>
        <tr>
          {colNames.map((colName, index) => (
            <td key={index}>{colName}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {calculatedResult.map((result, index) => {
          return (
            <tr key={index}>
              {Object.entries(result).map(([name, value]) => (
                <td key={name}>{formatter.format(value)}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

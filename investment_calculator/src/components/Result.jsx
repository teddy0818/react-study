import {
  calculateInvestmentResults,
  formatter,
  colNames,
} from "../util/investment.js";

export default function Result({ paramInputs }) {
  const calculatedResult = calculateInvestmentResults(paramInputs);
  console.log(calculatedResult);
  return (
    <table id="result" className="center">
      <thead>
        <tr>
          {colNames.map((colName) => (
            <td>{colName}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {calculatedResult.map((result) => {
          return (
            <tr>
              {Object.entries(result).map(([name, value]) => (
                <td>{formatter.format(value)}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

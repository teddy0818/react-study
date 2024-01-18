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
        <tr>
          <td>Year</td>
          <td>Year</td>
          <td>Year</td>
        </tr>
      </tbody>
    </table>
  );
}

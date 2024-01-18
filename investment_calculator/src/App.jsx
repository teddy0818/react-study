import { useState } from "react";
import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import Result from "./components/Result";

const INITIAL_INPUTS = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [inputs, setInputs] = useState(INITIAL_INPUTS);

  const handleChangeInput = (name, value) => {
    setInputs((prevInputValues) => ({
      ...prevInputValues,
      [name]: Number(value),
    }));
    console.log(inputs);
  };

  return (
    <>
      <Header />
      <UserInputs paramInputs={inputs} onInput={handleChangeInput} />
      <Result paramInputs={inputs} />
    </>
  );
}

export default App;

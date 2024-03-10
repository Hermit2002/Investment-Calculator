import { useState } from "react";
import Header from "./Components/Header.jsx";
import UserInput from "./Components/UserInput.jsx";
import Results from "./Components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    // we lifted this state up from UserInput to compute the result.
    // initial values of the four inputs.
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentity, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentity]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results Input={userInput} />
    </>
  );
}
export default App;

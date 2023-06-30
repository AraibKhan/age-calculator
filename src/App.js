import { useState } from "react";
import AgeOutput from "./components/AgeOutput";
import DateForm from "./components/DateForm";

const App = () => {
  const [userDOB, setUserDOB] = useState("");

  const getUserInput = (date) => {
    setUserDOB(date);
  };

  return (
    <div className="container">
      <DateForm getUserInput={getUserInput} />
      <AgeOutput date={userDOB} />
    </div>
  );
};

export default App;

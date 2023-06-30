import { useState } from "react";

const DateForm = ({ getUserInput }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [dayEmpty, setDayEmpty] = useState(false);
  const [monthEmpty, setMonthEmpty] = useState(false);
  const [yearEmpty, setYearEmpty] = useState(false);

  const [dayValid, setDayValid] = useState(true);
  const [monthValid, setMonthValid] = useState(true);
  const [yearValid, setYearValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();

    //Reset to initial state.
    setDayEmpty(false);
    setMonthEmpty(false);
    setYearEmpty(false);

    setDayValid(true);
    setMonthValid(true);
    setYearValid(true);

    let isEmpty = false;

    //Check if any of the fields is empty
    if (!day) {
      setDayEmpty(true);
      isEmpty = true;
    }
    if (!month) {
      setMonthEmpty(true);
      isEmpty = true;
    }
    if (!year) {
      setYearEmpty(true);
      isEmpty = true;
    }

    if (!isEmpty) {
      const currDate = new Date();
      const inputDate = new Date(`${month}-${day}-${year}`);

      //Check if the input date is in future.
      if (inputDate >= currDate) {
        setYearValid(false);
        return;
      }

      //Check if month is valid
      if (+month < 1 || +month > 12) {
        setMonthValid(false);
        return;
      }

      //Check if day is valid based on month.
      const lastDayOfMonth = new Date(year, month, 0).getDate();
      if (+day < 1 || +day > lastDayOfMonth) {
        setDayValid(false);
        return;
      }

      //If all the tests are passed then reset the form and update output.
      setDay("");
      setMonth("");
      setYear("");
      const userDOB = new Date(`${month}-${day}-${year}`);
      getUserInput(userDOB);
    }
  };

  return (
    <form className="form-container" onSubmit={submitHandler}>
      <div
        className={`form-item ${
          (dayEmpty && "error") || (!dayValid && "error")
        }`}
      >
        <label htmlFor="day">DAY</label>
        <input
          id="day"
          type="text"
          placeholder="DD"
          maxLength={2}
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        {dayEmpty && (
          <span className="error-text">This field is required.</span>
        )}
        {!dayValid && <span className="error-text">Must be a valid day.</span>}
      </div>
      <div
        className={`form-item ${
          (monthEmpty && "error") || (!monthValid && "error")
        }`}
      >
        <label htmlFor="month">MONTH</label>
        <input
          id="month"
          type="text"
          placeholder="MM"
          maxLength={2}
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
        {monthEmpty && (
          <span className="error-text">This field is required.</span>
        )}
        {!monthValid && (
          <span className="error-text">Must be a valid month.</span>
        )}
      </div>
      <div
        className={`form-item ${
          (yearEmpty && "error") || (!yearValid && "error")
        }`}
      >
        <label htmlFor="year">YEAR</label>
        <input
          id="year"
          type="text"
          placeholder="YYYY"
          maxLength={4}
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        {yearEmpty && (
          <span className="error-text">This field is required.</span>
        )}
        {!yearValid && <span className="error-text">Must be in past.</span>}
      </div>
      <div className="line"></div>
      <button type="submit">⬇</button>
    </form>
  );
};

export default DateForm;

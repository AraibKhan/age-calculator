const AgeOutput = ({ date }) => {
  const currDate = new Date();
  const dob = new Date(date);

  const currMonth = currDate.getMonth();
  const birthMonth = dob.getMonth();
  const currDay = currDate.getDate();
  const birthDay = dob.getDate();

  let years = currDate.getFullYear() - dob.getFullYear();
  let months = currMonth - birthMonth;
  let days = currDay - birthDay;

  if (
    currMonth < birthMonth ||
    (currMonth === birthMonth && currDay < birthDay)
  ) {
    years--;
  }

  if (months < 0 || (months === 0 && days < 0)) {
    months = 12 - Math.abs(months);
  }

  if (days < 0) {
    const lastMonth = new Date(
      currDate.getFullYear(),
      currDate.getMonth() - 1,
      0
    );
    days = lastMonth.getDate() - dob.getDate() + currDate.getDate();
    months--;
  }

  return (
    <div className="output-container">
      <h1>
        <span>{date ? `${years}` : `- -`}</span> years
      </h1>
      <h1>
        <span>{date ? `${months}` : `- -`}</span> months
      </h1>
      <h1>
        <span>{date ? `${days}` : `- -`}</span> days
      </h1>
    </div>
  );
};

export default AgeOutput;

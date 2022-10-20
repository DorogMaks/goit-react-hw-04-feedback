export const Statistics = ({
  feedback,
  options,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul>
        {options.map(feedbackKey => {
          return (
            <li key={feedbackKey}>
              <p>
                {feedbackKey}: {feedback[feedbackKey]}
              </p>
            </li>
          );
        })}
      </ul>

      <div>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    </>
  );
};

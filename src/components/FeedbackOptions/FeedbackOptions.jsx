export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(feedbackKey => {
        return (
          <li key={feedbackKey}>
            <button type="button" name={feedbackKey} onClick={onLeaveFeedback}>
              {feedbackKey}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

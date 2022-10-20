import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = evt => {
    const feedbackName = evt.target.name;
    this.setState(prevState => {
      return { [feedbackName]: prevState[feedbackName] + 1 };
    });
  };

  render() {
    const feedbackNames = Object.keys(this.state);
    return (
      <>
        <div>
          <h2>Please leave feedback</h2>
          <ul>
            {feedbackNames.map(feedbackName => {
              return (
                <li key={feedbackName}>
                  <button
                    type="button"
                    name={feedbackName}
                    onClick={this.handleIncrement}
                  >
                    {feedbackName}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h2>Statistics</h2>
          <ul>
            {feedbackNames.map(feedbackName => {
              return (
                <li key={feedbackName}>
                  <p>
                    {feedbackName}: {this.state[feedbackName]}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

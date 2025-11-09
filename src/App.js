import React, { Component } from 'react';

import './App.css';

// Class-based App component as required by the checkpoint
class App extends Component {
  constructor(props) {
    super(props);
    // Initialize component state
    this.state = {
      // Person object containing profile data
      Person: {
        fullName: 'SAIDI MOHAMED',
        bio: 'A software developer passionate about React and UI.',
        imgSrc: 'https://ozytis.fr/wp-content/uploads/2020/12/productivity-1995786_1920-1024x598.jpg', 
        profession: 'Frontend Developer',
      },
      // Boolean 'watch' controls whether the profile is shown
      watch: false,
      // Number of seconds elapsed since component was mounted
      elapsedSeconds: 0,
    };
    // Bind event handlers
    this.toggleWatch = this.toggleWatch.bind(this);
  }
  // Lifecycle: start the timer when mounted
  componentDidMount() {
    // Save interval ID so it can be cleared on unmount
    this._timerID = setInterval(() => {
      // Increment elapsedSeconds every second
      this.setState((prevState) => ({
        elapsedSeconds: prevState.elapsedSeconds + 1,
      }));
    }, 1000);
  }
  // Lifecycle: clear the timer to avoid memory leaks
  componentWillUnmount() {
    clearInterval(this._timerID);
  }
  // Toggle the 'watch' boolean in state
  toggleWatch() {
    this.setState((prevState) => ({ watch: !prevState.watch }));
  }

  render() {
    const { Person, watch, elapsedSeconds } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {/* Button toggles the watch state. When true, profile is shown. */}
          <button onClick={this.toggleWatch} style={{ marginBottom: '1rem' }}>
            {watch ? 'Hide Profile' : 'Show Profile'}
          </button>
          {/* Display elapsed time since mount */}
          <div style={{ marginBottom: '1rem' }}>
            Time since mount: {elapsedSeconds} second{elapsedSeconds !== 1 ? 's' : ''}
          </div>
          {/* Conditionally render the Person profile when watch is true */}
          {watch && (
            <div>
              <img
                src={Person.imgSrc}
                className="App-logo"
                alt={Person.fullName}
                style={{ width: '120px', height: '120px', borderRadius: '8px' }}
              />
              <h2>{Person.fullName}</h2>
              <h4>{Person.profession}</h4>
              <p >{Person.bio}</p>
            </div>
          )}
        
        </header>
      </div>
    );
  }
}
export default App;

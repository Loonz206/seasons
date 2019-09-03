import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
  // class based React components need a constructor and super and props passed through
  constructor(props) {
    super(props);
    // this is the only time we do direct assignment/initialization to this.state
    this.state = { lat: null, errorMessage: "" };
  }

  componentDidMount() {
    // the place to make network calls or initialize some data-loading
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // we called setState!! Very important this is the only way to update state
        // setState re-renders the jsx
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
    console.log("My component was rendered to the screen");
  }

  componentDidUpdate() {
    // place for updates or additional network calls or methods that re-render the ui
    console.log("Component was just updated - it re-rendered");
  }

  componentWillUnmount() {
    // removal of application logic or cleanup steps
  }

  // React class based components require a render function that returns some JSX
  render() {
    const { lat, errorMessage } = this.state;
    // we have error
    if (errorMessage && !lat) {
      return (
        <div>
          Error Message:
          {errorMessage}
        </div>
      );
    }
    // we have lat
    if (lat && !errorMessage) {
      return <SeasonDisplay lat={lat} />;
    }
    // default to if none match
    return <Spinner text="Loading" />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

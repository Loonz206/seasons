import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  // class based React components need a constructor and super and props passed through
  constructor(props) {
    super(props);
    // this is the only time we do direct assignment to this.state
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // we called setState!! Very important this is the only way to update state
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
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
      return (
        <div>
          Latitude:
          {lat}
        </div>
      );
    }
    // default to if none match
    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

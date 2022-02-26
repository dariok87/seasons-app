import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { latitude: null, errorMessage: '' }; //initialize state object

    window.navigator.geolocation.getCurrentPosition(
      (position) => {

        // we called setState to update state object
        this.setState({ latitude: position.coords.latitude })
      },
      (err) => {
        this.setState({ errorMessage: err.message})
      }
    );
  }

  render() {
    return (
      <div> 
        Latitude: {this.state.latitude}
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>  
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

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

  componentDidMount() {
    console.log('Component was rendered on the scrreeeen');
  }

  componentDidUpdate() {
    console.log('component updated');
  }

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return <div>Latitude: {this.state.latitude}</div>
    }

    return <div>Loading...</div>
  }
}

ReactDOM.render(
  <React.StrictMode>  
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

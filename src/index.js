import React from 'react';
import ReactDOM, { render } from 'react-dom';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err),
  );

  return <div>Latitude: </div>
};


class App extends React.Component {
  render() {
    return <div> Latitude: </div>;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

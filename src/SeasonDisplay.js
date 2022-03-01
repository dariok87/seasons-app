import React from 'react';

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? 'summer' : 'winter'; // Are we in northern hemisphere
  } else {
    return latitude > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const text = season === 'winter' ? 'Brrr, it is chilly' : 'oh, it is very hot'


  return (
    <div>
      {text}
    </div>
  );
};

export default SeasonDisplay;

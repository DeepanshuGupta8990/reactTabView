import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

const height = window.innerHeight;
const styles = {
  slide: {
    padding: 15,
    minHeight: height,
    color: '#fff',
  },
  slide1: {
    background: 'red',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
};

const MyComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Initialize with the first tab

  const handleChangeIndex = (index) => {
    setActiveIndex(index);
  };

  // Function to programmatically go to the second tab
  const goToSecondTab = () => {
    setActiveIndex(1);
  };

  return (
    <div>
      <button onClick={goToSecondTab}>Go to Second Tab</button>
      <SwipeableViews
        index={activeIndex}
        onChangeIndex={handleChangeIndex}
      >
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          <Component />
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>
          slide n°2
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>
          slide n°3
        </div>
      </SwipeableViews>
    </div>
  );
};

const Component = () => {
  return (
    <div>
      <h2>Hello</h2>
    </div>
  );
};

export default MyComponent;

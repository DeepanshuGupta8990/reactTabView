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
    background: 'pink',
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
    console.log(232323123)
    setActiveIndex(index);
  };

  // Function to programmatically go to the second tab
  const goToSecondTab = (no) => {
    setActiveIndex(no);
  };

  return (
    <>
    <nav style={{display:"flex",justifyContent:"space-between",alignItems:'center',flexDirection:"row",padding:" 0px 20px",background:'grey'}}>
        <p style={{cursor:"pointer",color:activeIndex===0?'white':'black'}} onClick={()=>{goToSecondTab(0)}}>Tab1</p>
        <p style={{cursor:"pointer",color:activeIndex===1?'white':'black'}} onClick={()=>{goToSecondTab(1)}}>Tab2</p>
        <p style={{cursor:"pointer",color:activeIndex===2?'white':'black'}} onClick={()=>{goToSecondTab(2)}}>Tab3</p>
    </nav>
    <div>
      {/* <button onClick={goToSecondTab}>Go to Second Tab</button> */}
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
</>
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

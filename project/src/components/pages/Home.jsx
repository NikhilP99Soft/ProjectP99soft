import React, { useState } from "react";
import office from "../../assets/office.jpg";

const Home = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [isFontIncreased, setIsFontIncreased] = useState(false);
  const [hoveredHfour, setHoveredHfour] = useState(false);

  const handleMouseEnter = (setter) => () => {
    setter(true);
  };

  const handleMouseLeave = (setter) => () => {
    setter(false);
  };

  const changeFont = () => {
    setIsFontIncreased(true);
  };

  const changeFontAgain = () => {
    setIsFontIncreased(false);
  };

  // const changeFontFour = () => {
  //   setHoveredHfour(true);
  // };

  // const changeFontFourAgain = () => {
  //   setHoveredHfour(false);
  // };

  const containerStyle = {
    width: "100%",
    height: "800px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "flex-end",
  };

  const imageStyle = {
    borderRadius: "200px 0px 0px 200px",
    height: "700px",
    marginTop: "50px",
  };

  return (
    <div>
      <div style={containerStyle}>
        <div>
          <h1
            style={{
              marginTop: "200px",
              marginRight: "170px",
              color: hovered ? "green" : "#696969",
            }}
            onMouseEnter={handleMouseEnter(setHovered)}
            onMouseLeave={handleMouseLeave(setHovered)}
          >
            Welcome to P99SOFT
          </h1>
          <h1
            style={{
              marginRight: "70px",
              marginTop: "50px",
              color: hovered2 ? "green" : "#696969",
            }}
            onMouseEnter={handleMouseEnter(setHovered2)}
            onMouseLeave={handleMouseLeave(setHovered2)}
          >
            Your IT Challenges,
            <br />
            Our Expert Solutions
          </h1>
          <h4
            style={{
              marginTop: "50px",
              fontSize: isFontIncreased ? "30px" : "inherit",
              transition: "3s",
              color: hoveredHfour ? "green" : "#696969",
              // marginRight: "30px",
            }}
            onMouseEnter={changeFont}
            onMouseLeave={changeFontAgain}
          >
            We help great Companies Simplify to
            <br /> and take control of their services
          </h4>
        </div>
        <img src={office} alt="office image" style={imageStyle} />
      </div>
    </div>
  );
};

export default Home;

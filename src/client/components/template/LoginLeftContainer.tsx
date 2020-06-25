import React, { useState, useEffect } from "react";
import styled from "styled-components";

import PhoneImage from "../../images/login-phones.png";
import ScreenShot from "../../images/login-phone-screenshot.jpg";
import ScreenShot2 from "../../images/login-phone-screenshot2.jpg";
import ScreenShot3 from "../../images/login-phone-screenshot3.jpg";
import ScreenShot4 from "../../images/login-phone-screenshot4.jpg";
import ScreenShot5 from "../../images/login-phone-screenshot5.jpg";

type Props = {
  opacity: boolean;
};

const LeftContaienr = styled.div`
  width: 50%;
  display: inline-block;
  height: 618px;
  background-image:url("${PhoneImage}");
  background-size:cover;
  background-repeat:no-repeat;
  position:relative;
`;

const Screenshot = styled.div<Props>`
  width:240px;
  height:427px;
  background:url("${ScreenShot}");
  background-size:cover;
  background-repeat:no-repeat;
  position:absolute;
  top:100px;
  right:59px;
  transition:all 2.5s;
  opacity:${(props) => (props.opacity ? "1" : "0")};
`;
const Screenshot2 = styled.div<Props>`
  width:240px;
  height:427px;
  background:url("${ScreenShot2}");
  background-size:cover;
  background-repeat:no-repeat;
  position:absolute;
  top:100px;
  right:59px;
  transition:all 2.5s;
  opacity:${(props) => (props.opacity ? "1" : "0")};
`;
const Screenshot3 = styled.div<Props>`
  width:240px;
  height:427px;
  background:url("${ScreenShot3}");
  background-size:cover;
  background-repeat:no-repeat;
  position:absolute;
  top:100px;
  right:59px;
  transition:all 2.5s;
  opacity:${(props) => (props.opacity ? "1" : "0")};
`;
const Screenshot4 = styled.div<Props>`
  width:240px;
  height:427px;
  background:url("${ScreenShot4}");
  background-size:cover;
  background-repeat:no-repeat;
  position:absolute;
  top:100px;
  right:59px;
  transition:all 2.5s;
  opacity:${(props) => (props.opacity ? "1" : "0")};
`;
const Screenshot5 = styled.div<Props>`
  width:240px;
  height:427px;
  background:url("${ScreenShot5}");
  background-size:cover;
  background-repeat:no-repeat;
  position:absolute;
  top:100px;
  right:59px;
  transition:all 2.5s;
  opacity:${(props) => (props.opacity ? "1" : "0")};
`;

const LoginLeftContainer: React.FC = () => {
  const [screenshotOpacity1, setScreenshotOpacity1] = useState(true);
  const [screenshotOpacity2, setScreenshotOpacity2] = useState(false);
  const [screenshotOpacity3, setScreenshotOpacity3] = useState(false);
  const [screenshotOpacity4, setScreenshotOpacity4] = useState(false);
  const [screenshotOpacity5, setScreenshotOpacity5] = useState(false);
  let counter: number = 1;

  useEffect(() => {
    const timer = setInterval(() => {
      if (counter === 1) {
        setScreenshotOpacity5(false);
        setScreenshotOpacity1(true);
      } else if (counter === 2) {
        setScreenshotOpacity1(false);
        setScreenshotOpacity2(true);
      } else if (counter === 3) {
        setScreenshotOpacity2(false);
        setScreenshotOpacity3(true);
      } else if (counter === 4) {
        setScreenshotOpacity3(false);
        setScreenshotOpacity4(true);
      } else if (counter === 5) {
        setScreenshotOpacity4(false);
        setScreenshotOpacity5(true);
      }

      counter === 5 ? (counter = 1) : (counter = counter + 1);
    }, 4000);
  }, []);

  return (
    <LeftContaienr>
      <Screenshot opacity={screenshotOpacity1} />
      <Screenshot2 opacity={screenshotOpacity2} />
      <Screenshot3 opacity={screenshotOpacity3} />
      <Screenshot4 opacity={screenshotOpacity4} />
      <Screenshot5 opacity={screenshotOpacity5} />
    </LeftContaienr>
  );
};

export default LoginLeftContainer;

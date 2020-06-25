import React, { useState, useEffect } from "react";
import styled from "styled-components";

import LeftContainer from "../template/LoginLeftContainer";
import RightContainer from "../template/LoginRightContainer";

const Container = styled.div`
  width: 900px;
  margin: 30px auto 0;
  display: flex;
`;
const Login: React.FC = () => {
  return (
    <Container>
      <LeftContainer />
      <RightContainer />
    </Container>
  );
};

export default Login;

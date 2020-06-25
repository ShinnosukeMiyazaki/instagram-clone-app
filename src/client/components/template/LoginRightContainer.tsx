import React, { useState, useEffect } from "react";
import styled from "styled-components";

import InstagramLogoImg from "../../images/all-image.png";

type InputType = {
  type: string;
};

const Contaienr = styled.div`
  width: 50%;
  display: inline-block;
  height: 618px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

const InstagramLogo = styled.div`
  background-image:url("${InstagramLogoImg}");
  background-position:-97px 0;
  background-size:411px 396px;
  background-repeat:no-repeat;
  height:51px;
  width:175px;
  margin:25px auto;
`;

const FormContainer = styled.form`
  width: 100%;
  max-width: 350px;
  text-align: center;
  border: 1px solid #bdc3c7;
  background: white;
  padding: 0 40px 40px;
`;

const InputTextArea = styled.input`
  width: 100%;
  padding: 7px 10px;
  font-size: 1.6rem;
  font-weight: 500;
  box-sizing: border-box;
  border: 0.5px solid #bdc3c7;
  background: #fafafa;
  margin-bottom: 5px;
`;

const SubmitBUtton = styled.button`
  width: 100%;
  padding: 7px 10px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  margin: 10px 0 15px;
  opacity: 0.4;
  font-weight: bold;
`;

const RightContainer = () => {
  return (
    <Contaienr>
      <FormContainer>
        <InstagramLogo />
        <InputTextArea type="text" />
        <InputTextArea type="password" />
        <SubmitBUtton>ログイン</SubmitBUtton>
      </FormContainer>
    </Contaienr>
  );
};

export default RightContainer;

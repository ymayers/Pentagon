import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Image = styled.img``;

const ButtonLinkContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;
const Button = styled.button`
  height: 55px;
  width: 149px;
  border-radius: 50px;
  background-color: #737677;
  border: 1px solid #737677;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
`;

function Welcome() {
  return (
    <WelcomeWrapper>
      <Image src="https://imgur.com/LexBRXb.png" alt="logo" />
      <ButtonLinkContainer>
        <Button>Get Started</Button>

        <p>
          Already have an account? <Link to="">Log in</Link>
        </p>
      </ButtonLinkContainer>
    </WelcomeWrapper>
  );
}

export default Welcome;

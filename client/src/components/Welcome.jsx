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

const PromptText = styled.p`
  letter-spacing: 2px;
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
`;

const LogInLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  border-bottom: 1px solid #ffffff;
  font-weight: 500;
 
`;

function Welcome() {
  return (
    <WelcomeWrapper>
      <Image src="https://imgur.com/LexBRXb.png" alt="logo" />
      <ButtonLinkContainer>
        <Button>Get Started</Button>

        <PromptText>
          Already have an account? <LogInLink to="">Log in</LogInLink>
        </PromptText>
      </ButtonLinkContainer>
    </WelcomeWrapper>
  );
}

export default Welcome;

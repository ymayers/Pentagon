import React, { Component } from "react";
import styled from "styled-components";

const LogInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Image = styled.img`
  height: 150px;
  width: 200px;
  margin: 40px 0;
`;

const LogInFormWrapper = styled.div`
  height: 80vh;
  width: 100%;
  background-color: #ffffff;
  text-align: center;
  border-radius: 50px 0px 0px 0px;
`;


const LogInForm = styled.form`
 
`;

const EmailInput = styled.input`
  width: 80%;
  padding: 1.5em;
  margin: 20px 0;
  background-color: #EDF3F5;
  border: 2px solid #EDF3F5;
  border-radius: 15px;

`

const PasswordInput = styled.input`
  width: 80%;
  padding: 1.5em;
  background-color: #EDF3F5;
  border: 2px solid #EDF3F5;
  border-radius: 15px;
  margin-bottom: 10px;
`

const ForgotPassword = styled.p`
  text-align: right;
  margin-right: 15px;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.1em;
  color: #6D6D6D;
`;

const LogInButton = styled.button`
  height: 55px;
  width: 149px;
  margin-top: 30px;
  border-radius: 50px;
  background-color: #737677;
  border: 1px solid #737677;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;

`;




class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <LogInWrapper>
      <Image src="https://imgur.com/LexBRXb.png" alt="logo" />
      <LogInFormWrapper>
        <h2>Welcome</h2>
        <LogInForm>
          <EmailInput
            id="email"
            type="text"
            name="email"
            placeholder="EMAIL"
          />

         <br></br>
          <PasswordInput
            id="password"
            type="text"
            name="password"
            placeholder="PASSWORD"
          
          />
          <ForgotPassword>forgot your password?</ForgotPassword>
          <LogInButton>LOG IN</LogInButton>
        </LogInForm>
      </LogInFormWrapper>
    </LogInWrapper>;
  }
}

export default LogIn;

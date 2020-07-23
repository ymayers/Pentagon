import React, { Component } from 'react'
import styled from 'styled-components'

const SignUpTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SignUpTitle = styled.h1`
  font-size: 35px;
  color: #FFFFFF;
  font-family: Lato;
  font-weight: 500;
  line-height: 42px;
  letter-spacing: 2px
`
const HeaderTwo = styled.h2`
  font-size: 15px;
  color: #FFFFFF;
  font-family: Lato;
  font-weight: 500;
  line-height: 42px;
  letter-spacing: 2px
`
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const SocialIcons = styled.div`
  display: flex;
  border: 2px solid #FFFFFF;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  padding: 10px 12px;
  margin: 0 15px 0 15px
`
const Or = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
`
const Divider = styled.hr`
  border: 1px solid #FFFFFF;
  width: 80%;
  margin-top: 40px
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  margin: 5px;
  border-radius: 14px;
  border: 2px solid #FFFFFF;
  height: 55px;
  background: rgb(190,197,200);
  text-align: center;
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 15px;
  color: #ffffff;
  letter-spacing: 2px;

  &::placeholder{
    color: #ffffff
  }
`
const Button = styled.button`
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
  align-self: center
`
class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      mobile_phone: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <>
        <SignUpTitles>
          <SignUpTitle>SIGN UP</SignUpTitle>
          <HeaderTwo>SIGN UP WITH 1-CLICK</HeaderTwo>
        </SignUpTitles>

        <SocialContainer>
          <SocialIcons>
            <svg width="28" height="29" viewBox="0 0 17 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.33971 34V18.0462H0V12.3021H4.33971V7.39585C4.33971 3.54049 6.90319 0 12.81 0C15.2016 0 16.97 0.22287 16.97 0.22287L16.8307 5.58691C16.8307 5.58691 15.0271 5.56985 13.059 5.56985C10.9289 5.56985 10.5877 6.52406 10.5877 8.10781V12.3021H17L16.721 18.0462H10.5877V34H4.33971Z" fill="white" />
            </svg>
          </SocialIcons>
          <Or>OR</Or>
          <SocialIcons>
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M27.465 11.7812H14.0892V17.2188H21.9363C21.2229 21.025 17.8344 23.5625 14.0892 23.3812C9.45223 23.2 5.88535 19.575 5.70701 14.8625C5.52866 9.96875 9.27389 5.8 14.0892 5.61875C16.051 5.61875 18.0127 6.34375 19.6178 7.79375L23.7197 3.80625C21.2229 1.26875 17.6561 0 14.2675 0C6.42038 0 0 6.525 0 14.5C0 22.475 6.42038 29 14.2675 29C22.4713 29 28 23.2 28 14.8625C27.8217 13.775 27.8217 12.8687 27.465 11.7812Z" fill="white" />
            </svg>
          </SocialIcons>

        </SocialContainer>
        <Divider />
        <FormContainer>
          <HeaderTwo>SIGN UP WITH YOUR EMAIL</HeaderTwo>
          <Form onSubmit={(e) => {
            e.preventDefault();
            this.props.handleRegister(this.state);
            this.props.history.push('/profile');
          }}>
            <div>
              <Input
                type="text"
                name='first_name'
                value={this.state.first_name}
                placeholder='first name'
                onChange={this.handleChange}
              />
              <Input
                type="text"
                name='last_name'
                value={this.state.last_name}
                placeholder='last name'
                onChange={this.handleChange}
              />
            </div>
            <Input
              type="text"
              name='mobile_phone'
              value={this.state.mobile_phone}
              placeholder='mobile number'
              onChange={this.handleChange}
            />
            <Input
              type="text"
              name='email'
              value={this.state.email}
              placeholder='email address'
              onChange={this.handleChange}
            />
            <Input
              type="password"
              name='password'
              value={this.state.password}
              placeholder='password'
              onChange={this.handleChange}
            />
            {/* <Input
              type="text"
              name=''
              value={``}
              placeholder='confirm password'
              // onChange={this.handleChange}
            /> */}
            <Button type="submit">Submit</Button>
          </Form>
        </FormContainer>
      </>
    )
  }
}

export default SignUp
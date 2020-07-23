import React, { Component } from 'react'
import styled from 'styled-components'

const Main = styled.main`
  margin-top: 20px;
  background: #EDF3F5;
  border-radius: 15px 0px 0px 0px;
`
const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 15px 0px 0px 0px;
`
const Tab = styled.button`
  background: #EDF3F5;
  border: 1px solid #EDF3F5;
  padding: 20px 10px;
  width: 125px;
  font-family: Lato;
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 2px;
  color: #C6D1D6;  
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 15px 0px 0px 0px;
`
const TabBox = styled.div`
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 20px auto
`
const Welcome = styled.h1`
  color: #6D6D6D;
  font-family: Lato;
  font-weight: 900;
  font-size: 20px;
`
const Paragraph = styled.p`
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 2px;
  color: #6D6D6D;
  text-align: center;
  width: 80%
`
const BigButton = styled.button`
  height: 55px;
  width: 301px;
  margin-top: 30px;
  border-radius: 50px;
  background-color: #737677;
  border: 1px solid #737677;
  color: #ffffff;
  letter-spacing: 2px;
  font-family: Lato;
  font-weight: 500;
  font-size: 15px;
  color: #FFFFFF;
  padding-left: 15px
`
const Bold = styled.span`
  font-weight: 900
`

export default class ID extends Component {

  constructor(props) {
    super(props)

    this.state = {
      frontTab: true,
      backTab: false,
      selfieTab: false
    }
  }

  openTab = (tab) => {
    this.setState({
      frontTab: false,
      backTab: false,
      selfieTab: false
    })
    this.setState(prevState => ({
      [tab]: !prevState[tab]
    }))
  }

  render() {
    const { frontTab, backTab, selfieTab } = this.state

    return (
      <>
        <Main>
          {console.log('-->', this.state)}
          <TabContainer class="w3-bar">
            <Tab class="w3-bar-item w3-button" style={frontTab ? { boxShadow: 'none', color: '#6D6D6D' } : null} onClick={() => { this.openTab('frontTab') }}>1. FRONT</Tab>
            <Tab class="w3-bar-item w3-button" style={backTab ? { boxShadow: 'none', color: '#6D6D6D' } : null} onClick={() => { this.openTab('backTab') }}>2. BACK</Tab>
            <Tab class="w3-bar-item w3-button" style={selfieTab ? { boxShadow: 'none', color: '#6D6D6D' } : null} onClick={() => { this.openTab('selfieTab') }}>3. SELFIE</Tab>
          </TabContainer>

          <TabBox style={frontTab ? { display: 'flex' } : { display: 'none' }}>
            <img src="https://imgur.com/VlzXJNB.png" alt="img-id" />
            <Welcome>WELCOME ZACK!</Welcome>
            <Paragraph>Please provide a Photo of the <Bold>Front</Bold> of your Driver’s License</Paragraph>
            <BigButton>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.95455 3.58532H7.63409V11.2732C7.63409 11.3732 7.71591 11.455 7.81591 11.455H9.17955C9.27955 11.455 9.36136 11.3732 9.36136 11.2732V3.58532H11.0455C11.1977 3.58532 11.2818 3.41033 11.1886 3.29216L8.64318 0.0697542C8.62617 0.0480251 8.60444 0.0304518 8.57964 0.0183663C8.55483 0.00628079 8.5276 0 8.5 0C8.4724 0 8.44517 0.00628079 8.42036 0.0183663C8.39556 0.0304518 8.37383 0.0480251 8.35682 0.0697542L5.81136 3.28989C5.71818 3.41033 5.80227 3.58532 5.95455 3.58532ZM16.8182 10.5914H15.4545C15.3545 10.5914 15.2727 10.6733 15.2727 10.7732V14.2729H1.72727V10.7732C1.72727 10.6733 1.64545 10.5914 1.54545 10.5914H0.181818C0.0818182 10.5914 0 10.6733 0 10.7732V15.2728C0 15.675 0.325 16 0.727273 16H16.2727C16.675 16 17 15.675 17 15.2728V10.7732C17 10.6733 16.9182 10.5914 16.8182 10.5914Z" fill="white" />
              </svg>
              PHOTO OF FRONT ID
            </BigButton>
            <Paragraph>SCAN PASSPORT INSTEAD?</Paragraph>
          </TabBox>

          <TabBox style={backTab ? { display: 'flex' } : { display: 'none' }}>
            <img src="https://imgur.com/VlzXJNB.png" alt="img-id" />
            <Welcome>WELCOME ZACK!</Welcome>
            <Paragraph>Please provide a Photo of the <Bold>Back</Bold> of your Driver’s License</Paragraph>
            <BigButton>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.95455 3.58532H7.63409V11.2732C7.63409 11.3732 7.71591 11.455 7.81591 11.455H9.17955C9.27955 11.455 9.36136 11.3732 9.36136 11.2732V3.58532H11.0455C11.1977 3.58532 11.2818 3.41033 11.1886 3.29216L8.64318 0.0697542C8.62617 0.0480251 8.60444 0.0304518 8.57964 0.0183663C8.55483 0.00628079 8.5276 0 8.5 0C8.4724 0 8.44517 0.00628079 8.42036 0.0183663C8.39556 0.0304518 8.37383 0.0480251 8.35682 0.0697542L5.81136 3.28989C5.71818 3.41033 5.80227 3.58532 5.95455 3.58532ZM16.8182 10.5914H15.4545C15.3545 10.5914 15.2727 10.6733 15.2727 10.7732V14.2729H1.72727V10.7732C1.72727 10.6733 1.64545 10.5914 1.54545 10.5914H0.181818C0.0818182 10.5914 0 10.6733 0 10.7732V15.2728C0 15.675 0.325 16 0.727273 16H16.2727C16.675 16 17 15.675 17 15.2728V10.7732C17 10.6733 16.9182 10.5914 16.8182 10.5914Z" fill="white" />
              </svg>
              PHOTO OF BACK ID
            </BigButton>
            <Paragraph>SCAN PASSPORT INSTEAD?</Paragraph>
          </TabBox>

          <TabBox style={selfieTab ? { display: 'block' } : { display: 'none' }}>
            
          </TabBox>

        </Main>
      </>
    )
  }
}




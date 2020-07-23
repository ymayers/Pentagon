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
const Button = styled.button`
  background: #EDF3F5;
  border: 1px solid #EDF3F5;
  padding: 10px 30px;
  font-family: Lato;
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 2px;
  color: #C6D1D6;  
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 15px 0px 0px 0px;
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
            <Button class="w3-bar-item w3-button" style={frontTab ? { boxShadow: 'none', color: '#6D6D6D'} : null} onClick={() => { this.openTab('frontTab') }}>FRONT</Button>
            <Button class="w3-bar-item w3-button" style={backTab ? { boxShadow: 'none', color: '#6D6D6D'} : null} onClick={() => { this.openTab('backTab') }}>BACK</Button>
            <Button class="w3-bar-item w3-button" style={selfieTab ? { boxShadow: 'none', color: '#6D6D6D'} : null} onClick={() => { this.openTab('selfieTab') }}>SELFIE</Button>
          </TabContainer>

          <div style={frontTab ? { display: 'block' } : { display: 'none' }}>
            <h2>Front</h2>
            <p>London is the capital of England.</p>
          </div>

          <div style={backTab ? { display: 'block' } : { display: 'none' }}>
            <h2>Back</h2>
            <p>Paris is the capital of France.</p>
          </div>

          <div style={selfieTab ? { display: 'block' } : { display: 'none' }}>
            <h2>Selfie</h2>
            <p>Tokyo is the capital of Japan.</p>
          </div>
        </Main>
      </>
    )
  }
}

import React, { Component } from 'react'
import styled from 'styled-components'

const Main = styled.main`
  margin-top: 20px;
  background: #EDF3F5
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
          <div class="w3-bar w3-#EDF3F5">
            <button class="w3-bar-item w3-button" onClick={() => { this.openTab('frontTab') }}>1. Front</button>
            <button class="w3-bar-item w3-button" onClick={() => { this.openTab('backTab') }}>2. Back</button>
            <button class="w3-bar-item w3-button" onClick={() => { this.openTab('selfieTab') }}>3. Selfie</button>
          </div>

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

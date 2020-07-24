import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  height: 91px;
  background: #808080;
  display: flex;
  justify-content: left;
  align-items: center;
  font-family: Lato;
  font-size: 14px;
  letter-spacing: 1.5px;
  color: #FFFFFF
`

export default function MyTickets() {
  return (
    <>
      <Header>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.0499 31.6667C22.801 31.6676 22.5549 31.6126 22.33 31.5059C22.105 31.3992 21.9068 31.2434 21.7499 31.0501L13.6999 21.0501C13.4548 20.7518 13.3208 20.3778 13.3208 19.9917C13.3208 19.6057 13.4548 19.2316 13.6999 18.9334L22.0333 8.93339C22.3162 8.59302 22.7227 8.37898 23.1634 8.33835C23.6041 8.29772 24.0429 8.43382 24.3833 8.71672C24.7236 8.99962 24.9377 9.40614 24.9783 9.84685C25.0189 10.2876 24.8828 10.7264 24.5999 11.0667L17.1499 20.0001L24.3499 28.9334C24.5538 29.178 24.6832 29.4759 24.723 29.7918C24.7628 30.1078 24.7113 30.4285 24.5745 30.716C24.4378 31.0036 24.2215 31.2459 23.9513 31.4144C23.6811 31.5829 23.3683 31.6704 23.0499 31.6667Z" fill="white" />
        </svg>

        Read our COVID-19 announcement here
      </Header>
    </>
  )
}

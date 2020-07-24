import React from 'react'
import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Header = styled.h1`
  font-family: Lato;
  font-weight: bold;
  font-size: 25px;
  letter-spacing: 2px;

  color: #000000;
`
const Divider = styled.hr`
  border: 1px solid #000000;
  width: 80%;
  margin: 40px auto 0 auto
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%
`
const Label = styled.label`
  font-family: Lato;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 2px;
  margin-top: 20px;
  align-self: left
`
const Detail = styled.p`
  margin: 0px;
  font-family: Lato;
  font-weight: normal;
  font-size: 18px;
`
const Button = styled.button`
  height: 45px;
  width: 286px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #737677;
  border: 1px solid #737677;
  color: #ffffff;
  font-family: Lato;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px
`
export default function Ticket() {
  return (
    <>
      <Main>
        <Header>GENERAL ADMISSION</Header>
        <Divider />
        <Wrapper>
          <Label>Where:</Label>
          <Detail>dsfgsgsg</Detail>
          <Label>Seat:</Label>
          <Detail>gfgg</Detail>
        </Wrapper>
        <Divider />
        <Button>ADD TO APPLE WALLET</Button>
        <Button>TEXT ME THE TICKET</Button>

      </Main>
    </>
  )
}

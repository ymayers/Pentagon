import React, { Component } from 'react'
import { withRouter } from "react-router";
import styled from 'styled-components'
import { getQR } from '../services/api-helper'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0
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
  margin-top: 5px
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
const QRCode = styled.div`
  width: 300px;
  height: 300px;
  background-size: cover;  
`

export default class Ticket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qr: null
    };
  }
  componentDidMount() {
    this.readQR(this.props.match.params.id)
  }

  readQR = async (ticketId) => {
    const qr = await getQR(ticketId)
    this.setState({ qr })
  }

  render() {
    const { id } = this.props.match.params;
    const { qr } = this.state
    const { allTickets, currentUser } = this.props
    
    const ticket = allTickets.map(t => {
      if (t.id === currentUser.id && t.ticket_id === parseInt(id)) {
        return (
          <>
            <Header>GENERAL ADMISSION</Header>
            <h2>#{t.ticket_id}</h2>
            <h3>{t.date}</h3>
            <h3>{t.start_time}</h3>
            <QRCode style={{ backgroundImage: `url(data:image/svg+xml;base64,${btoa(qr)})` }}>
            </QRCode>
            <Divider />
            <Wrapper>
              <Label>Where:</Label>
              <Detail>{t.location}</Detail>
              {/* <Label>Seat:</Label> 
          <Detail>gfgg</Detail> */}
            </Wrapper>
            <Divider />
            <Button>ADD TO APPLE WALLET</Button>
            <Button>TEXT ME THE TICKET</Button>
          </>
        )
      }
    })

    return (
      <>
        <Main>
          {ticket}
        </Main>
      </>
    )
  }

}


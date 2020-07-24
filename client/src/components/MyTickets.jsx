import React from 'react'
import {Link} from 'react-router-dom'
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
const HeaderTwo = styled.header`
  height: 54px;
  background: #EDF3F5;
  display: flex;
  justify-content: center;
  align-items: center
`
const GreyBox = styled.div`
  height: 33px;
  width: 325px;
  background: #D1D9DD;
  border: 2px solid #D1D9DD;
  border-radius: 8px;
  display: flex;
  align-items: center;
`
const WhiteOption = styled.button`
  height: 33px;
  width: 159px;
  background: #FFFFFF;
  border: 2px solid #D1D9DD;
  box-shadow: 2px 0px 8px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  font-family: Lato;
  font-weight: 900;
  font-size: 12px;
  letter-spacing: 2px;
  color: #6D6D6D;
`
const GreyOption = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  color: #A7A7A7;
  margin: 0 auto
`
const Main = styled.main`
  background: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
`
const Ticket = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  background: #ffffff 
`
const Image = styled.img`
  height: 88px;
  weight: 106px;
  border-radius: 20px;
`
const Info = styled.div`
  width: 175px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center
`
const EventName = styled.h1`
  margin: 0;
  font-family: Lato;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 2px;
  color: #6D6D6D;
  text-transform: uppercase
`
const Date = styled.h2`
  margin-top: 5px;
  font-family: Lato;
  font-weight: 500;
  font-size: 12px; 
  letter-spacing: 2px;
  color: #6D6D6D;
`
const Location = styled(Date)`
`
const Button = styled.button`
  height: 30px;
  width: 78px;
  border-radius: 10px;
  background-color: #737677;
  border: 1px solid #737677;
  color: #ffffff;
  font-family: Lato;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px
`
const ButtonLink = styled(Link)`
  align-self: flex-end;
  margin: 10px 30px;
`
const Divider = styled.hr`
  border: 1px solid #D1D9DD;
  width: 80%;
  margin: 5px auto
`


export default function MyTickets({ allTickets, currentUser }) {


  // function formatDate(ticket) {
  //   console.log('-time->', ticket.start_time)
  //   const milliseconds = Date.parse(typeof ticket.start_time)
  //   const dateObj = new Date(milliseconds)
  //   const ticket_datetime = dateObj.toLocaleString("en-US").replace(',', '')
  //   return ticket_datetime
  // }

  const tickets = allTickets.map((t, id) => {
    if (t.id === currentUser.id) {
      return (
        <>
            <Ticket key={id}>
              <Image src={t.img_url} alt={t.event_name} />
              <Info>
                <EventName>{t.event_name}</EventName>
                <Date>{`${t.date} | ${t.start_time}`}</Date>
                <Location>{t.location}</Location>
              </Info>
            </Ticket>
            <ButtonLink to={`/ticket/${t.ticket_id}`}><Button>SELECT</Button></ButtonLink>
          <Divider />
        </>
      ) 
    }
  })

  return (
    <>
      <Header>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.0499 31.6667C22.801 31.6676 22.5549 31.6126 22.33 31.5059C22.105 31.3992 21.9068 31.2434 21.7499 31.0501L13.6999 21.0501C13.4548 20.7518 13.3208 20.3778 13.3208 19.9917C13.3208 19.6057 13.4548 19.2316 13.6999 18.9334L22.0333 8.93339C22.3162 8.59302 22.7227 8.37898 23.1634 8.33835C23.6041 8.29772 24.0429 8.43382 24.3833 8.71672C24.7236 8.99962 24.9377 9.40614 24.9783 9.84685C25.0189 10.2876 24.8828 10.7264 24.5999 11.0667L17.1499 20.0001L24.3499 28.9334C24.5538 29.178 24.6832 29.4759 24.723 29.7918C24.7628 30.1078 24.7113 30.4285 24.5745 30.716C24.4378 31.0036 24.2215 31.2459 23.9513 31.4144C23.6811 31.5829 23.3683 31.6704 23.0499 31.6667Z" fill="white" />
        </svg>
        Read our COVID-19 announcement here
      </Header>
      <HeaderTwo>
        <GreyBox>
          <WhiteOption>Active/Non-Active</WhiteOption>
          <GreyOption>All Tickets</GreyOption>
        </GreyBox>
      </HeaderTwo>
      <Main>
        {tickets}
      </Main>
    </>
  )
}

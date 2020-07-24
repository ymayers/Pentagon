# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

@user = User.create({
  first_name: 'Yolea',
  last_name: 'Mayers',
  age: 32,
  email: 'test@test.com',
  mobile_phone: '555555555',
  profile_imgURL: 'https://imgur.com/GIoOhdj.png', 
  id_imgURL: 'https://imgur.com/itwx0Ty.png',
  password: ENV["secure_password"]
})

Event.create([{
  event_name: 'Afropunk',
  img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjnL-DcV7xyNUHeZuLvBcdNuUkm1mSLL6q1g&usqp=CAU.png',
  capacity: 1000,
  ticket_cost: '$55',
  gateway: 'gate1, gate2',
  start_time: '08:00:00',
  end_time: '11:00:00',
  date: '2021-08-26'

},
{
  event_name: 'Coachella',
  img_url: 'https://imgur.com/TjdWMqI.png',
  capacity: 1000,
  ticket_cost: '$650',
  gateway: 'gate1, gate2, gate3, gate4, gate5',
  start_time: '06:00:00',
  end_time: '23:00:00',
  date: '2021-03-12'
}])

Ticket.create({
  code: 'jifafanfaffojiojewoewr4i989',
  time_slot: '05:30:00',
  event_id: 1,
  user_id: 1
})

CreditCard.create({
  full_name: 'Yolea Mayers',
  cc_number: '555333322221',
  expiration_date: '03/23',
  cvc: '445',
  user_id: 1
})


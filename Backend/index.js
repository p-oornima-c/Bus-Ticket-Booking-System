const express = require('express')
const app = express()
app.use(express.json())

const PORT =8080

const userRoute = require('./routes/user')
const scheduleRoute = require('./routes/schedule')
const bookingRoute = require('./routes/booking')
const paymentRoute = require('./routes/payment')
const adminRoute = require('./routes/admin')

app.use('/user',userRoute)
app.use('/schedules',scheduleRoute)
app.use('/bookings',bookingRoute)
app.use('/payments',paymentRoute)
app.use('/admin',adminRoute)


app.listen(PORT, ()=> {
    console.log(`Server running at port : ${PORT}.. `)
})
const express = require('express')
const app = express()
app.use(express.json())

const port =8080

app.get('/',(req,res)=> {
    res.send('Home Page')
})

let busData=[]
let nextId=1

//add buses
app.post('/addbus',(req,res) => {
    const {name}=req.body
    const newBus = {id:nextId++,name}
    busData.push(newBus)
    res.status(200).send(newBus)
})

//All buses
app.get('/buses',(req,res) => {
    res.status(200).send(busData)
})

// Retrieve bus with id
app.get('/buses/:id',(req,res) => {
    const bus = busData.find(b => b.id === parseInt(req.params.id))
    if(!bus){
        return res.status(404).send('Bus not found')
    }
    res.status(200).send(bus)
})


//update bus
app.put('/buses/:id',(req,res) => {
    const bus =busData.find(b => b.id === parseInt(req.params.id))
    if(!bus){
        return res.status(404).send('Bus not found')
    }
    const {name}=req.body
    bus.name =name
    res.status(200).send(bus)
})

//delete bus
app.delete('/buses/:id',(req,res) => {
    const index = busData.findIndex(b => b.id === parseInt(req.params.id))
    if (index === -1){
        return res.status(404).send('Bus not found')
    }
    busData.splice(index,1)
    return res.status(200).send(busData)
})



app.listen(port, ()=> {
    console.log(`Server running at port : ${port}.. `)
})
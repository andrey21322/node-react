const express = require('express')
const mongoose = require('mongoose')
const app = express()

const cnst = {
    "mongoose": "mongodb+srv://Andrey20:Andrey20@cluster0.z0lj3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    "port": 5000
}
app.use(express.json({ extended: true }))

app.use('/api/', require('./routes/add.routes'))
app.use('/api/', require('./routes/mailer'))

async function start() {
    try {
        await mongoose.connect(cnst.mongoose, {
            useNewUrlParser: true
        })
        app.listen(cnst.port, () => console.log(`App port: ${cnst.port}`))
    } catch(e) { 
        console.log('Server Error', e.message)
    }
}
start()
const express = require('express')
const cors = require('cors')
const productRouter = require('./routes/product')

const app = express()
app.use(express.json())

app.use(cors())

app.use('/product', productRouter)


app.listen(4000, '0.0.0.0', () => {
    console.log('Server Started At Port 4000')
})
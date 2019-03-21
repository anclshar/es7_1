const express = require('express')
const fs = require('fs')
const app = express()
const cart = require('./cartRouter')


app.use(express.json())
app.use('/', express.static('public'))
app.use('/api/cart', cart)

app.get('/api/products', (req, res) => {
    fs.readFile('server/db/products.json', 'utf-8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.sringify({result: 0, text: err}))
        } else {
            res.send(data)
        }
    })
})


const port = process.env.PORT || 5000
app.listen(port, () => console.log('Listen at port ${port}...'))
// app.get('/', (req, res) => {
//     res.send()
// })
// app.get('/api/cart/:id', (req, res) => {
//
// })


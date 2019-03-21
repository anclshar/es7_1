const express = require('express')
const fs = require('fs')
const router = express.Router()
const handler = require('./handler')

router.get('/', (req, res) => {
    fs.readFile('server/db/userCart.json', 'utf-8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.sringify({result: 0, text: err}))
        } else {
            res.send(data)
        }
    })
})
router.post('/', (req, res) => {
    handler(req, res, 'add', 'server/db/userCart.json')
    // fs.readFile('server/db/userCart.json', 'utf-8', (err, data) => {
    //     if(err){
    //         res.sendStatus(404, JSON.sringify({result: 0, text: err}))
    //     } else {
    //         let newCart = cart.add(JSON.parse(data), req)
    //         fs.writeFile('server/db/userCart.json', newCart, (err) => {
    //             if(err){
    //                 res.send('{"result": 0}')
    //             } else {
    //                 res.send('{"result": 1}')
    //             }
    //         })
    //     }
    // })
})
router.put('/:id', (req, res) => {
    handler(req, res, 'change', 'server/db/userCart.json')
})
router.delete('/:id', (req, res) => {
    handler(req, res, 'remove', 'server/db/userCart.json')
})

module.exports = router
const express = require('express')
const { pool } = require('../utils/db')
const result = require('../utils/result')

const router = express.Router()

router.post('/add', (req, res) => {
    const {name, category, price, quantity, serial_no} = req.body
    const sql = `INSERT INTO products (name, category, price, quantity, serial_no) VALUES(?, ?, ?, ?, ?)`

    pool.query(sql, [name, category, price, quantity, serial_no], (err, data) => {
        res.send(result.createResult(err,data))
    })
})

router.get('/all', (req, res) => {
    const sql = `SELECT * FROM products`
    pool.query(sql, (err, data) => {
        res.send(result.createResult(err, data))
    })
})

router.delete('/delete', (req, res) => {
    const id = req.body.id
    const sql = `DELETE from products WHERE id = ?`
    pool.query(sql, [id], (err, data) => {
        res.send(result.createResult(err, data))
    })
})

module.exports = router
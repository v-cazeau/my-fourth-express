import express from "express"
const PORT = 3050 
const app = express()

app.get('/', (req,res) => {
    res.send('This is an index. ')
});

app.get('/mike', (req, res) => {
    res.send ('Guess what day it is')
})

app.get('/what/day/is/it', (req, res) => {
    res.send ('🐫 Hump 🐫 DAYYY!! 🐫')
})

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}.`)
})
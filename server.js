const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

app.get("/veve",(req, res, next) => {
    res.json({message: 'Je suis John Momboko'})
    next()
})

app.use((req, res) => {
    res.json({message: 'Je suis une api'})
})

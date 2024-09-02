const express = require("express")
const cors = require("cors")
const fs = require("fs")
const path = require("path")
const https = require("https")

const getAllMonsters = require("./src/rotas/getAllMonsters.js")

const PORT = 3030

const app = express()

app.use(express.json())
app.use(cors())

const options = {
    key: fs.readFileSync(path.join(__dirname, 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'server.cert'))
  };

app.use("/getAllMonsters", getAllMonsters)

//{}

app.listen(PORT, () => {
    console.log(`Funcionando na rota ${PORT}`)
})

//https.createServer(options, app).listen(2020, () => {
//    console.log("Funcionando...")
//})
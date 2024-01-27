const express = require("express")

const app = express()

const path = require("path")
const router = express.Router()

router.get("/" , (req,res)=>{
res.sendFile(path.join(__dirname + "/Pages/home.html"))
})
router.get( "/contato" , (req,res)=>{
res.sendFile(path.join(__dirname + "/Pages/home.html"))
})

app.use(router)

app.listen(3333 , (req, res)=>{
console.log("Servidor Rodando!!!")
})
const express = require("express")

const cors  = require("cors")

const app  = express()
app.use(cors())
app.use(express.json())
// app.get("/data", (req, res)=>{
//     res.send([
//         {
//             name: 'hassan'
//         }
//     ])
// })

app.post("/post", (req, res)=>{
    res.send(req.body)
    console.log(req.body);
    
})

app.listen("200", ()=>{
    console.log('====================================');
    console.log('server is running');
    console.log('====================================');
})
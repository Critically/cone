import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import calculate from './components/Calculate.js'


const app = express();

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.post('/cone', (req, res) =>{
  //console.log(req.body.height)
  var result = calculate(req.body.height, req.body.radius, req.body.seg)
  res.status(200).json(result)
})


app.listen(3030, () => {
    console.log("Server started at 3030...");
});
const express = require('express')
const app = express()
const port = 5000
app.listen(port, () => {console.log(`app listening on port ${port}`)})
const router=require("./Routes/articlesRoutes")
app.use(express.json())
app.set('json spaces', 3); 

/*const Article = require('./dbfiles/article')
let art= new Article('COLGAM','Bracelet en or fantaisie', 'BIJOUXOR', 6, 3, 12, 20, 1, 150, 2, 300, 2,2, 5,'2006-02-21T18:10:00')
*/


var cors = require('cors')

app.use(cors()) 
app.use("/",router)




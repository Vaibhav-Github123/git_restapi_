const mongoose = require("mongoose")
const express = require("express")
const app = express()
const path = require("path")
app.use(express.json())

const DBURL = "mongodb+srv://vaibhav0809:vaibhav00@cluster0.5zl84hs.mongodb.net/restapi?retryWrites=true&w=majority"

mongoose.connect(DBURL).then(() => {
    console.log("DB conected..!!");
}).catch((error) => {
    console.log(error);
})


const userapp = require("../router/userapp")
app.use("/",userapp)

app.listen(8000, () => {
    console.log("server runing on port :" + 8000);
})
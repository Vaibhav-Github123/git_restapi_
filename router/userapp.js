const app = require("express").Router()
const User = require("../model/User")


app.post("/users",async (req, resp) => {
    try {
        const user = new User(req.body)
        const data = await user.save()
        resp.send(data)
    } catch (error) {
        console.log(error);
    }
})

app.get("/users", async(req, resp) => {
    try {
        const data = await User.find();
        resp.send(data)
    } catch (error) {
        console.log(error);
    }
})

app.get("/users/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const data = await User.findById(id)
        resp.send(data)
    } catch (error) {
        console.log(error);
    }
})

app.put("/users/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const data = await User.findByIdAndUpdate(id,req.body)
        resp.send(data)
    } catch (error) {
        console.log(error);
    }
})

app.delete("/users/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const data = await User.findByIdAndDelete(id)
        resp.send(data)
    } catch (error) {
        console.log(error);
    }
})

module.exports = app
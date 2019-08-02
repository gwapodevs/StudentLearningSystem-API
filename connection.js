const Mongoose = require("mongoose")

connection = Mongoose.connect("mongodb://localhost:27017/SLP", {
    useNewUrlParser: true
}, e => {
    e && console.log("Mongo error", e);
})

module.exports = connection
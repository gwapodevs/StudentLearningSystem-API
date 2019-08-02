const express = require("express")
const app = express()
const PORT = 8080;

require("./connection")

const subjectRoute = require("./routes/subjectRoute")
app.use("/subject", subjectRoute);

app.listen(PORT, () => {
    console.log(`server available at http://localhost:${PORT}`)
})
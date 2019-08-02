const express = require("express")
const router = express.Router();

//get all list of subjects
router.get("/all", (req, res) => {
    res.send({
        students: [{
            id: 1,
            name: "jeff",
            age: 21,
            section: "savanna"
        }, {
            id: 2,
            name: "jeff",
            age: 21,
            section: "savanna"
        }],
        length: 2
    })

})

//view specific subject
router.get("/:id", (req, res) => {
    res.status(200).send("get /:id");
})

//add a new subject
router.post("/", (req, res) => {
    res.status(200).send("post /");
})

module.exports = router;
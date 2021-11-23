const User = require("../models/User");


const router = require("express").Router();


//Post 
router.post("/", async (req, res) => {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }

});


//Post 
router.put("/", async (req, res) => {

    try {
        const user = req.body;
        const filter = { email: user.email };
        const options = { upsert: true };
        const updateDoc = { $set: user };
        const result = await User.updateOne(filter, updateDoc, options);
        res.json(result);

    } catch (err) {
        res.status(500).json(err);
    }

});




//UPDATE
router.put("/admin/:id", async (req, res) => {
    console.log(req.body.isAdmin)
    console.log(req.params.id)
    try {

        const filter = { _id: req.params.id };
        const updateDoc = { $set: { isAdmin: req.body.isAdmin } };
        const result = await User.updateOne(filter, updateDoc);
        res.json(result);

    } catch (err) {
        res.status(500).json(err);
    }
});



//GET ALL USER
router.get("/", async (req, res) => {
    try {
        let users;
        users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});


//GET ALL USER
router.get("/admin/:email", async (req, res) => {
    const email = req.params.email;
    try {
        const user = await User.findOne({
            email: req.params.email
        });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
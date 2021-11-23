const Register = require("../models/Register");


const router = require("express").Router();

//Post 
router.post("/", async (req, res) => {
    const newRegistrater = new Register(req.body);
    try {
        const savedRegistration = await newRegistrater.save();
        res.status(200).json(savedRegistration);
    } catch (err) {
        res.status(500).json(err);
    }

});

//GET ALL USER
router.get("/", async (req, res) => {
    try {
        let registration;
        registration = await Register.find();
        res.status(200).json(registration);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
const Registration = require("../models/Registration");


const router = require("express").Router();

//Post 
router.post("/", async (req, res) => {
    const newRegistration = new Registration(req.body);
    try {
        const savedRegistration = await newRegistration.save();
        res.status(200).json(savedRegistration);
    } catch (err) {
        res.status(500).json(err);
    }

});

//GET ALL USER
router.get("/", async (req, res) => {
    try {
        let registration;
        registration = await Registration.find();
        res.status(200).json(registration);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
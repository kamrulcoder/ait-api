const router = require("express").Router();

const Contact = require("../models/Contacts")

router.post("/", async (req, res) => {
    const newContact = new Contact(req.body);

    try {
        const savedContact = await newContact.save();
        res.status(200).json(savedContact);
    } catch (err) {
        res.status(500).json(err);
    }
});

// All Contacts 
router.get("/", async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router

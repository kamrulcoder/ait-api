const { Schema, model } = require("mongoose");

const ContactSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: Number, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = model("Contact", ContactSchema);
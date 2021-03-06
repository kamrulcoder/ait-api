const { Schema, model } = require("mongoose");

const RegisterSchema = new Schema(
    {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        course: { type: String, required: true },
        address: { type: String, required: true }
    },
    { timestamps: true }
);

module.exports = model("Register", RegisterSchema);
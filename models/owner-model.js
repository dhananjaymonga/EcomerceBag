const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: [3, "Name must be at least 3 characters"],
        maxlength: [50, "Name cannot exceed 50 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Invalid email format"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters"]
    },
    // products: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Product"
    //     }
    // ],
    // gstin: {
    //     type: String,
    //     required: [true, "GSTIN is required"],
    //     unique: true,
    //     match: [/^([0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9]{1}[Z]{1}[0-9]{1})$/, "Invalid GSTIN format"]
    // },
    // picture: {
    //     type: String, // Assuming picture is stored as a URL or file path
    //     required: [true, "Profile picture is required"]
    // }
}, { timestamps: true });

const Owner = mongoose.model("Owner", ownerSchema);
module.exports = Owner;

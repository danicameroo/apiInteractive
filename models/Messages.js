const mongoose = require("mongoose")

const messagesSchema = new mongoose.Schema(
    {
        username:{type: String , required:true },
        text:{type: String , required:true },
        replyTo:{type: String},
        reply: {type:Boolean, required:true, default: false},
    },
    {timestamps: true }
);

module.exports = mongoose.model("Messages", messagesSchema);
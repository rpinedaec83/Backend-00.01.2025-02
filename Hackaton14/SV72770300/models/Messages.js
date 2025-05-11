import { Schema, model } from "mongoose";

const MessageSchema = new Schema(
    {
    user: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
}

)

export const Message = model("Message", MessageSchema);
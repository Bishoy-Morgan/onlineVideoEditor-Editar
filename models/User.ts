import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
    {
        name: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { timestamps: true, collection: "auth" }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;

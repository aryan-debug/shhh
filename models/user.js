import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "member", "admin"] }
})

const Users = model.Users || model("Users", UserSchema, "Users");
export default Users
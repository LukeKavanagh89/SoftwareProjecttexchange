import { use } from "bcrypt/promises";
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    //Objects
    name: {type: String, required: true},
    email:{type: String, required: true },
    password: {type: String, required: true},
    id:{ type: String }

})
export default mongoose.model("Users", userSchema);
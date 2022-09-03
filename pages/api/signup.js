import nextConnect from "next-connect";
import { connectToDatabase } from "../../util/mongodb";
import Users from "../../models/user"
import bcrypt from "bcrypt";

const handler = nextConnect()

handler.post(async (req, res, next) => {
    await connectToDatabase()
    const user = await Users.find({ name: req.body.name })
    console.log(user)
    if (user.length) {
        return res.status(400).send(JSON.stringify({ errors: { username: "Username already taken" } }))
    }
    if (req.body.password !== req.body.confirmPassword) {
        return res.status(400).send(JSON.stringify({ errors: { password: "Passwords do not match" } }))
    }
    const hashed_password = await bcrypt.hash(req.body.password, 10)
    const new_user = new Users(
        {
            name: req.body.name,
            password: hashed_password,
            role: "user"
        }
    )
    new_user.save((err) => {
        if (err) {
            console.log(err)
        }
    })
})

export default handler
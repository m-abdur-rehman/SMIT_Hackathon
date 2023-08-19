import { NextResponse } from "next/server"
import { addUser, getUser } from "@/lib/data"



export async function POST(req) {
    console.log('POST')
    const { email, password } = await req.json();
    try {
        const users = getUser()
        const possibleUser = users.find((user) => user.email == email)
        // console.log("pos", possibleUser)
        if (possibleUser) {
            if (possibleUser.password == password) {
                const user = {
                    name: possibleUser.name,
                    email: possibleUser.email
                }

                // console.log("email")
                return NextResponse.json({ message: "OK", user }, { status: 200 })
            } else {
                return NextResponse.json(
                    { message: "Wrong Password" },
                    { status: 405 })
            }
        } else {
            return NextResponse.json(
                { message: "User Not Found" },
                { status: 401 })
        }
        console.log("++_+_+_+", users)
        return NextResponse.json({ message: "OK", users }, { status: 200 })
    } catch (err) {
        console.log(err)
        return NextResponse.json(
            { message: "Error" },
            { status: 500 })
    }
}

// export async function POST(req, res) {
//     const { first_name, last_name, email, password } = await req.json();
//     try {
//         const newUser = {
//             name: first_name + last_name,
//             email: email,
//             password: password
//         }
//         addUser(newUser)
//         return NextResponse.json({ message: "OK", newUser }, { status: 201 })
//     } catch (err) {

//         return NextResponse.json(
//             { message: "Error" },
//             { status: 500 })
//     }
// }

// export async func
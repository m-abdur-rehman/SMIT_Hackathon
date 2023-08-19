import { NextResponse } from "next/server"
import { addUser, getUser } from "@/lib/data"



export async function GET(req) {
    console.log('Get')
    try {
        const users = getUser()
        console.log("++_+_+_+", users)
        return NextResponse.json({ message: "OK", users }, { status: 200 })
    } catch (err) {

        return NextResponse.json(
            { message: "Error" },
            { status: 500 })
    }
}

export async function POST(req, res) {
    const { first_name, last_name, email, password } = await req.json();
    try {
        const newUser = {
            name: first_name + last_name,
            email: email,
            password: password
        }
        addUser(newUser)
        return NextResponse.json({ message: "OK", newUser }, { status: 201 })
    } catch (err) {

        return NextResponse.json(
            { message: "Error" },
            { status: 500 })
    }
}

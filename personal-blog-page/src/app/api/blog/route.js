import { NextResponse } from "next/server"
import { addBlogs, getBlogs } from "@/lib/data"
// import path from 'path';
// import { promises as fs } from 'fs';


// export default async function handler(req, res) {
//     //Find the absolute path of the json directory
//     // const jsonDirectory = path.join(process.cwd(), 'json');
//     // //Read the json data file data.json
//     // const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
//     // //Return the content of the data file in json format
//     res.status(200).json({
//         "title": "No"
//     });
// }

export async function GET(req) {
    console.log('Get')
    try {
        const blogs = getBlogs()
        return NextResponse.json({ message: "OK", blogs }, { status: 200 })
    } catch (err) {

        return NextResponse.json(
            { message: "Error" },
            { status: 500 })
    }
}

export async function POST(req, res) {
    const { title, content, author } = await req.json();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date
    // August 16th,2023
    const todayDate = months[date.getMonth()] + ' ' + date.getDate() + "," + date.getFullYear();
    console.log(todayDate)
    try {
        const newBlog = {
            title,
            author,
            datePublished: todayDate,
            content,
        }
        addBlogs(newBlog)
        return NextResponse.json({ message: "OK", newBlog }, { status: 201 })
    } catch (err) {

        return NextResponse.json(
            { message: "Error" },
            { status: 500 })
    }
}

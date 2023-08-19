"use client"
import Link from "next/link";
import React from "react";
const Dashboard = () => {

    const [blogs, setBlogs] = React.useState()
    const [user, setUser] = React.useState()

    React.useEffect(() => {
        async function fetchBlogs(u) {
            const response = await fetch('api/blog', {
                method: 'GET',
            });
            const data = await response.json();
            console.log("--------", data)
            console.log("user", u)
            const myBlogs = data.blogs.filter(each => each.author == u.name)
            setBlogs(myBlogs);

        }
        try {
            const ur = JSON.parse(window.sessionStorage.getItem('user'))
            // console.log("ur", ur)
            if (ur) {
                const u = JSON.parse(window.sessionStorage.getItem('user'))
                console.log(u)
                setUser(u)
                fetchBlogs(u);
            } else {
                setBlogs("LOGIN FIRST")
            }
        } catch (err) {
            console.log("ERR", err)
            setBlogs("LOGIN FIRST")
        }
    }, []);
    // console.log("blog", blogs)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = e.target.children[0].children[0].value
        const content = e.target.children[1].children[0].value

        const res = await fetch('api/blog', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                title,
                content,
                author: user.name
            }),
        })
        // const reply
        // console.log("reply", res)
        console.log("SUBMITTED")
        window.location = '/dashboard'
    }
    return (
        <div>
            {console.log("blog", blogs)}

            <div className="fw-bold container-fluid px-5 py-2 fs-1 bg-white" style={{
                boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.12)',
            }}>
                Dashboard
            </div>

            <div className="container mx-auto d-flex justify-content-center align-items-center pt-5 pb-4">
                <div className=" p-5" style={{
                    boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.12)',
                    width: '50%'
                }}>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="title" placeholder="Title" required />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" placeholder="What is in your mind?" id="floatingTextarea" required></textarea>
                        </div>
                        <div>
                            <button type="submit" style={{ backgroundColor: "#7749F8", color: 'white' }} className="btn">Publish</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="px-5">
                <h3 className="fw-bold pb-4">My Blogs</h3>

                {blogs ?
                    blogs == "LOGIN FIRST" ?
                        <div className='container-fluid text-center fw-bold fs-1'>
                            "NO BLOGS YET!"
                        </div> :
                        blogs.map((blog) => {
                            return (
                                <div key={user.id} className="d-flex flex-column w-full mx-4 p-3 mb-4" style={{
                                    boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.12)',
                                }}>

                                    <div className="d-flex gap-4 pb-4">
                                        <div>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUu84l-WpxNczynHveR6R-CBOA0mwyFnvEQQRujsPk3rYbiaz26GgXYIrE9s4LT4FyY2I&usqp=CAU" alt="" width="80px" height="80px" />
                                        </div>

                                        <div className="d-flex flex-column" >
                                            <h4>{blog.title}</h4>
                                            <h6>{blog.author} - {blog.datePublished}</h6>
                                        </div>

                                    </div>

                                    <div className="d-flex text-justify pb-4">
                                        {blog.content}
                                    </div>

                                    {/* <div className="d-flex gap-4" style={{ color: "purple" }}>
                                        <Link
                                            href={'/blog/user'}
                                        >
                                            <p>View all from User</p>
                                        </Link>
                                    </div> */}

                                </div>
                            )
                        })
                    :
                    <div className='container-fluid text-center fw-bold fs-1'>
                        "NO BLOGS YET!"
                    </div>
                }





            </div>




        </div>
    )
}

export default Dashboard;
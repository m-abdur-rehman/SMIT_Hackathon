'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'




export default function Home() {
  const [blogs, setBlogs] = React.useState(null);
  React.useEffect(() => {
    async function fetchBlogs() {
      const response = await fetch('api/blog', {
        method: 'GET',
      });
      const data = await response.json();
      console.log("--------", data)
      setBlogs(data.blogs);

    }
    fetchBlogs();
  }, []);

  console.log(blogs)

  return (
    <div>
      <div className="fw-bold container-fluid px-5 py-2 fs-1 bg-white mb-5" style={{
        boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.12)',
      }}>
        Good Morning Readers!
      </div>

      {/* Each Post */}
      {
        blogs !== null ?
          blogs.map((blog) => {
            return (
              <div className="d-flex flex-column w-full mx-4 p-3 mb-4" style={{
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

                <div className="d-flex gap-4" style={{ color: "purple" }}>
                  <Link
                    href={'/blog/user'}
                  >
                    <p>View all from User</p>
                  </Link>
                </div>

              </div>
            )
          }) :
          <div className='container-fluid text-center fw-bold fs-1'>
            "NO BLOGS YET!"
          </div>
      }

    </div>
  )
}




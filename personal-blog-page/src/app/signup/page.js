"use client"
import React from "react";

const SignUp = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.children[0].children[0].value)
        console.log(e.target.children[1].children[0].value)
        const password = e.target.children[3].children[0].value
        const confirm_password = e.target.children[4].children[0].value
        if (password !== confirm_password) {
            alert("Passwords Should Match!")
            return
        }
        const data = {
            first_name: e.target.children[0].children[0].value,
            last_name: e.target.children[1].children[0].value,
            email: e.target.children[2].children[0].value,
            password: e.target.children[3].children[0].value,
        }

        fetch('api/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data),
        })

        window.location = '/'
    }

    return (
        <div>

            <div className="fw-bold container-fluid px-5 py-2 fs-1 bg-white" style={{
                boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.12)',
            }}>
                Signup
            </div>

            <div className="container mx-auto d-flex justify-content-center align-items-center pt-5 pb-4">
                <div className=" p-5" style={{
                    boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.12)'
                }}>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="firstname" name="firstname" placeholder="First Name" required />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="lastname" name="lastname" placeholder="Last Name" required />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="email" name="email" placeholder="Email" required />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="password" name="password" placeholder="Password" required />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="repeatpassword" name="repeatpassword" placeholder="Repeat Password" required />
                        </div>
                        <div className="text-center"  >
                            <button type="submit" style={{ backgroundColor: "#7749F8", color: 'white' }} className="btn">SignUp</button>
                        </div>
                    </form>
                </div>
            </div>




        </div>
    )
}

export default SignUp;
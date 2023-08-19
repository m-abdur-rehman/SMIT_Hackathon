"use client"
const LogIn = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(e.target.children[0].children[0].value)
        // console.log(e.target.children[1].children[0].value)
        const data = {
            email: e.target.children[0].children[0].value,
            password: e.target.children[1].children[0].value,
        }
        console.log("reply.FF")
        const res = await fetch('api/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data),
        })
        const reply = await res.json()
        // console.log("reply.user?")
        console.log(reply.user)
        window.sessionStorage.setItem('user', JSON.stringify(reply.user))
        window.location = '/dashboard'
    }

    return (
        <div>

            <div className="fw-bold container-fluid px-5 py-2 fs-1 bg-white" style={{
                boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.12)',
            }}>
                Login
            </div>

            <div className="container mx-auto d-flex justify-content-center align-items-center pt-5 pb-4">
                <div className=" p-5" style={{
                    boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.12)'
                }}>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="email" name="email" placeholder="Email" required />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="password" name="password" placeholder="Password" required />
                        </div>
                        <div className="text-center"  >
                            <button type="submit" style={{ backgroundColor: "#7749F8", color: 'white' }} className="btn">Login</button>
                        </div>
                    </form>
                </div>
            </div>




        </div>
    )
}

export default LogIn;
"use client"
import Link from "next/link";
import React from "react";
const NavItem = () => {
    const [user, setUser] = React.useState()

    const logOut = () => {
        window.sessionStorage.setItem('user', null)
        window.location = '/'
    }

    const getUser = () => {
        try {
            const ur = JSON.parse(window.sessionStorage.getItem('user'))
            if (ur) {
                const u = JSON.parse(window.sessionStorage.getItem('user'))
                console.log(u)
                setUser(u)
            }
        } catch (err) {
            return 'NONE'
        }
    }

    React.useEffect(() => {
        getUser()
    }, [])
    return (
        <div
            className="container-fluid d-flex justify-content-between px-5 py-2 text-white"
            style={{
                background: "#7749F8",
            }}
        >
            <Link
                href={'/'}
                className="text-decoration-none"
                style={{
                    color: 'inherit'
                }}
            >
                <div
                    className="font-bold"
                >Personal Blogging App</div>
            </Link>

            {user ?
                <div className="d-flex gap-5">
                    <Link
                        href={'/profile'}
                        className="text-decoration-none"
                        style={{
                            color: 'inherit'
                        }}
                    >
                        <div
                            style={{
                                cursor: "pointer",
                            }}
                            className=""
                        >{user.name}</div>
                    </Link>


                    <div
                        onClick={logOut}
                        style={{
                            cursor: "pointer",
                        }}
                    >LogOut</div>

                </div> :
                <div className="d-flex gap-5">
                    <Link
                        href={'/login'}
                        className="text-decoration-none"
                        style={{
                            color: 'inherit'
                        }}
                    >
                        <div
                            style={{
                                cursor: "pointer",
                            }}
                            className=""
                        >Login</div>
                    </Link>

                    <Link
                        href={'/signup'}
                        className="text-decoration-none"
                        style={{
                            color: 'inherit'
                        }}
                    >
                        <div
                            style={{
                                cursor: "pointer",
                            }}
                        >SignUp</div>

                    </Link>

                </div>
            }


        </div>
    );
};

export default NavItem;
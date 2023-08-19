"use client"
import './profile.css'

const Profile = () => {


    return (
        <div>

            <div className="fw-bold container-fluid px-5 py-2 fs-1 bg-white" style={{
                boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.12)',
            }}>
                Profile
            </div>


            <div className="d-flex flex-column w-50 mx-5 p-3 mt-5  mb-5" style={{
                boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.12)',
            }}>

                <div className="pb-3">
                    <img
                        className="img-fluid profile-pic"
                        src="https://yt3.googleusercontent.com/hbOZ-XJ4n2Q0KqdBZmCFJlP0MZnuIB8UQ2oQ09j-ddEVM7fg2_HCNp2p01RZ1NanIkJf05DqRA=s900-c-k-c0x00ffffff-no-rj"
                        alt=""
                        // width="250px" 
                        // height="250px" 
                        style={{
                            borderRadius: '15%',
                        }} />
                </div>

                <div>
                    <h4 className="pb-3">Abdur Rehman</h4>
                    <h4>Password</h4>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="exampleInputpassword1" placeholder="Old Password" />
                    </div>

                    <div className="mb-3">
                        <input type="password" className="form-control" id="exampleInputnewpassword1" placeholder="New Password" />
                    </div>

                    <div className="mb-3">
                        <input type="password" className="form-control" id="exampleInputrepeatpassword1" placeholder="Repeat Password" />
                    </div>

                    <div>
                        <button type="submit" style={{ backgroundColor: "#7749F8", color: 'white' }} className="btn">Update password</button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Profile;
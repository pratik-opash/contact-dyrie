import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [data, setData] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get("http://localhost:3000/contacts").then((res) => {
            return res.data;
        }).then((resp) => {
            const searchByName = resp.find(p => p.email === email)
            console.log(searchByName);
            setData(searchByName);

            if (!!searchByName) {
                localStorage.setItem("user", JSON.stringify(searchByName))
                navigate("/")
            }
            else {
                alert("Please Enter Valid Email")
            }
        })
    }
    return (
        <div className="container">
            <div className='w-50 mx-auto shadow p-5' style={{ marginTop: "30px" }}>
                <h2 className='text-center mb-4'>Login User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control from-control-lg mt-4' placeholder='Enter Your Name' required />
                    </div>

                    <button className='btn btn-primary btn-block mt-4'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login
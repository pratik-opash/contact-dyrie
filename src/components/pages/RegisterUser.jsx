import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import { Col, Row, Toast } from "react-bootstrap";
function RegisterUser() {
    const [show, setShow] = useState(false);
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();


    const IsValidate = () => {
        let isProcced = true;
        let errorMessage = "Please Enter The Value In"
        if (username == null || username == "") {
            isProcced = false;
            errorMessage += "Name"
        }
        if (!isProcced) {
            setShow(true)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = { username, email, phone }
        if (IsValidate) {
            fetch("http://localhost:3000/contacts", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data)
            }).then((res) => {
                setShow(true);
            }).catch((err) => {
                alert("Failed : ");
            })
            setUserName("");
            setEmail("");
            setPhone("");
        }
    }
    return (
        <div className="container">
            <div className="errorMessage" style={{ marginLeft: "60%", position: "fixed", width: "100%", marginTop: "2%" }}>
                <Row >
                    <Col xs={6}>

                        <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
                            <Toast.Header>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                />
                                <strong className="me-auto">Thank You</strong>
                                <small>Just Now</small>
                            </Toast.Header>
                            <Toast.Body>User RegisterUser SuccessFully❤️!</Toast.Body>
                        </Toast>
                    </Col>

                </Row>
            </div>
            <div className='w-50 mx-auto shadow p-5' style={{ marginTop: "30px" }}>
                <h2 className='text-center mb-4'>RegisterUser User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} className='form-control from-control-lg mt-4' placeholder='Enter Your Name' name='name' required />
                    </div>
                    <div className="form-group">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control from-control-lg  mt-4' placeholder='Enter Your Email' name='email' required />
                    </div>
                    <div className="form-group">
                        <input type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className='form-control from-control-lg  mt-4' placeholder='Enter Your phone' name='username' required />
                    </div>
                    <div className="button">
                        <button className='btn btn-primary btn-block mt-4'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterUser
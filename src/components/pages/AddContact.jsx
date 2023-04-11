import React, { useState } from 'react'

function AddContext() {
    const [contactName, setName] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [ocation, setOcation] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
        let staticData = { contactName, address, number, ocation }
        console.log("data", staticData);


    }
    return (
        <div className='w-50 mx-auto shadow p-5' style={{ marginTop: "30px" }}>
            <h2 className='text-center mb-4'>Add Contact</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className='form-control from-control-lg mt-4' placeholder='Enter Your Name' name='name' required value={contactName} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <textarea value={address} onChange={(e) => setAddress(e.target.value)} className='form-control from-control-lg  mt-4' placeholder='Address' required></textarea>
                </div>
                <div className="form-group">
                    <input type="tel" value={number} onChange={(e) => setNumber(e.target.value)} pattern="^[0-9]+[0-9]*$" className='form-control from-control-lg mt-4' placeholder='Enter Your Mobile No:' name='phone' />
                </div>
                <div className="form-group ">
                    <select value={ocation} onChange={(e) => setOcation(e.target.value)} className='form-control from-control-lg mt-4' required>
                        <option value="">Select</option>
                        <option value="friends">friends</option>
                        <option value="family">family</option>
                        <option value="school">school</option>
                        <option value="teachers">teachers</option>
                        <option value="college">college</option>
                        <option value="colleagues">colleagues</option>
                        <option value="bros">bros</option>
                    </select>
                </div>
                <div className="button">
                    <button className='btn btn-primary btn-block mt-4'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddContext
import React, { useEffect, useState } from 'react'
import "./Home.css"
import { useLocation, useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/addContact")
    }
    return (
        <>
            <div className="container">

                <div class="row my-3 ">
                    <div class="col-lg-12">
                        <div class="panel panel-default">
                            <div class="panel-body p-t-0">
                                <div class="input-group">
                                    <input type="text" id="example-input1-group2" name="example-input1-group2" class="form-control" placeholder="Search" />
                                    <span class="input-group-btn">
                                        <button type="button" class="btn btn-md btn-info btn-outline-light btn-lg"><i class="fa fa-search"></i></button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='btn btn-md btn-info btn-outline-light btn-lg' onClick={handleClick}>Add Contact</button>
                <br />
                <br />
                <div className="row">
                    <div className="col-sm-6 col-md-6  mb-3">
                        <div className="card">
                            <div className="card-body">
                                {/* Profile picture and short information */}
                                <div className="d-flex align-items-center position-relative pb-3">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="img-md rounded-circle"
                                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                            alt="Profile Picture"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <a href="#" className="h5 stretched-link btn-link">
                                            9016150454
                                        </a>
                                        <p className="text-muted m-0">Pratik</p>
                                    </div>
                                </div>
                                <p>47 Khodiyar Nagar</p>
                                {/* END : Profile picture and short information */}
                                {/* Options buttons */}
                                <div className="mt-3 pt-2 text-center border-top">
                                    <div className="d-flex justify-content-center gap-3">
                                        <a
                                            href="#"
                                            className="btn btn-sm btn-info btn-outline-light btn-lg"
                                        >
                                            <i className="fa fa-eye" aria-hidden="true" /> View
                                        </a>
                                        <a
                                            href="#"
                                            className="btn btn-sm btn-info btn-outline-light btn-lg"
                                        >
                                            <i className="fa fa-trash" aria-hidden="true" /> Delete
                                        </a>
                                        <a
                                            href="#"
                                            className="btn btn-sm btn-info btn-outline-light btn-lg"
                                        >
                                            <i className="fa fa-pencil" aria-hidden="true" />
                                            Edit
                                        </a>
                                    </div>
                                </div>
                                {/* END : Options buttons */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home
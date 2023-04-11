import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'bootstrap'
function Navbar() {
    const navigate = useNavigate();

    // const logoutHandler = () => {
    //     localStorage.clear();
    //     navigate("/loginUser")
    // }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="container">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={100}
                    height={50}
                    viewBox="0 0 470 468"
                    id="contacts"
                >
                    <defs>
                        <filter
                            id="a"
                            width="111.8%"
                            height="111.9%"
                            x="-5.9%"
                            y="-3.9%"
                            filterUnits="objectBoundingBox"
                        >
                            <feOffset dy={5} in="SourceAlpha" result="shadowOffsetOuter1" />
                            <feGaussianBlur
                                in="shadowOffsetOuter1"
                                result="shadowBlurOuter1"
                                stdDeviation={4}
                            />
                            <feColorMatrix
                                in="shadowBlurOuter1"
                                result="shadowMatrixOuter1"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.078125 0"
                            />
                            <feOffset dy={4} in="SourceAlpha" result="shadowOffsetOuter2" />
                            <feGaussianBlur
                                in="shadowOffsetOuter2"
                                result="shadowBlurOuter2"
                                stdDeviation="5.5"
                            />
                            <feColorMatrix
                                in="shadowBlurOuter2"
                                result="shadowMatrixOuter2"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.210824275 0"
                            />

                        </filter>
                        <path
                            id="b"
                            d="M9.635 132.808C24.782 59.782 71.388 19.109 144.085 6.822c53.74-9.081 107.5-9.196 161.15.255 74.852 13.185 119.85 56.23 134.185 130.36 11.075 57.29 11.249 115.191-.174 172.427-15.324 72.52-63.132 117.285-135.561 129.527-53.74 9.08-107.5 9.195-161.15-.255-74.852-13.186-120.05-58.38-134.384-132.509-11.64-57.668-10.52-115.935 1.484-173.82z"
                        />
                    </defs>
                    <g fill="none" fillRule="evenodd" transform="translate(-21 -26)">
                        <g transform="translate(32 33)">
                            <use fill="#000" filter="url(#a)" xlinkHref="#b" />
                            <use fill="#FF9D17" xlinkHref="#b" />
                        </g>
                        <path
                            fill="#FFF"
                            d="M289.94 251.093c-10.53 29.402-35.278 50.048-64.134 50.048-8.985 0-17.572-2.002-25.455-5.647-17 29.148-48.589 48.744-84.765 48.744-4.61 0-9.145-.327-13.586-.942v-18.974a79.717 79.717 0 0 0 13.586 1.183c29.597 0 55.396-16.212 69.036-40.233-9.975-8.627-17.922-20.302-22.835-33.863-16.755-2.115-29.802-23.024-29.802-43.268 0-11.938 5.19-14.372 12.348-21.57-1.25-5.682-2.578-15.58-2.578-21.636 0-80.294 89.246-93.424 92.912-92.921V91.84c-3.552-.598-76.23 8.3-76.23 76.388 0 4.842.541 24.554 1.541 29.096-6.909 2.857-12.353-.704-12.353 8.838 0 16.183 11.982 30.288 25.375 31.979 8.468 23.368 29.64 46.966 52.623 46.966 23.067 0 44.294-24.463 52.711-47.966 12.64-2.481 23.833-15.425 23.833-30.98 0-10.574-6.167-9.354-14.283-10.604.764-3.994 1.178-23.112 1.178-27.33 0-24.063-13.022-45.072-32.395-56.404v-21.54c28.571 12.73 48.5 41.355 48.5 74.652 0 5.276-1.545 13.876-2.5 18.872 8.537 7.11 15.14 8.77 15.14 22 0 19.458-12.055 42.182-27.868 45.286zm42.174 74.412c4.635 0 9.169-.42 13.586-1.183v18.974c-4.44.615-8.975.94-13.586.94-27.516 0-52.373-11.34-70.185-29.59.272-.275 10.127-8.127 14.121-12.38 14.356 14.348 34.164 23.239 56.064 23.239z"
                            transform="translate(32 33)"
                        />
                    </g>
                </svg>
                <a className="navbar-brand" href="#" style={{ fontFamily: "sans-serif" }}>
                    <b>Contact Manager</b>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" href="#">
                                Home
                            </Link>
                        </li>
                    </ul>
                    <div className='navbar' style={{ display: 'flex', position: 'absolute', right: "100px" }}>
                        <Link to="/registerUser" className='btn btn-outline-dark w-20'>Register</Link>&nbsp;&nbsp;
                        <Link to="/loginUser" className='btn btn-outline-dark w-20'>Login</Link>&nbsp;&nbsp;
                        <button className='btn btn-outline-dark w-20 ml-2'
                        // onClick={logoutHandler}
                        >Logout</button>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
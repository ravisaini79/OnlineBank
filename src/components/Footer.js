import React from 'react'

export default function Footer() {
    return (
        <>

            <div className='bg-dark pt-5 pt-lg-0'>
                <div className='container text-white '>
                    <div className='row align-items-center'>
                        <div className="logo-1 col-lg-3 p-3 d-flex justify-content-center">
                            <img src="/img/logo.png" alt="" />
                        </div>

                        <div className='d-flex col-lg-3 p-3 justify-content-center'>
                            <img className='icons-1' src="/img/icons8-call-male-24.png" alt="" />
                            <p ><a href="tel:+919549968886  " className='text-white'>+91 9549968886 </a></p>
                        </div>

                        <div className='mail d-flex col-lg-3 p-3 justify-content-center'>
                            <img src="/img/icons8-mail-64.png" alt="" />
                            <a className='mt-1 mb-0' href="mailto:support@onlinebank.in">support@onlinebank.in</a>
                        </div>


                        <div className="icons col-lg-3 p-3 d-flex justify-content-center">
                            <a href="/">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fab fa-facebook-f"></span>
                                </div>
                                <div className="text">
                                    Facebook
                                </div>
                            </a>
                            <a href="/">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fab fa-twitter"></span>
                                </div>
                                <div className="text">
                                    Twitter
                                </div>
                            </a>
                            <a href="/">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fab fa-instagram"></span>
                                </div>
                                <div className="text">
                                    Instagram
                                </div>
                            </a>

                            <a href="/">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fab fa-youtube"></span>
                                </div>
                                <div className="text">
                                    YouTube
                                </div>
                            </a>
                        </div>

                    </div>

                </div>
            </div>


            <div className='rights'>
                <div className='text-center'>
                    <p className='mb-0'>@ All Rights Reserved by online bank 2023</p>
                </div>
            </div>


        </>
    )
}

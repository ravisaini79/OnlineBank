import { useEffect, useState } from 'react'
import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { getCategories } from '../apiCall.js/getCategories'
import NavBar from './NavBar'


export default function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        getCategories().then(e => setData(e))
    }, [])

    return (
        <>
            <NavBar />

            <div className='doc_bg'>

                <div className='container'>
                    <div className=" d-flex justify-content-evenly row px-3 py-3 ">
                        <div className=" row mt-5 col-md-9 align-items-center justify-content-between">
                            <div className='score-card mt-5  col-md-6'>

                                <h4>Credit card doctor</h4>
                                <p>Arrange a call from credit card doctor</p>

                                <div className=" buttnn   mt-4">
                                    <Link to="/form">
                                        <button className='btn btn-dark bttn rounded-0 '>  Apply now</button>
                                    </Link>
                                </div>


                            </div>
                            <div className='mt-0 col-md-6' >
                                <img className='w-100 my-5 shadow-lg' style={{ borderRadius: "20px" }} src="https://www.laurelroad.com/wp-content/uploads/2021/03/LR4D-Doctor-Female-holding-card.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>



            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 ">

                        <div className='text-center mt-5'>
                            <h4> <b> All Category </b></h4><hr />
                            {/* <p className='cat-text w-75 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eligendi consectetur quam velit, laudantium sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                        </div>

                        <div className='mt-5 container'>
                            <div className='row '>

                                {data.map((item, i) =>
                                    <Link key={i} to="/card" state={item.id} className='col-md-4 my-2'  >
                                        <div className='d-flex justify-content-center rounded_c bg-white p-2 border_bg shadow' >
                                            <div className='d-flex flex-column justify-content-center align-items-center p-4'>
                                                <img className='card-5-img' src="img/icon_1.png" alt="" style={{ height: "40px", width: "40px" }} />
                                                <p>{item.name}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )}

                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <div className='page1 '>

                <div className='mt-5 container px-4 py-5'>
                    <div className='row'>
                        <div className="col-md-9 container">
                            <div className="row">

                                <div className='card3 col-md-6 d-flex align-items-center'>
                                    <img className='w-75 mt-4' src="/img/card-slider-gold.png" alt="" />
                                </div>
                                <div className='col-md-6 d-flex align-items-center'>
                                    <div className='title_'><h5 className='title1'>Why OnlineBanks.in</h5>

                                        {/* <p className='para-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dolorum nam sit facilis placeat, </p> */}

                                        <div className='row mt-3'>
                                            <div className='p-2 col-md-6 '>
                                                <div className='p-3  clr-1 shadow rounded-3'>
                                                    <h4 className='bank-text'>Paperless Process</h4>
                                                </div>
                                            </div>
                                            <div className='p-2 col-md-6 '>
                                                <div className='p-3  clr-1 shadow rounded-3'>
                                                    <h4 className='bank-text'>100% Contactless kyc </h4>
                                                </div>
                                            </div>
                                            <div className='p-2 col-md-12 '>
                                                <div className='p-3  clr-1 shadow rounded-3'>
                                                    <h4 className='bank-text'>All financial services on single plateform</h4>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>


            <div className='   cont-1'>

                <div className='container'>
                    <div className='row  py-3 px-3 justify-content-evenly'>
                        <div className='col-md-9 row  '>
                            <div className='col-md-4  d-flex align-items-center justify-content-center justify-content-md-start'>

                                <div className=' '>
                                    <p className='m-0'>Holders Support</p>
                                    <h5 className=' mb-0 text-white'>Need a Cnsulation ?</h5>
                                </div>

                            </div>
                            <div className='col-md-4 d-flex justify-content-center '>

                                <div className=''>
                                    <img height="35px" src="/img/icons8-ringer-volume-50.png" alt="" />
                                    <h5 className=' mt-2 '>Business Loan</h5>
                                </div>

                            </div>
                            <div className='col-md-4 btnn d-flex justify-content-center justify-content-md-end'>

                                <div className="buttnn mt-4">
                                    {/* <Link to="/form"><button className='btn btn-dark bttn rounded-0 '>  Apply now</button></Link> */}
                                    <button className='btn btn-dark bttn rounded-0'>Apply now</button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className='team_card'>
                <div className="row  justify-content-center container ">
                    <div className='col-md-9 text-center align-items-center '>
                        <h4 className='team-text'><b>Founding Team</b></h4><hr />
                    </div>

                    <div className='d-flex justify-content-center px-3 py-5 row mt-5 '>

                        <div className="containe m-3 mt-5 shadow col-md-3">
                            <div className="cardd " data-tilt data-tilt-glare data-tilt-max-glare="0.5" data-tilt-scale="1.1">
                                <img src="https://rukminim1.flixcart.com/image/416/416/juk4gi80/poster/z/d/m/large-newposter9484-robert-downey-jr-hollywood-pic-poster-large-original-imaf5tgyyuwcybdu.jpeg?q=70" alt='' />

                                <h1 className='text-h'>Ram niwas yadav</h1>
                                <p className='text-p'>Founder</p>
                            </div>
                        </div>
                        <div className="containe m-3 mt-5 shadow col-md-3">
                            <div className="cardd" data-tilt data-tilt-glare data-tilt-max-glare="0.5" data-tilt-scale="1.1">
                                <img src="https://rukminim1.flixcart.com/image/416/416/juk4gi80/poster/z/d/m/large-newposter9484-robert-downey-jr-hollywood-pic-poster-large-original-imaf5tgyyuwcybdu.jpeg?q=70" alt='' />
                                <h1 className='text-h'>Samrat singh tanwar</h1>
                                <p className='text-p'>CTO</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className='testi-card'>
                <div className='container'>
                    <div className="row justify-content-center">

                        <div className='col-md-9  team_ text-center mt-5'>
                            <h4> <b>Costumers Testimonials</b></h4><hr />
                        </div>


                        <div className="col-md-9 container">
                            <div className='row'>
                                <div className='col-md-4 p-3' >
                                    <div className='shadow-lg rounded-3 p-3'>

                                        <p className='card-p'>I just wanted to say that my experience with <b> online bank </b> has been fantastic. I appreciate the ease of use of their online platform and the security measures they have in place. Overall, I highly recommend online bank.</p>
                                        <hr />
                                        <div className='d-flex px-2 align-items-center '>
                                            <div className="testi-img" style={{ backgroundImage: "url(https://cdn.pixabay.com/photo/2014/08/06/11/19/businessman-411487__340.jpg)" }}>                                                </div>
                                            <p className='p-2'>Ram charan</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4  p-3' >
                                    <div className='shadow-lg rounded-3 p-3'>

                                        <p className='card-p '>I've been using <b>online bank </b> for a few months now, and I'm extremely impressed. Their customer service is also top-notch, and I appreciate the security measures they have in place to protect my account.</p>
                                        <hr />
                                        <div className='d-flex px-2 align-items-center '>
                                            <div className='testi-img' style={{ backgroundImage: "url(https://cdn.pixabay.com/photo/2020/03/09/21/53/indian-4917258__340.jpg)" }}>
                                            </div>
                                            <p className='p-2'>Ravi saini</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4  p-3' >
                                    <div className='shadow-lg rounded-3 p-3'>

                                        <p className='card-p '>I highly recommend <b> online bank</b> for their exceptional user-friendly online platform, and outstanding customer service. I appreciate their commitment to security and ease of use, and I have had an exceptional experience with this company.</p>
                                        <hr />
                                        <div className='d-flex px-2 align-items-center '>
                                            <div className="testi-img" style={{ backgroundImage: "url(https://cdn.pixabay.com/photo/2020/04/11/10/36/man-5029835_960_720.jpg)" }}></div>
                                            <p className='p-2'>Mohan gupta</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className='form-bg'>
                <div className=''>
                    <div className=' d-flex  py-5 align-items-center'>
                        <form className='p-4'>

                            <h4 className='h1-t'> Partner with us </h4>


                            <div className="container">

                                <div className="row">
                                    <div className="col-md-12">

                                        <input type="text" id="name" name="user_name" placeholder='Enter your full name' />
                                    </div>

                                    <div className='col-md-6 '>
                                        <input type="email" id="mail" name="user_phone" placeholder='Phone no.' />
                                    </div>

                                    <div className='col-md-6 '>
                                        <input type="email" id="mail" name="user_email" placeholder='Email' />
                                    </div>

                                    <div className='col-md-6 '>
                                        <input type="date" id="birthday" name="user_date" placeholder='Date of birth' />
                                    </div>
                                    <div className='col-md-6 '>
                                        <input type="text" id="pin" name="user_pin" placeholder='Pin code' />
                                    </div>
                                </div>
                            </div>

                            <div className=' d-flex justify-content-end   ' >
                                <div className=" buttn-1  mt-3  " >
                                    <button className='btn btn-dark bttn rounded-0 '>Apply now</button>
                                </div>
                            </div>

                        </form>

                        <div className='w-25 d-none d-lg-block'>
                            <img width="100%" src="/img/bg-3.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

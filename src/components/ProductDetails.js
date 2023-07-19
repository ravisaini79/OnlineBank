import { useEffect, useState } from "react"
import React from 'react'
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProductDetails() {

    const location = useLocation();
    const [data, setData] = useState()

    useEffect(() => {

        console.log(location.state)

        fetch(`https://api.risingassociates.co.in/api/v1/product?id=${location?.state}`)
            .then((response) => response.json())
            .then((data) => {
                console.log("features", data);
                setData(data);
            })
            .catch((error) => console.error(error));
    }, []);

    // const renderList = feature.map((item) =>
    //     <div>{item}</div>
    // );


    return (
        <>
            <div className='container align-items-center my-5'>
                <div className='row d-flex col-md-12'>

                    <div className='justify-content-between M-card col-md-6'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='text-center btn btn-secondary m-0' style={{ cursor: "auto" }}>
                                {data?.category.name}
                            </div>
                            <Link to={data?.url} target="_blank" >
                                <div className="buttnn mt-3">
                                    <button className='btn btn-dark bttn rounded-0'>Apply now</button>
                                </div>
                            </Link>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div>

                            </div>
                        </div>
                        <div className='mt-2'>
                            <p>{data?.name}</p>
                        </div>

                        <div className='d-flex justify-content-between'>
                            <div className="caard">
                                <img src={data?.images[0]?.url ? data?.images[0]?.url : "img/card-slider-gold.png"} alt="Card Image" />
                            </div>
                        </div>

                        <div className='H-card mt-3'>
                            <div className="p-3">
                                <p className="mb-0">{data?.description}</p>
                            </div>
                        </div>


                    </div>





                    <div className='justify-content-between p-3 col-md-6'>

                        {/* 
                        <div className='d-flex justify-content-between'>
                           
                            <img style={{ height: "30px" }} src="img/icons8-notification-48.png" alt="" />

                        </div> */}

                        <div className="mt-4 ">
                            <h3 className="text-center">Best offerings</h3>

                        </div>

                        <ul className="mt-5">

                            {data?.feature.map((feature, index) => (
                                <li key={index} className="alert alert-success">
                                    {feature.product_feature}
                                </li>
                            ))}
                        </ul>
                        {/* <div className='d-flex justify-content-between'>
                            <p>Payment to nick</p>
                            <h6>$535.09</h6>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Receive Sallery</p>
                            <h6>$535.09</h6>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Money gram transfer</p>
                            <h6>$535.09</h6>
                        </div>
                        <div>
                            <p><small>Balance</small></p>

                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Received Refund</p>
                            <h6>$535.09</h6>
                        </div>
                        <hr className='mt-5' />

                        <div className='d-flex justify-content-between'>
                            <p><b>Payment Details</b></p>
                            <h6>!</h6>
                        </div>
                        <p><small>From</small></p>
                        <div className='d-flex justify-content-between'>
                            <p><b>Kotak bank Refund</b></p>
                            <h6>$535.09</h6>
                        </div> */}




                    </div>


                </div>
            </div>
        </>
    )
}

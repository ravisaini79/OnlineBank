import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getCategories } from '../apiCall.js/getCategories'

export default function Card() {

    const [data, setData] = useState([])
    const [filteredProduts, setFilteredProduts] = useState([])
    const [categories, setCategories] = useState([])
    const [activeCat, setActiveCat] = useState("")
    const location = useLocation();


    const firstFunc = async () => {
        let categoriesl = await getCategories()
        setCategories(categoriesl);

        let res = await fetch("https://api.risingassociates.co.in/api/v1/product/filter");
        let json = await res.json();
        setData(json)

    }

    function filterProducts(categoryId) {
        setFilteredProduts(data.filter(e => e.category.id == categoryId));
        setActiveCat(categoryId);
    }

    useEffect(() => {
        if (location.state) {
            filterProducts(location.state)
        } else {
            filterProducts(categories[0]?.id)
        }
        console.log(categories)
    }, [categories, data])

    useEffect(() => {
        firstFunc()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9">

                        <div className='mt-5 container'>
                            <h2 className='text-center my-4'>Categories</h2>
                            <div className='row justify-content-center'>

                                {categories.map((item, i) =>
                                    <div onClick={() => filterProducts(item.id)} style={{ cursor: "pointer" }} key={i} className={`col-md-3 d-flex justify-content-center shadow m-2 rounded_c bg-white  border_bg ${activeCat == item.id && "activeCat"}`}>
                                        <div className='d-flex flex-column justify-content-center align-items-center p-4'>
                                            <img className='icon' src="/img/icon_4.png" alt="" />
                                            <p>{item.name}</p>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className='container wrapper'>

                <div className=' mt-5 row col-md-12 justify-content-center align-items-center outer'>

                    <div>
                        <div className='container '>
                            <h3 className='text-center my-4'>Products</h3>
                            <div className="row ">
                                {filteredProduts.map((item, i) =>
                                    <div key={i} className='col-md-4 p-4 card-deck'>
                                        <div className="card-d shadow p-2 flex-wrap justify-content-start">
                                            <img src={item?.images[0]?.url ? item?.images[0]?.url : `https://cdn.pixabay.com/photo/2016/09/16/09/21/card-1673581__340.png`} className="card-img-top" alt="..." />
                                            <div className="card-body d-flex align-items-center flex-wrap justify-content-between">
                                                <div>
                                                    <h5 className="card-title fw-bold">{item.name} </h5>
                                                    <p className="card-text">{item.description}</p>
                                                </div>
                                                <div>
                                                    <Link to="/productDetails" state={item.id}>
                                                        <div className="buttnn mt-3">
                                                            <button className='btn btn-dark bttn rounded-0'>More details</button>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </>

    )
}

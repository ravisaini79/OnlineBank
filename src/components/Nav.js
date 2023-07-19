import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className='container p-4'>
            <div className='row justify-content-center'>
                <nav className='col-md-9 row justify-content-between d-flex'>
                    <div className='col-md-6'>
                        <Link to="/">
                            <img className='logo d-md-inline d-block mx-auto' src="/img/logo.png" alt="" />
                        </Link>
                    </div >
                    <ul className='nav-ul col-md-6 text-center'>
                        <li> <p ><a href="tel:+919549968886  " className='text-white'>+91 9549968886 </a></p></li>
                        <li><a className='' href="mailto:support@onlinebank.in">support@onlinebank.in</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

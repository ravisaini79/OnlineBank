import React from 'react'
import Nav from './Nav'

export default function Form() {
  return (
    <>

      <div className='bg-dark'>
        <Nav />
      </div>

      <div className='bg-grey'>
        <div className='container'>

          <div className="row mx-5">
            <div className="col-md-12 ">
              <form className='p-5'>
                <h3 className='h1-t'> Apply now </h3>
                <hr />
                <label for="name">Name:</label>
                <input type="text" id="name" name="user_name" />

                <label for="email">Email:</label>
                <input type="email" id="mail" name="user_email" />

               <div className=' d-flex justify-content-end' >
                  <div className=" buttn-1 mt-3 " >
                    <button className='btn btn-dark bttn rounded-0'>Apply now</button>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

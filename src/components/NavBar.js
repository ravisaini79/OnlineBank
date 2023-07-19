
import React from 'react'
import Nav from './Nav'

export default function NavBar() {
	return (
		< >

			<div className='Navbar '>
				<Nav />
				<header className='container  '>


					<div className='container  '>

						<div className='row justify-content-center mt-4'>
							<div className='row col-md-9 d-flex justify-content-evenly align-items-center'>

								<div className='upd-card mt-4 col-md-6'>
									<div>
										<h1 className='text-white'><b>Credit Card</b></h1>
										<h4 className='p-p'>Lifetime free</h4>
										<p className='text-white'> Use discount on online shoping and many more</p>


										<div className='d-flex justify-content-start '>
											<div className=" buttn  mt-3">
												<button className='btn btn-dark bttn rounded-0 '>Apply now</button>
											</div>
										</div>
									</div>
								</div>
								<div className=' col-md-6 '>
									<img className='w-100 mt-4 pt-3' src="/img/card-slider-gold.png" alt="" />

								</div>
							</div>
						</div>
					</div>
				</header>

			</div>

		</>
	)
}

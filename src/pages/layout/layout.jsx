import React from 'react'
import logo from '../../assets/assets_murod/Logo (28).png'
import { Link, Outlet } from 'react-router'
import bars from '../../assets/assets_murod/Button (3).png'
import follow1 from '../../assets/assets_murod/Sub Container (2).png'
import follow2 from '../../assets/assets_murod/Sub Container (3).png'
import insta from '../../assets/assets_murod/Icon Container (15).png'
import twitter from '../../assets/assets_murod/Icon Container (16).png'
import b from '../../assets/assets_murod/Icon Container (17).png'
import be from '../../assets/assets_murod/Icon Container (18).png'
import arrow from '../../assets/assets_murod/Button (4).png'

// MUROD

const Layout = () => {
	return (
		<div className='bg-[#000000] pt-[3vh]'>
			<header className='bg-[#1A1A1A] border border-[#1C1C21] w-[97%] text-[#ffffff] flex justify-between items-center m-auto py-[1vh] lg:py-[3vh] rounded-xl px-[3%]'>
				<img src={logo} alt='' />
				<div className='hidden lg:flex gap-[20px]'>
					<Link to={'/'}>
						<button className='py-[5px] px-[10px] bg-[#0F0F0F] rounded-[10px] text-[15px]'>
							HOME
						</button>
					</Link>
					<Link to={'/services'}>
						<button className='py-[5px] px-[10px] bg-[#0F0F0F] rounded-[10px] text-[15px]'>
							SERVICES
						</button>
					</Link>
					<Link to={'/projects'}>
						<button className='py-[5px] px-[10px] bg-[#0F0F0F] rounded-[10px] text-[15px]'>
							PROJECTS
						</button>
					</Link>
					<Link to={'/about'}>
						<button className='py-[5px] px-[10px] bg-[#0F0F0F] rounded-[10px] text-[15px] '>
							ABOUT
						</button>
					</Link>
					<Link to={'/careers'}>
						<button className='py-[5px] px-[10px] bg-[#0F0F0F] rounded-[10px] text-[15px]'>
							CAREERS
						</button>
					</Link>
					<Link to={'/blogs'}>
						<button className='py-[5px] px-[10px] bg-[#0F0F0F] rounded-[10px] text-[15px] '>
							BLOGS
						</button>
					</Link>
					<Link to={'/blogs2'}>
						<button className='py-[5px] px-[10px] bg-[#0F0F0F] rounded-[10px] text-[15px]'>
							BLOGS2
						</button>
					</Link>
					<Link to={'/contact'}>
						<button className='py-[5px] px-[10px] bg-[#CE7D63] text-[#0F0F0F] rounded-[10px] text-[15px]'>
							CONTACT US
						</button>
					</Link>
				</div>
				<img src={bars} alt='' className='flex lg:hidden' />
			</header>
			<main>
				<Outlet />
			</main>
			<footer className='flex flex-col gap-y-[3vh] pb-[5vh] mt-[10vh]'>
				<div className='bg-[#CE7D63] w-[97%] flex flex-col lg:flex-row m-auto rounded-xl items-center justify-between py-[5vh] gap-y-[2vh] px-[5%]'>
					<div className='lg:w-[900px]'>
						<h1 className='text-[#0F0F0F] text-[30px] font-bold'>
							Ready to Transform Your Digital Presence?
						</h1>
						<br />
						<p className='text-[#262626]'>
							Take the first step towards digital success with NexGen by your
							side. Our team of experts is eager to craft tailored solutions
							that drive growth for your business.
						</p>
					</div>
					<button className='text-[#F3DFD8] px-[100px] lg:px-[20px] py-[10px] rounded-[10px] bg-[#0F0F0F]'>
						Get in Touch
					</button>
				</div>
				<img
					src={follow1}
					alt=''
					className='hidden md:flex w-[97%] m-auto max-h-[80px]'
				/>
				<img
					src={follow2}
					alt=''
					className='flex md:hidden w-[97%] m-auto max-h-[80px]'
				/>
				<aside className='flex flex-col lg:flex-row m-auto w-[97%] gap-y-[5vh] gap-[20px]'>
					<div className='hidden lg:grid grid-cols-2 gap-[3%] gap-y-[3vh]'>
						<div className='bg-[#1A1A1A] rounded-xl flex flex-col justify-center items-center gap-[40px] p-[30px]'>
							<div className='flex items-center gap-[110px]'>
								<img src={insta} alt='' />
								<img src={arrow} alt='' />
							</div>
							<div className='flex flex-col gap-[20px]'>
								<h1 className='text-[#F9EFEC] text-[30px]'>INSTAGRAM</h1>
								<p className='text-[#B3B3B2]'>
									Share visually appealing snippets of our latest web projects.
								</p>
							</div>
						</div>
						<div className='bg-[#1A1A1A] rounded-xl flex flex-col justify-center items-center gap-[40px] p-[30px]'>
							<div className='flex items-center gap-[110px]'>
								<img src={twitter} alt='' />
								<img src={arrow} alt='' />
							</div>
							<div className='flex flex-col gap-[20px]'>
								<h1 className='text-[#F9EFEC] text-[30px]'>TWITTER</h1>
								<p className='text-[#B3B3B2]'>
									Tweet about interesting coding challenges you've overcome.
								</p>
							</div>
						</div>
						<div className='bg-[#1A1A1A] rounded-xl flex flex-col justify-center items-center gap-[40px] p-[30px]'>
							<div className='flex items-center gap-[110px]'>
								<img src={b} alt='' />
								<img src={arrow} alt='' />
							</div>
							<div className='flex flex-col gap-[20px]'>
								<h1 className='text-[#F9EFEC] text-[30px]'>DRIBBLE</h1>
								<p className='text-[#B3B3B2]'>
									Showcase design elements of our web projects.
								</p>
							</div>
						</div>
						<div className='bg-[#1A1A1A] rounded-xl flex flex-col justify-center items-center gap-[40px] p-[30px]'>
							<div className='flex items-center gap-[110px]'>
								<img src={be} alt='' />
								<img src={arrow} alt='' />
							</div>
							<div className='flex flex-col gap-[20px]'>
								<h1 className='text-[#F9EFEC] text-[30px]'>BEHANCE</h1>
								<p className='text-[#B3B3B2]'>
									Create detailed presentations for our projects.
								</p>
							</div>
						</div>
					</div>
					<div className='flex lg:hidden w-[97%] m-auto justify-between'>
						<img src={insta} alt='' />
						<img src={twitter} alt='' />
						<img src={b} alt='' />
						<img src={be} alt='' />
					</div>
					<div className='flex flex-col gap-[3vh]'>
						<div className='bg-[#1A1A1A] rounded-xl w-[350px] lg:w-[765px] flex flex-col lg:flex-row justify-around gap-y-[5vh] py-[5vh]'>
							<div className='flex justify-center gap-[100px]'>
								<div className='flex flex-col gap-[20px]'>
									<h1 className='text-[22px] text-[#F3DFD8]'>Home</h1>
									<p className='text-[#81807E]'>Why Us</p>
									<p className='text-[#81807E]'>About Us</p>
									<p className='text-[#81807E]'>Testimonials</p>
									<p className='text-[#81807E]'>FAQ’s</p>
								</div>
								<div className='flex flex-col gap-[20px]'>
									<h1 className='text-[22px] text-[#F3DFD8]'>Services</h1>
									<p className='text-[#81807E]'>Web Development</p>
									<p className='text-[#81807E]'>App Development</p>
									<p className='text-[#81807E]'>Web Design</p>
									<p className='text-[#81807E]'>Digital Marketing</p>
								</div>
							</div>
							<div className='flex justify-center gap-[100px]'>
								<div className='flex flex-col gap-[20px]'>
									<h1 className='text-[22px] text-[#F3DFD8]'>Projects</h1>
									<p className='text-[#81807E]'>Klothink</p>
									<p className='text-[#81807E]'>Zenith</p>
									<p className='text-[#81807E]'>Novus</p>
									<p className='text-[#81807E]'>Apex</p>
								</div>
								<div className='flex flex-col gap-[20px]'>
									<h1 className='text-[22px] text-[#F3DFD8]'>Blogs</h1>
									<p className='text-[#81807E]'>Business</p>
									<p className='text-[#81807E]'>
										Design{' '}
										<span className='bg-[#262626] text-[#FEFEFE] p-[10px] rounded-[10px]'>
											Soon
										</span>
									</p>
									<p className='text-[#81807E]'>
										Development{' 	'}
										<span className='bg-[#262626] text-[#FEFEFE] p-[10px] rounded-[10px]'>
											Soon
										</span>
									</p>
								</div>
							</div>
						</div>
						<div className='bg-[#1A1A1A] rounded-xl flex flex-col lg:flex-row justify-between px-[10px] py-[5vh]'>
							<div className='flex flex-col gap-[10px]'>
								<p className='text-[#676665]'>Newsletter</p>
								<h1 className='text-[25px] text-[#F9EFEC]'>
									Subscribe To our Newsletter
								</h1>
							</div>
							<div className='flex gap-[10px] items-center'>
								<input
									type='email'
									placeholder='Enter your email'
									className='w-[320px] h-[50px] border-b border-b-[#333333] text-[#676665]'
								/>
								<img src={arrow} alt='' />
							</div>
						</div>
						<div className='bg-[#1A1A1A] rounded-xl flex flex-col lg:flex-row justify-around items-center gap-y-[20px] py-[6.6vh]'>
							<p className='text-[#B3B3B2]'>
								© 2024 NextGen. All rights reserved.
							</p>
							<div className='flex gap-[20px] text-[#B3B3B2]'>
								<p>Terms & Conditions</p>
								<p>Privacy Policy</p>
							</div>
						</div>
					</div>
				</aside>
			</footer>
		</div>
	)
}

export default Layout

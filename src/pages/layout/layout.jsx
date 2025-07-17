import React from 'react'
import logo from '../../assets/assets_murod/Logo (28).png'
import { Link, Outlet } from 'react-router'
import bars from '../../assets/assets_murod/Button (3).png'

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
			<footer></footer>
		</div>
	)
}

export default Layout

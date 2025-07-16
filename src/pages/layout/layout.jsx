import React from 'react'
import logo from '../../assets/assets_murod/Logo (28).png'
import { Link, Outlet } from 'react-router'

// MUROD

const Layout = () => {
	return (
		<div className='bg-[#000000]'>
			<header className='bg-[#1A1A1A] border border-[#1C1C21] w-[97%] text-[#ffffff]'>
				<img src={logo} alt='' />
				<div className='flex gap-[20px]'>
					<Link to={'/'}>
						<button>home</button>
					</Link>
					<Link to={'/services'}>
						<button>services</button>
					</Link>
					<Link to={'/projects'}>
						<button>about</button>
					</Link>
					<Link to={'/about'}>
						<button>about</button>
					</Link>
					<Link to={'/careers'}>
						<button>careers</button>
					</Link>
					<Link to={'/blogs'}>
						<button>blogs</button>
					</Link>
					<Link to={'/blogs2'}>
						<button>blogs2</button>
					</Link>
					<Link to={'/contact'}>
						<button>contact</button>
					</Link>
				</div>
			</header>
			<main>
				<Outlet />
			</main>
			<footer></footer>
		</div>
	)
}

export default Layout

import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './pages/layout/layout'
import Home from './pages/home/home'
import Services from './pages/services/services'
import Projects from './pages/projects/projects'
import About from './pages/about/about'
import Careers from './pages/careers/careers'
import Blogs from './pages/blogs/blogs'
import Blogs2 from './pages/blogs2/blogs2'
import Contact from './pages/contact/contact'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/services' element={<Services />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/about' element={<About />} />
				<Route path='/careers' element={<Careers />} />
				<Route path='/blogs' element={<Blogs />} />
				<Route path='/blogs2' element={<Blogs2 />} />
				<Route path='/contact' element={<Contact />} />
			</Route>
		</Routes>
	)
}

export default App

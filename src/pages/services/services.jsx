import React from 'react'
import mainbg from '../../assets/assets_murod/Sub Container (4).png'
import img from '../../assets/assets_sobir/img1.png'
import Card from '../about/component/Card'
import Card2 from '../about/component/Card2'
import Card4 from '../about/component/Card4'
import Card3 from '../about/component/Card3'
import img2 from '../../assets/assets_sobir/img1 (7).png'
import img3 from '../../assets/assets_sobir/img1 (6).png'
import follow1 from '../../assets/assets_murod/Sub Container (2).png'

// MUROD

const Services = () => {
	return (
		<div>
			<div className='bg-[#1A1A1A] lg:flex justify-around w-[95%] mx-auto items-center p-[20px] my-[30px] rounded-2xl '>
				<div className='lg:w-[60%]'>
					<div className='lg:flex gap-[10px] items-center'>
						<p className='font-black text-3xl lg:text-5xl'>
							Our Comprehensive <br />
							Digital Solutions
						</p>
						<img src={img} alt='' className='w-[200px]' />
					</div>
					<p className='text-[#676665] my-[30px]'>
						At NexGen, we offer a comprehensive suite of digital solutions
						designed to propel your business to new heights in the digital
						realm. With a team of skilled professionals, cutting-edge
						technologies, and a passion for innovation
					</p>
          <img src={follow1} alt="" className='h-[80px]'/>
				</div>
				<div className='w-[35%]'>
					<img src={mainbg} alt=''/>
				</div>
			</div>
			<Card />
			<Card2 img={img2} inn={img3} />
			<Card4 />
			<Card3 />
		</div>
	)
}

export default Services

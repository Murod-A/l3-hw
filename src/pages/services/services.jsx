import React from 'react'
import mainbg from '../../assets/assets_murod/Sub Container (4).png'
import img from '../../assets/assets_sobir/img1.png'
import Card from '../about/component/Card'
import Card2 from '../about/component/Card2'
import Card4 from '../about/component/Card4'
import Card3 from '../about/component/Card3'
import img2 from '../../assets/assets_sobir/img1 (7).png'
import img3 from '../../assets/assets_sobir/img1 (6).png'
// MUROD

const Services = () => {
	return (
		<div>
			<div className='bg-[#1A1A1A] lg:flex justify-around w-[95%] mx-auto items-center p-[20px] my-[30px] rounded-2xl '>
				<div className='lg:w-[60%]'>
					<div className='lg:flex gap-[10px] items-center'>
						<p className='font-black text-3xl lg:text-5xl'>
							Empowering Your <br />
							Digital Vision
						</p>
						<img src={img} alt='' className='w-[200px]' />
					</div>
					<p className='text-[#676665] my-[30px]'>
						At NexGen, we are committed to empowering your digital vision with
						innovative solutions tailored to your unique needs. Our team of
						skilled professionals, coupled with cutting-edge technologies,
						ensures that we deliver exceptional results that elevate your online
						presence.
					</p>
				</div>
				<div>
					<img src={mainbg} alt='' />
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

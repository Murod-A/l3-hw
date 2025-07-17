import React from 'react'
import mainbg from '../../assets/assets_murod/Container (4).png'
import img from '../../assets/assets_sobir/img1.png'
import Card from '../about/component/Card'
import Card2 from '../about/component/Card2'
import Card4 from '../about/component/Card4'
import Card3 from '../about/component/Card3'
import img2 from '../../assets/assets_sobir/img1 (7).png'
import img3 from '../../assets/assets_sobir/img1 (6).png'
import follow1 from '../../assets/assets_murod/Sub Container (2).png'

//MUROD

const Home = () => {
	return (
		<div>
			<div className='bg-[#1A1A1A] lg:flex justify-around w-[95%] mx-auto items-center p-[20px] my-[30px] rounded-2xl '>
				<div className='lg:w-[60%]'>
					<div className='lg:flex gap-[10px] items-center'>
						<p className='font-black text-3xl lg:text-5xl'>
							Digital Solutions <br />
							That Drive Success
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
					<img src={follow1} alt='' className='h-[80px]' />
				</div>
				<div className='w-[30%]'>
					<img src={mainbg} alt='' />
				</div>
			</div>
			<div className='border-2 my-[30px] border-[#1A1A1A] w-[95%] mx-auto p-[20px] rounded-2xl'>
				<div className=' bg-[#1A1A1A] p-[30px]   rounded-2xl'>
					<p className='font-black text-4xl'>Our Achievements</p>
				</div>
				<div className='lg:flex grid gap-[30px] lg:gap-0 justify-between mt-[20px]'>
					<div className='lg:w-[23%] bg-[#1F1F1F] p-[20px] rounded-2xl'>
						<p className='text-[#81807E]'>September 2023</p>
						<div className='w-[100%]  '>
							<p className='font-medium my-[30px] text-3xl'>
								Global Recognition for Innovation
							</p>
						</div>
						<p>
							In 2023, our digital agency gained global acclaim for innovative
							solutions, setting new standards in the ever-evolving digital
							landscape.
						</p>
					</div>
					<div className='lg:w-[23%] bg-[#1F1F1F] p-[20px] rounded-2xl'>
						<p className='text-[#81807E]'>September 2023</p>
						<div className='w-[100%]  '>
							<p className='font-medium my-[30px] text-3xl'>
								Global Recognition for Innovation
							</p>
						</div>
						<p>
							In 2023, our digital agency gained global acclaim for innovative
							solutions, setting new standards in the ever-evolving digital
							landscape.
						</p>
					</div>
					<div className='lg:w-[23%] bg-[#1F1F1F] p-[20px] rounded-2xl'>
						<p className='text-[#81807E]'>September 2023</p>
						<div className='w-[100%]  '>
							<p className='font-medium my-[30px] text-3xl'>
								Global Recognition for Innovation
							</p>
						</div>
						<p>
							In 2023, our digital agency gained global acclaim for innovative
							solutions, setting new standards in the ever-evolving digital
							landscape.
						</p>
					</div>
					<div className='lg:w-[23%] bg-[#1F1F1F] p-[20px] rounded-2xl'>
						<p className='text-[#81807E]'>September 2023</p>
						<div className='w-[100%]  '>
							<p className='font-medium my-[30px] text-3xl'>
								Global Recognition for Innovation
							</p>
						</div>
						<p>
							In 2023, our digital agency gained global acclaim for innovative
							solutions, setting new standards in the ever-evolving digital
							landscape.
						</p>
					</div>
				</div>
			</div>
			<Card2 img={img2} inn={img3} />
			<Card4 />
			<Card />
			<Card3 />
		</div>
	)
}

export default Home

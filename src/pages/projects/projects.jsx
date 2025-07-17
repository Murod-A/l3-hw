import React from 'react'
import img from '../../assets/assets_sobir/img1.png'
import img1 from '../../assets/assets_sobir/img1 (9).png'
import img2 from '../../assets/assets_sobir/img1 (10).png'
import img3 from '../../assets/assets_sobir/img1 (11).png'
import img4 from '../../assets/assets_sobir/img1 (12).png'
import Card from '../about/component/Card'
import Card3 from '../about/component/Card3'
import Card4 from '../about/component/Card4'

// SOBIR

const Projects = () => {
  return (
    <div className='text-white'>
      <div className=' lg:flex grid gap-[20px] lg:gap-0 text-white justify-around w-[95%] mx-auto items-center p-[20px] my-[30px] rounded-2xl '>
        <div className='lg:w-[60%] bg-[#1A1A1A] lg:p-[50px] p-[20px] lg:py-[120px] rounded-2xl'>
          <div className='lg:flex gap-[10px] items-center'>
            <p className='font-black text-3xl lg:text-5xl'>Elevating Brands <br />in the Digital Age</p>
            <img src={img} alt="" className='w-[200px]' />
          </div>
        </div>
        <div className='bg-[#1A1A1A]  p-[30px] rounded-2xl'>
          <div className='grid grid-cols-2 gap-[20px] '>
            <div className='bg-[#1F1F1F] p-[20px] rounded-[5px] '>
              <p>Clients</p>
              <p className='font-black text-3xl text-[#DA9E8B]'>200+</p>
            </div>
            <div className='bg-[#1F1F1F] p-[20px] rounded-[5px] '>
              <p>PROJECTS</p>
              <p className='font-black text-3xl text-[#DA9E8B]'>280+</p>
            </div>
            <div className='bg-[#1F1F1F] p-[20px] rounded-[5px] '>
              <p>HAPPY CLIENTS</p>
              <p className='font-black text-3xl text-[#DA9E8B]'>100%</p>
            </div>
            <div className='bg-[#1F1F1F] p-[20px] rounded-[5px] '>
              <p>FOLLOWER</p>
              <p className='font-black text-3xl text-[#DA9E8B]'>420K</p>
            </div>
          </div>
          <div className='flex justify-center gap-[10px] items-center mt-[20px]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p>Know More</p>
          </div>
        </div>
      </div>
      <div className='border-2 my-[30px] border-[#1A1A1A] w-[95%] mx-auto p-[20px] rounded-2xl'>
        <div className=' text-white bg-[#1A1A1A] p-[30px] flex justify-between  rounded-2xl'>
          <p className='font-black text-3xl lg:text-4xl'>Meet the brilliant minds behind NexGen</p>
          <div className='lg:flex hidden items-center gap-[10px]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p>ALL Members</p>
          </div>
        </div>
        <div className='lg:flex grid gap-[20px] lg:gap-0 justify-between  mt-[20px]'>
          <div className='bg-[#262626] text-white lg:w-[23%] text-center py-[20px] rounded-2xl'>
            <p className='text-2xl mb-[10px]'>John Smith</p>
            <p>Co-Founder & CEO</p>
            <img src={img2} alt=""  className='mt-[20px]'/>
          </div>
          <div className='bg-[#262626] text-white lg:w-[23%] text-center py-[20px] rounded-2xl'>
            <p className='text-2xl mb-[10px]'>Sarah Adams</p>
            <p>Head of Design</p>
            <img src={img3} alt=""  className='mt-[20px]'/>
          </div>
          <div className='bg-[#262626] text-white lg:w-[23%] text-center py-[20px] rounded-2xl'>
            <p className='text-2xl mb-[10px]'>Emily Johnson</p>
            <p>Lead Web Developer</p>
            <img src={img4} alt=""  className='mt-[20px]'/>
          </div>
          <div className='bg-[#262626] text-white lg:w-[23%] text-center py-[20px] rounded-2xl'>
            <p className='text-2xl mb-[10px]'>William Lee</p>
            <p>Lead Backend Developer</p>
            <img src={img1} alt=""  className='mt-[20px]'/>
          </div>
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
              <p className='font-medium my-[30px] text-3xl'>Global Recognition for Innovation</p>
            </div>
            <p>In 2023, our digital agency gained global acclaim for innovative solutions, setting new standards in the ever-evolving digital landscape.</p>
          </div>
          <div className='lg:w-[23%] bg-[#1F1F1F] p-[20px] rounded-2xl'>
            <p className='text-[#81807E]'>September 2023</p>
            <div className='w-[100%]  '>
              <p className='font-medium my-[30px] text-3xl'>Global Recognition for Innovation</p>
            </div>
            <p>In 2023, our digital agency gained global acclaim for innovative solutions, setting new standards in the ever-evolving digital landscape.</p>
          </div>
          <div className='lg:w-[23%] bg-[#1F1F1F] p-[20px] rounded-2xl'>
            <p className='text-[#81807E]'>September 2023</p>
            <div className='w-[100%]  '>
              <p className='font-medium my-[30px] text-3xl'>Global Recognition for Innovation</p>
            </div>
            <p>In 2023, our digital agency gained global acclaim for innovative solutions, setting new standards in the ever-evolving digital landscape.</p>
          </div>
          <div className='lg:w-[23%] bg-[#1F1F1F] p-[20px] rounded-2xl'>
            <p className='text-[#81807E]'>September 2023</p>
            <div className='w-[100%]  '>
              <p className='font-medium my-[30px] text-3xl'>Global Recognition for Innovation</p>
            </div>
            <p>In 2023, our digital agency gained global acclaim for innovative solutions, setting new standards in the ever-evolving digital landscape.</p>
          </div>
        </div>
      </div>
      <Card/>
      <Card4/>
      <Card3/>
    </div>
  )
}

export default Projects
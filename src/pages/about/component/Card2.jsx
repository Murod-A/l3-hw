import React from 'react'
import img1 from '../../../assets/assets_sobir/img1.svg'
import img2 from '../../../assets/assets_sobir/img1 (8).png'
import img3 from '../../../assets/assets_sobir/img2.svg'

const Card2 = ({img,inn}) => {
  return (
    <div>
        <div className='bg-[#1A1A1A] p-[30px] w-[95%] mx-auto   my-[10px] rounded-2xl lg:flex justify-around items-center'>
            <p className='font-black text-3xl lg:text-4xl'>Projects Showcase</p>
            <div className='flex gap-[20px] lg:my-0 my-[10px]'>
                <button className='font-black lg:block hidden p-[15px] bg-[#1F1F1F] rounded-[5px]'>Web Design</button>
                <button className='font-black p-[15px] bg-[#CE7D63] rounded-[5px] text-black'>Web Development</button>
                <button className='font-black lg:block hidden p-[15px] bg-[#1F1F1F] rounded-[5px]'>Marketing</button>
            </div>
        </div>
        <div className='lg:flex justify-around gap-[20px] items-center grid  border-2 border-[#1A1A1A] p-[10px] w-[95%] mx-auto rounded-2xl my-[30px]'>
            <div className='bg-[#1A1A1A] p-[20px] py-[40px]  lg:w-[32%] rounded-2xl '>
                <img src={img1} alt="" />
                <button className='flex my-[20px] bg-[#1F1F1F] p-[10px] rounded-4xl gap-[10px] lg:gap-[20px]'>Category <li>Mobile App Development</li></button>
                <button className='flex my-[20px] bg-[#1F1F1F] p-[10px] rounded-4xl gap-[20px]'>Time Taken <li>6 months</li></button>
                <p className='text-[#B3B3B2] my-[30px] text-2xl'>An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance</p>
            </div>
            <div className=''>
                <img src={img} alt="" />
            </div>
            <div className='w-[32%] lg:block hidden '>
                <div className='bg-[#1A1A1A] p-[20px] rounded-2xl'>
                <p className='text-2xl my-[10px]'>Technologies Used</p>
                <button className='bg-[#1F1F1F] p-[5px] rounded-4xl m-[10px] px-[20px]'>React Native</button>
                <button className='bg-[#1F1F1F] p-[5px] rounded-4xl m-[10px] px-[20px]'>Firebase</button>
                <button className='bg-[#1F1F1F] p-[5px] rounded-4xl m-[10px] px-[20px]'>Redux</button>
                <button className='bg-[#1F1F1F] p-[5px] rounded-4xl m-[10px] px-[20px]'>REST API</button>
                <button className='bg-[#1F1F1F] p-[5px] rounded-4xl m-[10px] px-[20px]'>MongoDB</button>
                </div>
                <div className='bg-[#1A1A1A] p-[20px] rounded-2xl flex justify-around items-center my-[10px]'>
                    <p className='font-bold'>Team Members</p>
                    <img src={img2} alt="" className='w-[50%]'/>
                </div>
                <button className='my-[10px] p-[15px] bg-[#CE7D63] text-black font-black text-2xl w-[100%] rounded-2xl'>Book A Call</button>
            </div>
        </div>
        <div className='lg:flex justify-around gap-[20px] items-center grid  border-2 border-[#1A1A1A] p-[10px] w-[95%] mx-auto rounded-2xl my-[30px]'>
            <div className='bg-[#1A1A1A] p-[20px] py-[40px]  lg:w-[32%] rounded-2xl '>
                <img src={img3} alt="" />
                <button className='flex my-[20px] bg-[#1F1F1F] p-[10px] rounded-4xl gap-[10px] lg:gap-[20px]'>Category <li>Mobile App Development</li></button>
                <button className='flex my-[20px] bg-[#1F1F1F] p-[10px] rounded-4xl gap-[20px]'>Time Taken <li>6 months</li></button>
                <p className='text-[#B3B3B2] my-[30px] text-2xl'>An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance</p>
            </div>
            <div className=''>
                <img src={inn} alt="" />
            </div>
            <div className='w-[32%] lg:block hidden '>
                <div className='bg-[#1A1A1A] p-[20px] rounded-2xl'>
                <p className='text-2xl my-[10px]'>Technologies Used</p>
                <button className='bg-[#1F1F1F] p-[5px] rounded-4xl m-[10px] px-[20px]'>React Native</button>
                <button className='bg-[#1F1F1F] p-[5px] rounded-4xl m-[10px] px-[20px]'>Firebase</button>
                <button className='bg-[#1F1F1F] p-[5px] rounded-4xl m-[10px] px-[20px]'>Redux</button>
                <button className='bg-[#1F1F1F] p-[5px] rounded-4xl m-[10px] px-[20px]'>REST API</button>
                <button className='bg-[#1F1F1F] p-[5px] rounded-4xl m-[10px] px-[20px]'>MongoDB</button>
                </div>
                <div className='bg-[#1A1A1A] p-[20px] rounded-2xl flex justify-around items-center my-[10px]'>
                    <p className='font-bold'>Team Members</p>
                    <img src={img2} alt="" className='w-[50%]'/>
                </div>
                <button className='my-[10px] p-[15px] bg-[#CE7D63] text-black font-black text-2xl w-[100%] rounded-2xl'>Book A Call</button>
            </div>
        </div>
    </div>
  )
}

export default Card2
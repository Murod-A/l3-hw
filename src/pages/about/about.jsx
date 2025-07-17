import React from 'react'
import Card from './component/Card'
import Card2 from './component/Card2'
import img from '../../assets/assets_sobir/img1.png'
import img1 from '../../assets/assets_sobir/img1 (2).png'
import img2 from '../../assets/assets_sobir/img1 (7).png'
import img3 from '../../assets/assets_sobir/img1 (6).png'
import Card3 from './component/Card3'

//SOBIR

const About = () => {
  return (
    <div className='text-white'>
      <div className='bg-[#1A1A1A] lg:flex justify-around w-[95%] mx-auto items-center p-[20px] my-[30px] rounded-2xl '>
        <div className='lg:w-[60%]'>
          <div className='lg:flex gap-[10px] items-center'>
            <p className='font-black text-3xl lg:text-5xl'>Empowering Your <br />Digital Vision</p>
              <img src={img} alt="" className='w-[200px]' />
          </div>
          <p className='text-[#676665] my-[30px]'>At NexGen, we are committed to empowering your digital vision with innovative solutions tailored to your unique needs. Our team of skilled professionals, coupled with cutting-edge technologies, ensures that we deliver exceptional results that elevate your online presence.</p>
        </div>
        <div>
          <img src={img1} alt="" />
        </div>
      </div>
      <Card/>
      <Card2 img={img2} inn={img3}/>
      <Card3/>
    </div>
  )
}

export default About
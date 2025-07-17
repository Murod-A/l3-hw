import React from 'react'
import comp from "./images/Image (46).png"
import up2 from "./images/Button (9).png"
import v from "./images/Image (47).png"
import user1 from "./images/Image (48).png"
import right from "./images/Button (10).png"
import minus from "./images/Button (11).png"
import plus from "./images/Button (12).png"

const Blogs = () => {
  return (
	 <div>
      <div className='w-[97%] m-auto border p-[10px] rounded-[15px] border-[#1F1F1F] mt-[100px]'>
        <h1 className='text-[30px] lg:text-[50px] bg-[#1A1A1A] rounded-[15px] px-[25px] py-[20px] w-[100%]'><b>Our Blogs</b></h1>

        <div className='mt-[25px] flex justify-around items-center flex-wrap gap-[25px]'>
          <img src={comp} alt="" className='lg:w-[32%]'/>
          <div className='lg:w-[65%] bg-[#1A1A1A] p-[25px] rounded-[15px]'>
            <h3 className='text-[22px]'>Web Design Trends Shaping 2024</h3>
            <br/><br/>
            <div className='flex items-center flex-wrap gap-[25px]'>
              <button className='bg-[#1F1F1F] px-[15px] py-[5px] rounded-[10px]'>Category</button>
              <button className='bg-[#1F1F1F] px-[15px] py-[5px] rounded-[10px]'>Category</button>
              <button className='bg-[#1F1F1F] px-[15px] py-[5px] rounded-[10px]'>Category</button>
            </div>
            <br/><br/>
            <p>Stay ahead of the design curve with insights into the latest web design trends. From immersive user experiences to bold color choices, explore the design elements that will dominate the digital landscape in 2023 and beyond.</p>
            <br/><br/>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-[15px]'>
                <img src={up2} alt="" />
                <p className='text-[22px]'>Read Full Blog</p>
              </div>

              <p className='text-[#B3B3B2]'>Published Date <span className='text-[20px] text-white'>7th February 2023</span></p>
            </div>
          </div>

          <div className='lg:w-[32%] bg-[#1A1A1A] p-[25px] rounded-[15px]'>
            <img src={v} alt="" />
            <br/>
            <p className='text-[20px]'>Optimizing Mobile User Experience for Higher Conversions</p>
            <br/>
            <p className='text-[#B3B3B2]'>Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates. Explore mobile design best practices...</p>
            <br/>
            <div className='flex items-center gap-[15px]'>
              <img src={up2} alt="" />
              <p className='text-[#B3B3B2] text-[20px]'>Read Full Blog</p>
            </div>
          </div>

          <div className='lg:w-[32%] bg-[#1A1A1A] p-[25px] rounded-[15px]'>
            <img src={v} alt="" />
            <br/>
            <p className='text-[20px]'>Optimizing Mobile User Experience for Higher Conversions</p>
            <br/>
            <p className='text-[#B3B3B2]'>Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates. Explore mobile design best practices...</p>
            <br/>
            <div className='flex items-center gap-[15px]'>
              <img src={up2} alt="" />
              <p className='text-[#B3B3B2] text-[20px]'>Read Full Blog</p>
            </div>
          </div>

          <div className='lg:w-[32%] bg-[#1A1A1A] p-[25px] rounded-[15px]'>
            <img src={v} alt="" />
            <br/>
            <p className='text-[20px]'>Optimizing Mobile User Experience for Higher Conversions</p>
            <br/>
            <p className='text-[#B3B3B2]'>Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates. Explore mobile design best practices...</p>
            <br/>
            <div className='flex items-center gap-[15px]'>
              <img src={up2} alt="" />
              <p className='text-[#B3B3B2] text-[20px]'>Read Full Blog</p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-[97%] m-auto border p-[10px] rounded-[15px] border-[#1F1F1F] mt-[100px]'>
        <h1 className='text-[30px] lg:text-[50px] bg-[#1A1A1A] rounded-[15px] px-[25px] py-[20px] w-[100%]'><b>Testimonials</b></h1>
      
        <div className='mt-[25px] flex justify-around items-center flex-wrap lg:flex-nowrap gap-[25px]'>
          <div className='bg-[#1A1A1A] p-[25px] rounded-[15px] lg:w-[25%]'>
            <h3 className='text-[20px]'>NexGen turned our business around!</h3>
            <br/>
            <p>Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!</p>
            <br/>
            <div className='bg-[#1F1F1F] w-[100%] p-[25px] flex items-center gap-[15px]'>
              <div className='flex items-center'>
                <img src={user1} alt="" />
                    <div>
                  <p>Sarah <br/> <span className='text-[#81807E]'>BlueBloom</span></p>
                </div>
              </div>
              <img src={right} alt="" />
            </div>
          </div>
      
          <div className='bg-[#1A1A1A] p-[25px] rounded-[15px] lg:w-[25%]'>
            <h3 className='text-[20px]'>NexGen turned our business around!</h3>
            <br/>
            <p>Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!</p>
            <br/>
            <div className='bg-[#1F1F1F] w-[100%] p-[25px] flex items-center gap-[15px]'>
              <div className='flex items-center'>
                <img src={user1} alt="" />
                <div>
                  <p>Sarah <br/> <span className='text-[#81807E]'>BlueBloom</span></p>
                </div>
              </div>
              <img src={right} alt="" />
            </div>
          </div>
      
          <div className='bg-[#1A1A1A] p-[25px] rounded-[15px] lg:w-[25%]'>
            <h3 className='text-[20px]'>NexGen turned our business around!</h3>
            <br/>
            <p>Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!</p>
            <br/>
            <div className='bg-[#1F1F1F] w-[100%] p-[25px] flex items-center gap-[15px]'>
              <div className='flex items-center'>
                <img src={user1} alt="" />
                <div>
                  <p>Sarah <br/> <span className='text-[#81807E]'>BlueBloom</span></p>
                </div>
              </div>
              <img src={right} alt="" />
            </div>
          </div>
      
          <div className='bg-[#1A1A1A] p-[25px] rounded-[15px] lg:w-[25%]'>
            <h3 className='text-[20px]'>NexGen turned our business around!</h3>
            <br/>
            <p>Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!</p>
            <br/>
            <div className='bg-[#1F1F1F] w-[100%] p-[25px] flex items-center gap-[15px]'>
              <div className='flex items-center'>
                <img src={user1} alt="" />
                <div>
                  <p>Sarah <br/> <span className='text-[#81807E]'>BlueBloom</span></p>
                </div>
              </div>
              <img src={right} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className='w-[97%] m-auto'>
        <h1 className='text-[30px] lg:text-[50px] bg-[#1A1A1A] rounded-[15px] px-[25px] py-[20px] w-[100%] mt-[100px]'><b>Frequently Asked Questions</b></h1>
        <br/>
        <div className='flex justify-around items-center flex-wrap gap-[25px]'>
          <div className='lg:w-[48%]'>
            <div className='bg-[#1A1A1A] p-[25px] rounded-[15px] w-[100%] flex justify-between items-start'>
              <div>
                <p className='text-[20px]'>How long does it take to complete a web development project?</p>
                <br/><hr className='text-[#262626]'/><br/>
                <p>The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.</p>
              </div>
              <img src={minus} alt="" />
            </div>
                
            <br/>
      
            <div className='bg-[#1A1A1A] p-[25px] rounded-[15px] w-[100%] flex justify-between items-center'>
              <p className='text-[20px]'>Can you handle large-scale mobile app development projects?</p>
              <img src={plus} alt="" />
            </div>
      
            <br/>
      
            <div className='bg-[#1A1A1A] p-[25px] rounded-[15px] w-[100%] flex justify-between items-center'>
              <p className='text-[20px]'>Can you handle large-scale mobile app development projects?</p>
              <img src={plus} alt="" />
            </div>
      
            <br/>
      
            <div className='bg-[#1A1A1A] p-[25px] rounded-[15px] w-[100%] flex justify-between items-center'>
              <p className='text-[20px]'>Can you handle large-scale mobile app development projects?</p>
              <img src={plus} alt="" />
            </div>
      
            <br/>
      
            <div className='bg-[#1A1A1A] p-[25px] rounded-[15px] w-[100%] flex justify-between items-center'>
              <p className='text-[20px]'>Can you handle large-scale mobile app development projects?</p>
              <img src={plus} alt="" />
            </div>
          </div>
      
          <div className='w-[100%] lg:w-[48%] bg-[#1A1A1A] p-[25px] rounded-[15px]'>
            <p className='text-[22px]'>Ask your question</p>
            <br/><hr className='text-[#262626]'/><br/>
            <label className='text-[20px]'>Name</label>
            <br/>
            <input type="text" className='w-[100%] bg-black text-white h-[60px] rounded-[10px]' placeholder='  Enter your name'/>
            <br/><br/><br/>
            <label className='text-[20px]'>Email</label>
            <br/>
            <input type="text" className='w-[100%] bg-black text-white h-[60px] rounded-[10px]' placeholder='  Enter your email'/>
            <br/><br/><br/>
            <label className='text-[20px]'>Your Question</label>
            <br/>
            <textarea className='w-[100%] bg-black text-white h-[120px] rounded-[10px]' placeholder='  Enter Your Question Here .....'></textarea>
            <br/><br/><br/>
            <button className='text-black w-[100%] bg-[#CE7D63] rounded-[10px] h-[60px]'>Send Your Message</button>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Blogs
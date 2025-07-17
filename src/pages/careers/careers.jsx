import React from 'react'
import "./career.css"
import start from "./images/Button (2).png"
import ins from "./images/Button (3).png"
import ukol from "./images/Icon Container (4).png"
import up from "./images/Button (4).png"
import down from "./images/Button (5).png"
import user1 from "./images/Image (45).png"
import right from "./images/Button (6).png"
import minus from "./images/Button (7).png"
import plus from "./images/Button (8).png"

const Careers = () => {
  return (
	 <div className='mt-[100px]'>
    <div className='flex justify-around items-center flex-wrap gap-[25px]'>
      <div className='bg-[#1A1A1A] flex items-start gap-[10px] p-[50px] lg:h-[400px] lg:w-[1000px] rounded-[15px] flex-wrap text-center lg:text-start'>
        <h1 className='text-[30px] lg:text-[60px] m-auto'><b>Unlock Your Potential in the Digital World</b></h1>
        <img src={start} alt="" className='m-auto'/>
      </div>

				<div className='bg-[#1A1A1A] p-[30px] lg:w-[400px] rounded-[15px]'>
					<h3 className='text-[22px]'>
						<b>At NexGen</b>
					</h3>
					<p className='my-[15px]'>
						We believe in fostering a dynamic and collaborative work environment
						that empowers our team members to excel in their respective fields.
						Join us to be part of a passionate and innovative team dedicated to
						crafting exceptional digital solutions for clients across the globe.
						We are committed to nurturing talent, encouraging professional
						growth, and creating a workplace where creativity thrives.
					</p>
					<div className='flex items-center gap-[15px]'>
						<img src={ins} alt='' />
						<p>Know More</p>
					</div>
				</div>
			</div>

			<div className='w-[97%] m-auto border p-[10px] rounded-[15px] border-[#1F1F1F] mt-[100px]'>
				<h1 className='text-[30px] lg:text-[50px] bg-[#1A1A1A] rounded-[15px] px-[25px] py-[20px] w-[100%]'>
					<b>Join Our Team at NexGen</b>
				</h1>

				<div className='mt-[50px] flex justify-around items-center flex-wrap gap-[25px]'>
					<div className='bg-[#1A1A1A] p-[25px] rounded-[15px] lg:w-[48%]'>
						<div className='flex justify-between items-center'>
							<div className='flex items-center gap-[15px]'>
								<img src={ukol} alt='' />
								<p className='text-[20px] lg:text-[30px]'>Web Designer</p>
							</div>

							<div className='flex items-center gap-[15px]'>
								<img src={up} alt='' />
								<p className='text-[16px] lg:text-[25px] text-[#B3B3B2]'>
									View Details
								</p>
							</div>
						</div>
						<br />
						<br />
						<div className='flex justify-around lg:justify-between items-center flex-wrap gap-[15px]'>
							<button className='bg-[#1F1F1F] rounded-[10px] px-[15px] py-[5px]'>
								Experience
							</button>
							<button className='bg-[#1F1F1F] rounded-[10px] px-[15px] py-[5px]'>
								Experience
							</button>
							<button className='bg-[#1F1F1F] rounded-[10px] px-[15px] py-[5px]'>
								Experience
							</button>
						</div>
						<br />
						<br />
						<p className='text-[30px]'>Skills</p>
						<p>
							Proficiency in Adobe Creative Suite (Photoshop, Illustrator,
							etc.), strong understanding of UI/UX design principles, responsive
							design expertise.
						</p>
						<br />
						<br />
						<button className='w-[100%] h-[50px] text-black bg-[#CE7D63] rounded-[10px]'>
							Apply NoW
						</button>
					</div>

					<div className='bg-[#1A1A1A] p-[25px] rounded-[15px] lg:w-[48%]'>
						<div className='flex justify-between items-center'>
							<div className='flex items-center gap-[15px]'>
								<img src={ukol} alt='' />
								<p className='text-[20px] lg:text-[30px]'>Web Designer</p>
							</div>

							<div className='flex items-center gap-[15px]'>
								<img src={up} alt='' />
								<p className='text-[16px] lg:text-[25px] text-[#B3B3B2]'>
									View Details
								</p>
							</div>
						</div>
						<br />
						<br />
						<div className='flex justify-around lg:justify-between items-center flex-wrap gap-[15px]'>
							<button className='bg-[#1F1F1F] rounded-[10px] px-[15px] py-[5px]'>
								Experience
							</button>
							<button className='bg-[#1F1F1F] rounded-[10px] px-[15px] py-[5px]'>
								Experience
							</button>
							<button className='bg-[#1F1F1F] rounded-[10px] px-[15px] py-[5px]'>
								Experience
							</button>
						</div>
						<br />
						<br />
						<p className='text-[30px]'>Skills</p>
						<p>
							Proficiency in Adobe Creative Suite (Photoshop, Illustrator,
							etc.), strong understanding of UI/UX design principles, responsive
							design expertise.
						</p>
						<br />
						<br />
						<button className='w-[100%] h-[50px] text-black bg-[#CE7D63] rounded-[10px]'>
							Apply NoW
						</button>
					</div>

					<div className='bg-[#1A1A1A] p-[25px] rounded-[15px] lg:w-[48%]'>
						<div className='flex justify-between items-center'>
							<div className='flex items-center gap-[15px]'>
								<img src={ukol} alt='' />
								<p className='text-[20px] lg:text-[30px]'>Web Designer</p>
							</div>

							<div className='flex items-center gap-[15px]'>
								<img src={up} alt='' />
								<p className='text-[16px] lg:text-[25px] text-[#B3B3B2]'>
									View Details
								</p>
							</div>
						</div>
						<br />
						<br />
						<div className='flex justify-around lg:justify-between items-center flex-wrap gap-[15px]'>
							<button className='bg-[#1F1F1F] rounded-[10px] px-[15px] py-[5px]'>
								Experience
							</button>
							<button className='bg-[#1F1F1F] rounded-[10px] px-[15px] py-[5px]'>
								Experience
							</button>
							<button className='bg-[#1F1F1F] rounded-[10px] px-[15px] py-[5px]'>
								Experience
							</button>
						</div>
						<br />
						<br />
						<p className='text-[30px]'>Skills</p>
						<p>
							Proficiency in Adobe Creative Suite (Photoshop, Illustrator,
							etc.), strong understanding of UI/UX design principles, responsive
							design expertise.
						</p>
						<br />
						<br />
						<button className='w-[100%] h-[50px] text-black bg-[#CE7D63] rounded-[10px]'>
							Apply NoW
						</button>
					</div>

					<div className='bg-[#1A1A1A] p-[25px] rounded-[15px] lg:w-[48%]'>
						<div className='flex justify-between items-center'>
							<div className='flex items-center gap-[15px]'>
								<img src={ukol} alt='' />
								<p className='text-[20px] lg:text-[30px]'>Web Designer</p>
							</div>

            <div className='flex items-center gap-[15px]'>
              <img src={up} alt="" />
              <p className='text-[16px] lg:text-[25px] text-[#B3B3B2]'>View Details</p>
            </div>
          </div>
          <br/><br/>
          <div className='flex justify-around lg:justify-between items-center flex-wrap gap-[15px]'>
            <button className='bg-[#1F1F1F] rounded-[10px] px-[15px] py-[5px]'>Experience</button>
            <button className='bg-[#1F1F1F] rounded-[10px] px-[15px] py-[5px]'>Experience</button>
            <button className='bg-[#1F1F1F] rounded-[10px] px-[15px] py-[5px]'>Experience</button>
          </div>
          <br/><br/>
          <p className='text-[30px]'>Skills</p>
          <p>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.</p>
          <br/><br/>
          <button className='w-[100%] h-[50px] text-black bg-[#CE7D63] rounded-[10px]'>Apply NoW</button>
        </div>
      </div>
    </div>

			<div className='w-[97%] m-auto border p-[10px] rounded-[15px] border-[#1F1F1F] mt-[100px]'>
				<h1 className='text-[30px] lg:text-[50px] bg-[#1A1A1A] rounded-[15px] px-[25px] py-[20px] w-[100%]'>
					<b>How to Apply</b>
				</h1>

				<div className='mt-[25px] flex justify-around items-center flex-wrap gap-[25px]'>
					<div className='bg-[#1A1A1A] p-[25px] rounded-[15px] lg:w-[23%]'>
						<p>Step 01</p>
						<br />
						<h3 className='text-[20px] bg-[#1F1F1F] w-[100%] p-[25px]'>
							Explore Job Listings
						</h3>
						<br />
						<p>
							Visit our website's "Careers" page to explore the current job
							listings. Review the various roles available and select the
							position that aligns with your skills, experience, and career
							aspirations.
						</p>
						<br />
						<div className='flex items-center gap-[15px]'>
							<img src={down} alt='' />
							<p>Know More</p>
						</div>
					</div>

					<div className='bg-[#1A1A1A] p-[25px] rounded-[15px] lg:w-[23%]'>
						<p>Step 02</p>
						<br />
						<h3 className='text-[20px] bg-[#1F1F1F] w-[100%] p-[25px]'>
							Explore Job Listings
						</h3>
						<br />
						<p>
							Visit our website's "Careers" page to explore the current job
							listings. Review the various roles available and select the
							position that aligns with your skills, experience, and career
							aspirations.
						</p>
						<br />
						<div className='flex items-center gap-[15px]'>
							<img src={down} alt='' />
							<p>Know More</p>
						</div>
					</div>

					<div className='bg-[#1A1A1A] p-[25px] rounded-[15px] lg:w-[23%]'>
						<p>Step 03</p>
						<br />
						<h3 className='text-[20px] bg-[#1F1F1F] w-[100%] p-[25px]'>
							Explore Job Listings
						</h3>
						<br />
						<p>
							Visit our website's "Careers" page to explore the current job
							listings. Review the various roles available and select the
							position that aligns with your skills, experience, and career
							aspirations.
						</p>
						<br />
						<div className='flex items-center gap-[15px]'>
							<img src={down} alt='' />
							<p>Know More</p>
						</div>
					</div>

					<div className='bg-[#1A1A1A] p-[25px] rounded-[15px] lg:w-[23%]'>
						<p>Step 04</p>
						<br />
						<h3 className='text-[20px] bg-[#1F1F1F] w-[100%] p-[25px]'>
							Explore Job Listings
						</h3>
						<br />
						<p>
							Visit our website's "Careers" page to explore the current job
							listings. Review the various roles available and select the
							position that aligns with your skills, experience, and career
							aspirations.
						</p>
						<br />
						<div className='flex items-center gap-[15px]'>
							<img src={down} alt='' />
							<p>Know More</p>
						</div>
					</div>

					<div className='bg-[#1A1A1A] p-[25px] rounded-[15px] lg:w-[23%]'>
						<p>Step 05</p>
						<br />
						<h3 className='text-[20px] bg-[#1F1F1F] w-[100%] p-[25px]'>
							Explore Job Listings
						</h3>
						<br />
						<p>
							Visit our website's "Careers" page to explore the current job
							listings. Review the various roles available and select the
							position that aligns with your skills, experience, and career
							aspirations.
						</p>
						<br />
						<div className='flex items-center gap-[15px]'>
							<img src={down} alt='' />
							<p>Know More</p>
						</div>
					</div>

					<div className='bg-[#1A1A1A] p-[25px] rounded-[15px] lg:w-[23%]'>
						<p>Step 06</p>
						<br />
						<h3 className='text-[20px] bg-[#1F1F1F] w-[100%] p-[25px]'>
							Explore Job Listings
						</h3>
						<br />
						<p>
							Visit our website's "Careers" page to explore the current job
							listings. Review the various roles available and select the
							position that aligns with your skills, experience, and career
							aspirations.
						</p>
						<br />
						<div className='flex items-center gap-[15px]'>
							<img src={down} alt='' />
							<p>Know More</p>
						</div>
					</div>

					<div className='bg-[#1A1A1A] p-[25px] rounded-[15px] lg:w-[23%]'>
						<p>Step 07</p>
						<br />
						<h3 className='text-[20px] bg-[#1F1F1F] w-[100%] p-[25px]'>
							Explore Job Listings
						</h3>
						<br />
						<p>
							Visit our website's "Careers" page to explore the current job
							listings. Review the various roles available and select the
							position that aligns with your skills, experience, and career
							aspirations.
						</p>
						<br />
						<div className='flex items-center gap-[15px]'>
							<img src={down} alt='' />
							<p>Know More</p>
						</div>
					</div>

					<div className='bg-[#1A1A1A] p-[25px] rounded-[15px] lg:w-[23%]'>
						<p>Step 08</p>
						<br />
						<h3 className='text-[20px] bg-[#1F1F1F] w-[100%] p-[25px]'>
							Explore Job Listings
						</h3>
						<br />
						<p>
							Visit our website's "Careers" page to explore the current job
							listings. Review the various roles available and select the
							position that aligns with your skills, experience, and career
							aspirations.
						</p>
						<br />
						<div className='flex items-center gap-[15px]'>
							<img src={down} alt='' />
							<p>Know More</p>
						</div>
					</div>
				</div>
			</div>

			<div className='w-[97%] m-auto border p-[10px] rounded-[15px] border-[#1F1F1F] mt-[100px]'>
				<h1 className='text-[30px] lg:text-[50px] bg-[#1A1A1A] rounded-[15px] px-[25px] py-[20px] w-[100%]'>
					<b>To-Do List</b>
				</h1>

				<div className='mt-[50px] flex items-center justify-around'>
					<div className='flex items-center gap-[25px]'>
						<input
							type='text'
							value={addName}
							onChange={e => setAddName(e.target.value)}
							className='border-[2px] border-[#1F1F1F] h-[50px] w-[300px] rounded-[10px]'
							placeholder=' Add Name'
						/>

						<button
							onClick={() => addNewUsers()}
							className='border-[2px] h-[50px] w-[120px] rounded-[10px] border-[#1F1F1F] text-[#8e8e8e]'
						>
							Add
						</button>
					</div>

					<div className='flex items-center gap-[25px]'>
						<input
							type='text'
							value={editName}
							onChange={e => setEditName(e.target.value)}
							className='border-[2px] border-[#1F1F1F] h-[50px] w-[300px] rounded-[10px]'
							placeholder=' Edit Name'
						/>

						<button
							className='border-[2px] h-[50px] w-[120px] rounded-[10px] border-[#1F1F1F] text-[#8e8e8e]'
							onClick={() => editUser(userX, editName)}
						>
							Save
						</button>
					</div>
				</div>

				<div className='mt-[50px] flex justify-around items-center flex-wrap gap-[25px]'>
					{users.map(el => {
						return (
							<div
								className='lg:w-[24%] bg-[#1A1A1A] p-[25px] rounded-[15px] text-center'
								key={el.id}
							>
								<h1 className='text-[30px]'>
									<b>{el.name}</b>
								</h1>
								<br />
								<div className='flex justify-between items-center'>
									<button
										onClick={() => deleteUser(el.id)}
										className='text-red-700 text-[20px]'
									>
										delete
									</button>
									<button className='text-[20px]' onClick={() => openEdit(el)}>
										Edit
									</button>
								</div>
							</div>
						)
					})}
				</div>
			</div>

			<div className='w-[97%] m-auto border p-[10px] rounded-[15px] border-[#1F1F1F] mt-[100px]'>
				<h1 className='text-[30px] lg:text-[50px] bg-[#1A1A1A] rounded-[15px] px-[25px] py-[20px] w-[100%]'>
					<b>Testimonials</b>
				</h1>

				<div className='mt-[25px] flex justify-around items-center flex-wrap lg:flex-nowrap gap-[25px]'>
					<div className='bg-[#1A1A1A] p-[25px] rounded-[15px] lg:w-[25%]'>
						<h3 className='text-[20px]'>NexGen turned our business around!</h3>
						<br />
						<p>
							Their digital marketing strategies helped us reach new customers
							and increase our revenue by 30% within just a few months. Highly
							recommended!
						</p>
						<br />
						<div className='bg-[#1F1F1F] w-[100%] p-[25px] flex items-center gap-[15px]'>
							<div className='flex items-center'>
								<img src={user1} alt='' />
								<div>
									<p>
										Sarah <br />{' '}
										<span className='text-[#81807E]'>BlueBloom</span>
									</p>
								</div>
							</div>
							<img src={right} alt='' />
						</div>
					</div>

					<div className='bg-[#1A1A1A] p-[25px] rounded-[15px] lg:w-[25%]'>
						<h3 className='text-[20px]'>NexGen turned our business around!</h3>
						<br />
						<p>
							Their digital marketing strategies helped us reach new customers
							and increase our revenue by 30% within just a few months. Highly
							recommended!
						</p>
						<br />
						<div className='bg-[#1F1F1F] w-[100%] p-[25px] flex items-center gap-[15px]'>
							<div className='flex items-center'>
								<img src={user1} alt='' />
								<div>
									<p>
										Sarah <br />{' '}
										<span className='text-[#81807E]'>BlueBloom</span>
									</p>
								</div>
							</div>
							<img src={right} alt='' />
						</div>
					</div>

					<div className='bg-[#1A1A1A] p-[25px] rounded-[15px] lg:w-[25%]'>
						<h3 className='text-[20px]'>NexGen turned our business around!</h3>
						<br />
						<p>
							Their digital marketing strategies helped us reach new customers
							and increase our revenue by 30% within just a few months. Highly
							recommended!
						</p>
						<br />
						<div className='bg-[#1F1F1F] w-[100%] p-[25px] flex items-center gap-[15px]'>
							<div className='flex items-center'>
								<img src={user1} alt='' />
								<div>
									<p>
										Sarah <br />{' '}
										<span className='text-[#81807E]'>BlueBloom</span>
									</p>
								</div>
							</div>
							<img src={right} alt='' />
						</div>
					</div>

					<div className='bg-[#1A1A1A] p-[25px] rounded-[15px] lg:w-[25%]'>
						<h3 className='text-[20px]'>NexGen turned our business around!</h3>
						<br />
						<p>
							Their digital marketing strategies helped us reach new customers
							and increase our revenue by 30% within just a few months. Highly
							recommended!
						</p>
						<br />
						<div className='bg-[#1F1F1F] w-[100%] p-[25px] flex items-center gap-[15px]'>
							<div className='flex items-center'>
								<img src={user1} alt='' />
								<div>
									<p>
										Sarah <br />{' '}
										<span className='text-[#81807E]'>BlueBloom</span>
									</p>
								</div>
							</div>
							<img src={right} alt='' />
						</div>
					</div>
				</div>
			</div>

			<div className='w-[97%] m-auto'>
				<h1 className='text-[30px] lg:text-[50px] bg-[#1A1A1A] rounded-[15px] px-[25px] py-[20px] w-[100%] mt-[100px]'>
					<b>Frequently Asked Questions</b>
				</h1>
				<br />
				<div className='flex justify-around items-center flex-wrap gap-[25px]'>
					<div className='lg:w-[48%]'>
						<div className='bg-[#1A1A1A] p-[25px] rounded-[15px] w-[100%] flex justify-between items-start'>
							<div>
								<p className='text-[20px]'>
									How long does it take to complete a web development project?
								</p>
								<br />
								<hr className='text-[#262626]' />
								<br />
								<p>
									The timeline varies depending on the project's complexity and
									requirements. Our team strives to deliver projects on time
									while maintaining the highest quality standards.
								</p>
							</div>
							<img src={minus} alt='' />
						</div>

						<br />

						<div className='bg-[#1A1A1A] p-[25px] rounded-[15px] w-[100%] flex justify-between items-center'>
							<p className='text-[20px]'>
								Can you handle large-scale mobile app development projects?
							</p>
							<img src={plus} alt='' />
						</div>

						<br />

						<div className='bg-[#1A1A1A] p-[25px] rounded-[15px] w-[100%] flex justify-between items-center'>
							<p className='text-[20px]'>
								Can you handle large-scale mobile app development projects?
							</p>
							<img src={plus} alt='' />
						</div>

						<br />

						<div className='bg-[#1A1A1A] p-[25px] rounded-[15px] w-[100%] flex justify-between items-center'>
							<p className='text-[20px]'>
								Can you handle large-scale mobile app development projects?
							</p>
							<img src={plus} alt='' />
						</div>

						<br />

						<div className='bg-[#1A1A1A] p-[25px] rounded-[15px] w-[100%] flex justify-between items-center'>
							<p className='text-[20px]'>
								Can you handle large-scale mobile app development projects?
							</p>
							<img src={plus} alt='' />
						</div>
					</div>

					<div className='w-[100%] lg:w-[48%] bg-[#1A1A1A] p-[25px] rounded-[15px]'>
						<p className='text-[22px]'>Ask your question</p>
						<br />
						<hr className='text-[#262626]' />
						<br />
						<label className='text-[20px]'>Name</label>
						<br />
						<input
							type='text'
							className='w-[100%] bg-black text-white h-[60px] rounded-[10px]'
							placeholder='  Enter your name'
						/>
						<br />
						<br />
						<br />
						<label className='text-[20px]'>Email</label>
						<br />
						<input
							type='text'
							className='w-[100%] bg-black text-white h-[60px] rounded-[10px]'
							placeholder='  Enter your email'
						/>
						<br />
						<br />
						<br />
						<label className='text-[20px]'>Your Question</label>
						<br />
						<textarea
							className='w-[100%] bg-black text-white h-[120px] rounded-[10px]'
							placeholder='  Enter Your Question Here .....'
						></textarea>
						<br />
						<br />
						<br />
						<button className='text-black w-[100%] bg-[#CE7D63] rounded-[10px] h-[60px]'>
							Send Your Message
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Careers

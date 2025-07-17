import React from 'react'
import { Accordion, AccordionItem } from "@heroui/accordion";


const Card3 = () => {
    const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <div className='w-[95%] mx-auto border-2 my-[30px] border-[#1A1A1A] p-[20px] rounded-2xl'>
            <div className='bg-[#1A1A1A] lg:flex grid gap-[20px] justify-between p-[20px] items-center rounded-2xl'>
                <p className='font-black text-4xl'>Frequently Asked Questions</p>
                <div className='flex items-center gap-[10px]'>
                    <button className='w-[40px] h-[40px] p-[6px] rounded-[50%] border'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </button>
                    <p className='font-black text-2xl'>View All</p>
                </div>
            </div>
            <div className='lg:flex justify-between items-center mt-[30px] '>
                <div className='lg:w-[60%]'>
                    <Accordion variant="shadow">
                        <AccordionItem className='p-[20px] bg-[#1A1A1A]  rounded-[10px] my-[20px]' key="1" aria-label="Accordion 1" title="How long does it take to complete a web development project?">
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem  className='p-[20px] bg-[#1A1A1A]   rounded-[10px] my-[20px] ' key="2" aria-label="Accordion 2" title="Can you handle large-scale mobile app development projects?">
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem className='p-[20px] bg-[#1A1A1A]  rounded-[10px] my-[20px]' key="3" aria-label="Accordion 3" title="Can you integrate third-party APIs into our mobile app?">
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem className='p-[20px] bg-[#1A1A1A]  rounded-[10px] my-[20px]' key="4" aria-label="Accordion 3" title="How do you ensure cross-platform compatibility for mobile apps?">
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem className='p-[20px] bg-[#1A1A1A]  rounded-[10px] my-[20px]' key="5" aria-label="Accordion 3" title="What is your approach to user experience (UX) design?">
                            {defaultContent}
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className='bg-[#1A1A1A] lg:w-[38%] rounded-2xl p-[20px]'>
                    <p className='text-2xl font-bold my-[20px]'>Ask your question</p>
                    <hr /><br />
                    <label htmlFor="">Name</label> <br />
                    <input className='p-[10px] w-[100%] bg-black rounded-[5px] my-[10px]' type="text" placeholder='Enter your name' />
                    <label htmlFor="">Email</label><br />
                    <input className='p-[10px] w-[100%] bg-black rounded-[5px] my-[10px]'  type="text" placeholder='Enter your email' /> 
                    <label htmlFor="">Your Question</label> <br />
                    <textarea className='p-[10px]  w-[100%] bg-black rounded-[5px] my-[10px]'  placeholder='Enter Your Question Here .....'></textarea>
                    <button className='w-[100%] p-[10px] font-black text-2xl bg-[#CE7D63] text-black rounded-[10px]'>Send Your Message</button>
                </div>
            </div>
        </div>
    )
}

export default Card3
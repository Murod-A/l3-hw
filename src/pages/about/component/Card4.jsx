import React from 'react'

const Card4 = () => {
    return (
        <div className='w-[95%] mx-auto border-2 my-[30px] border-[#1A1A1A] p-[20px] rounded-2xl'>
            <div className='bg-[#1A1A1A] p-[30px] flex justify-between rounded-2xl'>
                <p className='font-black text-4xl'>Testimonials</p>
                <div className='flex gap-[10px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p>ALL Testimonials</p>
                </div>
            </div>
        </div>
    )
}

export default Card4
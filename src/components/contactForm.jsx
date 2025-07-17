import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

const emailTabs = [
  { label: 'General Inquiries', value: 'INFO@NEXGEN.COM' },
  { label: 'Business Collaborations', value: 'PARTNERSHIPS@NEXGEN.COM' },
  { label: 'Job Opportunities', value: 'CAREERS@NEXGEN.COM' },
];

const ContactForm = () => {
  const [activeTab, setActiveTab] = useState('EMAILS');

  return (
    <div className="flex flex-col lg:flex-row gap-6 bg-[#121212] text-white p-6 rounded-xl">
     
      <div className="w-full lg:w-1/2 space-y-4">
       
        <div className="flex space-x-2">
          {['PHONE NUMBER', 'EMAILS', 'OFFICE LOCATIONS'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md ${
                activeTab === tab
                  ? 'bg-[#d47b5b] text-black font-semibold'
                  : 'bg-[#1f1f1f] text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        
        {activeTab === 'EMAILS' && (
          <div className="space-y-6">
            {emailTabs.map((e, id) => (
              <div key={id}>
                <p className="text-gray-400 mb-2">{e.label}</p>
                <div className="flex justify-between items-center bg-[#1f1f1f] px-4 py-4 rounded-md">
                  <span className="font-mono font-bold">{e.value}</span>
                  <div className="w-10 h-10 rounded-full border border-[#cba08d] flex items-center justify-center">
                    <ArrowUpRight className="text-[#cba08d] w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

     
      <div className="w-full lg:w-1/2 space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 text-sm tracking-widest">FIRST NAME</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="w-full bg-transparent border border-[#2e2e2e] px-4 py-3 rounded-md focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 text-sm tracking-widest">LAST NAME</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="w-full bg-transparent border border-[#2e2e2e] px-4 py-3 rounded-md focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm tracking-widest">EMAIL</label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full bg-transparent border border-[#2e2e2e] px-4 py-3 rounded-md focus:outline-none"
          />
        </div>

        <div className="flex gap-4 items-end">
          <div className="flex items-center border border-[#2e2e2e] rounded-md px-3 py-2">
            <img
              src="https://flagcdn.com/w40/in.png"
              alt="IN"
              className="w-6 h-4 mr-2"
            />
            <ChevronDown className="text-white w-4 h-4" />
          </div>
          <div className="flex-1">
            <label className="block mb-1 text-sm tracking-widest">PHONE NUMBER</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="w-full bg-transparent border border-[#2e2e2e] px-4 py-3 rounded-md focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm tracking-widest">MESSAGE</label>
          <textarea
            rows="4"
            placeholder="Enter your Message"
            className="w-full bg-transparent border border-[#2e2e2e] px-4 py-3 rounded-md resize-none focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" className="form-checkbox rounded bg-transparent border-gray-500" />
          <span className="text-sm text-gray-400">
            I agree with Terms of Use and Privacy Policy
          </span>
        </div>

        <button className="mt-4 flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#d47b5b] hover:bg-[#c56e4d] transition-all text-black font-semibold w-fit">
          SEND YOUR MESSAGE <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ContactForm;

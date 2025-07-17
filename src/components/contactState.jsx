import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

const stats = [
  { label: 'CLIENTS', value: '200+' },
  { label: 'PROJECTS', value: '280+' },
  { label: 'HAPPY CLIENTS', value: '100%' },
  { label: 'FOLLOWER', value: '420K' },
  { label: 'Years Of Experience', value: '10+' },
];

const services = [
  'MARKETING',
  'WEBSITE DESIGN',
  'BRANDING',
  'WEBSITE DEVELOPMENT',
  'MOBILE APP DEVELOPMENT',
  'DIGITAL',
];

const ContactStats = () => {
  return (
    <div className="flex flex-col lg:flex-row text-white bg-[#121212] rounded-xl overflow-hidden">

      <div className="flex-1 p-10 flex flex-col justify-between">
        <div>
          <h1 className="text-5xl font-bold mb-2">GET IN TOUCH</h1>
          <div className="flex items-center gap-2 mb-8">
            <button className="w-12 h-12 rounded-full border-2 border-[#F3937C] flex items-center justify-center">
              <ArrowRight className="text-[#F3937C]" />
            </button>
            <span className="text-[#F3937C] text-lg">START A PROJECT</span>
          </div>
          <h2 className="text-5xl font-bold mb-6">WITH US TODAY!</h2>
          <p className="text-gray-400 max-w-xl">
            At NexGen, we value your inquiries, feedback, and collaborations. Whether you are interested in our digital services, have questions about our projects, or want to explore potential partnerships, we encourage you to reach out to our dedicated team.
          </p>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-gray-400 flex flex-wrap gap-x-6 gap-y-2">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-1">
              <span>{service}</span>
              {index < services.length - 1 && <span className="text-[#F3937C]">•</span>}
            </div>
          ))}
        </div>
      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 bg-[#161616] p-6 w-full lg:w-[400px]">
        {stats.map((item, index) => (
          <div key={index} className="bg-[#1e1e1e] p-6 rounded-lg text-center">
            <p className="text-sm text-gray-400 mb-1 tracking-wide">{item.label}</p>
            <p className="text-3xl font-semibold text-[#F3937C]">{item.value}</p>
          </div>
        ))}
        <div className="col-span-2 bg-[#1e1e1e] p-6 rounded-lg flex justify-center items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-[#F3937C]">
            <ArrowDown className="text-white w-4 h-4" />
          </div>
          <span className="text-white">REACH US</span>
        </div>
      </div>
    </div>
  );
};

export default ContactStats;

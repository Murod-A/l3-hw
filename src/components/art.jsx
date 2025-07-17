import React from 'react';

const ArticleHeader = () => {
  return (
    
    <div className="flex flex-col lg:flex-row bg-gray-900 text-gray-100 rounded-2xl overflow-hidden">
      
      <div className="flex-1 p-8 lg:p-16 flex items-start rounded-xl justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Mastering the Art
          <br />
          <span className="block mt-2">of Minimalistic Design</span>
        </h1>
        <button className="mt-8 inline-flex items-center px-6 py-3 border border-orange-500 text-orange-500 font-medium rounded-full hover:bg-orange-500 hover:text-white transition">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg> 
          <span className="mr-2"> Start a Project</span>
        </button>
      </div>

     
      <div className="w-full lg:w-80 bg-gray-800 p-6 lg:p-8 space-y-4">
        {[
          { label: 'AUTHOR', value: 'SOPHIA ROBERTS' },
          { label: 'Published Date', value: '25TH OCTOBER 2023' },
          { label: 'Category', value: 'DESIGN' },
          { label: 'Read Time', value: '5 MINUTES' },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-gray-700 rounded-lg px-4 py-3 flex justify-between items-center"
          >
            <span className="text-xs uppercase text-gray-400">{item.label}</span>
            <span className="text-sm font-semibold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleHeader;

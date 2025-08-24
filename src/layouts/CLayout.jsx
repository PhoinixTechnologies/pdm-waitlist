import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CourseLayout = (props) => {
    return ( 
       <main className="p-4 px-1">
      <div className="flex items-start p-3 gap-3 border border-gray-300 rounded-lg w-fit max-w-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
        <img 
          src={props.img } 
          alt="Course illustration" 
          className="w-1/2 object-cover"
        />
        
        <aside className="flex flex-col w-1/2 gap-2">
          <div className="flex items-start justify-between">
            <h1 className="text-black font-poppins text-lg font-bold leading-tight pr-2">
              {props.title}
            </h1>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 20 21" 
              fill="none"
              className="flex-shrink-0 mt-1"
              aria-label="Bookmark"
            >
              <path 
                d="M3.33325 15.4841V8.58969C3.33325 5.56188 3.33325 4.04798 4.30956 3.10736C5.28588 2.16675 6.85722 2.16675 9.99992 2.16675C13.1426 2.16675 14.714 2.16675 15.6903 3.10736C16.6666 4.04798 16.6666 5.56188 16.6666 8.58969V15.4841C16.6666 17.4057 16.6666 18.3664 16.0226 18.7103C14.7753 19.3762 12.4359 17.1544 11.3249 16.4854C10.6806 16.0974 10.3584 15.9034 9.99992 15.9034C9.64142 15.9034 9.31925 16.0974 8.67492 16.4854C7.56392 17.1544 5.22448 19.3762 3.97729 18.7103C3.33325 18.3664 3.33325 17.4057 3.33325 15.4841Z" 
                stroke="#0000FF" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M3.33325 6.33325H16.6666" 
                stroke="#0000FF" 
                strokeWidth="1.5"
              />
            </svg>
          </div>
          
          <p className="text-gray-400 font-poppins text-base font-medium leading-relaxed">
            {props.subtitle}
          </p>
          
          <div className="flex items-center justify-between mt-2">
            <h2 className={`text-blue-600 font-poppins text-xl font-semibold ${
              props.price === 'Free' ? 'uppercase': 'lowercase'}`}>
              {props.price}
            </h2>
            <button className={`rounded-md px-4 py-1 font-poppins text-base font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
              props.status === 'Enroll Now' ? 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 text-white' : 'bg-white text-[#00f] border cursor-not-allowed'}`}>
              {props.status}
            </button>
          </div>
        </aside>
      </div>
    </main>
     );
}
 
export default CourseLayout;
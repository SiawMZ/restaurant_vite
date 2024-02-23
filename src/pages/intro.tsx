//import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Intro = () => {
  const subtitle='{Discover More}'
  const title = ' Appetite ():';
  const [animatedTitle, setAnimatedTitle] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= title.length) {
        setAnimatedTitle(title.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the interval duration as needed
    return () => clearInterval(interval);
  }, []);

    return (
        <>
        
            <div className="absolute inset-0">
                    
            <img src="https://images.pexels.com/photos/5848127/pexels-photo-5848127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Background Image"
                className="absolute object-cover w-full h-full"/>
                <div className="absolute inset-0 bg-gray-100 opacity-70"></div>
                
            </div>

            <div className="relative h-screen">
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-mono whitespace-nowrap">

              def {animatedTitle}
          </div>
      </div>

                <div className='absolute inset-0 flex items-center justify-center
                 text-slate-900 text-5xl
                 hover:shadow-2xl shadow-slate-400'>
                    <Link to ="/home" className='font-mono text-5xl'>
                        {subtitle}
                    </Link>
                </div>
        </>
    );
    };


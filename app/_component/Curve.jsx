import React from 'react'


function curve() {
  return (
    <>
    {/* Glowing blue curve */}
      <div className ="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[1200px] h-100">
        <div className="relative w-full h-full">
          {/* Outer glow*/} 
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 200">
            <path
              d="M 60 160 Q 300 40 540 160"
              stroke="url(#blueGradient1)"
              strokeWidth="12"
              fill="none"
              className="opacity-40 blur-md"
            />
            <defs>
              <linearGradient id="blueGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>

          {/* Main curve */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 200">
            <path
              d="M 60 160 Q 300 40 540 160"
              stroke="url(#blueGradient2)"
              strokeWidth="6"
              fill="none"
              className="opacity-100"
            />
            <defs>
              <linearGradient id="blueGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner bright line */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 200">
            <path
              d="M 60 160 Q 300 40 540 160"
              stroke="url(#whiteGradient)"
              strokeWidth="2"
              fill="none"
              className="opacity-90"
            />
            <defs>
              <linearGradient id="whiteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="white" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      </>
      
  )
}

export default curve
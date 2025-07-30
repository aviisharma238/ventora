import React from 'react'


function Card() {
  return (
    <section className="container mx-auto py-8 p-25 ">
        <div className="bg-blue-600 text-[#171717] rounded-xl p-14 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl md:text-5xl font-bold">
              Book a Meeting to Discuss
              <br />
              Your Project with us.
            </h3>
          </div>
          <button className="bg-[#171717] text-[#efefef] text-1xl hover:bg-gray-800 rounded-full px-4 py-3 ">Contact</button>
        </div>
      </section>
  )
}

export default Card
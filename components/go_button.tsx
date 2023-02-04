import React from 'react'

function GoButton() {


  
  return (
    <div className='flex justify-center p-8'>
        <div className='grid grid-cols-2 gap-3 content-around w-1/2'>
            <button className='bg-transparent hover:bg-blue-500 bg-league_gold text-white font-semibold hover:text-white py-2 px-4 border border-league_gold hover:border-transparent rounded'> Randomize </button>
            <button className='bg-transparent hover:bg-blue-500 bg-league_gold text-white font-semibold hover:text-white py-2 px-4 border border-league_gold hover:border-transparent rounded'> Reset </button>
        </div>
    </div>
  )
}

export default GoButton
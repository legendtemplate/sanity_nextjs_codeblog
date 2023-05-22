import React from 'react'

interface Data {
    title:string
}

export default function page(props :Data) {
  return (
    <div className="tag">
 <p className='pt-2 pb-4 text-black'>Important</p>
</div>
  )
}

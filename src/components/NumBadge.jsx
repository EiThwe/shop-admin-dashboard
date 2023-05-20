import React from 'react'

const NumBadge = ({count}) => {
  return (
    <div className='px-2 py-1 rounded-xl bg-blue-400 text-white'>{count}</div>
  )
}

export default NumBadge
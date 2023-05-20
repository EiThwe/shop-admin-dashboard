import React from 'react'

const CategoryBadge = ({data}) => {
  return (
    <span className="px-[6px] py-0 rounded-xl bg-[#f9f9f9] tracking-wide text-[12px] flex justify-center items-center">{data}</span>
  )
}

export default CategoryBadge
import React from 'react'
import { vendorProfileTableRowData } from '../utils/data'
import TableBodyRowVendorProfile from './TableBodyRowVendorProfile'

const TableBodyVendorProfile = () => {
  return (
    <tbody className="">
    {vendorProfileTableRowData.map((data, index) => (
      <TableBodyRowVendorProfile key={index} {...data} />
    ))}
  </tbody>
  )
}

export default TableBodyVendorProfile
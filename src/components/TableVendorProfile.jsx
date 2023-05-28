import React from 'react'
 
import TableBody from './TableBody'
import { theadDataVendorProfile } from '../utils/data'
import TableHeadVendorProfile from './TableHeadVendorProfile'
import TableBodyVendorProfile from './TableBodyVendorProfile'

const TableVendorProfile = () => {
  return (
    <table className=" border-separate border-spacing-0 w-full">
    <TableHeadVendorProfile theadData={theadDataVendorProfile} textSize={"text-xs"}/>
    <TableBodyVendorProfile/>
  </table>
  )
}

export default TableVendorProfile
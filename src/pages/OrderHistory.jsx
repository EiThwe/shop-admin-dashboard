import React from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import { tbodyorderHistoryData, theadOrderHistoryData } from '../utils/orderHistoryData'
import TableComponent from '../components/TableComponent'
import TableBodyNewOrderRow from '../components/TableBodyNewOrderRow'
import TableBodyOrderHistoryRow from '../components/TableBodyOrderHistoryRow'

const OrderHistory = () => {
  return (
    <Layout>
      <div className="w-full p-8 bg-gray-100 min-h-full">
        <PageHeader
          header={"Order History"}
          pageName={"History"}
          pathName={""}
          onClick={""}
        />
        <TableComponent theadData={theadOrderHistoryData} showing={20} entries={36}>
          {tbodyorderHistoryData.map((data, index) => (
            <TableBodyOrderHistoryRow key={index} {...data} />
          ))}
        </TableComponent>
      </div>
      <Footer />
    </Layout>
  )
}

export default OrderHistory
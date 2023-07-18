import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'
import TableComponent from '../components/TableComponent'

import { tbodyListProductRowData, theadListProductData } from '../utils/listProductData'
import TableBodyListProductRow from '../components/TableBodyListProductRow'

const ListProduct = () => {
  return (
    <Layout>
        <div className="w-full p-8 bg-gray-100 min-h-full">
        <PageHeader
          header={"Products"}
          pageName={"products"}
          pathName={"/add-product"}
          button={"Add Product"}
          onClick={""}
        />
        <TableComponent theadData={theadListProductData} showing={20} entries={57}>
          {tbodyListProductRowData.map((data, index) => (
            <TableBodyListProductRow key={index} {...data} />
          ))}
        </TableComponent>
      </div>
      <Footer/>
    </Layout>
  )
}

export default ListProduct
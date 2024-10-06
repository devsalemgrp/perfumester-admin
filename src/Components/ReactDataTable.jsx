import React from 'react'
import DataTable from 'react-data-table-component';

// Sample data for the latest orders
const data = [
  {
    id: 1,
    productName: 'Perfume A',
    personName: 'John Doe',
    location: 'New York',
    dateTime: '2024-10-05 14:30',
    pieces: 2,
    amount: 50,
    status: 'Shipped',
  },
  {
    id: 2,
    productName: 'Perfume B',
    personName: 'Jane Smith',
    location: 'Los Angeles',
    dateTime: '2024-10-05 15:00',
    pieces: 1,
    amount: 30,
    status: 'Pending',
  },
  {
    id: 3,
    productName: 'Perfume C',
    personName: 'Alice Johnson',
    location: 'Chicago',
    dateTime: '2024-10-05 16:00',
    pieces: 3,
    amount: 75,
    status: 'Delivered',
  },
  // Add more orders as needed
];

// Define columns for the data table
const columns = [
  {
    name: (
      <div className='w-96 text-center'>
        <h1 className='w-full'>Product Name</h1>
      </div>
    ),
    selector: (row) => row.productName,
    sortable: true,
    cell:(row)=>(
      <div className='w-full'>
        <h1 className='w-full text-center'>{row.productName}</h1>
      </div>
    )
  },
  {
    name: (
      <div className='w-96'>
        <h1 className='w-full'>Name Of Person</h1>
      </div>
    ),
    selector: (row) => row.personName,
    sortable: true,
  },
  {
    name: 'Location',
    selector: (row) => row.location,
    sortable: true,
  },
  {
    name: 'Date - Time',
    selector: (row) => row.dateTime,
    sortable: true,
  },
  {
    name: (
      <div className='w-full text-center'>
        <h1>Pieces</h1>
      </div>
    ),
    selector: (row) => row.pieces,
    sortable: true,
    cell:(row)=>(
      <div className='w-full'>
        <h1 className='text-center'>{row.pieces}</h1>
      </div>

    )
  },
  {
    name: (
      <div className='w-full text-center'>
        <h1>Amount</h1>
      </div>
    ),
    selector: (row) => row.amount,
    sortable: true,
    cell:(row)=>(
      <div className='w-full'>
        <h1 className='text-center'>${row.amount}</h1>
      </div>
    )
  },
  {
    name: (
      <div className='w-full text-center'>
        <h1>Status</h1>
      </div>
    ),
    selector: (row) => row.status,
    sortable: true,
    cell:(row)=>(
      <div className='w-full'>
        <div className={`p-2 px-5  rounded-lg ${row.status === 'Shipped'?'bg-green-400':row.status === 'Pending'?'bg-yellow-200':'bg-red-500'}`}>
          {row.status}
        </div>
      </div>
    )
  },
];


// Define custom styles for the data table
const customStyles = {
  headRow: {
    style: {
      backgroundColor: '#323D4E', // Header background color
      color: '#FFFFFF', // Header text color
      fontWeight: 'bold', // Header text weight
      fontSize:'20px'
    },
  },
  rows: {
    style: {
      color: '#FFFFFF', // Default row text color
      backgroundColor: 'black', // Default row background color
      borderBottom:'1px solid white',
      
    },
  },
  cells: {
    style: {
      padding: '12px', // Cell padding
      fontSize:'20px'
    },
  },
};

const ReactDataTable = () => {
  return (
    <div style={{ overflowX: 'auto' }}>
      
      <DataTable
        customStyles={customStyles}
        columns={columns}
        data={data}
        fixedHeader
        highlightOnHover // Highlight row on hover
        pointerOnHover // Change cursor on hover
      />
    </div>
  )
}

export default ReactDataTable
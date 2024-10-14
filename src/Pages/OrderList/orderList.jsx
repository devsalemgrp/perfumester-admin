import React, { useState } from 'react'
import ReactDataTable from '../../Components/ReactDataTable'

const OrderList = () => {

    const [isLatestOrders, setIsLatestOrders] = useState(false);

    const orders = [
        {
          orderNumber: "#2132312",
          numberOfProducts: 3,
          date: "2024-10-01",
          itemsInside: ["Perfume 1", "Perfume 2", "Perfume 3"],
          amount: "$150.00",
          status: "Completed"
        },
        {
          orderNumber: "#2132313",
          numberOfProducts: 1,
          date: "2024-09-20",
          itemsInside: ["Perfume 4"],
          amount: "$50.00",
          status: "Ordered"
        },
        {
          orderNumber: "#2132314",
          numberOfProducts: 2,
          date: "2024-09-15",
          itemsInside: ["Perfume 5", "Perfume 6"],
          amount: "$100.00",
          status: "Completed"
        },
        {
          orderNumber: "#2132315",
          numberOfProducts: 1,
          date: "2024-10-05",
          itemsInside: ["Perfume 7"],
          amount: "$50.00",
          status: "Ordered"
        },
        {
          orderNumber: "#2132316",
          numberOfProducts: 4,
          date: "2024-09-10",
          itemsInside: ["Perfume 8", "Perfume 9", "Perfume 10", "Perfume 11"],
          amount: "$200.00",
          status: "Completed"
        },
        {
          orderNumber: "#2132317",
          numberOfProducts: 2,
          date: "2024-10-03",
          itemsInside: ["Perfume 12", "Perfume 13"],
          amount: "$100.00",
          status: "Ordered"
        }
      ];
      
    return (
        <div className='w-full p-14'>
                <div>
                    <h1 className='text-4xl'>Order List</h1>
                    <div className='bg-black mt-10 p-10 rounded-lg'>
                        <h1 className='text-3xl mb-10'>{isLatestOrders? "Latest Orders":"Received Orders"}</h1>

                        <div className='flex flex-row gap-x-5 my-5'>
                            <div className={`px-5 py-2 text-black cursor-pointer  ${isLatestOrders?'bg-slate-500':'bg-white'}`}onClick={()=>setIsLatestOrders(true)}>
                                Latest Orders 
                            </div>
                            <div className={`px-5 py-2 text-black cursor-pointer  ${!isLatestOrders?'bg-slate-500':'bg-white'}`} onClick={()=>setIsLatestOrders(false)}>
                                Received Orders
                            </div>
                        </div>
                        {isLatestOrders && (<ReactDataTable/>)}
                        {!isLatestOrders && (<ReactDataTable dataEntered={orders}/>)}
                    </div>
                </div>

        </div>
        
    )
}

export default OrderList
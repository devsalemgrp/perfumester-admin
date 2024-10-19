import React, { useEffect, useState } from 'react';
import OrdersDataTable from './DataTable/ordersDataTable';
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersData } from '../../Redux/Orders/OrdersActions';

const OrderList = () => {
  const [isLatestOrders, setIsLatestOrders] = useState(false);

  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store.ordersReducer);

  useEffect(() => {
    dispatch(getOrdersData());
  }, [dispatch]);

  return (
    <div className="w-full p-14">
      <div>
        <h1 className="text-4xl">Order List</h1>
        <div className="bg-black mt-10 p-10 rounded-lg">
          <h1 className="text-3xl mb-10">
            {isLatestOrders ? 'Latest Orders' : 'Received Orders'}
          </h1>

          <div className="flex flex-row gap-x-5 my-5">
            <div
              className={`px-5 py-2 text-black cursor-pointer  ${
                isLatestOrders ? 'bg-slate-500' : 'bg-white'
              }`}
              onClick={() => setIsLatestOrders(true)}
            >
              Latest Orders
            </div>
            <div
              className={`px-5 py-2 text-black cursor-pointer  ${
                !isLatestOrders ? 'bg-slate-500' : 'bg-white'
              }`}
              onClick={() => setIsLatestOrders(false)}
            >
              Received Orders
            </div>
          </div>
          {isLatestOrders && <OrdersDataTable dataEntered={orders} />}
          {!isLatestOrders && <OrdersDataTable dataEntered={orders} />}
        </div>
      </div>
    </div>
  );
};

export default OrderList;

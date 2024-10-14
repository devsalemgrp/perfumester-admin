import React from 'react'
import ReactDataTable from '../../Components/ReactDataTable'

const Subscriptions = () => {

    const subscriptions = [
        {
            personName: "John Doe",
            subscriptionType: "Midrange",
            date: "2024-01-15",
            price: 29.99,
            action: ""
        },
        {
            personName: "Jane Smith",
            subscriptionType: "1 Scent",
            date: "2024-02-10",
            price: 15.99,
            action: ""
        },
        {
            personName: "Emily Johnson",
            subscriptionType: "Standard",
            date: "2024-03-05",
            price: 19.99,
            action: ""
        },
        {
            personName: "Michael Brown",
            subscriptionType: "Highend",
            date: "2024-03-20",
            price: 49.99,
            action: ""
        },
        {
            personName: "Sarah Davis",
            subscriptionType: "2 Scents",
            date: "2024-04-01",
            price: 24.99,
            action: ""
        },
        {
            personName: "Sarah Davis",
            subscriptionType: "2 Scents",
            date: "2024-04-01",
            price: 24.99,
            action: ""
        },
        {
            personName: "Sarah Davis",
            subscriptionType: "2 Scents",
            date: "2024-04-01",
            price: 24.99,
            action: ""
        },
        {
            personName: "Sarah Davis",
            subscriptionType: "2 Scents",
            date: "2024-04-01",
            price: 24.99,
            action: ""
        },
        {
            personName: "Sarah Davis",
            subscriptionType: "2 Scents",
            date: "2024-04-01",
            price: 24.99,
            action: ""
        },
        {
            personName: "Sarah Davis",
            subscriptionType: "2 Scents",
            date: "2024-04-01",
            price: 24.99,
            action: ""
        },
        {
            personName: "Sarah Davis",
            subscriptionType: "2 Scents",
            date: "2024-04-01",
            price: 24.99,
            action: ""
        },
        {
            personName: "Sarah Davis",
            subscriptionType: "2 Scents",
            date: "2024-04-01",
            price: 24.99,
            action: ""
        },
        {
            personName: "Sarah Davis",
            subscriptionType: "2 Scents",
            date: "2024-04-01",
            price: 24.99,
            action: ""
        }
    ];
    
  return (
    <div className='w-full p-14'>
          <div>
              <h1 className='text-4xl'>Subscriptions</h1>
              <div className='bg-black mt-10 p-10 rounded-lg'>

                  <ReactDataTable dataEntered={subscriptions} />
              </div>
          </div>

        </div>
  )
}

export default Subscriptions
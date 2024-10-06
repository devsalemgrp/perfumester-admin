import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-full h-full bg-[#382626] max-h-max'>
        <div className='w-full flex flex-col py-5 px-5 gap-5'>
            <div className='flex flex-col items-center justify-center '>
                <h1 className='text-2xl richmond_display'>PERFUMSTER</h1>
                <h4 className='text-centerter'>Decanted Perfumes</h4>
            </div>

            <div className='flex flex-col gap-2 items-start justify-center'>
                <h1 className='w-full py-2 pl-3 hover:bg-[#504040] rounded-md'>Dashboard</h1>
                <h1 className='w-full py-2 pl-3 hover:bg-[#504040] rounded-md'>Home Page</h1>
                <h1 className='w-full py-2 pl-3 hover:bg-[#504040] rounded-md'>Men Page</h1>
                <h1 className='w-full py-2 pl-3 hover:bg-[#504040] rounded-md'>Women Page</h1>
                <h1 className='w-full py-2 pl-3 hover:bg-[#504040] rounded-md'>New Page</h1>
                <h1 className='w-full py-2 pl-3 hover:bg-[#504040] rounded-md'>Orders List</h1>
                <h1 className='w-full py-2 pl-3 hover:bg-[#504040] rounded-md'>Products Stock</h1>
            </div>
            
            <hr />

            <div className='flex flex-col gap-7 items-start justify-center'>
                <h1 className='py-2 pl-3'>Packages</h1>
                
                <div className='flex flex-col items-start justify-center gap-2'>
                    <h1 className='w-full py-2 pl-3 hover:bg-[#504040] rounded-md'>Package Details</h1>
                    <h1 className='w-full py-2 pl-3 hover:bg-[#504040] rounded-md'>Manage Subscriptions </h1>
                </div>
            </div>

            <hr />

            <div className='flex flex-col gap-2 items-start justify-center'>
                <h1 className='w-full py-2 pl-3 hover:bg-[#504040] rounded-md'>Settings</h1>
                <h1 className='w-full py-2 pl-3 hover:bg-[#504040] rounded-md'>Logout</h1>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
import React, { useEffect } from 'react'
import ReactDataTable from '../../Components/ReactDataTable'
import { useDispatch, useSelector } from 'react-redux';
import { editPackageData, getPackagesData } from '../../Redux/Packages/PackagesActions';

const PackagesDetails = () => {

    const perfumePackages = [
        {
            title: "2 Scents - Standard",
            subscriptionType: "Standard",
            description: "Enjoy two delightful scents each month, carefully curated for you.",
            action: ""
        },
        {
            title: "3 Scents - Midrange",
            subscriptionType: "Midrange",
            description: "Discover three unique fragrances per month for a refreshing experience.",
            action: ""
        },
        {
            title: "5 Scents - Highend",
            subscriptionType: "Highend",
            description: "Indulge in five luxurious scents every month, perfect for connoisseurs.",
            action: ""
        },
        {
            title: "2 Scents - Premium",
            subscriptionType: "Standard",
            description: "Two premium scents delivered to your doorstep each month.",
            action: ""
        },
        {
            title: "3 Scents - Exclusive",
            subscriptionType: "Midrange",
            description: "Explore exclusive fragrances tailored just for you, delivered monthly.",
            action: ""
        }
    ];



    const dispatch = useDispatch();
    const { packages, loading , editPackagesData } = useSelector((store) => store.packagesReducer);

    useEffect(()=>{
        dispatch(getPackagesData());
    },[dispatch])

    
    const handleEditPackage=(updateData)=>{
        
        dispatch(editPackageData(updateData));
    }
  return (
        <div className='w-full p-14'>
          <div>
              <h1 className='text-4xl'>Package Details</h1>
              <div className='mt-5'>
                    <select
                        className='w-full text-white bg-transparent border rounded-md p-2'
                    >
                        <option className='text-black' value="Standard">Standard</option>
                        <option className='text-black' value="Midrange">Midrange</option>
                        <option className='text-black' value="Highend">Highend</option>
                    </select>
                </div>
              <div className='bg-black mt-5 p-10 rounded-lg'>
                  <ReactDataTable dataEntered={perfumePackages} editProduct={handleEditPackage}/>
              </div>
          </div>

        </div>  
    )
}

export default PackagesDetails
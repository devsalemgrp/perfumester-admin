import React from 'react'
import ReactDataTable from '../../Components/ReactDataTable'

const Products = () => {

    const products = [
        {
          productPhoto: 'https://example.com/photos/product1.jpg',
          productName: 'Floral Essence',
          description: 'A light and refreshing perfume with floral notes.',
          price: 49.99,
          status: 'Available'
        },
        {
          productPhoto: 'https://example.com/photos/product2.jpg',
          productName: 'Citrus Breeze',
          description: 'A vibrant perfume with hints of citrus and mint.',
          price: 59.99,
          status: 'Out of Stock'
        },
        {
          productPhoto: 'https://example.com/photos/product3.jpg',
          productName: 'Midnight Rose',
          description: 'A deep, romantic fragrance with rose and musk undertones.',
          price: 69.99,
          status: 'Available'
        },
        {
          productPhoto: 'https://example.com/photos/product4.jpg',
          productName: 'Ocean Mist',
          description: 'A fresh and clean perfume inspired by the ocean breeze.',
          price: 39.99,
          status: 'Available'
        },
        {
          productPhoto: 'https://example.com/photos/product5.jpg',
          productName: 'Vanilla Sky',
          description: 'A warm and inviting scent with rich vanilla notes.',
          price: 54.99,
          status: 'Limited Edition'
        }
    ];
      
    return (
        <div className='w-full p-14'>
                    <div>
                        <h1 className='text-3xl'>Product Stock</h1>
                        <div className='bg-black mt-10 p-10 rounded-lg'>
                            <div className='flex flex-row items-center justify-between mb-10'>
                                <h1 className='text-3xl'>My Stock</h1>

                                <div className='p-2 px-5 bg-[#323d4e] rounded-md flex flex-row gap-2 items-center cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                                        <path d="M9 5.75712H5.14286V9.61426H3.85714V5.75712H0V4.4714H3.85714V0.614258H5.14286V4.4714H9V5.75712Z" fill="white" style={{fill:'white',fillOpacity:1}}/>
                                    </svg>
                                    <span>Add Product </span>
                                </div>
                            </div>
                            

                            <ReactDataTable dataEntered={products}/>
                        </div>
                    </div>

        </div>
    )
}

export default Products
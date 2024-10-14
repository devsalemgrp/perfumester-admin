import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'

const HeroSectionModal = ({isOpenModal,closeModal,data}) => {

    const [updatedData , setUpdatedData] = useState(data);

    const customStyles = {
        content: {
          width:'75%',
          height:'75%',
          margin:'auto',
          padding:'0'
        },
      }

    const handleInputChange = (e , key) => {
        //Implementation of change 
    }
    
    const onSubmit=(event)=>{
        closeModal('hero');
    }
    
    useEffect(()=>{ console.log({data:data}) },[])

    // if(!updatedData || Object.keys(updatedData).length === 0) return null;
  return (

    <Modal
        isOpen={isOpenModal.hero}
        onRequestClose={closeModal}
        style={customStyles}
        >
        <div className='bg-[#313131] w-full h-full text-white p-3'>
            <h1 className='text-4xl'>Edit Hero Section</h1>

            <form onSubmit={onSubmit} className='my-2'>
                {updatedData.map((element,index)=>(
                    <div key={index} className="mb-4">
                    {Object.keys(element).map((key)=>(
                        <div key={key} className='flex flex-col gap-2'>
                            <label>{key}</label>
                            <textarea 
                                type="text" 
                                value={element[key]}
                                // onChange={(e)=>handleInputChange(e,key)}
                                className='w-full text-black'
                            />
                        </div>
                    ))}
                    
                    </div>
                ))}
            </form>
        </div>
    </Modal>
    
  )
}

export default HeroSectionModal
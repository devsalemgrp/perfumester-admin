import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'


const SpecialPerfumesModal = ({isOpenModal,closeModal,data}) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const handleSelectedImage=(e)=>{
        const file = e.target.files[0];
        if(file){
            setSelectedImage(URL.createObjectURL(file));
        }
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        closeModal('replaceImage');
    }
    const customStyles = {
        content: {
          width:'75%',
          margin:'auto',
          padding:'0',
          backgroundColor:'#313131'
        },
    }

    useEffect(()=>{
        console.log({data:data})
    },[])

  return (
    <div>
        <Modal
        isOpen={isOpenModal.specialPerfumes.replaceImage}
        onRequestClose={()=>{
            setSelectedImage(null);
            closeModal('replaceImage')}}
        style={customStyles}
    >
        <div className='w-full h-full text-white p-3'>
            <h1 className='text-4xl'>Edit Section 2 Content</h1>

            <h2>Currently Displayed Image</h2>
            <div>
                <img src={data?.image} alt="" width={150} />
            </div>


            <div className='flex flex-row w-full '>
                <div className='flex flex-col flex-1'>
                    <h2>Change Image : </h2>

                    <form onSubmit={''} className='flex flex-col gap-4'>
                        <input type="file"  onChange={(e)=>handleSelectedImage(e)} />
                        <button 
                            className='w-1/4 p-2 px-5 mb-3 bg-transparent border rounded-lg'
                            onClick={handleSubmit}>Submit
                        </button>
                    </form>
                </div>

                {selectedImage && (
                <div className='flex-1 flex items-start'>
                    <img src={selectedImage} alt="" width={200} />
                </div>
                )}
            </div>
            


           
            

            
        </div>

        </Modal>

        <Modal
          isOpen={isOpenModal.specialPerfumes.deleteImage}
          onRequestClose={()=>closeModal('deleteImage')}  
          style={customStyles}

        >
          <div className='flex flex-col gap-7 text-white bg-[#313131] w-full h-full  p-3'>
            <h1>Delete the Image : </h1>
            <img src={data?.image} alt="" width={300} />
            <button className='bg-red-500 text-white px-5 p-2 border w-1/2' onClick={()=>closeModal('deleteImage')}>Yes</button>
          </div>
        </Modal>
    </div>
  )
}

export default SpecialPerfumesModal
import React, { useState } from 'react'
import Modal from 'react-modal'

const HomeSectionModal = ({isOpenModal,closeModal,data}) => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [deletedImage, setDeletedImage] = useState(null);

    const handleImageUpload=(event)=>{
        const file = event.target.files[0];
        if(file){
        setSelectedImage(URL.createObjectURL(file));
        }
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        closeModal('welcome');
    }


    const customStyles = {
        content: {
          width:'75%',
          height:'75%',
          margin:'auto',
          padding:'0'
        },
    }
  return (
    <div>
        <Modal 
          style={customStyles}
          isOpen={isOpenModal.home.addAnotherImage}
          onRequestClose={()=>closeModal('addAnotherImage')}
        >
          <div className='flex flex-col gap-7 text-white bg-[#313131] w-full h-full  p-3'>
            <h1 className='text-4xl'>Upload Image</h1>

            <form className='flex flex-col gap-3'>
              <input type="file" onChange={handleImageUpload} className='w-1/4'/>
              <button 
                className='w-1/4 p-2 px-5 bg-transparent border rounded-lg'
                onClick={onSubmit}>Submit
              </button>

            </form>

            {selectedImage && 
            (
              <div className='mt-4'>
                  <h1 className='text-4xl mb-2'>Image Preview:</h1>
                  <img src={selectedImage} alt="Preview" width={100}  />
              </div>
            )}
          </div>
            
        </Modal>

        <Modal
          isOpen={isOpenModal.home.deleteImage}
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

export default HomeSectionModal
import React from 'react'
import Modal from 'react-modal'
const SpecialBackgroundsModals = ({isOpenModal , closeModal,data}) => {

    const customStyles = {
        content: {
          width:'75%',
          margin:'auto',
          padding:'0',
          backgroundColor:'#313131'
        },
    }

  return (
    <div>
        
        <Modal
          isOpen={isOpenModal.specialBackgrounds.deleteImage}
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

export default SpecialBackgroundsModals
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { customStyles } from '../../customStyle';

const HeroSectionModal = ({ isOpenModal, closeModal, data }) => {
  const [updatedData, setUpdatedData] = useState(data);

  const handleInputChange = (e, index) => {
    const newData = {
      ...updatedData,
      [Object.keys(updatedData)[index]]: e.target.value,
    };
    setUpdatedData(newData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    closeModal();
  };

  useEffect(() => {
    setUpdatedData(data);
  }, [data]);

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className="w-full h-full text-white p-3">
        <h1 className="text-4xl w-full text-center">Edit Hero Section</h1>
        <form className="my-2" onSubmit={handleSubmit}>
          <div className="mb-4">
            {Object.entries(updatedData).map(([key, value], index) => (
              <div key={index} className="flex flex-col gap-1 mt-10">
                <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                <textarea
                  type="text"
                  value={value}
                  onChange={(e) => handleInputChange(e, index)}
                  className="w-full p-2 mt-2 rounded bg-gray-800 border border-gray-600 text-white"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-3 p-2 px-5 bg-red-600 text-white rounded-lg hover:bg-red-500"
              onClick={() => closeModal('cta')}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="p-2 px-5 bg-green-600 text-white rounded-lg hover:bg-green-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default HeroSectionModal;

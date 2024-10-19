import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { customStyles } from '../../customStyle';

const CallToActionModal = ({ isOpenModal, closeModal, data }) => {
  const [updatedData, setUpdatedData] = useState({});

  useEffect(() => {
    setUpdatedData(data);
  }, [data]);

  const handleInputChange = (e, key) => {
    setUpdatedData({
      ...updatedData,
      [key]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal('cta');
  };

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={() => closeModal('cta')}
      style={customStyles}
    >
      <div className="w-full h-full p-5">
        <h1 className="text-4xl text-center mb-5">
          Edit Call To Action Section
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.entries(updatedData).map(([key, value]) => (
            <div key={key} className="flex flex-col gap-2">
              <label className="text-lg">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              <textarea
                value={value}
                onChange={(e) => handleInputChange(e, key)}
                className="w-full p-2 mt-2 rounded bg-gray-800 border border-gray-600 text-white"
              />
            </div>
          ))}

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

export default CallToActionModal;

import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

const EditPackageModal = ({ isOpenModal, closeModal, data }) => {
  const [title, setTitle] = useState('');
  const [subscriptionType, setSubscriptionType] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setSubscriptionType(data.subscriptionType);
      setDescription(data.description);
    }
    console.log({ DATA: data });
  }, [data]);

  const handleSave = () => {
    console.log({
      title,
      subscriptionType,
      description,
    });
    closeModal();
  };

  const customStyles = {
    content: {
      margin: 'auto',
      padding: '20px',
      backgroundColor: '#313131',
      color: 'white',
      borderRadius: '10px',
    },
    overlay: {
      zIndex: 1000, // Ensure modal is on top
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
  };

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className="w-full h-full p-5">
        <h1 className="text-center text-4xl mb-5">Edit Perfume Package</h1>

        <form className="space-y-4">
          <div>
            <label className="block text-xl">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 mt-2 rounded bg-gray-800 border border-gray-600 text-white"
            />
          </div>

          <div>
            <label className="block text-xl">Subscription Type</label>
            <select
              value={subscriptionType}
              onChange={(e) => setSubscriptionType(e.target.value)}
              className="w-full p-2 mt-2 rounded bg-gray-800 border border-gray-600 text-white"
            >
              <option value="Standard">Standard</option>
              <option value="Midrange">Midrange</option>
              <option value="Highend">Highend</option>
              <option value="Exclusive">Exclusive</option>
            </select>
          </div>

          <div>
            <label className="block text-xl">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 mt-2 rounded bg-gray-800 border border-gray-600 text-white"
              rows="4"
            />
          </div>
        </form>

        <div className="flex justify-end mt-5 space-x-3">
          <button
            onClick={closeModal}
            className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditPackageModal;

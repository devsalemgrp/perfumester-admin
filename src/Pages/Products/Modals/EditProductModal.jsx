import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

const EditProductModal = ({ isOpenModal, closeModal, data }) => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('');
  const [productPhoto, setProductPhoto] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    setProductName(data?.productName);
    setDescription(data?.description);
    setPrice(data?.price);
    setStatus(data?.status);
    setProductPhoto(data?.productPhoto);
    setImagePreview(data?.productPhoto || ''); // Set the initial preview

    console.log(data);
  }, [data]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    console.log({
      productName,
      description,
      price,
      status,
      productPhoto,
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
    <div>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="w-full h-full p-5">
          <h1 className="text-center text-4xl mb-5">Edit Perfume</h1>

          <div className="flex justify-center mb-5">
            <img
              src={imagePreview}
              alt={productName}
              className="w-32 h-32 object-cover rounded-full"
            />
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-xl">Product Name</label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full p-2 mt-2 rounded bg-gray-800 border border-gray-600 text-white"
              />
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

            <div>
              <label className="block text-xl">Price ($)</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2 mt-2 rounded bg-gray-800 border border-gray-600 text-white"
              />
            </div>

            <div>
              <label className="block text-xl">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full p-2 mt-2 rounded bg-gray-800 border border-gray-600 text-white"
              >
                <option value="Available">Available</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>

            <div>
              <label className="block text-xl">Change Product Photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mt-2 p-2 rounded bg-gray-800 border border-gray-600 text-white"
              />
            </div>
          </form>

          <div className="flex justify-end mt-5 space-x-3">
            <button
              onClick={closeModal}
              className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
            >
              Delete
            </button>
            <button
              onClick={closeModal}
              className="px-5 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500"
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
    </div>
  );
};

export default EditProductModal;

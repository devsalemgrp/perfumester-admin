import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  editPackageData,
  getPackagesData,
} from '../../Redux/Packages/PackagesActions';
import PackagesDataTable from './DataTable/packagesDataTable';
import EditPackageModal from './Modals/editPackageModal';

const PackagesDetails = () => {
  const dispatch = useDispatch();
  const { packages, loading, editPackagesData } = useSelector(
    (store) => store.packagesReducer
  );

  useEffect(() => {
    dispatch(getPackagesData());
  }, [dispatch]);

  const handleEditPackage = (updateData) => {
    dispatch(editPackageData(updateData));
  };
  return (
    <div className="w-full p-14">
      <div>
        <h1 className="text-4xl">Package Details</h1>
        <div className="mt-5">
          <select className="w-full text-white bg-transparent border rounded-md p-2">
            <option className="text-black" value="Standard">
              Standard
            </option>
            <option className="text-black" value="Midrange">
              Midrange
            </option>
            <option className="text-black" value="Highend">
              Highend
            </option>
          </select>
        </div>
        <div className="bg-black mt-5 p-10 rounded-lg">
          <PackagesDataTable
            dataEntered={packages}
            editProduct={handleEditPackage}
          />
        </div>
      </div>
    </div>
  );
};

export default PackagesDetails;

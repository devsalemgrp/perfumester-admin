import axios from 'axios';
import { PackageAction } from './PackagesReducer';
import { perfumePackages } from '../../Shared/PackagesPageData';

export const getPackagesData = () => async (dispatch) => {
  try {
    dispatch(PackageAction.getPackagesRequest());

    const response = perfumePackages;
    dispatch(PackageAction.getPackagesSuccess(response));
  } catch (error) {
    dispatch(PackageAction.getPackagesFailure());
    console.log(error);
    //alert(error.response.data.message)
    // alert(error.response.data.message);
  }
};

export const editPackageData = (packageId, updatedData) => async (dispatch) => {
  try {
    dispatch(PackageAction.editPackagesRequest());
    const response = await axios.post('http://localhost:3001/api/packages', {
      packageId,
      updatedData,
    });

    dispatch(PackageAction.editPackagesSuccess({ package: response }));
  } catch (error) {
    dispatch(PackageAction.editPackagesFailure());
    console.log(error);
  }
};

export const editPackageActivity = (packageId, updatedData) => (dispatch) => {
  try {
    dispatch(PackageAction.editPackagesActivityRequest());
    const response = axios.patch('url', { packageId, updatedData });
    dispatch(PackageAction.editPackagesActivitySuccess(response));
  } catch (error) {
    dispatch(PackageAction.editPackagesActivityFailure());
  }
};

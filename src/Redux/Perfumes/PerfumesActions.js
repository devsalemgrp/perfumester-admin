import axios from "axios";
import { PerfumesAction } from "./PerfumesReducer";
import { products } from "../../Shared/PerfumesPageData";

export const getPerfumesData = () => async (dispatch) => {
    try {
      dispatch(PerfumesAction.getPerfumesRequest());
      const response = products;
      dispatch(PerfumesAction.getPerfumesSuccess(response));
    } catch (error) {
      dispatch(PerfumesAction.getPerfumesFailure());
      console.log(error);
      alert(error.message)
    }
  };

export const addProduct =(product)=>async (dispatch)=>{
  try {
    dispatch(PerfumesAction.addProductRequest());
    const response = await axios.post('url',{product});
    dispatch(PerfumesAction.addProductSuccess(response));
  } catch (error) {
    dispatch(PerfumesAction.addProductFailure());
    console.log(error);
    alert(error.message)
  }
}
import axios from "axios";
import { PerfumesAction } from "./PerfumesReducer";

export const getPerfumesData = () => async (dispatch) => {
    try {
      dispatch(PerfumesAction.getPerfumesRequest());
      const response = await axios.get('url');
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
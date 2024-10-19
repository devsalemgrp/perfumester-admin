import axios from "axios";
import { NewPageAction } from "./NewPageReducer";
import { newPageData } from "../../Shared/NewPageData";

export const getNewPageData = () => async (dispatch) => {
    try {
      dispatch(NewPageAction.getNewPageDataRequest());
      const response = newPageData
      dispatch(NewPageAction.getNewPageDataSuccess(response));
    } catch (error) {
      dispatch(NewPageAction.getNewPageDataFailure());
      console.log(error);
      alert(error.message)
    }
  };

  export const aAIHomeSection = (image)=>async(dispatch)=>{

    try{
        dispatch(NewPageAction.aAIHomeSectionRequest());        
        const response = await axios.post('url',{image});
        dispatch(NewPageAction.aAIHomeSectionSuccess(response));
    }catch(err){
        dispatch(NewPageAction.aAIHomeSectionFailure(err.message))
    }
    
  }
  
  export const dIHomeSection = (imageId) =>async (dispatch)=>{
    try{
        dispatch(NewPageAction.dIHomeSectionRequest());
        const response = await axios.get('url/image');
        dispatch(NewPageAction.dIHomeSectionSuccess(response));
    }catch(err){
        dispatch(NewPageAction.dIHomeSectionFailure(err.message))
    }
  }
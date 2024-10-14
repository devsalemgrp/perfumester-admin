import axios from "axios";
import { MensPageAction } from "./MensPageReducer";

export const getMensPageData = () => async (dispatch) => {
    try {
      dispatch(MensPageAction.getMenPageDataRequest());

      const response = await axios.get('url');
      dispatch(MensPageAction.getMenPageDataSuccess(response));
    } catch (error) {
      dispatch(MensPageAction.getMenPageDataFailure());
      console.log(error);
      alert(error.message);
    }
  };

export const aAIHomeSection = (image)=>async(dispatch)=>{
    try{
        dispatch(MensPageAction.aAIHomeSectionRequest());

        const response = await axios.post('url',image);
        dispatch(MensPageAction.aAIHomeSectionSuccess(response));
    }catch(err){
        dispatch(MensPageAction.aAIHomeSectionFailure(err.message))
    }
}

export const dIHomeSection = (imageId) =>async (dispatch)=>{
    try{
        dispatch(MensPageAction.dIHomeSectionRequest());
        const response = await axios.delete('url/imageId');
        dispatch(MensPageAction.dIHomeSectionSuccess(response));
    }catch(err){
        dispatch(MensPageAction.dIHomeSectionFailure(err.message))
    }
}

export const rIRecommendedSection = (imageId , newImage) =>async (dispatch)=>{
    try{
        dispatch(MensPageAction.rIRecommendedSectionRequest());

        const response = await axios.patch('url',{imageId,newImage});
        dispatch(MensPageAction.rIRecommendedSectionSuccess(response));
    }catch(err){
        dispatch(MensPageAction.rIRecommendedSectionFailure(err.message))
    }
}

export const dIRecommendedSection = (imageId) =>async (dispatch)=>{
    try{
        dispatch(MensPageAction.dIRecommendedSectionRequest());
        /**Implementation */
        const response = await axios.delete('url/imageId');
        dispatch(MensPageAction.dIRecommendedSectionSuccess(response));
    }catch(err){
        dispatch(MensPageAction.dIRecommendedSectionFailure(err.message))
    }
}

export const rISpecialSection = (imageId , newImage) =>async (dispatch)=>{

    try{
        dispatch(MensPageAction.rISpecialSectionRequest());
        const response = await axios.patch('url',{imageId,newImage});
        dispatch(MensPageAction.rISpecialSectionSuccess(response));
    }catch(err){
        dispatch(MensPageAction.rISpecialSectionFailure(err.message))
    }
}

export const dISpecialSection = (imageId) =>async (dispatch)=>{
    try{
        dispatch(MensPageAction.dISpecialSectionRequest());
        const response = await axios.delete('url/imageId');
        dispatch(MensPageAction.dISpecialSectionSuccess(response));
    }catch(err){
        dispatch(MensPageAction.dISpecialSectionFailure(err.message))
    }
}

export const dISpecialBackgroundSection = (imageId)=> async (dispatch)=>{
    try{
        dispatch(MensPageAction.dISpecialBackgroundSectionRequest());
        const response = await axios.delete('url/imageId');
        dispatch(MensPageAction.dISpecialBackgroundSectionSuccess(response));
    }catch(err){
        dispatch(MensPageAction.dISpecialBackgroundSectionFailure(err.message))
    }
}
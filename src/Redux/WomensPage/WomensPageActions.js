import axios from "axios";
import { WomenPageAction } from "./WomensPageReducer";
import { womenPageData } from "../../Shared/WomenPageData";

export const getWomenPageData = () => async (dispatch) => {
    try {
        dispatch(WomenPageAction.getWomenPageDataRequest());
        const response = womenPageData
        dispatch(WomenPageAction.getWomenPageDataSuccess(response));
    } catch (error) {
      dispatch(WomenPageAction.getWomenPageDataFailure());
      alert(error.message)
    }
  };

export const aAIHomeSection = (image)=>async(dispatch)=>{
    try{
        dispatch(WomenPageAction.aAIHomeSectionRequest());        
        const response = await axios.post('url',{image});
        dispatch(WomenPageAction.aAIHomeSectionSuccess(response));
    }catch(err){
        dispatch(WomenPageAction.aAIHomeSectionFailure(err.message))
    }
}

export const dIHomeSection = (imageId) =>async (dispatch)=>{
    try{
        dispatch(WomenPageAction.dIHomeSectionRequest());
        const response = await axios.delete('url/imageId');
        dispatch(WomenPageAction.dIHomeSectionSuccess(response));
    }catch(err){
        dispatch(WomenPageAction.dIHomeSectionFailure(err.message))
    }
}

export const rIRecommendedSection = (imageId , newImage) =>async (dispatch)=>{
    try{
        dispatch(WomenPageAction.rIRecommendedSectionRequest());
        const response = await axios.patch('url',{imageId,newImage});
        dispatch(WomenPageAction.rIRecommendedSectionSuccess(response));
    }catch(err){
        dispatch(WomenPageAction.rIRecommendedSectionFailure(err.message))
    }
}

export const dIRecommendedSection = (imageId) =>async (dispatch)=>{
    try{
        dispatch(WomenPageAction.dIRecommendedSectionRequest());
        const response = await axios.delete('url')
        dispatch(WomenPageAction.dIRecommendedSectionSuccess(response));
    }catch(err){
        dispatch(WomenPageAction.dIRecommendedSectionFailure(err.message))
    }
}

export const rISpecialSection = (imageId , newImage) =>async (dispatch)=>{

    try{
        dispatch(WomenPageAction.rISpecialSectionRequest());
        const response = await axios.patch('url',{imageId,newImage});
        dispatch(WomenPageAction.rISpecialSectionSuccess(response));
    }catch(err){
        dispatch(WomenPageAction.rISpecialSectionFailure(err.message))
    }
}

export const dISpecialSection = (imageId) =>async (dispatch)=>{
    try{
        dispatch(WomenPageAction.dISpecialSectionRequest());
    
        const response = await axios.delete('url/imageId');
        dispatch(WomenPageAction.dISpecialSectionSuccess(response));
    }catch(err){
        dispatch(WomenPageAction.dISpecialSectionFailure(err.message))
    }
}

export const dISpecialBackgroundSection = (imageId)=>async (dispatch)=>{
    try{
        dispatch(WomenPageAction.dISpecialBackgroundSectionRequest());
        const response = await axios.delete('url/imageId');
        dispatch(WomenPageAction.dISpecialBackgroundSectionSuccess(response));
    }catch(err){
        dispatch(WomenPageAction.dISpecialBackgroundSectionFailure(err.message))
    }
}
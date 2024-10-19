import axios from "axios";
import { HomePageAction } from "./HomePageReducer";
import { homepageData } from "../../Shared/HomePageData";

export const getHomePageData = () => async (dispatch) => {
    try {
      dispatch(HomePageAction.getHomePageDataRequest());
      const response = homepageData;
      dispatch(HomePageAction.getHomePageDataSuccess(response));
    } catch (error) {
      dispatch(HomePageAction.getHomePageDataFailure());
      console.log(error);
      alert(error.message)
    }
  };

//Add Image in the home section 
export const aAIHomeSection = (newImage)=>async(dispatch)=>{

  try{
      dispatch(HomePageAction.aAIHomeSectionRequest());
      /**Implementation */
      const response = await axios.post('url',newImage);

      dispatch(HomePageAction.aAIHomeSectionSuccess(response));
  }catch(err){
      console.log(err);
      dispatch(HomePageAction.aAIHomeSectionFailure(err.message))
  }
  
}

//Delete Image in the home section
export const dIHomeSection = (imageId) =>async (dispatch)=>{
  try{
      dispatch(HomePageAction.dIHomeSectionRequest());
      /**Implementation */
      const response = await axios.delete('url/imageId');
      dispatch(HomePageAction.dIHomeSectionSuccess(response));
  }catch(err){
      dispatch(HomePageAction.dIHomeSectionFailure(err.message))
  }
}

export const editHeroSection = (contentId , updatedData)=> async(dispatch)=>{
  try{
      dispatch(HomePageAction.editHeroSectionRequest());
      /**Implementation */
      const response = await axios.post('url',{contentId,updatedData});

      dispatch(HomePageAction.editHeroSectionSuccess(response));
  }catch(err){
      dispatch(HomePageAction.editHeroSectionFailure(err.message))
  }
}



export const replaceSection2Image = (imageId , newImage)=>async(dispatch)=>{
  try{
      dispatch(HomePageAction.replaceSection2ImageRequest());
      /**Implementation */
      const response = await axios.put('url',{imageId,newImage});

      dispatch(HomePageAction.replaceSection2ImageSuccess(response));
  }catch(err){
      dispatch(HomePageAction.replaceSection2ImageFailure(err.message))
  }
}

export const deleteSection2Image = (imageId)=> async(dispatch)=>{
  try{
      dispatch(HomePageAction.deleteSection2ImageRequest());
      /**Implementation */

      const response = await axios.delete('url/imageId');
      dispatch(HomePageAction.deleteSection2ImageSuccess(response));
  }catch(err){
      dispatch(HomePageAction.deleteSection2ImageFailure(err.message))
  }
}

export const editCtaSectionData = (dataId, updatedData)=>async(dispatch)=>{
  try{
      dispatch(HomePageAction.editCtaSectionRequest());
      /**Implementation */
      const response = await axios.post('url',{dataId,updatedData});

      dispatch(HomePageAction.editCtaSectionSuccess(response));
  }catch(err){
      dispatch(HomePageAction.editCtaSectionFailure(err.message))
  }
}
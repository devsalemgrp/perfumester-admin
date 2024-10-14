import axios from "axios";
import { SubscriptionsAction } from "./SubscriptionsReducer";

export const getSubscriptions = (email, password) => async (dispatch) => {
    try {
      dispatch(SubscriptionsAction.GetSubscriptionsRequest());
      const response = await axios.post('url',{email,password});
      dispatch(SubscriptionsAction.GetSubscriptionsSuccess(response));
    } catch (error) {
      dispatch(SubscriptionsAction.GetSubscriptionsFailure(error.message));
      alert(error.message)
    }
  };
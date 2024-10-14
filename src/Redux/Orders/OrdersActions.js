import axios from "axios";
import { OrdersAction } from "./OrdersReducer";


export const getOrdersData = () => async (dispatch) => {
    try {
      dispatch(OrdersAction.getOrdersRequest());
      const response = await axios.get('url');
      dispatch(OrdersAction.getOrdersSuccess(response));
    } catch(error){
      dispatch(OrdersAction.getOrdersFailure());
      alert(error.message)
    }
};

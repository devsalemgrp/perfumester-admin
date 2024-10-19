import axios from 'axios';
import { OrdersAction } from './OrdersReducer';
import { orders } from '../../Shared/OrdersListPageData';

export const getOrdersData = () => async (dispatch) => {
  try {
    dispatch(OrdersAction.getOrdersRequest());
    const response = orders;
    dispatch(OrdersAction.getOrdersSuccess(response));
  } catch (error) {
    dispatch(OrdersAction.getOrdersFailure());
    alert(error.message);
  }
};

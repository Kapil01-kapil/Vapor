import axios from 'axios';
import {fetchData, fetchSuccess, fetchError} from '../store/action/Actions';

const actionCreator = (url) => (dispatch) => {
  return new Promise(() => {
    axios
      .post(url)
      .then((response) => {
        dispatch(fetchSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchError(error));
      });
  });

};

export default actionCreator;

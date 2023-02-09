import { API_PATH } from '../config/config';
import axios from 'axios';

export const fetchServerRequest = () => {
  axios.get(API_PATH).then((res) => {
    console.log(res);
  });
};

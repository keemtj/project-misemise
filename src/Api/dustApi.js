/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const dustApi = {
  get: () => {
    return axios.get('http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99/');
  },
};

export default dustApi;

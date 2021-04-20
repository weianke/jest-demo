import axios from 'axios';

export const fetchData = (fn) => {
  return axios.get('http://www.dell-lee.com/react/api/demo.json');
}
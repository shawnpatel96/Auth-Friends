import axios from 'axios';

export const axiosWithAuth = () => {
  // get the token from localstorage
  const token = localStorage.getItem('token');
  // create a new "instance" of axios with the config object built into it
  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: 'http://localhost:5000'
  });
};
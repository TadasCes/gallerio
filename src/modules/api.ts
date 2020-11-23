import router from '@/router';
import axios from 'axios';
import { TokenService } from './tokenService';

export default function useApi() {
  console.log('api call' + localStorage.getItem('access_token'));

  axios.interceptors.request.use(
    async config => {
      config.headers.Authorization = `Bearer ${TokenService.getToken()}`;
      return config;
    },
    error => {
      Promise.reject(error);
    }
  );
}

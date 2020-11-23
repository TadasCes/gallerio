import axios from 'axios';
import { ILogin } from '@/models/ILogin';
import { ErrorCodes } from 'vue';
import router from '@/router';
import { TokenService } from './tokenService';
import useApi from './api';
import state from '@/state';

export default function useLogin() {
  async function login(loginInfo: ILogin): Promise<ErrorCodes> {
    return await axios
      .post('http://localhost:3000/auth/login', loginInfo)
      .then(response => {
        const token = response.data.access_token
        localStorage.setItem('access_token', token)
        localStorage.setItem('user_logged', loginInfo.username)
        console.log(localStorage.getItem('access_token'))
        return 200;
      })
      .catch(error => {
        switch (error.response.status) {
          case 401:
              return 401
          case 404:
              return 404
          default:
              return 400
          }
      });
  }

  async function logout() {
    localStorage.removeItem('access_token')
    router.push('/login');
    
  }

  return {
    login,
    logout
  };
}

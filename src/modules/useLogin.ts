import axios from 'axios';
import { ILogin } from '@/models/ILogin';
import { ErrorCodes } from 'vue';

export default function useLogin() {
  async function login(loginInfo: ILogin): Promise<ErrorCodes> {
    return await axios
      .post('http://localhost:3000/auth/login', loginInfo)
      .then(response => {
        console.log(response.data);
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

  return {
    login,
  };
}

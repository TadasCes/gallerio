import axios from 'axios';
import { ILogin } from '@/models/ILogin';

export default function useLogin() {
  async function login(loginInfo: ILogin) {
    await axios
      .post('http://localhost:3000/auth/login', loginInfo)
      .then(response => {
        console.log(response);
        return true;
      })
      .catch(() => {
        console.log('failed');
        return false;
      });
  }

  return {
    login,
  };
}

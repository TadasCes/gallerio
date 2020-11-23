const TOKEN_KEY = 'access_token';

const TokenService = {
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

  saveToken(accessToken: string) {
    localStorage.setItem(TOKEN_KEY, accessToken);
  },

  removeToken() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem('user_logged');
  },

  getLoggedUserName() {
    return localStorage.getItem('user_logged');
  }
};

export { TokenService };

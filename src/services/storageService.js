
const USER_KEY = 'user'
const TOKEN_KEY ='token'

export const storageService = {

  setToken: (token) => {
    try {
      sessionStorage.setItem(TOKEN_KEY, JSON.stringify(token))
    } catch (error) {
      console.error('Error setting item in sessionStorage', error);
    }
  },

  getToken: () => {
    try {
      return sessionStorage.getItem(TOKEN_KEY)
    } catch (error) {
      console.error('Error getting item in sessionStorage', error);
      return null;
    }
  },

  deleteToken: () => {
    sessionStorage.removeItem(TOKEN_KEY);
  },

  setUser: (user) => {
    try {
        sessionStorage.setItem(USER_KEY, JSON.stringify(user))
      } catch (error) {
        console.error('Error setting item in sessionStorage', error);
      }
  },

  getUser: () => {
    try {
      const user = sessionStorage.getItem(USER_KEY)
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Error getting item from sessionStorage', error);
      return null;
    }
  }
}

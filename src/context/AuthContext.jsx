import { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

// Reducer to manage the login/logout state
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

// AuthProvider to wrap the app
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load token from localStorage when the app starts
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Ideally, verify the token with the backend here
      dispatch({
        type: 'LOGIN',
        payload: { token, user: { name: 'MockUser' } }, // Mock user
      });
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      const { token } = response.data;

      localStorage.setItem('token', token);

      dispatch({
        type: 'LOGIN',
        payload: {
          token,
          user: { username }, // Mock user object
        },
      });
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

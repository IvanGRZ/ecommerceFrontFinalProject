import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_AUTH_URL
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const API_URL = process.env.REACT_APP_AUTH_URL;

const login = async (username, password) => {
    console.log(API_URL)
    try {
        const response = await axios.post(`${API_URL}/signin`, {
            username,
            password,
        });
        return response;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

const signup = async (username, password, address, age, picture,name,phone) => {
    try {
        const response = await axios.post(`${API_URL}/signUp`, {
            username,
            password,
            address,
            age,
            picture,
            name,
            phone
        });
        return response;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

const logout = () => {
  localStorage.removeItem('token');
};

export { login, signup, logout };
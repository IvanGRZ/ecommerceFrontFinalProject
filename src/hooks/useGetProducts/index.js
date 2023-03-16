import axios from 'axios';

const callApi = async (API) => {
    const response = await axios(API)

    return response.data;
}


export {
    callApi
};
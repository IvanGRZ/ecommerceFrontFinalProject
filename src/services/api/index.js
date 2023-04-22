// eslint-disable-next-line no-unused-vars
const baseUrl = process.env.REACT_APP_API_URL;

export const fetchApi = async (path) => {
    
    //const response = await fetch(`${baseUrl}/${path}`);
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    
    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    return data;
}

export const getProducts = async () => {
    const data = await fetchApi('products');
    return data;
}
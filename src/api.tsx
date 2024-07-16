import axios from 'Axios';


export const getURLs = async () => {
    const response = await axios.get("https://api.github.com/users/samshubitz/repos")
    return response.data;
}

export const getStats = async (url: string) => {
    const response = await axios.get(url)
    return response.data
}
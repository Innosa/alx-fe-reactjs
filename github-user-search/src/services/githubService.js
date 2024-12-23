import axios from "axios";

const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY;
const GITHUB_API_BASE_URL = "https://api.github.com";

export const fetchUserData = async (endpoint) => {
  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}/${endpoint}`, {
      headers: {
        Authorization: `token ${GITHUB_API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data from GitHub:", error);
    throw error;
  }
};

export default fetchUserData;

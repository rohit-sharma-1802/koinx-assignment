import axios from "axios";

const makeApiCall = async (url, method, params) => {
  try {
    const response = await axios({
      headers: {
        "Content-Type": "application/json",
      },
      method,
      url,
      params,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default makeApiCall;

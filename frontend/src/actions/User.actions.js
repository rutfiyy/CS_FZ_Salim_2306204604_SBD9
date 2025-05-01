import axios from "axios";

const backend_URI = "http://localhost:3000";

const baseApiResponse = (data, isSuccess) => {
  return {
    success: isSuccess,
    data: data || null,
  };
};

export const loginUser = async (input) => {
  try {
    const queryParams = new URLSearchParams(input).toString();
    const url = `${backend_URI}/user/login?${queryParams}`;
    const response = await axios.post(url);

    if (response.data && response.data.payload) {
      return baseApiResponse(response.data, true);
    } else {
      return baseApiResponse(null, false);
    }
  } catch (error) {
    return baseApiResponse({ message: error.response?.data?.message || "An error occurred during login" }, false);
  }
};

export const signUpUser = async (input) => {
  try {
    const queryParams = new URLSearchParams(input).toString();
    const url = `${backend_URI}/user/register?${queryParams}`;
    const response = await axios.post(url);

    if (response.data && response.data.payload) {
      return baseApiResponse(response.data.payload, true);
    } else {
      return baseApiResponse(null, false);
    }
  } catch (error) {
    return baseApiResponse({ message: error.response?.data?.message || "An error occurred during sign-up" }, false);
  }
};

export const fetchItems = async (limit = 15) => {
  try {
    const url = `${backend_URI}/item`;
    const response = await axios.get(url);

    if (response.data && response.data.payload) {
      const limitedItems = response.data.payload.slice(0, limit);
      return baseApiResponse(limitedItems, true);
    } else {
      return baseApiResponse(null, false);
    }
  } catch (error) {
    return baseApiResponse({ message: error.response?.data?.message || "An error occurred while fetching items" }, false);
  }
};
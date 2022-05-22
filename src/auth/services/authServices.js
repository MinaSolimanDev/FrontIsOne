import axios from "axios";
import { API } from "../../common/constants";

// configure axios
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export const login = async (credentials) => {
  const res = await axios.post(`${API}/auth/login`, credentials);
  localStorage.setItem("user", res.data);
  return res;
};

export const logOut = async () => {
  const session = localStorage.getItem("user");
  const res = await axios.get(`${API}/auth/logout`, {
    headers: {
      Authorization: `Token ${session}`,
    },
  });
  return res;
};

export const getCurrentUser = async () => {
  const session = localStorage.getItem("user");

  const res = await axios.get(`${API}/auth/current`, {
    headers: {
      Authorization: `Token ${session}`,
    },
  });

  return res.data;
};

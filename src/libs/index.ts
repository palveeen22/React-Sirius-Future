import axios from "axios";

export const generateApiRequest = (endpointMenu: string | undefined) => {
  return axios.create({
    baseURL: endpointMenu,
    headers: {
      'Content-Security-Policy': 'default-src https:',
    },
  });
};
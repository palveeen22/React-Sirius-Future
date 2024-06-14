import { generateApiRequest } from ".";


export const ApiRequest = {
  auth: {
    "v1.0": generateApiRequest(import.meta.env.VITE_API_AUTH),
  },
  identity: {
    "v1.0": generateApiRequest(import.meta.env.VITE_PUBLIC_USER),
  }
};

import { makeRequest } from ".";

export const getOrders = () => {
  return makeRequest("/orders");
};

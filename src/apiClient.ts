import axios, { AxiosResponse } from "axios";

const BASE_URL = "https://randomuser.me/api/";

/**
 * Fetch a given number of users (default 1)
 */
export async function getUsers(count: number = 1): Promise<AxiosResponse> {
  return axios.get(`${BASE_URL}?results=${count}`);
}

/**
 * Hit an invalid endpoint to test error handling
 */
export async function getInvalidEndpoint(): Promise<AxiosResponse> {
  try {
    return await axios.get(`${BASE_URL}invalid-endpoint`);
  } catch (error: any) {
    return error.response; // safely return 404 response
  }
}

/**
 * Send invalid results parameter to test edge cases
 */
export async function getUsersWithParam(param: string): Promise<AxiosResponse> {
  return axios.get(`${BASE_URL}?results=${param}`);
}
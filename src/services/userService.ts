// // src/services/userService.ts
// import axios from 'axios';

// const API_URL = 'https://jsonplaceholder.typicode.com/users';

// export const getUsers = () => axios.get(API_URL);
// export const createUser = (user: any) => axios.post(API_URL, user);
// export const updateUser = (id: number, user: any) => axios.put(`${API_URL}/${id}`, user);
// export const deleteUser = (id: number) => axios.delete(`${API_URL}/${id}`);


// src/services/userService.ts
import axios, { AxiosResponse } from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Define a User type
export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export const getUsers = (): Promise<AxiosResponse<User[]>> => axios.get<User[]>(API_URL);

export const createUser = (user: Omit<User, 'id'>): Promise<AxiosResponse<User>> =>
  axios.post<User>(API_URL, user);

export const updateUser = (id: number, user: Omit<User, 'id'>): Promise<AxiosResponse<User>> =>
  axios.put<User>(`${API_URL}/${id}`, user);

export const deleteUser = (id: number): Promise<AxiosResponse<void>> => axios.delete(`${API_URL}/${id}`);

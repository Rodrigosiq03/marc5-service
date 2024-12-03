import api from '../../axios.ts';
import { APIResponse } from '../types';
import {
  User,
  CreateUserRequest,
  UpdateUserRequest,
  LoginRequest,
  LoginResponse,
} from './types';

export const userService = {
  async create(data: CreateUserRequest): Promise<APIResponse<User>> {
    const response = await api.post<APIResponse<User>>('/user', data);
    return response.data;
  },

  async getById(userId: string): Promise<APIResponse<User>> {
    const response = await api.get<APIResponse<User>>(`/user`, {
      params: { id: userId }
    });
    return response.data;
  },

  async update(data: UpdateUserRequest): Promise<APIResponse<User>> {
    const response = await api.put<APIResponse<User>>('/user', data);
    return response.data;
  },

  async delete(userId: string): Promise<APIResponse<void>> {
    const response = await api.delete<APIResponse<void>>('/user', {
      params: { id: userId }
    });
    return response.data;
  },

  async login(credentials: LoginRequest): Promise<APIResponse<LoginResponse>> {
    const response = await api.post<APIResponse<LoginResponse>>('/user/login', credentials);
    return response.data;
  },
};
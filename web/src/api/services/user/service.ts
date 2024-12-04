import api from "../../axios";
import {
  User,
  CreateUserRequest,
  UpdateUserRequest,
  LoginRequest,
  LoginResponse,
} from "./types";

export const userService = {
  async create(data: CreateUserRequest): Promise<User> {
    const response = await api.post<User>("/user", data);
    return response.data;
  },

  async getByEmail(email: string): Promise<User> {
    const response = await api.get<User>("/user/email", {
      params: { email }
    });
    return response.data;
  },

  async update(data: UpdateUserRequest): Promise<User> {
    const response = await api.put<User>("/user", data);
    return response.data;
  },

  async delete(userId: string): Promise<void> {
    await api.delete("/user", {
      params: { id: userId }
    });
  },

  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>("/user/login", credentials);
    return response.data;
  },
};
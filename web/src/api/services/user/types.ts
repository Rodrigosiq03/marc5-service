export interface User {
  userId: string;
  name: string;
  email: string;
  courses: string[];
  xp: number;
  pictureUrl: string;
}

export interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
  courses?: string[];
}

export interface UpdateUserRequest {
  userId: string;
  name: string;
  email: string;
  password: string;
  courses?: string[];
  xp: number;
  pictureUrl: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

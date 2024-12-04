export interface APIError {
  message: string;
  code: string;
  status: number;
}

export interface APIResponse<T> {
  data: T;
  message?: string;
  status: number;
}

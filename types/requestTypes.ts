export interface RegisterRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
}

export interface LoginRequest {
  login: string; // can be email or phone number
  password: string;
}
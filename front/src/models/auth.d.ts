export type LoginParams = { user_name: string; password: string };

export type LoginUser = {
  token: string;
  user_name: string;
  role: string;
};
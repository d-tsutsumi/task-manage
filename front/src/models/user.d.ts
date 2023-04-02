export type LoginParams = { user_name: string; password: string };

export type User = {
  token: string;
  user_name: string;
  role: string;
};

import { BehaviorSubject } from 'rxjs';

export type LoginUser = {
  token: string;
  userName: string;
  role: string;
};

export const loginUser = new BehaviorSubject<LoginUser | undefined>(undefined);
export const setLoginUser = (user: LoginUser) => loginUser.next(user);

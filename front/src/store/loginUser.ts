import { LoginUser } from '@/models/auth';
import { BehaviorSubject } from 'rxjs';

export const loginUser = new BehaviorSubject<LoginUser | undefined>(undefined);
export const setLoginUser = (user: LoginUser) => loginUser.next(user);

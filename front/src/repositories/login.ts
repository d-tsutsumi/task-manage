import { User } from '@/models/user';
import { Observable, tap, map, catchError, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

export const postLogin = ({
  user_name,
  password,
}: {
  user_name: string;
  password: string;
}): Observable<User> =>
  ajax<User>({
    url: '/login',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: { password, user_name },
  })
    .pipe(tap((t) => console.log(t)))
    .pipe(
      map((v) => ({
        user_name: v.response.user_name,
        role: v.response.role,
        token: v.response.token,
      })),
      catchError((error) => {
        console.log('error: ', error);
        return of(error);
      }),
    );

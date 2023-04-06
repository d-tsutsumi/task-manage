import { fromFetch } from 'rxjs/fetch';
export * from './login';

const repository = <T>(resource: string, option: RequestInit) =>
  fromFetch<T>(resource, {
    ...option,
    headers: { 'Content-Type': 'application/json' },
    selector: (res) => res.json(),
  });

export default (resource: string) => {
  return {
    index: <T>() => repository<T>(resource, { method: 'GET' }),
    post: <T, U>(payload: U) =>
      repository<T>(resource, { method: 'POST', body: JSON.stringify({ ...payload }) }),
  };
};

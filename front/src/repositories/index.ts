import { fromFetch } from 'rxjs/fetch';
import { getwithParamsURL } from './util';
import { config } from '@/config';

const repository = <T>(resource: string, option: RequestInit) =>
  fromFetch<T>(resource, {
    ...option,
    headers: { 'Content-Type': 'application/json' },
    selector: (res) => res.json(),
  });

export default (resource: string) => {
  const url = config.baseURL + resource;
  return {
    getAll: <T>() => repository<T>(url, { method: 'GET' }),
    getById: <T, U extends Record<string, string>>(id: U) =>
      repository<T>(getwithParamsURL(url, id), { method: 'GET' }),
    post: <T, U>(payload: U) =>
      repository<T>(url, { method: 'POST', body: JSON.stringify({ ...payload }) }),
  };
};

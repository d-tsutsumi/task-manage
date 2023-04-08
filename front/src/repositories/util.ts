export const getwithParamsURL = <T extends Record<string, string>>(url: string, params: T) =>
  `${url}?${new URLSearchParams(params)}`;

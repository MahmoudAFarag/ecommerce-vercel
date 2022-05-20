export interface ApiFetcherOptions {
  url: string;
  query: string;
}

export interface ApiFetcherResult<T> {
  data: T;
}

export interface IApiConfig {
  apiUrl: string;
  fetch<T>(option: ApiFetcherOptions): Promise<ApiFetcherResult<T>>;
}

import { IApiConfig } from '@common/types/Api';
import fetchApi from '@framework/utils/fetchApi';

class Config {
  private config: IApiConfig;

  constructor(config: IApiConfig) {
    this.config = config;
  }

  getConfig(): IApiConfig {
    return this.config;
  }
}

const configWrapper = new Config({
  apiUrl: 'http://localhost:4000/graphql',
  fetch: fetchApi,
});

export function getConfig() {
  return configWrapper.getConfig();
}

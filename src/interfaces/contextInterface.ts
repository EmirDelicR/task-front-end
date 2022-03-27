export interface IContext {
  data: IContextData;
  page: number;
}

export interface IContextData {
  isApiKeySet: boolean;
  apiKey: string;
}

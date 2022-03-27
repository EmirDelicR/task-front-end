export interface IEncodes {
  data: IEncodesData;
  error: {
    message: string;
    code: number;
    isError: boolean;
  };
  isLoading: boolean;
}

export interface IEncodesData {
  totalCount: number;
  previous: string;
  next: string;
  items: IEncodesItem[];
}

export interface IEncodesItem {
  id: string;
  name: string;
  encoderVersion: string;
  createdAt: string;
  modifiedAt: string;
  cloudRegion: string;
  selectedCloudRegion: string;
  type: string;
  status: string;
  progress: number;
}

export interface IApiRequest {
  apiKey: string;
  url?: string;
}

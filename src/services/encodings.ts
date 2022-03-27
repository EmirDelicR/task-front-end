import { API_URL, HTTP_METHODS } from 'constants/api';
// import BitmovinApi from '@bitmovin/api-sdk';
import { IApiRequest } from '../interfaces/encodesInterface';

const fetchEncodings = async (data: IApiRequest) => {
  const myHeaders = new Headers();
  myHeaders.append('x-api-key', data.apiKey);

  const config = {
    method: HTTP_METHODS.GET,
    headers: myHeaders
  };

  try {
    let apiUrl = `${API_URL}/encoding/encodings?limit=10`;
    if (data.url) {
      apiUrl = data.url;
    }
    const response = await fetch(apiUrl, config);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (err) {
    return err;
  }
};

// Install package and uncomment this and line 2 and line 29
// const fetchEncodingWithPackage = async (apiKey: string) => {
//   const bitmovinApi = new BitmovinApi({ apiKey });
//   const response = await bitmovinApi.encoding.encodings.list((q) => q);
//   console.log('Api response from package: ', response);
// };
const encodingsServices = {
  fetchEncodings
  // fetchEncodingWithPackage
};
export default encodingsServices;

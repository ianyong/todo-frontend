import axios, { AxiosError, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiPromise, ApiResponse, StatusMessageType } from '../types/api';

const DEFAULT_API_RESPONSE: ApiResponse<{}> = Object.freeze({
  code: -1,
  payload: {},
  messages: [
    {
      content: 'Request failed. Please check your Internet connection.',
      type: StatusMessageType.Error,
    },
  ],
});

function getResponseMessages<D>(response: ApiResponse<D>): string {
  return response.messages.map((message) => message.content).join('; ');
}

function processRequest<D>(endpoint: string, promise: AxiosPromise<ApiResponse<D>>): ApiPromise<D> {
  return promise
    .then((response: AxiosResponse<ApiResponse<D>>) => {
      const apiResponse: ApiResponse<D> = response.data;
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.info(`[API] ${apiResponse.code} ${endpoint} : ${getResponseMessages(apiResponse)}`);
      }
      return apiResponse;
    })
    .catch((error: AxiosError<ApiResponse<D>>) => {
      const apiResponse: ApiResponse<{}> =
        error.response && error.response.data ? error.response.data : DEFAULT_API_RESPONSE;
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error(`[API] ${apiResponse.code} ${endpoint} : ${getResponseMessages(apiResponse)}`);
      }
      throw apiResponse;
    });
}

class BaseAPI {
  private client = axios.create({
    baseURL: 'localhost:8000',
  });

  private clientGet<D>(url: string, params?: AxiosRequestConfig<D>): AxiosPromise<ApiResponse<D>> {
    return this.client.get(url, params);
  }

  private clientPost<D>(url: string, data: D): AxiosPromise<ApiResponse<D>> {
    return this.client.post(url, data);
  }

  private clientPut<D>(url: string, data: D): AxiosPromise<ApiResponse<D>> {
    return this.client.put(url, data);
  }

  private clientPatch<D>(url: string, data: D): AxiosPromise<ApiResponse<D>> {
    return this.client.patch(url, data);
  }

  private clientDelete<D>(url: string): AxiosPromise<ApiResponse<D>> {
    return this.client.delete(url);
  }

  protected get<D>(url: string, params?: AxiosRequestConfig<D>): ApiPromise<D> {
    return processRequest(url, this.clientGet(url, params));
  }

  protected post<D>(url: string, data: D): ApiPromise<D> {
    return processRequest(url, this.clientPost(url, data));
  }

  protected put<D>(url: string, data: D): ApiPromise<D> {
    return processRequest(url, this.clientPut(url, data));
  }

  protected patch<D>(url: string, data: D): ApiPromise<D> {
    return processRequest(url, this.clientPatch(url, data));
  }

  protected delete<D>(url: string): ApiPromise<D> {
    return processRequest(url, this.clientDelete<D>(url));
  }
}

export default BaseAPI;

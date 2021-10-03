export enum StatusMessageType {
  Error = 0,
  Warning = 1,
  Information = 2,
  Success = 3,
}

export interface StatusMessage {
  content: string;
  type: StatusMessageType;
}

export interface ApiResponse<D> {
  code: number;
  payload: D;
  messages: StatusMessage[];
}

export type ApiPromise<D> = Promise<ApiResponse<D>>;

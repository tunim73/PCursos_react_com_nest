export interface ApiException {
  message: string;
  error: string;
  statusCode: number
}


export const isApiException = (obj: any): obj is ApiException =>  {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'message' in obj &&
    'error' in obj &&
    'statusCode' in obj
  );
}

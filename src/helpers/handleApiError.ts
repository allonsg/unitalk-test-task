import { AxiosError } from 'axios';

export const handleApiError = (error: unknown) => {
  if (error instanceof AxiosError || error instanceof Error) {
    console.error(error.message);
    return;
  }
  console.error(error);
};

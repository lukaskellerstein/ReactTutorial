export type ErrorState = {
  hasError: boolean;
  title: string;
  message: string;
};

export class ApiError extends Error {
  constructor(status: number, statusText: string) {
    super("Api Error");
    this.status = status;
    this.statusText = statusText;
  }
  status: number;
  statusText: string;
}

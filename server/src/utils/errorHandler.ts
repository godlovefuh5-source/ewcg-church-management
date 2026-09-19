export class BadRequestError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BadRequestError';
  }
}

export class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NotFoundError';
  }
}

export class UnauthorizedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnauthorizedError';
  }
}

export class ForbiddenError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ForbiddenError';
  }
}

export const handleError = (error: unknown): { message: string; status: number } => {
  if (error instanceof BadRequestError) {
    return { message: error.message, status: 400 };
  }
  if (error instanceof NotFoundError) {
    return { message: error.message, status: 404 };
  }
  if (error instanceof UnauthorizedError) {
    return { message: error.message, status: 401 };
  }
  if (error instanceof ForbiddenError) {
    return { message: error.message, status: 403 };
  }
  if (error instanceof Error) {
    return { message: error.message, status: 500 };
  }
  return { message: 'Internal Server Error', status: 500 };
};

enum ErrorType {
  BAD_TOKEN = 'BadTokenError',
  TOKEN_EXPIRED = 'TokenExpiredError',
  UNAUTHORIZED = 'AuthFailureError',
  ACCESS_TOKEN = 'AccessTokenError',
  INTERNAL = 'InternalError',
  NOT_FOUND = 'NotFoundError',
  NO_ENTRY = 'NoEntryError',
  NO_DATA = 'NoDataError',
  BAD_REQUEST = 'BadRequestError',
  FORBIDDEN = 'ForbiddenError',
  NOT_IMPLEMENTED = 'NotImplemented',
  OUT_OF_QUOTA = 'OutOfQuotaError',
  DB_ERROR = 'DBError',
  UNPROCESSABLE_ENTITY = 'UnprocessableEntityError',
  UNSUPPORTED_MEDIA_FILE = 'UnsupportedMediaFile',
  NOT_ACCEPTABLE = 'NotAcceptable',
  TOKEN_ERROR = 'TokenError',
  ValidationError = 'ValidationError',
}

enum ResponseStatus {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  ValidationError = 401,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  NOT_ACCEPTABLE = 406,
  OUT_OF_QUOTA = 429,
  UNPROCESSABLE_ENTITY = 422,
  UNSUPPORTED_MEDIA_FILE = 415,
  INTERNAL_ERROR = 500,
  NOT_IMPLEMENTED = 501,
}

export abstract class ApiError extends Error {
  constructor(
    public type: ErrorType,
    public message: string = 'error',
    public httpStatusCode: number,
    public errors: object[] = [],
  ) {
    super(type);
  }
}

export class AuthFailureError extends ApiError {
  constructor(message = 'Invalid Auth Key') {
    super(ErrorType.UNAUTHORIZED, message, ResponseStatus.UNAUTHORIZED);
  }
}

export class InternalError extends ApiError {
  constructor(message = 'Internal error') {
    super(ErrorType.INTERNAL, message, ResponseStatus.INTERNAL_ERROR);
  }
}
export class BadRequestError extends ApiError {
  constructor(message: string | any = 'Bad Request') {
    super(ErrorType.BAD_REQUEST, message, ResponseStatus.BAD_REQUEST);
  }
}
export class NotFoundError extends ApiError {
  constructor(message = 'Not Found') {
    super(ErrorType.NOT_FOUND, message, ResponseStatus.NOT_FOUND);
  }
}
export class ForbiddenError extends ApiError {
  constructor(message = 'Permission denied') {
    super(ErrorType.FORBIDDEN, message, ResponseStatus.FORBIDDEN);
  }
}
export class NoEntryError extends ApiError {
  constructor(message = "Entry don't exists") {
    super(ErrorType.NO_ENTRY, message, ResponseStatus.NOT_FOUND);
  }
}
export class BadTokenError extends ApiError {
  constructor(message = 'Invalid Token') {
    super(ErrorType.BAD_TOKEN, message, ResponseStatus.UNAUTHORIZED);
  }
}
export class TokenExpiredError extends ApiError {
  constructor(message = 'Token is expired') {
    super(ErrorType.TOKEN_EXPIRED, message, ResponseStatus.UNAUTHORIZED);
  }
}
export class NoDataError extends ApiError {
  constructor(message = 'No data available') {
    super(ErrorType.NO_DATA, message, ResponseStatus.NOT_FOUND);
  }
}
export class AccessTokenError extends ApiError {
  constructor(message = 'Invalid access token') {
    super(ErrorType.ACCESS_TOKEN, message, ResponseStatus.UNAUTHORIZED);
  }
}
export class ValidationError extends ApiError {
  constructor(message = 'Invalid inputs') {
    super(ErrorType.DB_ERROR, message, ResponseStatus.BAD_REQUEST);
  }
}

export class MultipleValidationErrors extends ApiError {
  errors: any[];
  constructor(errors: any[] = [], message = 'Invalid inputs') {
    super(ErrorType.DB_ERROR, message, ResponseStatus.BAD_REQUEST, errors);
    this.errors = errors;
  }
}

export class OutOfQuotaError extends ApiError {
  constructor(message = 'Out of Quota') {
    super(ErrorType.OUT_OF_QUOTA, message, ResponseStatus.OUT_OF_QUOTA);
  }
}

export class UnprocessableEntityError extends ApiError {
  constructor(message = 'File size is large') {
    super(
      ErrorType.UNPROCESSABLE_ENTITY,
      message,
      ResponseStatus.UNPROCESSABLE_ENTITY,
    );
  }
}
export class UnsupportedMediaFile extends ApiError {
  constructor(message = 'Unsupported Media Type') {
    super(
      ErrorType.UNSUPPORTED_MEDIA_FILE,
      message,
      ResponseStatus.UNSUPPORTED_MEDIA_FILE,
    );
  }
}

export class NotImplemented extends ApiError {
  constructor(message = 'Not Implemented') {
    super(ErrorType.NOT_IMPLEMENTED, message, ResponseStatus.NOT_IMPLEMENTED);
  }
}
export class NotAcceptable extends ApiError {
  constructor(message = 'Not Acceptable') {
    super(ErrorType.NOT_ACCEPTABLE, message, ResponseStatus.NOT_ACCEPTABLE);
  }
}

export class JsonWebTokenError extends ApiError {
  constructor(message = 'Invalid Token') {
    super(ErrorType.TOKEN_ERROR, message, ResponseStatus.UNAUTHORIZED);
  }
}

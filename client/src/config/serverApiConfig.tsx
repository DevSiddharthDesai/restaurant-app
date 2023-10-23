export const BASE_URL =
  process.env.NODE_ENV === 'production' ||
  process.env.REACT_APP_DEV_REMOTE === 'remote'
    ? process.env.REACT_APP_BACKEND_SERVER
    : 'http://localhost:4000';

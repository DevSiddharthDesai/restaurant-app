const contentTypeOrDefault = (contentType = 'application/json') => contentType;

export const headers = {
  'Content-Type': contentTypeOrDefault(),
};

import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_URL;

export function signIn(credentials) {
  return fetch(baseUrl + '/signin', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(credentials),
  })
    .then(handleResponse)
    .catch(handleError);
}

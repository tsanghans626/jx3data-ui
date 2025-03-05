export class APIError extends Error {
  constructor({ code, msg }) {
    super(`J[${code}] - ${msg}`);
  }
}

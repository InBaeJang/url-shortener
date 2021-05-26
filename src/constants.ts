
export const baseUrl: string = process.env.NODE_ENV === 'development'
  ? "http://localhost:3033" // for dev & test
  : "http://localhost:3004" // for production (must be absolute)
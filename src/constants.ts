
export const baseUrl: string = process.env.NODE_ENV === 'development'
  ? "http://localhost:3033" // for dev & test
  : "https://u.inbaedid.com" // for production (must be absolute)
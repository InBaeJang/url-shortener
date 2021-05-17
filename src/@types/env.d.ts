declare namespace NodeJS {
  export interface ProcessEnv {
    POSTGRES_HOST?: string;
    POSTGRES_USER?: string;
    POSTGRES_PASS?: string;
    POSTGRES_NAME?: string;
  }
}

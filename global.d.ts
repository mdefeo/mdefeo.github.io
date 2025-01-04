declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    APP_ENV: string;
    APP_DEBUG: string;
    APP_DOMAIN: string;
    PORT: string;
    NEXT_PUBLIC_APP_NAME: string;
    NEXT_PUBLIC_APP_DESCRIPTION: string;
    NEXT_PUBLIC_APP_IMAGE: string;
    NEXT_PUBLIC_APP_THEME: string;
    NEXT_PUBLIC_APP_TYPE: string;
    NEXT_PUBLIC_APP_LOCALE: string;
    SPOTIFY_CLIENT_ID: string;
    SPOTIFY_CLIENT_SECRET: string;
    SPOTIFY_REDIRECT_URI: string;
  }
}

declare var process: {
  env: NodeJS.ProcessEnv;
};
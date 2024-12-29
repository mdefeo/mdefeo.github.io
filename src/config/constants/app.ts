// /src/config/constants/app.ts
import { APP_URL } from "./env";

export const APP_NAME = process.env.APP_NAME || "Marcello De Feo";
export const APP_DESCRIPTION =
  process.env.APP_DESCRIPTION ||
  "Personal and professional portfolio of Full-Stack Software Engineer, MBA candidate, and amateur musician, Marcello De Feo.";
export const APP_IMAGE =
  process.env.APP_IMAGE || `${APP_URL}/marcello-def-feo.jpg`;
export const APP_THEME = process.env.APP_THEME || "nord";
export const APP_TYPE = process.env.APP_TYPE || "website";
export const APP_LOCALE = process.env.APP_LOCALE || "en_US";
export const GLOBAL_TITLE_SUFFIX = APP_NAME;

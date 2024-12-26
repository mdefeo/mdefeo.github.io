import { DEFAULT_METADATA } from "@/config/defaultMetaData";
import { GLOBAL_TITLE_SUFFIX, APP_URL } from "@/config/constants/index";

export const generateMetadata = (overrides: Partial<typeof DEFAULT_METADATA>) => {
  const url = overrides.url
    ? `${APP_URL}${overrides.url.startsWith("/") ? overrides.url : `/${overrides.url}`}`
    : DEFAULT_METADATA.url;

  const title = overrides.title
    ? `${overrides.title} - ${GLOBAL_TITLE_SUFFIX}`
    : DEFAULT_METADATA.title;

  return {
    ...DEFAULT_METADATA,
    ...overrides,
    title,
    url,
  };
};

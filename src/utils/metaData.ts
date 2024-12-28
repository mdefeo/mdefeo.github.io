import metaDataJson from "@/data/json/metaData.json";
import { MetaData } from "@/types/MetaDataProps";
import { APP_NAME, APP_DESCRIPTION, APP_IMAGE } from "@/config/constants/app";

const metaData = metaDataJson as MetaData;

export function getPageMetadata(pageKey: keyof MetaData) {
  const pageMetadata = metaData[pageKey] || {};
  const titleSuffix = " - Marcello De Feo";

  return {
    title: `${pageMetadata.title || APP_NAME}${titleSuffix}`,
    description: pageMetadata.description || APP_DESCRIPTION,
    images: pageMetadata.images || [APP_IMAGE],
  };
}

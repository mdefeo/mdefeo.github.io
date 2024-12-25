import { useEffect } from "react";
import { MetaDataProps } from "../interfaces/MetaDataProps";

const defaultMetaData: MetaDataProps = {
  title: "Marcello De Feo",
  description: "Professional portfolio of Marcello De Feo, a software engineer, MBA candidate, and amateur musician.",
};

const titleSuffix = " - Marcello De Feo";


const useMetaData = (metaData: MetaDataProps) => {
  useEffect(() => {
    const { title, description } = { ...defaultMetaData, ...metaData };


    const ogTitle = metaData.ogTitle || title;
    const ogDescription = metaData.ogDescription || description;

    document.title = `${title}${titleSuffix}`;

    const addOrUpdateMeta = (name: string, content: string) => {
      let metaTag = document.querySelector(
        name.startsWith("og:")
          ? `meta[property='${name}']`
          : `meta[name='${name}']`
      );
      if (!metaTag) {
        metaTag = document.createElement("meta");
        if (name.startsWith("og:")) {
          metaTag.setAttribute("property", name);
        } else {
          metaTag.setAttribute("name", name);
        }
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute("content", content);
    };

    addOrUpdateMeta("description", description);
    if (ogTitle) addOrUpdateMeta("og:title", `${ogTitle}${titleSuffix}`);
    if (ogDescription) addOrUpdateMeta("og:description", ogDescription);

    return () => {
      document.querySelector("meta[name='description']")?.remove();
      document.querySelector("meta[property='og:title']")?.remove();
      document.querySelector("meta[property='og:description']")?.remove();
    };
  }, [metaData]);
};

export default useMetaData;
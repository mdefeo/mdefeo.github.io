import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { MetaData } from '../interfaces/MetaData';

const useMetaData = ({ title, description, ogTitle, ogDescription }: MetaData) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Helmet>
      <title>{title} - Marcello De Feo</title>
      {description && <meta name="description" content={description} />}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && <meta property="og:description" content={ogDescription} />}
    </Helmet>
  );
};

export default useMetaData;

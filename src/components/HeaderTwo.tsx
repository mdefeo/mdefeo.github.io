import React, { useEffect, useState } from 'react';

interface DynamicH2Props {
  content: string;
}

const DynamicH2: React.FC<DynamicH2Props> = ({ content }) => {
  const [displayContent, setDisplayContent] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayContent(content);
    }, 500);

    return () => clearTimeout(timer);
  }, [content]);

  return <h2>{displayContent}</h2>;
};

export default DynamicH2;

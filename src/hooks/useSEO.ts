import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function useSEO({ title, description, keywords, image, url }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | NIA Guntur`;

    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', description);
    if (keywords) setMeta('meta[name="keywords"]', keywords);

    setMeta('meta[property="og:title"]', `${title} | NIA Guntur`);
    setMeta('meta[property="og:description"]', description);
    if (image) setMeta('meta[property="og:image"]', image);
    if (url) setMeta('meta[property="og:url"]', url);

    setMeta('meta[name="twitter:title"]', `${title} | NIA Guntur`);
    setMeta('meta[name="twitter:description"]', description);
    if (image) setMeta('meta[name="twitter:image"]', image);
  }, [title, description, keywords, image, url]);
}

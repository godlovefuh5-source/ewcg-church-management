export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSEOMetadata = ({
  title,
  description,
  keywords,
  image,
  url,
}: SEOMetadata): SEOMetadata => {
  return {
    title,
    description,
    keywords,
    image,
    url,
  };
};

export const generateSEOHeaders = (seoData: SEOMetadata): Record<string, string> => {
  const headers: Record<string, string> = {
    'X-SEO-Title': seoData.title,
    'X-SEO-Description': seoData.description,
  };

  if (seoData.keywords) {
    headers['X-SEO-Keywords'] = seoData.keywords;
  }
  if (seoData.image) {
    headers['X-SEO-Image'] = seoData.image;
  }
  if (seoData.url) {
    headers['X-SEO-URL'] = seoData.url;
  }

  return headers;
};

export const generateSitemap = (entries: SitemapEntry[], domain: string): string => {
  const baseUrl = domain.replace(/\/$/, '');
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  entries.forEach(entry => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${entry.url}</loc>\n`;

    if (entry.lastmod) {
      xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
    }

    if (entry.changefreq) {
      xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
    }

    if (entry.priority !== undefined) {
      xml += `    <priority>${entry.priority}</priority>\n`;
    }

    xml += '  </url>\n';
  });

  xml += '</urlset>';
  return xml;
};

export const generateRobotsTxt = (domain: string): string => {
  const baseUrl = domain.replace(/\/$/, '');

  return `# EWCG Church Management System Robots.txt
# Generated automatically for SEO

User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/
Disallow: /private/
Disallow: /*.json$
Disallow: /uploads/

# Specific bot rules
User-agent: AdsBot-Google
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: bingbot
Allow: /

# Crawl delay
Crawl-delay: 1

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml
`;
};

export const getDefaultSitemapEntries = (): SitemapEntry[] => {
  return [
    { url: '/', priority: 1.0, changefreq: 'weekly', lastmod: new Date().toISOString().split('T')[0] },
    { url: '/about', priority: 0.8, changefreq: 'monthly' },
    { url: '/events', priority: 0.9, changefreq: 'weekly' },
    { url: '/sermons', priority: 0.9, changefreq: 'weekly' },
    { url: '/ministries', priority: 0.8, changefreq: 'monthly' },
    { url: '/gallery', priority: 0.7, changefreq: 'monthly' },
    { url: '/give', priority: 0.8, changefreq: 'weekly' },
    { url: '/prayer', priority: 0.7, changefreq: 'weekly' },
    { url: '/contact', priority: 0.7, changefreq: 'monthly' },
  ];
};
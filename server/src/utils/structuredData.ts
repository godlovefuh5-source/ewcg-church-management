/**
 * Structured data and JSON-LD utilities for SEO
 * https://schema.org/
 */

export interface LocalBusinessSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs: string[];
  image: string;
}

export interface BreadcrumbSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item: string;
  }>;
}

export interface EventSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: {
    '@type': string;
    name: string;
    address: string;
  };
  image: string;
  organizer: {
    '@type': string;
    name: string;
  };
}

export const generateLocalBusinessSchema = (
  name: string,
  description: string,
  url: string,
  phone: string,
  email: string,
  address: string,
  socialLinks: string[],
  logo: string
): LocalBusinessSchema => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    url,
    telephone: phone,
    email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address,
      addressLocality: 'City',
      addressRegion: 'State',
      postalCode: '12345',
      addressCountry: 'US',
    },
    sameAs: socialLinks,
    image: logo,
  };
};

export const generateBreadcrumbs = (
  current: Array<{ name: string; url: string }>
): BreadcrumbSchema => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: current.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

export const generateEventSchema = (
  name: string,
  description: string,
  startDate: string,
  endDate: string,
  location: string,
  image: string,
  organizerName: string
): EventSchema => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    description,
    startDate,
    endDate,
    location: {
      '@type': 'Place',
      name: 'Event Location',
      address: location,
    },
    image,
    organizer: {
      '@type': 'Organization',
      name: organizerName,
    },
  };
};

export const generatePageMetaTags = (
  title: string,
  description: string,
  keywords?: string,
  image?: string,
  url?: string,
  canonical?: string
): Record<string, string> => {
  return {
    'og:title': title,
    'og:description': description,
    'og:image': image || '',
    'og:url': url || '',
    'og:type': 'website',
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image || '',
    'description': description,
    'keywords': keywords || '',
    'canonical': canonical || url || '',
  };
};

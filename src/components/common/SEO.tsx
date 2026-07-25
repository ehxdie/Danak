import React from 'react';
import { Helmet } from 'react-helmet-async';
import { companyData } from '../../data/company';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical
}) => {
  const siteTitle = title 
    ? `${title} | ${companyData.name}` 
    : `${companyData.name} | Marine Logistics & Offshore Support Nigeria`;
  
  const siteDescription = description || companyData.description;

  const defaultKeywords = "marine logistics nigeria, offshore support services, vessel management, equipment rental maritime, offshore logistics gulf of guinea, Danak logistics";

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="robots" content="index, follow" />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:site_name" content={companyData.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
    </Helmet>
  );
};

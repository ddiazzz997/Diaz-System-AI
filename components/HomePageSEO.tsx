import React from 'react';
import SEO from './SEO';

const HomePageSEO: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Scale With Teddy',
    description: 'Ayudando a consultores expertos y agencias a escalar más allá de $50k/mes con sistemas de LinkedIn impulsados por datos.',
    url: 'https://scalewithteddy.com',
    logo: 'https://scalewithteddy.com/Logo/Logoo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales'
    },
    sameAs: [
      'https://www.linkedin.com/company/scalewithteddy',
      'https://twitter.com/scalewithteddy'
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Scale With Teddy',
    url: 'https://scalewithteddy.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://scalewithteddy.com/blog?search={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://scalewithteddy.com'
      }
    ]
  };

  // Combine all schemas
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, websiteSchema, breadcrumbSchema]
  };

  return (
    <SEO
      title="Escala Tu Negocio con LinkedIn"
      description="¿Listo para conseguir 5 clientes de LinkedIn en 30 días? Si estás generando más de $50k/mes online y quieres un flujo de ingresos de LinkedIn sin intervención, te mostraremos exactamente cuánta ganancia estás dejando sobre la mesa."
      structuredData={structuredData}
    />
  );
};

export default HomePageSEO;

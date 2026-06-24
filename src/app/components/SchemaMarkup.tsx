import React from 'react';

export function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Kalra Hospitals",
    "url": "https://kalrahospitals.com",
    "logo": "https://kalrahospitals.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-11-2345-6789",
      "contactType": "Emergency and Customer Service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector 12, Main Road",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110001",
      "addressCountry": "IN"
    },
    "department": [
      {
        "@type": "MedicalClinic",
        "name": "Cardiology Department",
        "medicalSpecialty": "Cardiology"
      },
      {
        "@type": "MedicalClinic",
        "name": "Neurology Department",
        "medicalSpecialty": "Neurology"
      }
    ],
    "medicalSpecialty": [
      "Cardiovascular",
      "Neurologic",
      "Orthopedic",
      "Gastroenterologic",
      "Emergency"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

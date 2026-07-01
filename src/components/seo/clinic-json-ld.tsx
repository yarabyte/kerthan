import type { SiteInfo } from "@/lib/content-types";
import { getSiteUrl } from "@/lib/site-url";

interface ClinicJsonLdProps {
  site: SiteInfo;
}

export function ClinicJsonLd({ site }: ClinicJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: site.name,
    url: getSiteUrl(),
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Douala",
      addressCountry: "CM",
    },
    openingHours: "Mo-Sa 07:30-19:00",
    medicalSpecialty: ["GeneralPractice", "InternalMedicine"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

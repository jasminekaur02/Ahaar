const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const jsonLdData = {
  "@context": "http://schema.org",
  "@type": "WebPage",
  name: `${companyName} - Login`,
  description:
    "Log in to your account on Ahaar .",
  url: `${siteUrl}/login`,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteUrl}/login`,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: companyName,
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Login",
        item: `${siteUrl}/login`,
      },
    ],
  },
};

export const metaData = {
  title:
    "Login |  Ahaar : One BYTE Against Waste",
  description:
    "Log in to your account on Ahaar ",
  metadataBase: new URL(`${siteUrl}/login`),
  alternates: {
    canonical: "/",
  },
};

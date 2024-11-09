const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const jsonLdData = {
  "@context": "http://schema.org",
  "@type": "WebPage",
  name: `${companyName} - Sign Up`,
  description:
    "Sign up for a new account on Ahaar .",
  url: `${siteUrl}/sign-up`,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteUrl}/signup`,
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
        name: "Sign Up",
        item: `${siteUrl}/sign-up`,
      },
    ],
  },
};
export const metaData = {
  title:
    "Sign Up | Ahaar : One BYTE Against Waste",
  description:
    "Sign up for a new account on Ahaar .",
  metadataBase: new URL(`${siteUrl}/sign-up`),
  alternates: {
    canonical: "/",
  },
};

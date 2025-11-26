import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  author?: string;
  twitterCard?: string;
}

export const SEO = ({
  title = "Ebosetale Okhueleigbe - Tax Auditor, Gender Analyst & Public Speaker",
  description = "Official website of Ebosetale Okhueleigbe - Tax Auditor at FIRS, Gender Analyst, Public Speaker, Humanitarian, and Founder of Women Mentorship Forum. Recognized as Humanitarian of the Year.",
  keywords = "Ebosetale Okhueleigbe, Stella Whyte, Tax Auditor, FIRS Nigeria, Gender Analyst, Public Speaker, Women Mentorship Forum, WMF, Humanitarian, Leadership, Nigeria, Africa Women Conference, Vote Right Campaign, Women Empowerment, African Women Leaders, Tax Expert, Gender Equality Advocate",
  ogImage = "https://www.ebosetaleokhueleigbe.com/social-preview.jpg",
  ogType = "website",
  canonicalUrl,
  author = "Ebosetale Okhueleigbe",
  twitterCard = "summary_large_image",
}: SEOProps) => {
  const currentUrl = canonicalUrl || (typeof window !== "undefined" ? window.location.href : "https://www.ebosetaleokhueleigbe.com");

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Ebosetale Okhueleigbe" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#FBBF24" />
      <meta name="msapplication-TileColor" content="#FBBF24" />
      
      {/* Structured Data - Person Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Ebosetale Okhueleigbe",
          "alternateName": "Stella Whyte",
          "url": "https://www.ebosetaleokhueleigbe.com",
          "image": ogImage,
          "jobTitle": "Tax Auditor & Gender Analyst",
          "worksFor": {
            "@type": "Organization",
            "name": "Federal Inland Revenue Service (FIRS)"
          },
          "alumniOf": [
            {
              "@type": "Organization",
              "name": "University of Abuja"
            },
            {
              "@type": "Organization",
              "name": "Harvard Business School"
            },
            {
              "@type": "Organization",
              "name": "London School of Business Administration"
            }
          ],
          "award": [
            "Humanitarian of the Year 2023",
            "PR Times Africa Award",
            "WHO IS WHO Impact Maker"
          ],
          "knowsAbout": [
            "Tax Auditing",
            "Gender Studies",
            "Public Speaking",
            "Women Empowerment",
            "Leadership Development"
          ],
          "sameAs": [
            "https://instagram.com/realstellawhyte",
            "https://linkedin.com/in/ebosetale-obozele-536a5a20b",
            "https://www.tiktok.com/@whyte_ose"
          ]
        })}
      </script>

      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Women Mentorship Forum",
          "founder": {
            "@type": "Person",
            "name": "Ebosetale Okhueleigbe"
          },
          "url": "https://www.ebosetaleokhueleigbe.com",
          "logo": ogImage,
          "description": "A platform committed to empowering women through mentorship, collaboration, and actionable leadership."
        })}
      </script>
    </Helmet>
  );
};

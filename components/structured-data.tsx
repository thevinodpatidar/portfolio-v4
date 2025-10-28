import Script from "next/script";

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vinod Patidar",
    jobTitle: "Software Engineer & Entrepreneur",
    description:
      "Passionate software engineer and entrepreneur sharing his journey through code and innovation. Specializing in full-stack development, AI integration, and startup building.",
    url: process.env.NEXT_PUBLIC_NEXT_APP_URL as string,
    sameAs: [
      "https://twitter.com/thevinodpatidar",
      "https://github.com/thevinodpatidar",
      "https://linkedin.com/in/thevinodpatidar",
    ],
    knowsAbout: [
      "Software Engineering",
      "Full-Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Artificial Intelligence",
      "Startup Building",
      "Entrepreneurship",
      "Web Development",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer",
      occupationLocation: {
        "@type": "Country",
        name: "India",
      },
    },
    founderOf: [
      {
        "@type": "Organization",
        name: "Startuplist.ing",
        url: "https://startuplist.ing",
      },
      {
        "@type": "Organization",
        name: "Joyform.in",
        url: "https://joyform.in",
      },
      {
        "@type": "Organization",
        name: "Graftek.in",
        url: "https://graftek.in",
      },
      {
        "@type": "Organization",
        name: "Vaanix.ai",
        url: "https://vaanix.ai",
      },
    ],
    image: `${process.env.NEXT_PUBLIC_NEXT_APP_URL as string}/web-app-manifest-512x512.png`,
    gender: "Male",
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

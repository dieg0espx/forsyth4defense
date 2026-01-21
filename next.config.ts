import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Practice section redirects
      {
        source: "/practice-johndforsyth",
        destination: "/attorney",
        permanent: true,
      },
      {
        source: "/practice-philosophy",
        destination: "/philosophy",
        permanent: true,
      },
      {
        source: "/practice-resources",
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/practice-up-close",
        destination: "/personal",
        permanent: true,
      },
      {
        source: "/practice-contact",
        destination: "/contact",
        permanent: true,
      },
      // Process and Results redirects
      {
        source: "/process-recentclientcases",
        destination: "/cases/recent",
        permanent: true,
      },
      {
        source: "/process-suzanne-little-case",
        destination: "/cases/suzanne-little",
        permanent: true,
      },
      {
        source: "/process-past-client-cases",
        destination: "/cases/past",
        permanent: true,
      },
      {
        source: "/process-client-testimonials-1",
        destination: "/testimonials",
        permanent: true,
      },
      // Past Client Cases category redirects
      {
        source: "/past-client-cases-1",
        destination: "/cases/sex-crimes",
        permanent: true,
      },
      {
        source: "/past-client-cases-2",
        destination: "/practice-areas/sex-crimes",
        permanent: true,
      },
      {
        source: "/past-client-cases-3",
        destination: "/practice-areas/cannabis",
        permanent: true,
      },
      {
        source: "/past-client-cases-4",
        destination: "/cases/past",
        permanent: true,
      },
      {
        source: "/past-client-cases-5",
        destination: "/practice-areas/homicide-kidnapping",
        permanent: true,
      },
      {
        source: "/past-client-cases-6",
        destination: "/cases/dui",
        permanent: true,
      },
      {
        source: "/past-client-cases-7",
        destination: "/cases/dui",
        permanent: true,
      },
      {
        source: "/past-client-cases-8",
        destination: "/cases/three-strikes",
        permanent: true,
      },
      {
        source: "/past-client-cases-9",
        destination: "/cases/domestic-violence",
        permanent: true,
      },
      {
        source: "/past-client-cases-10",
        destination: "/cases/past",
        permanent: true,
      },
      {
        source: "/past-client-cases-11",
        destination: "/cases/past",
        permanent: true,
      },
      {
        source: "/past-client-cases-12",
        destination: "/practice-areas/federal-weapons",
        permanent: true,
      },
      {
        source: "/past-client-cases-13",
        destination: "/cases/past",
        permanent: true,
      },
      {
        source: "/past-client-cases-14",
        destination: "/cases/past",
        permanent: true,
      },
      {
        source: "/past-client-cases-15",
        destination: "/cases/past",
        permanent: true,
      },
      {
        source: "/past-client-cases-16",
        destination: "/practice-areas/homicide-kidnapping",
        permanent: true,
      },
      {
        source: "/past-client-cases-17",
        destination: "/cases/past",
        permanent: true,
      },
      {
        source: "/past-client-cases-18",
        destination: "/cases/past",
        permanent: true,
      },
      {
        source: "/past-client-cases-child-pornography-19",
        destination: "/cases/sex-crimes",
        permanent: true,
      },
      // News redirect
      {
        source: "/forsyth4defense-news-articles",
        destination: "/news",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

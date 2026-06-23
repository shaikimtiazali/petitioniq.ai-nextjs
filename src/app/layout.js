import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata = {
  title:
    "PetitionIQ — AI-Powered EB-1A, NIW & O-1A Evaluation | Free Assessment",
  description:
    "Free AI-powered EB-1A, NIW & O-1A evaluation. Map credentials to USCIS criteria before filing. Attorney-supervised. No legal advice.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://petitioniq.ai/",
  },
  openGraph: {
    type: "website",
    url: "https://petitioniq.ai/",
    title: "PetitionIQ — AI-Powered Immigration Evaluation",
    description:
      "Free AI-powered EB-1A, NIW & O-1A evaluation. Map credentials to USCIS criteria before filing. Attorney-supervised. No legal advice.",
    images: [
      {
        url: "https://petitioniq.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "PetitionIQ",
      },
    ],
    siteName: "PetitionIQ",
  },
  twitter: {
    card: "summary_large_image",
    title: "PetitionIQ — AI-Powered Immigration Evaluation",
    description:
      "Free AI-powered EB-1A, NIW & O-1A evaluation. Map credentials to USCIS criteria before filing. Attorney-supervised. No legal advice.",
    images: ["https://petitioniq.ai/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PetitionIQ",
    applicationCategory: "LegalService",
    description:
      "Free AI-powered evaluation for EB-1A, EB-2 NIW, and O-1A visa petitions. Map your credentials to USCIS criteria before filing.",
    url: "https://petitioniq.ai/",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free Stage A AI Evaluation",
    },
    creator: {
      "@type": "Person",
      name: "Khushboo Jain",
      jobTitle: "Founder & Employment-Based Immigration Specialist",
      url: "https://petitioniq.ai/",
    },
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#evaluator">
          Skip to evaluation tool
        </a>
        {children}
      </body>
    </html>
  );
}

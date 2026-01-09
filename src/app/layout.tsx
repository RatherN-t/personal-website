import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yash Mittal | AI, Robotics & Practical Prototyping",
  description:
    "Building intelligent systems that touch the real world. Computer Science student at UNSW Sydney specializing in AI, with a passion for robotics and practical prototyping.",
  keywords: [
    "Yash Mittal",
    "AI",
    "Artificial Intelligence",
    "Robotics",
    "UNSW",
    "Computer Science",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Yash Mittal" }],
  creator: "Yash Mittal",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://yashmittal.tech",
    title: "Yash Mittal | AI, Robotics & Practical Prototyping",
    description:
      "Building intelligent systems that touch the real world. Computer Science student at UNSW Sydney specializing in AI.",
    siteName: "Yash Mittal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Mittal | AI, Robotics & Practical Prototyping",
    description:
      "Building intelligent systems that touch the real world. Computer Science student at UNSW Sydney specializing in AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Yash Mittal",
              email: "y.mittal@student.unsw.edu.au",
              url: "https://yashmittal.tech",
              sameAs: ["https://www.linkedin.com/in/yash-mittal-993223352/"],
              jobTitle: "AI Engineer Intern",
              worksFor: {
                "@type": "Organization",
                name: "Anthrobyte.ai",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "UNSW Sydney",
              },
              knowsAbout: [
                "Artificial Intelligence",
                "Robotics",
                "Machine Learning",
                "Python",
                "TypeScript",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <SmoothScrollProvider>
          <div className="aurora" aria-hidden="true" />
          {children}
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}

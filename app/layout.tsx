import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsHeadings = Poppins({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
});

const poppinsBody = Poppins({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Muneeb Gulistan | Portfolio",
  description: "Web Developer | AI Learner - Portfolio of Muneeb Gulistan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${poppinsBody.variable} ${poppinsHeadings.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

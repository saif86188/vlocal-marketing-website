import type { Metadata } from "next";
import "../styles/index.css";
import { SmoothScroll } from "./components/SmoothScroll";
import { Navigation } from "./components/Navigation";
import { FloatingContact } from "./components/FloatingContact";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "VLocal Group - Voice for Local",
  description: "A premium integrated marketing and media agency helping brands scale through creative advertising, strategic media planning, branding, PR, and digital growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen" suppressHydrationWarning={true}>
        <SmoothScroll />
        <Navigation />
        <div className="dashboard-container">
          {children}
        </div>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
import type { Metadata } from "next"; // Import type for metadata
import { Roboto } from "next/font/google"; // Import Roboto font
import "./globals.css"; // Import global CSS

// Configure Roboto font with desired subsets and weights
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Talia Vivrett Personal Website", // Update with your name
  description: "A personal website for Talia Vivrett.", // Update with your description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}


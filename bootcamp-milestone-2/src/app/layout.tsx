import type { Metadata } from "next"; // Import type for metadata
import { Roboto } from "next/font/google"; // Import Roboto font
import Navbar from "../components/navbar"; 
import "./globals.css"; // Import global CSS

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Talia Vivrett Personal Website", 
  description: "A personal website for Talia Vivrett.", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar /> 
        {children} 
      </body>
    </html>
  );
}



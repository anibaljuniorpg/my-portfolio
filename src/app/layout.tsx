import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

const geistSans = Poppins({
  subsets: ["latin"], 
  weight: ['300', '400', '500', '600'],
});

/*const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/

export const metadata: Metadata = {
  title: "Anibal Junior",
  description: "Anibal Junior is a software engineer...",
};

/*export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}*/

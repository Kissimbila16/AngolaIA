import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <head>
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Angola IA</title>
    <link rel="icon" type="image/x-icon" href="brain.svg"/>
    <meta name="description" content="Modelo de IA angolano."/>
    <meta name="keywords" content="IA,IA angola,AngolaIA,Modelos de IA,IA angolana,angola IA"/>

    <meta property="og:title" content="Angola IA"/>
    <meta property="og:description" content="Modelo de IA angolano."/>
    <meta property="og:image" content="./brain.svg"/>
    <meta property="og:url" content="https://dunamisia.vercel.app/duna.IA"/>
    <meta name="google-site-verification" content="MHvRfd-7iXCvpiDiV2sLuCEBgjIjgywzAh9CRNkLV7s" />
    <meta property="og:type" content="website"/>

    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content="Angola IA"/>
    <meta name="twitter:description" content="Modelo de IA angolano."/>
    <meta name="twitter:image" content="./brain.svg"/>

</head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

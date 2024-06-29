import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} justify-start md:justify-center md:text-[2.3vw] md:height:100vh m-[11px_0px]`}>{children}</body>
    </html>
  );
}

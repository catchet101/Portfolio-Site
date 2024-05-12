import "./globals.css";
import { Roboto } from "next/font/google";
import { Providers } from "./providers";
import TopNavbar from "@/components/top-navbar/TopNavbar";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio Site",
  description: "Cameron's Portfolio Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <TopNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}

import "./globals.css";
import { Inter } from "next/font/google";
import GoogleAnalytics from "@/app/components/GoogleAnalytics/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

const siteName = "ユオレイ";
const description = "ユオレイ(yuori)のプロフィールサイトです";
const url = "https://yuorei.com";

export const metadata = {
  title: {
    default: siteName,
    /** `next-seo`の`titleTemplate`に相当する機能 */
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    site: "",
    creator: "@yuorei71",
  },
  // verification: {
  //   google: 'サーチコンソールのやつ',
  // },
  alternates: {
    canonical: url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

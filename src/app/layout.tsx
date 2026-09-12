import type { Metadata } from "next";
import { Inter, Courier_Prime } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const courier = Courier_Prime({ 
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-courier"
});

export const metadata: Metadata = {
  title: "Dossiê: A Empresa Mais Cruel do Mundo",
  description: "Um dossiê investigativo sobre exploração, água e escândalos corporativos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${courier.variable} font-sans bg-[#0f0f0f] text-white custom-scrollbar`}>
        <LanguageProvider>
          <LanguageSwitcher />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

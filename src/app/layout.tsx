import type { Metadata } from "next";
import { Sora, Outfit } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PetForce | Marketing Digital para Clínicas Veterinárias e Pet Shops",
  description:
    "Agência de marketing digital 100% nichada no mercado pet. Tráfego pago, redes sociais, landing pages e automação para clínicas veterinárias, hospitais e pet shops. Resultados reais para o seu negócio pet.",
  keywords: [
    "marketing veterinário",
    "marketing digital pet shop",
    "tráfego pago veterinário",
    "agência marketing pet",
    "redes sociais clínica veterinária",
    "landing page veterinário",
    "marketing digital clínica veterinária",
    "gestão redes sociais pet",
    "PetForce",
  ],
  openGraph: {
    title: "PetForce | Marketing Digital para Clínicas Veterinárias e Pet Shops",
    description:
      "Agência 100% nichada no mercado pet. Resultados reais com tráfego pago, gestão de redes sociais e automação.",
    type: "website",
    locale: "pt_BR",
    siteName: "PetForce",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${outfit.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

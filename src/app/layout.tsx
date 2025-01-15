import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Busca y reserva hoteles | Unired",
  description: "Encuentra y reserva hoteles en cualquier lugar del mundo. Precios exclusivos, reseñas verificadas y ofertas increíbles.",
  keywords: "hoteles, reservas, alojamiento, ofertas de hoteles, búsqueda de hoteles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

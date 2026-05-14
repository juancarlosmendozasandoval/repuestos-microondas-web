import type { Metadata } from "next";
import "./globals.css"; // <- ¡Esta es la línea clave que devuelve el diseño!

export const metadata: Metadata = {
  title: "Platos para Microondas y Repuestos Exactos | Servicio Técnico",
  description: "Encuentra el plato de vidrio exacto para tu microondas sin saber la medida. Repuestos multimarca (Samsung, LG, Mabe) y servicio técnico garantizado a domicilio en Guayaquil.",
  keywords: ["plato de microondas", "repuestos de microondas", "magnetrón", "arreglar microondas Guayaquil", "plato de vidrio microondas"],
  openGraph: {
    title: "Diagnóstico Inteligente de Repuestos para Microondas",
    description: "Encuentra el repuesto 100% compatible garantizado en 3 simples pasos.",
    url: "https://repuestosmicroondas.com",
    siteName: "Repuestos Microondas",
    images: [
      {
        url: "https://repuestosmicroondas.com/plato-roto.png", 
        width: 800,
        height: 600,
      },
    ],
    locale: "es_EC",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
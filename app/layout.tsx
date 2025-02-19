import "./globals.css";

export const metadata = {
  title: "Rafał Chwalczuk - Portfolio",
  description: "Professional photographer & content creator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}

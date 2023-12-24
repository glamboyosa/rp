import { MM } from "./font";
import "./globals.css";

export const metadata = {
  title: "Rhema's Portfolio",
  description: "Tomisin Rhema Odukoya's Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={MM.className}>{children}</body>
    </html>
  );
}

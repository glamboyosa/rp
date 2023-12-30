import { MM } from "./font";
import "./globals.css";
import { cn } from "./utils";

export const metadata = {
  title: "Rhema's Portfolio",
  description: "Tomisin Rhema Odukoya's Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(MM.className, "bg-[#262627]")}>{children}</body>
    </html>
  );
}

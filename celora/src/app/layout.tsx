import "../styles/globals.css"; // Make sure Tailwind is applied
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar/>
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}

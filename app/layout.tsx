import Footer from "@/components/footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce Store",
  description: "Ecommerce store developed by Blake Zajac",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider />
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}

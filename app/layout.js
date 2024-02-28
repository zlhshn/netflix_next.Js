import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { Providers } from "@/lib/Providers";
import { ToastContainer } from "react-toastify";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Netflix",
  description: "a movie platform",

 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <ToastContainer/>
        </Providers>
      </body>
    </html>
  );
}

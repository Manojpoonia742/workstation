import localFont from "next/font/local";
import "./globals.css";
import NavbarPub from "@/components/NavbarPub";
import NavbarPriv from "@/components/NavbarPriv";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Workstation",
  description: "The base workplace of manoj poonia",
};

let isLoggedIn = true;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-green-100  font-serif antialiased`}
      >
        {isLoggedIn ? <NavbarPriv /> : <NavbarPub />}
        {children}
      </body>
    </html>
  );
}

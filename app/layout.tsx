'use client'

import "@/style/globals.css";
import { Providers } from "./providers/ChakraProviders";
import Header from "@/components/layout/header/page";
import Logo from '@/components/layout/logo/page'
import Navbar from '@/components/layout/Navbar/page'
import Footer from '@/components/layout/Footer/page'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Logo />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

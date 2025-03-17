import { monserrat } from "@/app/ui/fonts"
import "./globals.css";
 
import Header from "./components/Header";
import Footer from "./components/Footer";



 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
        className={`${monserrat.className} antialiased`}
      >
        <main className="pb-16">

        <Header/>
        {children}
        <Footer/>
        </main>
      </body>
    </html>
  );
}

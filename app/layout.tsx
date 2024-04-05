import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import ClientOnly from "./components/ClientOnly";
import Modals from "./components/Modals/Modals";
import RegisterModals from "./components/Modals/RegisterModals";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModals from "./components/Modals/LoginModals";
import getCurrentUser from "./actions/getCurrentUser";
import RentModals from "./components/Modals/RentModals";
import SearchModal from "./components/Modals/SearchModal";

//Pour avoir la police d'ecrityre de la page
const inter = Inter({ subsets: ["latin"] });

//Pour donner une description a la fenetre du site dans tout navigateur
export const metadata: Metadata = {
  title: "Atypik house ",
  description: "Site de locations de logements alternatif",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();


  
  return (
    
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModals />
          <LoginModals />
          <RegisterModals />
          <NavBar currentUser={currentUser}/>
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  );
}
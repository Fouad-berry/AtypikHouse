import type { Metadata } from "next";
import { Inter, Roboto  } from "next/font/google";
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
import ForgotPasswordModal from "./components/Modals/ForgotPasswordModal";
import ResetPasswordModal from "./components/Modals/ResetPasswordModal";
import useForgotPasswordModal from "./hooks/useForgotPasswordModal";
import useResetPasswordModal from "./hooks/useResetPasswordModal";

//Pour avoir la police d'ecriture de la page
const roboto = Roboto({
  style: ['normal'],
  weight: '400',
  subsets: ['latin'],
})
//Pour donner une description a la fenetre du site dans tout navigateur
export const metadata: Metadata = {
  title: "Atypik house ",
  description: "Site de locations de logements alternatif",
  manifest: "/manifest.webmanifest"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();



  
  return (
    
    <html lang="en">
      <body className={roboto.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModals />
          <LoginModals />
          <RegisterModals />
          <ForgotPasswordModal />
          <NavBar currentUser={currentUser}/>
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  );
}

import { Inter, Roboto } from "next/font/google";
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
import Head from "next/head";
import Script from "next/script";

// Pour avoir la police d'écriture de la page
const roboto = Roboto({
  style: ["normal"],
  weight: "400",
  subsets: ["latin"],
});

// Pour donner une description à la fenêtre du site dans tout navigateur
export const metadata = {
  title: "Atypik house",
  description: "Site de locations de logements alternatifs",
  manifest: "/manifest.webmanifest",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <Head>
        <title>Atypik house</title>
        <meta
          name="description"
          content="Site de locations de logements alternatifs"
        />
      </Head>
      <body className={roboto.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NW4G9PF3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NW4G9PF3');`}
        </Script>
        {/* End Google Tag Manager */}

        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModals />
          <LoginModals />
          <RegisterModals />
          <ForgotPasswordModal />
          <NavBar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}

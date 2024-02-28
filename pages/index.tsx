import Activity from "@/components/Activity";
import ContactUs from "@/components/Contact";
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Menu from "@/components/Menu";
import Music from "@/components/Music";
import Navbar from "@/components/Navbar";

import Image from "next/image";
import Logo from "@/public/Logo.png";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jambo</title>
        <meta name="description" content="Home page" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.png" />
        {/* Inline style for the icon */}
        {/* <style jsx>{`
          link[rel="icon"] {
            width: 100px;
            height: 132px;
          }
        `}</style> */}
      </Head>
      <Navbar />
      <Layout>
        <Dashboard />
        <Music />
        <Menu />
        <Activity />
        <ContactUs />
        <Footer />
      </Layout>
    </>
  );
}

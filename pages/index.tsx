import Activity from "@/components/Activity";
import ContactUs from "@/components/Contact";
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Menu from "@/components/Menu";
import Music from "@/components/Music";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
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

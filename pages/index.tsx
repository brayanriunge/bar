import Dashboard from "@/components/Dashboard";
import Layout from "@/components/Layout";
import Music from "@/components/Music";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Layout>
        <Dashboard />
        <Music />
      </Layout>
    </>
  );
}

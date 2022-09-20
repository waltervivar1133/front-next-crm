import type { NextPage } from "next";
import Layout from "../src/components/layout/Layout";


const Index: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline text-red-500">Hello world!</h1>
    </Layout>
  );
};

export default Index;


import Head from "next/head";
import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { LayoutProps } from "./types";


const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>CRM-React</title>
      </Head>
      <div className="bg-gray-200 min-h-screen">
        <div className="flex min-h-screen">
          <Sidebar />

          <main className="sm:w-2/3 xl:4/5 sm:min-h-screen p-5">

          {children}
          </main>
        </div>
      </div>
     
    </>
  );
};

export default Layout;

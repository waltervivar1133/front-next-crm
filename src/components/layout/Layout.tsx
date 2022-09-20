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
      <div>Layout</div>
      <div className="bg-gray-800 min-h-screen border-1 border-b-gray-900">
      <Sidebar/>
      {children}
      </div>
     
    </>
  );
};

export default Layout;

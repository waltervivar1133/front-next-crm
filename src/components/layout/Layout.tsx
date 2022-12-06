import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { LayoutProps } from "./types";

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>CRM-React</title>
      </Head>
      {router.pathname === "/login" || router.pathname === "/register" ? (
        <div className="bg-gray-800 min-h-screen flex flex-col justify-center items-center">
          {children}
        </div>
      ) : (
        <div className="bg-gray-200 min-h-screen">
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="sm:w-2/3 xl:4/5 sm:min-h-screen p-5">
              {children}
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;

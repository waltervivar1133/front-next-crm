import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className="bg-gray-800 sm:w-1/3 xl:w-1/5 p-5">
      <div>
        <p className="text-white text-2xl font-black text-center">
          {" "}
          CRM CLIENTES
        </p>
      </div>
      <nav className="mt-5 list-none ">
        <li
          className={
            router.pathname === "/" ? "bg-blue-800 rounded-md p-2" : "p-2"
          }
        >
          <Link href="/">
            <a className="text-white  block">Clientes</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === "/order" ? "bg-blue-800 rounded-md p-2" : "p-2"
          }
        >
          <Link href="/order">
            <a className="text-white  block">Pedidos</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === "/product"
              ? "bg-blue-800 rounded-md p-2"
              : "p-2"
          }
        >
          <Link href="/product">
            <a className="text-white  block">Productos</a>
          </Link>
        </li>
      </nav>
    </aside>
  );
};

export default Sidebar;

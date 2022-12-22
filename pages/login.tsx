import Link from "next/link";
import React, { useState } from "react";
import Layout from "../src/components/layout/Layout";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useMutation } from "@apollo/client";
import ErrorMessageForm from "../src/components/error/ErrorMessageForm";
import { authenticatedUser } from "../src/@sdk/mutations/user";
import { MyFormValuesLogin } from "../types/MyFormValues";
import MessageToast from "../src/components/messageToast/messageToast";
import {
  initialValues,
  validationSchema,
} from "../helpers/validations/validationSchemaLogin";
import { useRouter } from "next/router";

const Login = () => {
  const [AuthenticatedUser] = useMutation(authenticatedUser);
  const [userAccess, setUserAccess] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  const router = useRouter();
  const onSubmit = async (values: MyFormValuesLogin) => {
    const { email, password } = values;
    try {
      const { data } = await AuthenticatedUser({
        variables: {
          input: {
            email,
            password,
          },
        },
      });
      console.log(data);
      setUserAccess(`Auntenticando...`);
      setTimeout(() => {
        setUserAccess("");
        router.push("/");
      }, 2000);
      const { token } = data.authenticatedUser;
      localStorage.setItem("token", token);
    } catch (e: any) {
      setErrorMessage(e.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 4000);
    }
  };

  const messageError = () => {
    return <MessageToast message={errormessage} type={"error"} />;
  };
  const messageLoginSuccess = () => {
    return <MessageToast message={userAccess} type={"success"} />;
  };
  return (
    <Layout>
      <div className="min-w-full text-center md:grid md:place-items-center">
        <a className="w-full flex justify-center items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white mx-auto">
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Iniciar Sesión
        </a>
        {(errormessage && messageError()) ||
          (userAccess && messageLoginSuccess())}
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ errors }) => (
            <Form className="space-y-4 md:space-y-6 md:w-1/3" noValidate>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Correo electrónico
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
                <ErrorMessage
                  name="email"
                  component={() => (
                    <ErrorMessageForm message={errors.email?.toString()} />
                  )}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Contraseña
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                <ErrorMessage
                  name="password"
                  component={() => (
                    <ErrorMessageForm message={errors.password?.toString()} />
                  )}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Iniciar Sesion
              </button>

              <div className="w-full mt-10 flex flex-col items-center justify-center ingresa aquí ">
                <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white  ">
                  {" "}
                  Si no tienes una cuenta{" "}
                </p>
                <Link href="register">
                  <button
                    type="button"
                    className="w-full text-blue-600  bg-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm mt-2 px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Registrate
                  </button>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
};

export default Login;

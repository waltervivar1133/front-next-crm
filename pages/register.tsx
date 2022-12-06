import Link from "next/link";
import { useState } from "react";
import Layout from "../src/components/layout/Layout";
import { ErrorMessage, Field, Form, Formik } from "formik";
import ErrorMessageForm from "../src/components/error/ErrorMessageForm";
import {
  initialValues,
  validationSchema,
} from "../helpers/validations/validationSchemaRegister";
import { useMutation } from "@apollo/client";
import { newUser } from "../src/@sdk/mutations/user";
import { MyFormValuesRegister } from "../types/MyFormValues";

const Register = () => {
  const [errormessage, setErrorMessage] = useState(null);
  const [NewUser] = useMutation(newUser);
  const onSubmit = async (values: MyFormValuesRegister) => {
    const { name, surname, email, password } = values;
    try {
      await NewUser({
        variables: {
          input: {
            name,
            surname,
            email,
            password,
          },
        },
      });
    } catch (e: any) {
      setErrorMessage(e.message);
      setTimeout(() => {
        setErrorMessage(null);
      }, 4000);
    }
  };

  const messageError = () => {
    return (
      <div className="bg-red-500 rounded-md py-2 px-3 w-full my-5 md:max-w-sm text-white font-bold">
        <p>{errormessage}</p>
      </div>
    );
  };
  return (
    <Layout>
      <>
        <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Registro
        </a>
        {errormessage && messageError()}
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ errors }) => (
            <Form
              className="w-full p-2 md:p-0 md:mx-0 space-y-4 md:space-y-6 md:w-1/3"
              noValidate
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nombres
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Jose "
                />
                <ErrorMessage
                  name="name"
                  component={() => (
                    <ErrorMessageForm message={errors.name?.toString()} />
                  )}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Apellidos
                </label>
                <Field
                  type="text"
                  name="surname"
                  id="surname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=" Gomez"
                />
                <ErrorMessage
                  name="surname"
                  component={() => (
                    <ErrorMessageForm message={errors.surname?.toString()} />
                  )}
                />
              </div>
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
                Registrate
              </button>

              <div className="w-full mt-10 flex flex-col items-center justify-center ingresa aquí ">
                <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white  ">
                  {" "}
                  Si ya tienes una cuenta{" "}
                </p>
                <Link href="login">
                  <button
                    type="button"
                    className="w-full text-blue-600  bg-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm mt-2 px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Iniciar Sesion
                  </button>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </>
    </Layout>
  );
};

export default Register;

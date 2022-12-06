import { FC } from "react";

interface Props {
  message: string | undefined;
}
const ErrorMessageForm: FC<Props> = ({ message }) => {
  return (
    <div className="bg-red-600 p-2 rounded-md mt-3">
      <div className="text-white text-xs">{message}</div>
    </div>
  );
};

export default ErrorMessageForm;

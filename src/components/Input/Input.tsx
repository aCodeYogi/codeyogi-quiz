import { FC, InputHTMLAttributes, memo } from "react";

type InputProps = {
  error: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ error, type, ...rest }) => {
  return (
    <div>
      <input
        {...rest}
        type={type || "text"}
        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
      />
      <div className="h-5">
        {error && <span className="text-red-500">{error}</span>}
      </div>
    </div>
  );
};

Input.defaultProps = {};

export default memo(Input);

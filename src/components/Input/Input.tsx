import { FC, InputHTMLAttributes, memo } from "react";
import cn from "classnames";

type InputProps = {
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ error, type, disabled, ...rest }) => {
  return (
    <div>
      <input
        {...rest}
        type={type || "text"}
        disabled={disabled}
        className={cn(
          "block w-full border-gray-300  rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm",
          { "text-gray-500": disabled },
          { "border-red-500": error }
        )}
      />
      <div className="h-5">
        {error && <span className="text-red-500">{error}</span>}
      </div>
    </div>
  );
};

Input.defaultProps = {};

export default memo(Input);

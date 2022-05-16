import { ButtonHTMLAttributes, FC } from "react";

import cn from "classnames";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: "primary" | "secondary";
};

const Button: FC<Props> = ({ theme, ...rest }) => {
  const themeClasses =
    theme === "primary"
      ? "text-white  bg-yellow-500 border-transparent hover:bg-yellow-600"
      : "text-blue-gray-900 bg-white border-gray-300 hover:bg-blue-gray-50";

  return (
    <button
      className={cn(
        "rounded-md inline-flex items-center justify-center px-4 py-2 text-sm font-medium border shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",
        themeClasses
      )}
      {...rest}
    ></button>
  );
};

Button.defaultProps = {
  theme: "primary",
};

export default Button;

import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { useStyles } from "../../hooks/useStyles";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactElement | ReactNode | string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ children, type, ...rest }: ButtonProps) => {
  const classes = useStyles();

  return (
    <button
      type={type}
      { ...rest }
      className={twMerge(
        `py-2 px-5 rounded-md bg-orange-350 w-fit cursor-pointer transition duration-200 ease-in-out`,
        rest.className
      )}
    >
      <code className={classes.codeButton}>{children}</code>
    </button>
  );
};

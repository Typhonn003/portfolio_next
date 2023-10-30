import { AnchorHTMLAttributes, ReactNode } from "react";

interface NetworkLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  children: ReactNode;
}

export const NetworkLink = ({ title, children, ...rest }: NetworkLinkProps) => {
  return (
    <a
      className="text-3xl lg:btn-style lg:border lg:border-light-blue7 lg:text-base lg:font-medium lg:flex lg:items-center lg:gap-2 lg:px-5 lg:py-2 lg:rounded-md lg:hover:border-light-blue8 lg:dark:border-dark-blue7 lg:dark:hover:border-dark-blue8"
      {...rest}
    >
      <span className="hidden lg:block">{title}</span>
      {children}
    </a>
  );
};

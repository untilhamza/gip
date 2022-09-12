import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  href: string;
  children?: React.ReactNode;
};
const NavLink: React.FC<Props> = ({ children, href }) => {
  const child = React.Children.only(children) as JSX.Element;
  const router = useRouter();

  return (
    <Link href={href}>
      {React.cloneElement(child, {
        "aria-current": router.pathname === href ? "page" : null,
      })}
    </Link>
  );
};

export default NavLink;

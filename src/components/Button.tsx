import React from "react";

import Link from "@/components/GatsbyLink";

type ButtonProps = {
  to: string;
  label: string;
};

export default function Button({ to, label }: ButtonProps) {
  return (
    <Link to={to} className="py-2 px-3 max-w-fit border-solid border-[1px] border-passive rounded-md hover:no-underline hover:bg-passive-hover hover:cursor-pointer">
      {label}
    </Link>
  );
}

import React, { ReactNode } from "react";

import Link from "@/components/GatsbyLink";

type CardProps = {
  /* Content that is displayed within the card */
  children: ReactNode;
  /* Classes to apply */
  className?: string;
  /* Options URL. If provided, card will link to url when clicked. */
  url?: string;
};

export default function Card({ className, children, url }: CardProps) {

  let classes = "border-solid border-[1px] rounded-lg"
  if (url) {
    classes += " transition duration-150 ease-in-out hover:scale-105 hover:bg-passive-hover hover:cursor-pointer"
  }   

  const card = (
    <div className={className}>
      <div className={classes}>
        <div className="flex flex-col py-3 px-4">{children}</div>
      </div>
    </div>
  );

  return url ? (
    <>
      <Link to={url} className="hover:no-underline">
        {card}
      </Link>
    </>
  ) : (
    <>{ card }</>
  );
}

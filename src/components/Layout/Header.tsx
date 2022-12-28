import React from "react";

import Container from "@/components/Layout/Container";
import Link from "@/components/GatsbyLink";

import { MENU } from "../../../config";

export default function Header() {
  return (
    <header>
      <Container>
        <nav className="flex justify-between py-6 md:py-10">
          <Link to="/" className="text-black">
            daljeet.io
          </Link>
          <ul className="list-style-none grid grid-flow-col auto-cols-max gap-6 items-center">
            {MENU.map((item) => (
              <li key={item.label}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

import React from "react";
import Link from "@/components/GatsbyLink";
import Container from "@/components/Container";
import { MENU } from "../../config";

export default function Header() {
  return (
    <header>
      <Container>
        <nav className="flex justify-between py-6 md:py-10">
          <Link to="/" className="text-black">
            daljeet.io
          </Link>
        </nav>
      </Container>
    </header>
  );
}

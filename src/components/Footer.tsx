import React from "react";
import Container from "@/components/Container";
import GatsbyLink from "@/components/GatsbyLink";
import { FOOTER, COPYRIGHT } from "../../config";
import Logo from "../images/juxt-logo.svg";

export default function Footer() {
  return (
    <footer className="width-full mt-10">
      <Container>
        <div className="flex items-center place-content-center border-t color-border-slate-200 py-2">
          <p className="text-sm">
          © {new Date().getFullYear()} {COPYRIGHT}, created with lots of ❤️ and ☕️ around the world
          </p>
        </div>
      </Container>
    </footer>
  );
}

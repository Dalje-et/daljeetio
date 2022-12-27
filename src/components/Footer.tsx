import React from "react";

import Container from "@/components/Container";

import { COPYRIGHT } from "../../config";

export default function Footer() {
  return (
    <footer className="width-full mt-10">
      <Container>
        <div className="flex items-center place-content-center border-t color-border-slate-200 py-2">
          <p className="text-sm">
          © {new Date().getFullYear()} {COPYRIGHT}, created with ❤️ and ☕️ around the world
          </p>
        </div>
      </Container>
    </footer>
  );
}

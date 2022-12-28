import React from "react";

import Link from "@/components/GatsbyLink";

export default function BlogBackLink() {
  return (
    <div className="mb-3">
      <Link className="text-sm font-bold no-underline text-secondary hover:no-underline" to="/blog/">← BLOG</Link>
    </div>
  );
}

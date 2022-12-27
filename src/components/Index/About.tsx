import React from "react";

import Card from "@/components/Card";

export default function About() {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-2 gap-8 h-32 w-full">
        <Card url="/about/">
          <div className="flex flex-col py-3 px-4">
            <span className="font-mono text-emerald-700">NEW</span>
            <span className="font-bold text-lg">👨🏽‍💻 About Me →</span>
          </div>
        </Card>
        <Card url="/blog/">
          <div className="flex flex-col py-3 px-4">
            <span className="font-mono text-emerald-700">NEW</span>
            <span className="font-bold text-lg">📖 Blog →</span>
          </div>
        </Card>
      </div>
    </div>
  );
}

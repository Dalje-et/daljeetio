import React from "react";

import Card from "@/components/Card";

export default function About() {
  return (
    <div className="mt-16 h-full">
      { /* need to give the grid a padding as it otherwise becomes hidden once we hover on it */}
      <div className="grid grid-cols-twoColumn gap-8 overflow-scroll py-2 px-2">
        <Card url="/blog/">
          <div className="flex flex-col py-3 px-4">
            <span className="font-mono text-emerald-700">NEW</span>
            <span className="font-bold text-lg">📖 Blog →</span>
          </div>
        </Card>
        <Card url="/about/">
          <div className="flex flex-col py-3 px-4">
            <span className="font-mono text-emerald-700">NEW</span>
            <span className="font-bold text-lg">👨🏽‍💻 About Me →</span>
          </div>
        </Card>
      </div>
    </div>
  );
}

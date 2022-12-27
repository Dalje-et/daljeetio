import React from "react";

import Card from "@/components/Card";

export default function About() {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-2 gap-8 h-32 w-full">
        <Card url="/blog/">
          <div className="flex flex-col py-3 px-4">
            <span className="font-mono text-emerald-700">NEW</span>
            <div>02</div>
            <div>03</div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col py-3 px-4">
            <span className="font-mono text-red-700">OLD</span>
            <div>02</div>
            <div>03</div>
          </div>
        </Card>
      </div>
    </div>
  );
}

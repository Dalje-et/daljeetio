import React from "react";
import { Link } from "gatsby";

export default function ListNote({ edges }) {
  return (
    <>
      {edges.map((edge) => (
        <div className="col-span-12 md:col-span-6 my-2 py-4 md:my-0">
          <div className="items-center uppercase leading-relaxed">
            <time>{edge.node.fields.date}</time>
          </div>
          <Link to={`/${edge.node.fields.slug}`}>
            <h2 className="underline my-2">{edge.node.fields.title}</h2>
          </Link>
          <p className="mb-2 text-slate-600 my-2">
            {edge.node.excerpt || edge.node.frontmatter.description}
          </p>
        </div>
      ))}
    </>
  );
}

import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children?: ReactNode }) {
  return (
    <header className="page-hero">
      <div className="page-hero__shape" aria-hidden="true" />
      <div className="shell page-hero__inner">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div className="page-hero__intro">
          <p>{intro}</p>
          {children}
        </div>
      </div>
    </header>
  );
}

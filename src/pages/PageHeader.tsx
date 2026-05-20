import type { ReactNode } from 'react';

type Breadcrumb = { label: string; href?: string };

interface PageHeaderProps {
  title: string;
  description: string;
  breadcrumbs?: Breadcrumb[];
  children?: ReactNode;
}

function PageHeader({ title, description, breadcrumbs, children }: PageHeaderProps) {
  return (
    <section className="page-header">
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          {breadcrumbs.map((b, i) => (
            <span key={i} className="crumb">
              {b.href ? <a href={b.href}>{b.label}</a> : <span>{b.label}</span>}
              {i < breadcrumbs.length - 1 && <span className="sep">› </span>}
            </span>
          ))}
        </nav>
      )}
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </section>
  );
}

export default PageHeader;

interface SectionLayoutProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function SectionLayout({ id, title, children }: SectionLayoutProps) {
  return (
    <section id={id} className="pt-12 md:pt-18 md:pb-2">
      <div className="mb-7 inline-flex items-baseline gap-2 text-fg-muted text-xs">
        <span className="text-accent">#</span>
        <span>{title}</span>
      </div>
      {children}
    </section>
  );
}

export default SectionLayout;

import Gutter from "./gutter";

interface PageLayoutProps {
  children: React.ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="mx-auto grid max-w-[calc(var(--maxw)+var(--gutter-w)+32px)] grid-cols-[var(--gutter-w)_1fr] gap-x-0 px-4">
      <Gutter count={200} />
      <main className="min-w-0 px-4 md:px-6">{children}</main>
    </div>
  );
}

export default PageLayout;

import { Navigation } from "./_components/navigation";

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mt-4">
      {children}
      <div className="container mx-auto flex justify-center">
        <Navigation />
      </div>
    </section>
  );
}

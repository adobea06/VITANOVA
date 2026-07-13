// app/(main)/layout.tsx
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Your Navbar only shows up for pages inside the (main) group */}
    

      <main>
        {children}
      </main>
    </>
  );
}
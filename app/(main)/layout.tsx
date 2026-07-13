// app/(main)/layout.tsx

import Navbar from "../components/UILayout/Navbar";


export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Your Navbar only shows up for pages inside the (main) group */}
      <Navbar />
    

      <main>
        {children}
      </main>
    </>
  );
}
// /src/components/navigation/ClientPageNavigation.tsx
"use client";

export default function ClientPageNavigation({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex h-screen">
      <main className="flex-grow overflow-y-auto focus:outline-none">
        {children}
      </main>
    </div>
  );
}

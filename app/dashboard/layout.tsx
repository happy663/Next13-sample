export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        backgroundColor: 'white',
      }}
    >
      {children}
    </section>
  );
}

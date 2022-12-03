export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body
        style={{
          backgroundColor: '#C0C0C0',
          padding: '50px',
        }}
      >
        {children}
      </body>
    </html>
  );
}

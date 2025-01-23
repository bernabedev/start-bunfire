export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bunfire App</title>
      </head>
      <body>
        <header
          style={{ padding: "1rem", backgroundColor: "#282c34", color: "#fff" }}
        >
          <h1>Bunfire App</h1>
        </header>
        <main style={{ padding: "1rem" }}>{children}</main>
        <footer
          style={{
            padding: "1rem",
            marginTop: "2rem",
            backgroundColor: "#f1f1f1",
          }}
        >
          <p>&copy; {new Date().getFullYear()} Bunfire. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "Sparke Avenue — Create. Connect. Grow.",
  description:
    "Sparke Avenue is a full-service digital marketing and creative agency helping brands build identity, connect with audiences, and grow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=satoshi@400,500,700&f[]=jetbrains-mono@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

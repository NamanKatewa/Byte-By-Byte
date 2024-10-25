import "./globals.css";

export const metadata = {
  title: "Byte By Byte",
  description: "The AI Tutor you didn't knew you needed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

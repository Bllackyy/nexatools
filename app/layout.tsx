import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "NexaTools",
  description: "Fast, Beautiful & Free Online Tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,
            style: {
              background: "#111827",
              color: "#fff",
              border: "1px solid #374151",
            },
          }}
        />
      </body>
    </html>
  );
}
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { Separator } from "@/components/ui/separator";
import { MainNav } from "@/components/main-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harish Gokul",
  description: "Portfolio Website of Harish Gokul",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar/>
          {/* <MainNav/> */}
          <Separator className="w-full"/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

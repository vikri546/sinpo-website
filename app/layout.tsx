import type { Metadata } from "next";
import { 
  geistSans,
  geistMono,
  anton, 
  caprasimo, 
  cormorant, 
  lato, 
  shippori,
  montserrat,
  poppins,
  openSans,
  nunito,
  roboto,
  robotoCondensed,
  oswald,
  raleway
} from "./fonts";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeToggle";

export const metadata: Metadata = {
  title: "Sin Po Media",
  description: "Portal berita terkini Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Script untuk prevent flash - memastikan class 'dark' ditambahkan sebelum render */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (savedTheme === 'dark' || (!savedTheme && supportDarkMode)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${caprasimo.variable} ${cormorant.variable} ${lato.variable} ${shippori.variable} ${montserrat.variable} ${poppins.variable} ${openSans.variable} ${nunito.variable} ${roboto.variable} ${robotoCondensed.variable} ${oswald.variable} ${raleway.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
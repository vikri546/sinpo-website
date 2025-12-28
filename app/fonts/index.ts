import localFont from "next/font/local";
import { 
  Geist, 
  Geist_Mono,
  Montserrat, 
  Poppins, 
  Open_Sans, 
  Nunito, 
  Roboto, 
  Roboto_Condensed, 
  Oswald, 
  Raleway 
} from "next/font/google";

// Google Fonts Configuration
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const robotoCondensed = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

export const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

// Local Fonts Configuration

export const anton = localFont({
  src: "./anton/Anton-Regular.ttf",
  variable: "--font-anton",
  display: "swap",
});

export const caprasimo = localFont({
  src: "./caprasimo/Caprasimo-Regular.ttf",
  variable: "--font-caprasimo",
  display: "swap",
});

export const cormorant = localFont({
  src: [
    { path: "./cormorant/CormorantSC-Light.ttf", weight: "300", style: "normal" },
    { path: "./cormorant/CormorantSC-Regular.ttf", weight: "400", style: "normal" },
    { path: "./cormorant/CormorantSC-Medium.ttf", weight: "500", style: "normal" },
    { path: "./cormorant/CormorantSC-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./cormorant/CormorantSC-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

export const lato = localFont({
  src: [
    { path: "./lato/Lato-Thin.ttf", weight: "100", style: "normal" },
    { path: "./lato/Lato-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "./lato/Lato-Light.ttf", weight: "300", style: "normal" },
    { path: "./lato/Lato-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./lato/Lato-Regular.ttf", weight: "400", style: "normal" },
    { path: "./lato/Lato-Italic.ttf", weight: "400", style: "italic" },
    { path: "./lato/Lato-Bold.ttf", weight: "700", style: "normal" },
    { path: "./lato/Lato-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "./lato/Lato-Black.ttf", weight: "900", style: "normal" },
    { path: "./lato/Lato-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-lato",
  display: "swap",
});

export const shippori = localFont({
  src: "./shippori/ShipporiAntiqueB1-Regular.ttf",
  variable: "--font-shippori",
  display: "swap",
});

import "./globals.css";
import "./polish.css";
import "./image-led.css";
import Motion from "../components/Motion";
export const metadata = {
  title: "<div>\n  Ritik Hair Salon | Futuristic Salon Demo\n</div>",
  description: "A fictional concept website by Ebin Johnson.",
  metadataBase: new URL(
    "https://ebinjohnson-web.github.io/ritik-hair-salon-demo/",
  ),
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body>
        <Motion />
        {children}
      </body>
    </html>
  );
}

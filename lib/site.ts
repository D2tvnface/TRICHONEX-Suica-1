// Set NEXT_PUBLIC_SITE_URL at build time (e.g. https://trichonex.example) so
// canonical, Open Graph, robots.txt and sitemap.xml use absolute URLs.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");

export const siteName = "TRICHONEX";

export const siteTitle = "TRICHONEX – oficjalna strona | TRICHONEX Free";

export const siteDescription =
  "TRICHONEX i TRICHONEX Free na oficjalnej stronie producenta. Sprawdź, jak działa TRICHONEX, poznaj opinie i odpowiedzi na najczęstsze pytania. Zamów online.";

export const ogImage = {
  url: "/assets/img/product.png",
  width: 443,
  height: 450,
  alt: "TRICHONEX Free – opakowanie produktu",
};

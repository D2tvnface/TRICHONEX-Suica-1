// Set NEXT_PUBLIC_SITE_URL at build time (e.g. https://trichonex.example) so
// canonical, Open Graph, robots.txt and sitemap.xml use absolute URLs.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");

export const siteName = "TRICHONEX";

export const siteTitle = "TRICHONEX – oficjalna strona";

export const siteDescription =
  "TRICHONEX – kompletna odnowa włosów w ciągu 28 dni. Naturalne składniki, opinie klientek i opinia trychologa. Zamów online i zapłać przy odbiorze.";

export const ogImage = {
  url: "/assets/img/product.png",
  width: 500,
  height: 500,
  alt: "TRICHONEX – opakowanie produktu",
};

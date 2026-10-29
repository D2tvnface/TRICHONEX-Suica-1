// Set NEXT_PUBLIC_SITE_URL at build time (e.g. https://trichonex.example) so
// canonical, Open Graph, robots.txt and sitemap.xml use absolute URLs.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://trichonexfree.pl"
).replace(/\/$/, "");

export const siteName = "TRICHONEX";

export const siteTitle = "TRICHONEX na wypadanie włosów – oficjalna strona";

export const siteDescription =
  "TRICHONEX na wypadanie włosów. Składniki według producenta, opinie klientek i informacje o zamówieniu. Płatność przy odbiorze przesyłki.";

export const ogImage = {
  url: "/assets/img/product.png",
  width: 500,
  height: 500,
  alt: "TRICHONEX – opakowanie produktu",
};

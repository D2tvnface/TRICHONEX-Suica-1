// Set NEXT_PUBLIC_SITE_URL at build time (e.g. https://trichonex.example) so
// canonical, Open Graph, robots.txt and sitemap.xml use absolute URLs.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://trichonexfree.pl"
).replace(/\/$/, "");

export const siteName = "TRICHONEX";

export const siteTitle = "TRICHONEX na wypadanie włosów – pakiet próbny 0 zł";

export const siteDescription =
  "TRICHONEX na wypadanie włosów: odbierz pakiet próbny za 0 zł – płacisz tylko koszt dostawy przy odbiorze, bez przedpłaty. Składniki, opinie klientek i FAQ.";

export const ogImage = {
  url: "/assets/img/product.png",
  width: 500,
  height: 500,
  alt: "TRICHONEX – opakowanie produktu",
};

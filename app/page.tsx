import type { Metadata } from "next";
import { faqs } from "@/lib/faqs";
import { ogImage, siteDescription, siteName, siteTitle, siteUrl } from "@/lib/site";
import FaqList from "./_components/FaqList";
import OrderForm from "./_components/OrderForm";
import ScrollToForm from "./_components/ScrollToForm";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { "pl-PL": "/" },
  },
};

// Only facts visible on the page go here. No ratings or reviews: the review
// cards are not verified, and marking them up would breach Google's guidelines.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: siteName,
      inLanguage: "pl-PL",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: siteTitle,
      description: siteDescription,
      inLanguage: "pl-PL",
      isPartOf: { "@id": `${siteUrl}/#website` },
      primaryImageOfPage: { "@id": `${siteUrl}/#product-image` },
    },
    {
      "@type": "Product",
      "@id": `${siteUrl}/#product`,
      name: siteName,
      brand: { "@type": "Brand", name: siteName },
      description: siteDescription,
      image: {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#product-image`,
        url: `${siteUrl}${ogImage.url}`,
        width: ogImage.width,
        height: ogImage.height,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i,900,900i|Oswald:300,400,700|Roboto:300,400,700&display=swap&subset=cyrillic,cyrillic-ext,latin-ext"
        rel="stylesheet"
        precedence="default"
      />
      <link rel="stylesheet" href="/assets/css/style.css" precedence="default" />
      <link rel="stylesheet" href="/assets/css/landing.css" precedence="default" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <ScrollToForm />

      <div className="wrapper">
        <header>
          <nav className="navigation" aria-label="Menu główne">
            <div className="limit">
              <div className="logo">
                <span className="biger">TRICHONEX</span>
              </div>
              <ul className="navigation_list">
                <li className="navigation_list-item">
                  <a className="to-scroll" data-scroll="works" href="#works">
                    JAK DZIAŁA
                  </a>
                </li>
                <li className="navigation_list-item">
                  <a className="to-scroll" data-scroll="faq" href="#faq">
                    FAQ
                  </a>
                </li>
                <li className="navigation_list-item active">
                  <a className="ever-popup-btn" data-scroll="order_form" href="#form">
                    <i className="icon-basket"></i> ZAMAWIAM
                  </a>
                </li>
              </ul>
              <div className="burger">
                <button className="_openMenu" type="button" aria-label="Otwórz menu">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </nav>
        </header>

        <main>
          <section className="first" aria-labelledby="hero-title">
            <div className="limit">
              <div className="_flower"></div>
              <div className="first_left">
                <h1 className="title" id="hero-title">TRICHONEX</h1>
                <p className="subtitle">Kompletna odnowa włosów w ciągu 28 dni</p>
                <div className="mobile_wrapper">
                  <div className="_woman"></div>
                  <div className="prod_wrapper">
                    <img
                      alt="TRICHONEX – suplement diety na wypadanie włosów"
                      className="_prod"
                      src="/assets/img/product.png"
                      width={500}
                      height={500}
                      fetchPriority="high"
                    />
                  </div>
                </div>
                <a href="#form" className="href-cont">
                  <button className="btn ever-popup-btn">ZAMÓW TERAZ</button>
                </a>
              </div>
            </div>
          </section>

          <section className="works" id="works" aria-labelledby="works-title">
            <div className="limit">
              <div className="works-right">
                <div className="works-left _abs">
                  <ul className="works-list">
                    <li className="works-list_item _1">
                      <div className="circle">
                        <img alt="" src="/assets/img/wk1.png" width={38} height={35} loading="lazy" decoding="async" />
                      </div>
                      <p>Odrastanie włosów</p>
                    </li>
                    <li className="works-list_item _2 _w50 _pr">
                      <div className="circle">
                        <img alt="" src="/assets/img/wk2.png" width={37} height={34} loading="lazy" decoding="async" />
                      </div>
                      <p>Pobudzanie mieszków włosowych</p>
                    </li>
                    <li className="works-list_item _3 _w50 _pl">
                      <div className="circle">
                        <img alt="" src="/assets/img/wk3.png" width={39} height={37} loading="lazy" decoding="async" />
                      </div>
                      <p>Ochrona przeciw wypadaniu</p>
                    </li>
                  </ul>
                </div>
                <div className="works-content">
                  <h2 className="title works-title" id="works-title">
                    Jak działa TRICHONEX i dlaczego jest lepszy niż podobne produkty?
                  </h2>
                  <p className="text">
                    <span className="product_name">TRICHONEX</span> zwiększa wzrost włosów w miejscach, gdzie
                    włosy są przerzedzone oraz stanowi barierę chroniącą przed uszkodzeniami skóry głowy.
                  </p>
                  <p className="text">
                    Pobudza niewidoczne mieszki włosowe na poziomie mikrokomórkowym i rewitalizuje je od
                    wewnątrz, dzięki zestawowi specjalnie dobranych składników odżywczych.
                  </p>
                  <p className="text font_bold">
                    Zapobiega większej utracie włosów poprzez wzmocnienie i regenerację mieszków włosowych.
                    Tworzy warstwę chroniącą przed negatywnymi skutkami czynników środowiskowych.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="eating" aria-labelledby="eating-title">
            <div className="limit">
              <div className="_molecule"></div>
              <div className="eating-left">
                <h2 className="title" id="eating-title">
                  <span className="nowrap">TRICHONEX</span> to skoncentrowana moc witamin i roślin
                </h2>
                <ul className="eating-list">
                  <li className="eating-list__item">
                    <b>Kolagen rybi NatiCol</b> – ten hydrolizowany kolagen jest łatwo przyswajalny przez
                    organizm, co umożliwia skuteczną regenerację i wsparcie struktury skóry, włosów oraz
                    paznokci.
                  </li>
                  <li className="eating-list__item">
                    <b>MSM</b> – pomaga w produkcji kolagenu, redukuje stany zapalne i przyczynia się do
                    poprawy elastyczności oraz jędrności skóry.
                  </li>
                  <li className="eating-list__item">
                    <b>Witamina C</b> – w połączeniu z kolagenem działa synergicznie, wzmacniając jego
                    działanie.
                  </li>
                  <li className="eating-list__item">
                    <b>Siarczan glukozaminy</b> – odgrywa kluczową rolę w utrzymaniu zdrowych stawów i
                    chrząstek, poprawia wytrzymałość i elastyczność skóry.
                  </li>
                  <li className="eating-list__item">
                    <b>Cynk</b> – minerał o silnych właściwościach przeciwutleniających, który wspiera zdrowie
                    skóry, włosów i paznokci.
                  </li>
                </ul>
                <div className="eating-right _abs">
                  <div className="_woman2"></div>
                  <div className="_circle"></div>
                </div>
                <a href="#form" className="href-cont">
                  <button className="btn ever-popup-btn">KUP TERAZ ZE ZNIŻKĄ!</button>
                </a>
              </div>
            </div>
          </section>

          <section className="diet" aria-labelledby="diet-title">
            <div className="limit">
              <div className="diet-wrap">
                <div className="diet-left _abs">
                  <img
                    src="/assets/img/hair-girl.png"
                    alt="Kobieta z bujnymi, zdrowymi włosami"
                    width={733}
                    height={604}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="diet-right">
                  <h2 className="title diet-title" id="diet-title">
                    Wypadanie włosów nie zna płci
                  </h2>
                  <p className="text">
                    Wszyscy ludzie mogą cierpieć na problemy z wypadaniem włosów, niezależnie od płci. Obecny
                    stan środowiska, ciągła praca i niezrównoważona dieta pogarszają stan skóry głowy i
                    włosów. W rezultacie włosy tracą siłę i objętość, łamią się i wypadają.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="weight" aria-labelledby="weight-title">
            <div className="dotted"></div>
            <div className="limit">
              <div className="weight-wrap">
                <div className="weight-left">
                  <div className="_woman3"></div>
                  <div className="_weight-left__circle"></div>
                </div>
                <div className="weight-right">
                  <h2 className="title" id="weight-title">Prosty sposób użycia</h2>
                  <ul className="weight-list">
                    <li className="weight-list_item">
                      <img alt="" src="/assets/img/hair-usage-1.png" width={132} height={132} loading="lazy" decoding="async" />
                      <p className="item-text">
                        <b>Codziennie 1 saszetka</b> Stosuj codziennie po 1 saszetce, mieszając w szklance wody.
                      </p>
                    </li>
                    <li className="weight-list_item">
                      <img alt="" src="/assets/img/hair-usage-2.png" width={132} height={132} loading="lazy" decoding="async" />
                      <p className="item-text">
                        <b>Minimum 30 dni</b> Kuracja powinna trwać przynajmniej 30 dni.
                      </p>
                    </li>
                    <li className="weight-list_item">
                      <img alt="" src="/assets/img/hair-usage-3.png" width={132} height={132} loading="lazy" decoding="async" />
                      <p className="item-text">
                        <b>Systematyczność</b> Pamiętaj o systematyczności!
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="choice" aria-labelledby="choice-title">
            <div className="limit">
              <h2 className="title" id="choice-title">Przyczyny wypadania włosów wśród kobiet</h2>
              <ul className="choice-list">
                <li className="choice-list_item">
                  <div className="wrapper-item">
                    <div className="image-block">
                      <img alt="" src="/assets/img/hair-cause-1.png" loading="lazy" decoding="async" />
                    </div>
                    <div className="choice-list__content">
                      <p className="name"><b>Geny</b></p>
                    </div>
                  </div>
                </li>
                <li className="choice-list_item">
                  <div className="wrapper-item">
                    <div className="image-block">
                      <img alt="" src="/assets/img/hair-cause-2.png" loading="lazy" decoding="async" />
                    </div>
                    <div className="choice-list__content">
                      <p className="name"><b>Brak równowagi hormonalnej</b></p>
                    </div>
                  </div>
                </li>
                <li className="choice-list_item">
                  <div className="wrapper-item">
                    <div className="image-block">
                      <img alt="" src="/assets/img/hair-cause-3.png" loading="lazy" decoding="async" />
                    </div>
                    <div className="choice-list__content">
                      <p className="name"><b>Stres</b></p>
                    </div>
                  </div>
                </li>
                <li className="choice-list_item">
                  <div className="wrapper-item">
                    <div className="image-block">
                      <img alt="" src="/assets/img/hair-cause-4.png" loading="lazy" decoding="async" />
                    </div>
                    <div className="choice-list__content">
                      <p className="name"><b>Blokowanie mieszków włosowych</b></p>
                    </div>
                  </div>
                </li>
                <li className="choice-list_item">
                  <div className="wrapper-item">
                    <div className="image-block">
                      <img alt="" src="/assets/img/hair-cause-5.png" loading="lazy" decoding="async" />
                    </div>
                    <div className="choice-list__content">
                      <p className="name"><b>Wpływ toksycznych czynników</b></p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="exclusive" aria-labelledby="exclusive-title">
            <div className="limit">
              <div className="_dotted"></div>
              <div className="exclusive-right">
                <h2 className="title" id="exclusive-title">Uważaj na podróbki!</h2>
                <p className="text">
                  <b>100% jakość gwarantowana przez producenta!</b>
                </p>
                <div className="exclusive-left _abs">
                  <div className="_woman5"></div>
                  <div className="_exclusive-left__circle"></div>
                </div>
                <p className="border text">
                  <img
                    alt="Certyfikat jakości TRICHONEX"
                    className="_prize"
                    src="/assets/img/hair-cert.png"
                    width={221}
                    height={318}
                    loading="lazy"
                    decoding="async"
                  />
                  Aby uniknąć fałszywych i wadliwych odpowiedników, kup oryginalny produkt tylko na tej stronie.
                  <a href="#form" className="href-cont">
                    <button className="btn ever-popup-btn">ZAMÓW TERAZ</button>
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section className="review" aria-labelledby="review-title">
            <div className="limit">
              <h2 className="title review-title" id="review-title">
                Opinie o TRICHONEX
              </h2>
              <div className="review-slider">
                <Review
                  avatar="/assets/img/hair-avatar-1.png"
                  name="Maria, lat 37"
                  image="/assets/img/hair-review-1.png"
                  imageWidth={337}
                  imageHeight={267}
                  text="Przed stosowaniem dokładnie zbadałam obszar głowy na krawędzi łysienia i skóry głowy... w 7-8 dniu aplikacji już zaczęłam zauważać małe ciemne włosy. Z odległości nie było widać, ale zdecydowanie zauważyłam, że NOWE włosy zaczęły rosnąć! Kto by uwierzył, że powiedzenie, że utrata włosów jest nieodwracalna, jest błędne? Wad też nie zauważyłam."
                />
                <Review
                  avatar="/assets/img/hair-avatar-2.png"
                  name="Anna, lat 39"
                  image="/assets/img/hair-review-2.png"
                  imageWidth={339}
                  imageHeight={271}
                  text="Po 35-tym roku życia zaczęły pojawiać się pierwsze oznaki łysienia. Przez przypadek dostałam saszetki na porost włosów – TRICHONEX i postanowiłam regularnie je stosować. Po 4 miesiącach moje przyjaciółki zauważyły, że w miejscach, gdzie wcześniej włosy były przerzedzone, pojawiły się nowe. Co prawda wcześniej nie wierzyłam, że to pomoże. Ostatecznie uratowałam moje włosy!"
                />
                <Review
                  avatar="/assets/img/hair-avatar-3.png"
                  name="Zofia, lat 42"
                  image="/assets/img/hair-review-3.png"
                  imageWidth={336}
                  imageHeight={267}
                  text="Pierwszą rzeczą, na którą chcę zwrócić uwagę, jest skuteczność. Nowe włosy urosły w miejscu łysiny, a już istniejące stały się zauważalnie grubsze. Po drugie, konsekwencje ustały całkowicie. Po trzecie, cienkie włosy stały się silniejsze. Po miesiącu odzyskałam pewność siebie. Dziękuję!"
                />
              </div>
            </div>
          </section>

          <section className="faq" id="faq" aria-labelledby="faq-title">
            <div className="limit">
              <div className="vertical-text" aria-hidden="true">#TRICHONEX</div>
              <h2 className="title" id="faq-title">
                <span>TRICHONEX – często zadawane pytania</span>
              </h2>
              <div className="faq-left">
                <FaqList />
              </div>
              <div className="faq-right">
                <div className="back"></div>
              </div>
            </div>
          </section>

          <div className="toform"></div>
          <section className="last" aria-labelledby="order-title">
            <div className="_flower"></div>
            <div className="limit">
              <div className="order-steps-wrap">
                  <h3 className="order-steps-title">Jak złożyć zamówienie?</h3>
                  <ol className="order-steps">
                    <li>
                      <p><b>Krok 1.</b> Złóż zamówienie na tej stronie, wypełniając formularz.</p>
                    </li>
                    <li>
                      <p><b>Krok 2.</b> Specjalista skontaktuje się z Tobą.</p>
                    </li>
                    <li>
                      <p><b>Krok 3.</b> Ostrożnie zapakujemy Twoje zamówienie i wyślemy jeszcze tego samego dnia.</p>
                    </li>
                    <li>
                      <p><b>Krok 4.</b> Płatność należy uregulować przy otrzymaniu przesyłki.</p>
                    </li>
                  </ol>
              </div>
              <div className="last-left">
                <h2 className="title" id="order-title">
                  Zamów TRICHONEX – pełna odbudowa włosów już w 28 dni!
                </h2>
                <p className="text border">
                  <b>Kup teraz ze zniżką!</b> Płatność należy uregulować przy otrzymaniu przesyłki.
                </p>
                <div className="last-right">
                  <div className="back"></div>
                  <div className="_woman6"></div>
                  <div className="_prod"></div>
                </div>
                <div className="form">
                  <OrderForm />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

type ReviewProps = {
  avatar: string;
  name: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  text: string;
};

function Review({ avatar, name, image, imageWidth, imageHeight, text }: ReviewProps) {
  return (
    <article className="inst">
      <div className="inst__header">
        <div className="inst__header-left">
          <div className="inst__header-fit">
            <img src={avatar} alt={`Avatar ${name}`} width={34} height={34} loading="lazy" decoding="async" />
          </div>
          <p className="inst__header-title"><b>{name}</b></p>
        </div>
        <div className="inst__header-menu" aria-hidden="true">
          <span className="inst__header-dot"></span>
          <span className="inst__header-dot"></span>
          <span className="inst__header-dot"></span>
        </div>
      </div>
      <div className="inst__img">
        <img
          src={image}
          alt={`Zdjęcie przed i po stosowaniu TRICHONEX – ${name}`}
          width={imageWidth}
          height={imageHeight}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="inst__description">
        <p className="inst__description-text">
          <b>{name}</b> {text}
        </p>
      </div>
    </article>
  );
}

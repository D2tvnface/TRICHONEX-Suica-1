import type { Metadata } from "next";
import { faqs } from "@/lib/faqs";
import { ogImage, siteDescription, siteName, siteUrl } from "@/lib/site";
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
      name: "TRICHONEX – oficjalna strona | TRICHONEX Free",
      description: siteDescription,
      inLanguage: "pl-PL",
      isPartOf: { "@id": `${siteUrl}/#website` },
      primaryImageOfPage: { "@id": `${siteUrl}/#product-image` },
    },
    {
      "@type": "Product",
      "@id": `${siteUrl}/#product`,
      name: "TRICHONEX Free",
      alternateName: "TRICHONEX",
      brand: { "@type": "Brand", name: siteName },
      description: siteDescription,
      image: {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#product-image`,
        url: `${siteUrl}${ogImage.url}`,
        width: ogImage.width,
        height: ogImage.height,
      },
      offers: {
        "@type": "Offer",
        url: `${siteUrl}/#form`,
        price: "0",
        priceCurrency: "PLN",
        availability: "https://schema.org/InStock",
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
                    JAK TO DZIAŁA
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
                <p className="subtitle">
                  TRICHONEX Free – dla tych, którzy nie są przyzwyczajeni do liczenia kalorii
                </p>
                <div className="mobile_wrapper">
                  <div className="_woman"></div>
                  <div className="prod_wrapper">
                    <img
                      alt="TRICHONEX Free – opakowanie produktu"
                      className="_prod"
                      src="/assets/img/product.png"
                      width={443}
                      height={450}
                      fetchPriority="high"
                    />
                  </div>
                </div>
                <a href="#form" className="href-cont">
                  <button className="btn ever-popup-btn">NIE TRZEBA GŁODOWAĆ!</button>
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
                      <p>Spożycie węglowodanów zmniejsza się</p>
                    </li>
                    <li className="works-list_item _2 _w50 _pr">
                      <div className="circle">
                        <img alt="" src="/assets/img/wk5.png" width={32} height={34} loading="lazy" decoding="async" />
                      </div>
                      <p>Ketony są przekształcane w energię dla mózgu</p>
                    </li>
                    <li className="works-list_item _3 _w50 _pl">
                      <div className="circle">
                        <img alt="" src="/assets/img/wk2.png" width={37} height={34} loading="lazy" decoding="async" />
                      </div>
                      <p>Poziom glukozy we krwi spada</p>
                    </li>
                    <li className="works-list_item _4 _w50 _pl2">
                      <div className="circle">
                        <img alt="" src="/assets/img/wk4.png" width={33} height={33} loading="lazy" decoding="async" />
                      </div>
                      <p>Tłuszcz zamienia się w ketony</p>
                    </li>
                    <li className="works-list_item _5 _w50 _pr2">
                      <div className="circle">
                        <img alt="" src="/assets/img/wk3.png" width={39} height={37} loading="lazy" decoding="async" />
                      </div>
                      <p>Ciało zaczyna spalać tłuszcz</p>
                    </li>
                  </ul>
                </div>
                <div className="works-content">
                  <h2 className="title works-title" id="works-title">Jak działa TRICHONEX?</h2>
                  <p className="text">
                    <span className="product_name">TRICHONEX</span> zawiera tylko naturalne składniki, które
                    wprowadzają organizm w trwały stan ketozy. Ketoza jest naturalnym procesem, który pozwala
                    ciału produktywnie pracować w warunkach niskiego spożycia pokarmu.
                  </p>
                  <p className="text font_bold">
                    Wprowadzając ciało w stan ketozy, zaczynasz proces intensywnego spalania tłuszczu.
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
                  Klinicznie udowodniono,
                  <br /> że <span className="nowrap">TRICHONEX</span>
                </h2>
                <ul className="eating-list">
                  <li className="eating-list__item">zwiększa tempo metabolizmu o 70%</li>
                  <li className="eating-list__item">zatrzymuje produkcję glukozy i komórek tłuszczowych o 150%</li>
                  <li className="eating-list__item">pomaga ciału spalać tłuszcz i przekształcać go w energię</li>
                  <li className="eating-list__item">zatrzymuje powstawanie zmarszczek i cellulitu</li>
                  <li className="eating-list__item">
                    zmniejsza poziom kortyzolu - hormonu stresu i poprawia zdrowie psychiczne
                  </li>
                  <li className="eating-list__item">przywraca funkcje mózgu i układu nerwowego</li>
                </ul>
                <div className="eating-right _abs">
                  <div className="_woman2"></div>
                  <div className="_circle"></div>
                </div>
                <a href="#form" className="href-cont">
                  <button className="btn ever-popup-btn">KUP TERAZ PO ZNIŻCE!</button>
                </a>
              </div>
            </div>
          </section>

          <section className="diet" aria-labelledby="diet-title">
            <div className="limit">
              <div className="diet-wrap">
                <div className="diet-left _abs">
                  <img
                    src="/assets/img/diet-image.png"
                    alt="Produkty diety ketonowej: mięso, ryby, jajka i sery"
                    width={671}
                    height={597}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="diet-right">
                  <h2 className="title diet-title" id="diet-title">
                    Z TRICHONEX nie musisz ograniczać sobie pysznego jedzenia
                  </h2>
                  <p className="text">
                    Przestrzeganie diety ketonowej i odmawianie spożywania węglowodanów - wzmacnia działanie{" "}
                    <span className="product_name">TRICHONEX</span>. Zaletą diety ketonowej jest możliwość
                    codziennego spożywania wielu pysznych potraw, takich jak mięso, ryby, jajka, sery.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="cards" aria-label="Dieta ketonowa a dieta ketonowa z TRICHONEX">
            <div className="card-left_back"></div>
            <div className="card-right_back"></div>
            <div className="limit">
              <div className="card-list">
                <div className="wrapper-card">
                  <h3 className="title">Dieta ketonowa</h3>
                  <p className="text">
                    <b>Czas utraty wagi:</b> od 3 do 6 miesięcy
                  </p>
                  <p className="text">
                    <b>Ograniczenia:</b> odrzucenie węglowodanów, umiarkowane spożycie białka
                  </p>
                  <p className="text">
                    <b>Efekty uboczne:</b> kwasica (bóle głowy, senność, osłabienie); kamica nerkowa (kamienie
                    nerkowe), demineralizacja kości, problemy żołądkowo-jelitowe, przejściowa hipoglikemia,
                    odwodnienie
                  </p>
                  <p className="text">
                    <b>Wynik:</b> minus 5–7 kg na miesiąc
                  </p>
                </div>
                <div className="wrapper-card">
                  <h3 className="title">
                    Dieta ketonowa
                    <br className="_mobile-elem" /> +{" "}
                    <span className="_orange nowrap">TRICHONEX Free</span>
                  </h3>
                  <p className="text">
                    <b>Czas odchudzania:</b> od 2 tygodni do miesiąca
                  </p>
                  <p className="text">
                    <b>Ograniczenia:</b> umiarkowane spożycie węglowodanów
                  </p>
                  <p className="text">
                    <b>Efekty uboczne:</b> nie wykryto
                  </p>
                  <p className="text">
                    <b>Wynik:</b> minus 14-19 kg na miesiąc
                  </p>
                  <div className="center">
                    <a href="#form" className="href-cont">
                      <button className="btn ever-popup-btn">ZAMAWIAM!</button>
                    </a>
                  </div>
                </div>
              </div>
              <p className="cards-conclusion">
                Jednak nawet kontynuując normalne jedzenie i biorąc{" "}
                <span className="_orange nowrap">TRICHONEX</span> — nadal będziesz intensywnie tracić na wadze.
              </p>
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
                  <h2 className="title" id="weight-title">
                    TRICHONEX zmieni twoje poglądy na temat odchudzania
                  </h2>
                  <ul className="weight-list">
                    <li className="weight-list_item">
                      <img alt="" src="/assets/img/wh1.png" width={132} height={132} loading="lazy" decoding="async" />
                      <p className="item-text">
                        <b>Wynik bez wysiłku</b> Aktywne składniki proszku działają przez cały dzień podczas
                        pracy, relaksu, a nawet snu. Przyspieszają metabolizm i rozpoczynają proces spalania
                        tłuszczu bez ćwiczeń.
                      </p>
                    </li>
                    <li className="weight-list_item">
                      <img alt="" src="/assets/img/wh2.png" width={132} height={132} loading="lazy" decoding="async" />
                      <p className="item-text">
                        <b>Brak efektów ubocznych</b> Dzięki swoim naturalnym składnikom TRICHONEX nie
                        wpływa niekorzystnie na serce, naczynia krwionośne ani wątrobę. Liczba reakcji
                        alergicznych jest również zminimalizowana.
                      </p>
                    </li>
                    <li className="weight-list_item">
                      <img alt="" src="/assets/img/wh3.png" width={132} height={132} loading="lazy" decoding="async" />
                      <p className="item-text">
                        <b>Bez zmniejszenia masy mięśniowej</b> Składniki TRICHONEX rozkładają
                        podskórny tłuszcz przy zachowaniu masy mięśniowej. Zapobiegają redukcji elektrolitów
                        we krwi, co przyczynia się do zdrowego odchudzania.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="choice" aria-labelledby="choice-title">
            <div className="limit">
              <h2 className="title" id="choice-title">TRICHONEX czy inne środki – co wybierzesz?</h2>
              <ul className="choice-list">
                <li className="choice-list_item">
                  <div className="wrapper-item">
                    <div className="image-block">
                      <img alt="Koktajle odchudzające" src="/assets/img/ch1.png" loading="lazy" decoding="async" />
                    </div>
                    <div className="choice-list__content">
                      <p className="name">
                        <b>
                          Koktajle
                          <br /> odchudzające
                        </b>
                      </p>
                      <ul>
                        <li><b>Kalorie:</b> 150-230</li>
                        <li><b>Cukier:</b> 35-40 g</li>
                        <li><b>Kofeina:</b> 25-30%</li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="choice-list_item">
                  <div className="wrapper-item">
                    <div className="image-block">
                      <img alt="Odchudzająca kawa" src="/assets/img/ch2.png" loading="lazy" decoding="async" />
                    </div>
                    <div className="choice-list__content">
                      <p className="name">
                        <b>
                          Odchudzająca
                          <br /> kawa
                        </b>
                      </p>
                      <ul>
                        <li><b>Kalorie:</b> 120-180</li>
                        <li><b>Cukier:</b> 0 g</li>
                        <li><b>Kofeina:</b> 45-55%</li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="choice-list_item">
                  <div className="wrapper-item">
                    <div className="image-block">
                      {/* No width/height on the choice images: style.css fixes their height. */}
                      <img alt="TRICHONEX Free" src="/assets/img/product.png" loading="lazy" decoding="async" />
                    </div>
                    <div className="choice-list__content">
                      {/* The original markup put a <div> inside a <p>, which the browser split apart. */}
                      <div className="name">
                        <div className="logo">
                          <span className="biger">TRICHONEX</span>
                          <span className="smaller"></span>
                        </div>
                      </div>
                      <ul>
                        <li><b>Kalorie:</b> 0</li>
                        <li><b>Cukier:</b> 0 g</li>
                        <li><b>Kofeina:</b> 0 %</li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="choice-list_item">
                  <div className="wrapper-item">
                    <div className="image-block">
                      <img alt="Pigułki odchudzające" src="/assets/img/ch3.png" loading="lazy" decoding="async" />
                    </div>
                    <div className="choice-list__content">
                      <p className="name">
                        <b>Szkodliwe pigułki odchudzające</b>
                      </p>
                      <ul>
                        <li><b>Kalorie:</b> 190-250</li>
                        <li><b>Cukier:</b> 10-20 g</li>
                        <li><b>Kofeina:</b> 40-50%</li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="choice-list_item">
                  <div className="wrapper-item">
                    <div className="image-block">
                      <img alt="Herbata odchudzająca" src="/assets/img/ch4.png" loading="lazy" decoding="async" />
                    </div>
                    <div className="choice-list__content">
                      <p className="name">
                        <b>
                          Herbata
                          <br /> odchudzająca
                        </b>
                      </p>
                      <ul>
                        <li><b>Kalorie:</b> 10-130</li>
                        <li><b>Cukier:</b> 0 g</li>
                        <li><b>Kofeina:</b> 75-90%</li>
                      </ul>
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
                <h2 className="title" id="exclusive-title">Powiedz GOODBYE nadwadze z TRICHONEX Free!</h2>
                <p className="text">
                  <b>Schudnij 2 razy szybciej!</b>
                </p>
                <div className="exclusive-left _abs">
                  <div className="_woman5"></div>
                  <div className="_exclusive-left__circle"></div>
                </div>
                <p className="border text">
                  <img alt="" className="_prize" src="/assets/img/prize.png" width={361} height={212} loading="lazy" decoding="async" />
                  <b>Ekskluzywna oferta!</b> kup TRICHONEX Free ze zniżką 100%. Czas ograniczony
                  <a href="#form" className="href-cont">
                    <button className="btn ever-popup-btn">ZAMAWIAM!</button>
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section className="review" aria-labelledby="review-title">
            <div className="limit">
              <h2 className="title review-title" id="review-title">
                TRICHONEX opinie – dziewczyny powierzają mu swoją sylwetkę i zdrowie
              </h2>
              <div className="review-slider">
                <Review
                  avatar="/assets/img/avatar3.jpg"
                  name="nicky99"
                  image="/assets/img/rev2.jpg"
                  imageSize={320}
                  likes="176"
                  date="24 listopada 2024 r"
                  dateClass="date-4"
                  text="Biorę udział w kuracji odchudzającej z TRICHONEX i schudłam już 8 kg w 2 tygodnie! Czy ktoś jeszcze próbował tego cudownego preparatu?"
                />
                <Review
                  avatar="/assets/img/ava2.png"
                  name="iamqueen"
                  image="/assets/img/rev1.jpg"
                  imageSize={320}
                  likes="342"
                  date="25 listopada 2024 r"
                  dateClass="date-3"
                  text="Pamiętacie, jak opowiadałam w swoich Stories, że zaczęłam używać TRICHONEX? Chcę się pochwalić swoimi wynikami: -14 kg w zaledwie miesiąc! Dieta ketonowa przestrzegana z umiarem i takie wyniki! Jestem bardzo zadowolona!!!!!"
                />
                <Review
                  avatar="/assets/img/avatar1.jpg"
                  name="violet"
                  image="/assets/img/rev3.jpg"
                  imageSize={960}
                  likes="225"
                  date="26 listopada 2024 r"
                  dateClass="date-2"
                  text="Dziś otrzymałam długo oczekiwany suplement TRICHONEX. Oficjalnie zaczynam odchudzanie :) Kto chce spróbować ze mną?"
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
              <div className="last-left">
                <h2 className="title" id="order-title">
                  Zamów TRICHONEX Free – czas na odchudzanie!
                </h2>
                <p className="text border">
                  <b>TRICHONEX</b> —<br className="_mobile-elem" /> najszybszy i najskuteczniejszy sposób na
                  odchudzanie
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
  imageSize: number;
  likes: string;
  date: string;
  dateClass: string;
  text: string;
};

function Review({ avatar, name, image, imageSize, likes, date, dateClass, text }: ReviewProps) {
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
          alt={`Zdjęcie z opinii ${name} o TRICHONEX`}
          width={imageSize}
          height={imageSize}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="inst__control" aria-hidden="true">
        <ul className="inst__control-soc">
          <li className="inst__control-item">
            <img src="/assets/img/inst_like.png" alt="" width={26} height={22} loading="lazy" decoding="async" />
          </li>
          <li className="inst__control-item">
            <img src="/assets/img/inst_comment.png" alt="" width={22} height={22} loading="lazy" decoding="async" />
          </li>
          <li className="inst__control-item">
            <img src="/assets/img/inst_share.png" alt="" width={24} height={21} loading="lazy" decoding="async" />
          </li>
        </ul>
        <div className="inst__control-last">
          <img src="/assets/img/inst_add.png" alt="" width={20} height={25} loading="lazy" decoding="async" />
        </div>
      </div>
      <div className="inst__description">
        <p className="lova-lova"><b>Likes: {likes}</b></p>
        <p className="inst__description-text">
          <b>{name}</b> {text}
        </p>
        <br />
        <p className="inst__description-date">
          <span className={dateClass} data-format="dd month yyyy">{date}</span>
        </p>
      </div>
    </article>
  );
}

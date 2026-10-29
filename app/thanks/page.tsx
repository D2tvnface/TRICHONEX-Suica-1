import type { Metadata } from "next";

// Order confirmation page: keep it out of search results.
export const metadata: Metadata = {
  title: "Thank you for your order – TRICHONEX",
  description: "Your TRICHONEX order has been received.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  alternates: { canonical: "/thanks" },
};

export default function ThanksPage() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
        precedence="default"
      />
      <link rel="stylesheet" href="/thanks/assets/css/fonts.css" precedence="default" />
      <link rel="stylesheet" href="/thanks/assets/css/style.css" precedence="default" />

      <div className="d-flex flex-column justify-content-between h-100">
        <header className="header">
          <div className="container">
            <div className="d-flex align-items-center">
              <div className="logo header-logo">
                <a href="#">
                  <img className="logo__img" src="/thanks/assets/images/logo/logo.svg" alt="TRICHONEX" />
                </a>
              </div>
              <p className="header__text m-0">
                Official distributor of <span className="current-product__name">TRICHONEX </span>
                <span className="country"></span>
              </p>
            </div>
          </div>
        </header>

        <main className="main">
          <div className="container">
            <div className="row">
              <div className="order__content clearfix">
                <div className="col-md-6 float-md-left pr-md-2">
                  <div className="order-info__content order-info__content_light_green mb-sm-3 mb-2">
                    <div className="order-info__info-line">
                      <div className="d-flex align-items-center">
                        <img
                          className="order-is-issued__img"
                          src="/thanks/assets/images/icons/order_green.svg"
                          alt="order"
                        />
                        <p className="order-info__title m-0">Thank you for placing an order!</p>
                      </div>
                    </div>
                    <p className="order-info__text m-0">
                      {" "}
                      <span className="current-product__name font-weight-bold">TRICHONEX</span>
                      &nbsp;product specialist will contact you soon to answer your questions and clarify delivery
                      details.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 float-md-right pl-md-2">
                  <div className="order-product__content mb-3">
                    <div className="order-product__item current-product">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="order-product-spec-wrap">
                          <p className="order-id">
                            Your order number is <span className="order-id__value">8408558-ID</span>
                          </p>
                          <p className="current-product__text">
                            <span className="current-product__name">TRICHONEX</span>
                          </p>
                          <p className="current-product__description m-0"></p>
                        </div>
                        <img
                          className="current-product__img"
                          src="/assets/img/product.webp"
                          alt="TRICHONEX – opakowanie produktu"
                        />
                      </div>
                    </div>

                    <div className="order-product__item product-guarantee">
                      <div className="d-flex align-items-center">
                        <img
                          className="label label_img guarantee-label_img"
                          src="/thanks/assets/images/labels/guarantee.png"
                          alt="guarantee"
                        />
                        <p className="product-guarantee_text">
                          100% satisfaction guarantee or your money back during 365 days
                        </p>
                      </div>
                    </div>
                    <div className="order-product__item product-confirmed">
                      <div className="d-flex align-items-center">
                        <img
                          className="label label_img"
                          src="/thanks/assets/images/labels/confirmed.png"
                          alt="confirmed"
                        />
                        <p className="product-confirmed_text">
                          Product safety and effectiveness are clinically confirmed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="footer">
          <div className="container">
            <div className="d-flex align-items-center">
              <div className="company-about__content">
                <div className="logo footer-logo">
                  <a href="#">
                    <img className="logo__img" src="/thanks/assets/images/logo/logo.svg" alt="TRICHONEX" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

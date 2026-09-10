import IconCard from "../assets/icon-cart.svg";
import ImageProductDesktop from "../assets/image-product-desktop.jpg";
import ImageProductMobile from "../assets/image-product-mobile.jpg";

const Card = () => {
  return (
    <article className="card">
      <picture className="card__media">
        <source srcSet={ImageProductDesktop} media="(min-width: 1024px)" />
        <img
          src={ImageProductMobile}
          alt="Gabrielle Essence Eau De Parfum bottle placed on a glass table with green leaves"
          className="card__image"
        />
      </picture>
      <div className="card__content">
        <p className="card__category">Perfume</p>
        <h2 className="card__title">Gabrielle Essence Eau De Parfum</h2>
        <p className="card__description">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="card__price-group">
          <p className="card__price card__price--current">
            <span className="sr-only">Current price:</span>
            $149.99
          </p>
          <del className="card__price card__price--old">
            <span className="sr-only">Original price:</span>
            $169.99
          </del>
        </div>
        <button type="button" className="card__cta">
          <img
            src={IconCard}
            alt=""
            aria-hidden="true"
            className="card__cta-icon"
          />
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default Card;

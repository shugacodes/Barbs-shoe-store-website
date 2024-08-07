import { FunctionComponent } from "react";
import CheckoutContent from "../components/CheckoutContent";
import Footer from "../components/Footer";
import styles from "./CheckoutPage.module.css";

const CheckoutPage: FunctionComponent = () => {
  return (
    <div className={styles.checkoutPage}>
      <div className={styles.checkoutPageInner}>
        <header className={styles.barbsShoeStoreParent}>
          <a className={styles.barbsShoeStore}>Barbs Shoe Store</a>
          <nav className={styles.frameWrapper}>
            <nav className={styles.homeParent}>
              <a className={styles.home}>Home</a>
              <a className={styles.shop}>Shop</a>
              <a className={styles.about}>About</a>
              <a className={styles.blog}>Blog</a>
              <a className={styles.contact}>Contact</a>
            </nav>
          </nav>
          <div className={styles.frameContainer}>
            <div className={styles.outlineParent}>
              <img
                className={styles.outlineIcon}
                loading="lazy"
                alt=""
                src="/outline.svg"
              />
              <img
                className={styles.outlineIcon1}
                alt=""
                src="/outline-1.svg"
              />
              <img className={styles.outlineIcon} alt="" src="/outline-2.svg" />
            </div>
          </div>
        </header>
      </div>
      <section className={styles.checkoutContentWrapper}>
        <CheckoutContent />
      </section>
      <Footer underLine="/underline.svg" />
    </div>
  );
};

export default CheckoutPage;

import { FunctionComponent } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import Footer from "../components/Footer";
import styles from "./CartPage.module.css";

const CartPage: FunctionComponent = () => {
  return (
    <div className={styles.cartPage}>
      <header className={styles.cartPageInner}>
        <div className={styles.barbsShoeStoreParent}>
          <a className={styles.barbsShoeStore}>Barbs Shoe Store</a>
          <nav className={styles.navigationMenuWrapper}>
            <nav className={styles.navigationMenu}>
              <a className={styles.home}>Home</a>
              <a className={styles.shop}>Shop</a>
              <a className={styles.about}>About</a>
              <a className={styles.blog}>Blog</a>
              <a className={styles.contact}>Contact</a>
            </nav>
          </nav>
          <div className={styles.frameWrapper}>
            <div className={styles.outlineParent}>
              <img
                className={styles.outlineIcon}
                loading="lazy"
                alt=""
                src="/outline.svg"
              />
              <img
                className={styles.outlineIcon1}
                loading="lazy"
                alt=""
                src="/outline-1.svg"
              />
              <img
                className={styles.outlineIcon}
                loading="lazy"
                alt=""
                src="/outline-2.svg"
              />
            </div>
          </div>
        </div>
      </header>
      <FrameComponent4 />
      <FrameComponent5 />
      <Footer underLine="/underline.svg" />
    </div>
  );
};

export default CartPage;

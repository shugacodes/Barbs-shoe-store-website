import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import Price from "../components/Price";
import Product from "../components/Product";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import Footer from "../components/Footer";
import styles from "./ShopPage.module.css";

const ShopPage: FunctionComponent = () => {
  return (
    <div className={styles.shopPage}>
      <header className={styles.footer}>
        <div className={styles.footerContent}>
          <a className={styles.barbsShoeStore}>Barbs Shoe Store</a>
          <nav className={styles.navigation}>
            <nav className={styles.links}>
              <a className={styles.home}>Home</a>
              <a className={styles.shop}>Shop</a>
              <a className={styles.about}>About</a>
              <a className={styles.blog}>Blog</a>
              <a className={styles.contact}>Contact</a>
            </nav>
          </nav>
          <div className={styles.socialLinks}>
            <div className={styles.socialContainer}>
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
        </div>
      </header>
      <FrameComponent1 />
      <div className={styles.featuresGridWrapper}>
        <div className={styles.featuresGrid}>
          <div className={styles.features}>
            <div className={styles.featureIcons}>80+</div>
            <div className={styles.customStyles}>Custom Styles</div>
          </div>
          <div className={styles.features1}>
            <div className={styles.featureIcons}>7000+</div>
            <div className={styles.happyCustomer}>Happy Customer</div>
          </div>
          <div className={styles.features2}>
            <div className={styles.featureIcons}>50+</div>
            <div className={styles.pickupOutlets}>Pickup Outlets</div>
          </div>
        </div>
      </div>
      <section className={styles.productWrapper}>
        <div className={styles.product}>
          <h1 className={styles.featuredProducts}>Featured Products</h1>
          <div className={styles.details}>
            <Price image2RemovebgPreview1="/image-2removebgpreview-1@2x.png" />
            <Product
              image5RemovebgPreview1="/image-5removebgpreview-1@2x.png"
              elegantHeels="Elegant Heels"
              empty="$95"
              sold="2006 Sold"
              reviews="(700 Reviews)"
            />
            <Product
              propHeight="unset"
              propFlex="unset"
              propPadding="3px 0px"
              image5RemovebgPreview1="/image-7removebgpreview-1@2x.png"
              propHeight1="222px"
              propWidth="270px"
              propPadding1="unset"
              elegantHeels="Sporty Sneakers"
              propAlignSelf="stretch"
              propWidth1="unset"
              empty="$85"
              propWidth2="33px"
              propMinWidth="unset"
              sold="2056 Sold"
              propFlex1="unset"
              propDisplay="inline-block"
              propMinWidth1="44px"
              reviews="(750 Reviews)"
            />
            <Product
              propHeight="unset"
              propFlex="unset"
              propPadding="unset"
              image5RemovebgPreview1="/image-8removebgpreview-1@2x.png"
              propHeight1="228px"
              propWidth="270px"
              propPadding1="unset"
              elegantHeels="Comfort Sandals"
              propAlignSelf="stretch"
              propWidth1="unset"
              empty="$70"
              propWidth2="33px"
              propMinWidth="unset"
              sold="3356 Sold"
              propFlex1="unset"
              propDisplay="inline-block"
              propMinWidth1="44px"
              reviews="(800 Reviews)"
            />
            <Product
              propHeight="unset"
              propFlex="unset"
              propPadding="0px 12px 0px 0px"
              image5RemovebgPreview1="/image-12removebgpreview-1@2x.png"
              propHeight1="228px"
              propWidth="224px"
              propPadding1="unset"
              elegantHeels="Premium Loafers"
              propAlignSelf="stretch"
              propWidth1="unset"
              empty="$180"
              propWidth2="unset"
              propMinWidth="33px"
              sold="1900 Sold"
              propFlex1="unset"
              propDisplay="inline-block"
              propMinWidth1="44px"
              reviews="(900 Reviews)"
            />
            <Product
              propHeight="unset"
              propFlex="unset"
              propPadding="unset"
              image5RemovebgPreview1="/image-13removebgpreview-1-1@2x.png"
              propHeight1="228px"
              propWidth="270px"
              propPadding1="0px 0px 0px 0px"
              elegantHeels="Urban Casual Sneakers"
              propAlignSelf="unset"
              propWidth1="92px"
              empty="$180"
              propWidth2="unset"
              propMinWidth="33px"
              sold="2098 Sold"
              propFlex1="1"
              propDisplay="unset"
              propMinWidth1="unset"
              reviews="(120 Reviews)"
            />
            <Product
              propHeight="356px"
              propFlex="1"
              propPadding="10px 0px 19.5px"
              image5RemovebgPreview1="/image-7--1-removebgpreview-2@2x.png"
              propHeight1="189px"
              propWidth="270px"
              propPadding1="unset"
              elegantHeels="Classic Ballet Flats"
              propAlignSelf="stretch"
              propWidth1="91px"
              empty="$100"
              propWidth2="unset"
              propMinWidth="33px"
              sold="2009 Sold"
              propFlex1="1"
              propDisplay="unset"
              propMinWidth1="unset"
              reviews="(900 Reviews)"
            />
            <Product
              propHeight="unset"
              propFlex="unset"
              propPadding="unset"
              image5RemovebgPreview1="/image-8--1-removebgpreview-1@2x.png"
              propHeight1="228px"
              propWidth="270px"
              propPadding1="unset"
              elegantHeels="Warm Winter Boots"
              propAlignSelf="stretch"
              propWidth1="unset"
              empty="$140"
              propWidth2="unset"
              propMinWidth="33px"
              sold="2356 Sold"
              propFlex1="unset"
              propDisplay="inline-block"
              propMinWidth1="44px"
              reviews="(850 Reviews)"
            />
          </div>
        </div>
      </section>
      <FrameComponent2 />
      <FrameComponent3 />
      <section className={styles.productWrapper}>
        <div className={styles.product}>
          <h1 className={styles.featuredProducts}>All Products</h1>
          <div className={styles.details}>
            <Price image2RemovebgPreview1="/image-2removebgpreview-1@2x.png" />
            <Product
              propHeight="unset"
              propFlex="unset"
              propPadding="3px 12px 3px 0px"
              image5RemovebgPreview1="/image-5removebgpreview-1@2x.png"
              propHeight1="222px"
              propWidth="214px"
              propPadding1="unset"
              elegantHeels="Elegant Heels"
              propAlignSelf="stretch"
              propWidth1="95px"
              empty="$95"
              propWidth2="33px"
              propMinWidth="unset"
              sold="2006 Sold"
              propFlex1="1"
              propDisplay="unset"
              propMinWidth1="unset"
              reviews="(700 Reviews)"
            />
            <Product
              propHeight="unset"
              propFlex="unset"
              propPadding="3px 0px"
              image5RemovebgPreview1="/image-7removebgpreview-1@2x.png"
              propHeight1="222px"
              propWidth="270px"
              propPadding1="unset"
              elegantHeels="Sporty Sneakers"
              propAlignSelf="stretch"
              propWidth1="unset"
              empty="$85"
              propWidth2="33px"
              propMinWidth="unset"
              sold="2056 Sold"
              propFlex1="unset"
              propDisplay="inline-block"
              propMinWidth1="44px"
              reviews="(750 Reviews)"
            />
            <Product
              propHeight="unset"
              propFlex="unset"
              propPadding="unset"
              image5RemovebgPreview1="/image-8removebgpreview-1@2x.png"
              propHeight1="228px"
              propWidth="270px"
              propPadding1="unset"
              elegantHeels="Comfort Sandals"
              propAlignSelf="stretch"
              propWidth1="unset"
              empty="$70"
              propWidth2="33px"
              propMinWidth="unset"
              sold="3356 Sold"
              propFlex1="unset"
              propDisplay="inline-block"
              propMinWidth1="44px"
              reviews="(800 Reviews)"
            />
            <Product
              propHeight="unset"
              propFlex="unset"
              propPadding="0px 12px 0px 0px"
              image5RemovebgPreview1="/image-12removebgpreview-1@2x.png"
              propHeight1="228px"
              propWidth="224px"
              propPadding1="unset"
              elegantHeels="Premium Loafers"
              propAlignSelf="stretch"
              propWidth1="unset"
              empty="$180"
              propWidth2="unset"
              propMinWidth="33px"
              sold="1900 Sold"
              propFlex1="unset"
              propDisplay="inline-block"
              propMinWidth1="44px"
              reviews="(900 Reviews)"
            />
            <Product
              propHeight="unset"
              propFlex="unset"
              propPadding="unset"
              image5RemovebgPreview1="/image-13removebgpreview-1-1@2x.png"
              propHeight1="228px"
              propWidth="270px"
              propPadding1="0px 0px 0px 0px"
              elegantHeels="Urban Casual Sneakers"
              propAlignSelf="unset"
              propWidth1="92px"
              empty="$180"
              propWidth2="unset"
              propMinWidth="33px"
              sold="2098 Sold"
              propFlex1="1"
              propDisplay="unset"
              propMinWidth1="unset"
              reviews="(120 Reviews)"
            />
            <Product
              propHeight="356px"
              propFlex="1"
              propPadding="10px 0px 19.5px"
              image5RemovebgPreview1="/image-7--1-removebgpreview-2@2x.png"
              propHeight1="189px"
              propWidth="270px"
              propPadding1="unset"
              elegantHeels="Classic Ballet Flats"
              propAlignSelf="stretch"
              propWidth1="91px"
              empty="$100"
              propWidth2="unset"
              propMinWidth="33px"
              sold="2009 Sold"
              propFlex1="1"
              propDisplay="unset"
              propMinWidth1="unset"
              reviews="(900 Reviews)"
            />
            <Product
              propHeight="unset"
              propFlex="unset"
              propPadding="unset"
              image5RemovebgPreview1="/image-8--1-removebgpreview-1@2x.png"
              propHeight1="228px"
              propWidth="270px"
              propPadding1="unset"
              elegantHeels="Warm Winter Boots"
              propAlignSelf="stretch"
              propWidth1="unset"
              empty="$140"
              propWidth2="unset"
              propMinWidth="33px"
              sold="2356 Sold"
              propFlex1="unset"
              propDisplay="inline-block"
              propMinWidth1="44px"
              reviews="(850 Reviews)"
            />
          </div>
        </div>
      </section>
      <Footer underLine="/underline.svg" />
    </div>
  );
};

export default ShopPage;

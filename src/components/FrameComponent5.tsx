import { FunctionComponent } from "react";
import Product from "./Product";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <section
      className={[styles.relatedProductsContentWrapper, className].join(" ")}
    >
      <div className={styles.relatedProductsContent}>
        <h1 className={styles.relatedProducts}>Related Products</h1>
        <div className={styles.productsRow}>
          <div className={styles.productTiles}>
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
              propPadding="0px 12px 0px 0px"
              image5RemovebgPreview1="/image-13removebgpreview-1-1@2x.png"
              propHeight1="228px"
              propWidth="270px"
              propPadding1="unset"
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
              propPadding="0px 12px 0px 0px"
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
              propPadding="0px 12px 0px 0px"
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
      </div>
    </section>
  );
};

export default FrameComponent5;

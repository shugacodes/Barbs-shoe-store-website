import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ProductOneDetails.module.css";

export type ProductOneDetailsType = {
  className?: string;
  classicLeatherBoots?: string;
  reviews?: string;
  productOneDescription?: string;
  craftedFromPremiumFullGra?: string;

  /** Style props */
  propMinHeight?: CSSProperties["minHeight"];
};

const ProductOneDetails: FunctionComponent<ProductOneDetailsType> = ({
  className = "",
  propMinHeight,
  classicLeatherBoots,
  reviews,
  productOneDescription,
  craftedFromPremiumFullGra,
}) => {
  const productOneDetailsStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  return (
    <div
      className={[styles.productOneDetails, className].join(" ")}
      style={productOneDetailsStyle}
    >
      <div className={styles.productOneTitleRow}>
        <div className={styles.productOneTitle}>
          <div className={styles.classicLeatherBoots}>
            {classicLeatherBoots}
          </div>
          <div className={styles.productOneRating}>
            <div className={styles.bootsRatingStars}>
              <div className={styles.bootsStars}>
                <img
                  className={styles.solarstarBoldIcon}
                  alt=""
                  src="/solarstarbold.svg"
                />
                <img
                  className={styles.solarstarBoldIcon1}
                  alt=""
                  src="/solarstarbold.svg"
                />
                <img
                  className={styles.solarstarBoldIcon2}
                  alt=""
                  src="/solarstarbold.svg"
                />
                <img
                  className={styles.solarstarBoldIcon3}
                  alt=""
                  src="/solarstarbold.svg"
                />
                <img
                  className={styles.solarstarBoldIcon4}
                  loading="lazy"
                  alt=""
                  src="/solarstarbold.svg"
                />
              </div>
              <div className={styles.reviews}>{reviews}</div>
            </div>
            <div className={styles.productOneStock}>
              <div className={styles.productOneStockChild} />
              <div className={styles.inStock}>In Stock</div>
            </div>
          </div>
          <div className={styles.productOneDescription}>
            {productOneDescription}
          </div>
        </div>
        <div className={styles.productOneButton}>
          <img
            className={styles.outlineIcon}
            loading="lazy"
            alt=""
            src="/outline-41.svg"
          />
        </div>
      </div>
      <div className={styles.craftedFromPremium}>
        {craftedFromPremiumFullGra}
      </div>
    </div>
  );
};

export default ProductOneDetails;

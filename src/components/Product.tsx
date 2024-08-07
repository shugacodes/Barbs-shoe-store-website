import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";
import styles from "./Product.module.css";

export type ProductType = {
  className?: string;
  image5RemovebgPreview1?: string;
  elegantHeels?: string;
  empty?: string;
  sold?: string;
  reviews?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propFlex?: CSSProperties["flex"];
  propPadding?: CSSProperties["padding"];
  propHeight1?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propPadding1?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propFlex1?: CSSProperties["flex"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const Product: FunctionComponent<ProductType> = ({
  className = "",
  propHeight,
  propFlex,
  propPadding,
  image5RemovebgPreview1,
  propHeight1,
  propWidth,
  propPadding1,
  elegantHeels,
  propAlignSelf,
  propWidth1,
  empty,
  propWidth2,
  propMinWidth,
  sold,
  propFlex1,
  propDisplay,
  propMinWidth1,
  reviews,
}) => {
  const productStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const detailsStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
    };
  }, [propFlex, propPadding]);

  const image5RemovebgPreview1IconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth,
    };
  }, [propHeight1, propWidth]);

  const priceStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const elegantHeelsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const price1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const emptyStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
      minWidth: propMinWidth,
    };
  }, [propWidth2, propMinWidth]);

  const soldStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propFlex1, propDisplay, propMinWidth1]);

  return (
    <div className={[styles.product, className].join(" ")} style={productStyle}>
      <div className={styles.details} style={detailsStyle}>
        <img
          className={styles.image5RemovebgPreview1Icon}
          loading="lazy"
          alt=""
          src={image5RemovebgPreview1}
          style={image5RemovebgPreview1IconStyle}
        />
        <div className={styles.outlineWrapper}>
          <img className={styles.outlineIcon} alt="" src="/outline-3.svg" />
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.details1}>
          <div className={styles.price} style={priceStyle}>
            <div className={styles.elegantHeels} style={elegantHeelsStyle}>
              {elegantHeels}
            </div>
            <div className={styles.price1} style={price1Style}>
              <div className={styles.empty} style={emptyStyle}>
                {empty}
              </div>
              <div className={styles.sold} style={soldStyle}>
                {sold}
              </div>
            </div>
            <div className={styles.rating}>
              <div className={styles.stars}>
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
                  alt=""
                  src="/solarstarbold.svg"
                />
              </div>
              <div className={styles.reviews}>{reviews}</div>
            </div>
          </div>
          <div className={styles.outlineContainer}>
            <img className={styles.outlineIcon1} alt="" src="/outline-4.svg" />
          </div>
        </div>
        <Button
          className={styles.button1}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#7d2e0b",
            borderRadius: "8px",
            "&:hover": { background: "#7d2e0b" },
            height: 36,
          }}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default Product;

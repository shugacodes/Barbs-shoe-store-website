import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import FrameComponent from "./FrameComponent";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.trendingContentWrapper, className].join(" ")}>
      <div className={styles.trendingContent}>
        <div className={styles.trendingGrid}>
          <h1 className={styles.trendingProducts}>Trending Products</h1>
          <div className={styles.productCard}>
            <div className={styles.productDetails}>
              <div className={styles.productImageWrapper}>
                <img
                  className={styles.image91RemovebgPreview1Icon}
                  loading="lazy"
                  alt=""
                  src="/image-9--1-removebgpreview-1@2x.png"
                />
              </div>
              <div className={styles.productInfo}>
                <div className={styles.productTitleContainerParent}>
                  <div className={styles.productTitleContainer}>
                    <h1 className={styles.chicAnkleBoots}>Chic Ankle Boots</h1>
                    <div className={styles.pricePlaceholder}>
                      <a className={styles.emptyPrice}>$120</a>
                      <div className={styles.emptyPrice1}>$160</div>
                    </div>
                    <div className={styles.productRating}>
                      <div className={styles.productStars}>
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
                      <div className={styles.reviews}>(850 Reviews)</div>
                    </div>
                  </div>
                  <div className={styles.productButton}>
                    <img
                      className={styles.outlineIcon}
                      alt=""
                      src="/outline-19.svg"
                    />
                  </div>
                </div>
                <Button
                  className={styles.addToCart}
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "20",
                    background: "#7d2e0b",
                    borderRadius: "8px",
                    "&:hover": { background: "#7d2e0b" },
                    height: 80,
                  }}
                >
                  Buy Now
                </Button>
              </div>
            </div>
            <div className={styles.moreProducts}>
              <div className={styles.frameParent}>
                <FrameComponent
                  image71RemovebgPreview1="/image-71removebgpreview-1@2x.png"
                  elegantEveningHeels="Elegant Evening Heels"
                />
                <FrameComponent
                  propHeight="unset"
                  propAlignSelf="unset"
                  propHeight1="unset"
                  propPadding="14px 18px"
                  propFlex="unset"
                  image71RemovebgPreview1="/image-9--1-removebgpreview-1-1@2x.png"
                  propHeight2="204px"
                  propFlex1="unset"
                  propOverflow="unset"
                  propWidth="204px"
                  propPadding1="0px 1px"
                  propGap="18px"
                  elegantEveningHeels="Strap Classy Heels"
                />
              </div>
              <div className={styles.frameParent}>
                <FrameComponent
                  propHeight="361px"
                  propAlignSelf="stretch"
                  propHeight1="unset"
                  propPadding="0px 18px"
                  propFlex="1"
                  image71RemovebgPreview1="/image-74removebgpreview-1@2x.png"
                  propHeight2="210px"
                  propFlex1="unset"
                  propOverflow="unset"
                  propWidth="155px"
                  propPadding1="unset"
                  propGap="19px"
                  elegantEveningHeels="Chic Summer Sandals"
                />
                <FrameComponent
                  propHeight="unset"
                  propAlignSelf="unset"
                  propHeight1="unset"
                  propPadding="14px 18px"
                  propFlex="unset"
                  image71RemovebgPreview1="/image-73removebgpreview-1@2x.png"
                  propHeight2="200px"
                  propFlex1="unset"
                  propOverflow="unset"
                  propWidth="200px"
                  propPadding1="unset"
                  propGap="10px"
                  elegantEveningHeels="Chunky Platform Mules"
                />
              </div>
            </div>
          </div>
          <div className={styles.productCards}>
            <img className={styles.outlineIcon1} alt="" src="/outline-3.svg" />
          </div>
          <div className={styles.productCards1}>
            <img className={styles.outlineIcon1} alt="" src="/outline-3.svg" />
          </div>
          <div className={styles.productCards2}>
            <img className={styles.outlineIcon1} alt="" src="/outline-3.svg" />
          </div>
          <div className={styles.productCards3}>
            <img className={styles.outlineIcon1} alt="" src="/outline-3.svg" />
          </div>
          <div className={styles.footerDivider}>
            <img className={styles.outlineIcon5} alt="" src="/outline-28.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;

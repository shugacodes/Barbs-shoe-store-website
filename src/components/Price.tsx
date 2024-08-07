import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./Price.module.css";

export type PriceType = {
  className?: string;
  image2RemovebgPreview1?: string;
};

const Price: FunctionComponent<PriceType> = ({
  className = "",
  image2RemovebgPreview1,
}) => {
  return (
    <div className={[styles.price, className].join(" ")}>
      <div className={styles.status}>
        <img
          className={styles.image2RemovebgPreview1Icon}
          alt=""
          src={image2RemovebgPreview1}
        />
        <div className={styles.outlineWrapper}>
          <img className={styles.outlineIcon} alt="" src="/outline-3.svg" />
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.product}>
          <div className={styles.details}>
            <div className={styles.classicLeatherBoots}>
              Classic Leather Boots
            </div>
            <div className={styles.price1}>
              <div className={styles.empty}>$150</div>
              <div className={styles.sold}>2356 Sold</div>
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
              <div className={styles.reviews}>(850 Reviews)</div>
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

export default Price;

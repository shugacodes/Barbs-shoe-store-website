import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.heroContentWrapper, className].join(" ")}>
      <div className={styles.heroContent}>
        <div className={styles.frameParent}>
          <div className={styles.discoverYourPerfectFitParent}>
            <h1 className={styles.discoverYourPerfectContainer}>
              <span>{`Discover Your `}</span>
              <span className={styles.perfect}>Perfect</span>
              <span> Fit</span>
            </h1>
            <div className={styles.customMadeShoesThat}>
              Custom-made shoes that blend comfort, style, and affordability
            </div>
          </div>
          <Button
            className={styles.shopNowButton}
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
            Shop Now
          </Button>
        </div>
        <img
          className={styles.heroImagePlaceholder}
          loading="lazy"
          alt=""
          src="/1@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent1;

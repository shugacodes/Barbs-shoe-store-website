import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section
      className={[styles.newArrivalsContentWrapper, className].join(" ")}
    >
      <div className={styles.newArrivalsContent}>
        <h1 className={styles.exploreOurNew}>Explore Our New Collections</h1>
        <div className={styles.newArrivalsInfo}>
          <div className={styles.discoverTheLatestTrendsInParent}>
            <h1 className={styles.discoverTheLatest}>
              Discover the latest trends in custom footwear, crafted for comfort
              and style.
            </h1>
            <Button
              className={styles.newArrivalsButton}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "20",
                background: "#7d2e0b",
                borderRadius: "8px",
                "&:hover": { background: "#7d2e0b" },
                width: 306,
                height: 80,
              }}
            >
              Shop Now
            </Button>
          </div>
          <img
            className={styles.image72RemovebgPreview2Icon}
            loading="lazy"
            alt=""
            src="/image-7--2-removebgpreview-2@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;

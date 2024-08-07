import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  image71RemovebgPreview1?: string;
  elegantEveningHeels?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propHeight1?: CSSProperties["height"];
  propPadding?: CSSProperties["padding"];
  propFlex?: CSSProperties["flex"];
  propHeight2?: CSSProperties["height"];
  propFlex1?: CSSProperties["flex"];
  propOverflow?: CSSProperties["overflow"];
  propWidth?: CSSProperties["width"];
  propPadding1?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  propHeight,
  propAlignSelf,
  propHeight1,
  propPadding,
  propFlex,
  image71RemovebgPreview1,
  propHeight2,
  propFlex1,
  propOverflow,
  propWidth,
  propPadding1,
  propGap,
  elegantEveningHeels,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      height: propHeight1,
      padding: propPadding,
      flex: propFlex,
    };
  }, [propAlignSelf, propHeight1, propPadding, propFlex]);

  const image71RemovebgPreview1IconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight2,
      flex: propFlex1,
      overflow: propOverflow,
      width: propWidth,
    };
  }, [propHeight2, propFlex1, propOverflow, propWidth]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
      gap: propGap,
    };
  }, [propPadding1, propGap]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div
        className={styles.image71RemovebgPreview1Wrapper}
        style={frameDiv1Style}
      >
        <img
          className={styles.image71RemovebgPreview1Icon}
          alt=""
          src={image71RemovebgPreview1}
          style={image71RemovebgPreview1IconStyle}
        />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer} style={frameDiv2Style}>
          <div className={styles.elegantEveningHeelsParent}>
            <div className={styles.elegantEveningHeels}>
              {elegantEveningHeels}
            </div>
            <div className={styles.parent}>
              <div className={styles.div}>$90</div>
              <div className={styles.div1}>$120</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.solarstarBoldParent}>
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
              <div className={styles.reviews}>(500 Reviews)</div>
            </div>
          </div>
          <div className={styles.outlineWrapper}>
            <img className={styles.outlineIcon} alt="" src="/outline-4.svg" />
          </div>
        </div>
        <Button
          className={styles.frameChild}
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

export default FrameComponent;

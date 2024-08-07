import { FunctionComponent } from "react";
import styles from "./Logo.module.css";

export type LogoType = {
  className?: string;
};

const Logo: FunctionComponent<LogoType> = ({ className = "" }) => {
  return (
    <div className={[styles.logo, className].join(" ")}>
      <h3 className={styles.exclusive}>Barbs Shoe Store</h3>
    </div>
  );
};

export default Logo;
